import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import { z } from "zod";

const MAX_BODY_SIZE = 20_000;
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;

const inquirySchema = z.object({
  name: z.string().trim().min(2).max(80),
  email: z.string().trim().email().max(254),
  company: z.string().trim().max(120).optional().default(""),
  projectType: z
    .enum(["Hospitality", "Retail", "Residential", "Licensing", "Other"])
    .optional()
    .default("Other"),
  message: z.string().trim().min(20).max(3_000),
  website: z.string().max(200).optional().default(""),
});

type RateLimitEntry = { count: number; resetAt: number };

const globalRateLimit = globalThis as typeof globalThis & {
  amberprintRateLimit?: Map<string, RateLimitEntry>;
};

const rateLimitStore =
  globalRateLimit.amberprintRateLimit ?? new Map<string, RateLimitEntry>();

globalRateLimit.amberprintRateLimit = rateLimitStore;

function json(
  body: Record<string, unknown>,
  init?: { status?: number; headers?: Record<string, string> },
) {
  return NextResponse.json(body, {
    ...init,
    headers: {
      "Cache-Control": "no-store",
      ...init?.headers,
    },
  });
}

function getClientIp(req: Request) {
  return (
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    "unknown"
  );
}

function isAllowedOrigin(req: Request) {
  const origin = req.headers.get("origin");
  if (!origin) return true;

  try {
    return new URL(origin).host === new URL(req.url).host;
  } catch {
    return false;
  }
}

function isRateLimited(ip: string) {
  const now = Date.now();
  const current = rateLimitStore.get(ip);

  if (!current || current.resetAt <= now) {
    rateLimitStore.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return null;
  }

  if (current.count >= RATE_LIMIT_MAX_REQUESTS) {
    return Math.max(1, Math.ceil((current.resetAt - now) / 1000));
  }

  current.count += 1;
  return null;
}

function escapeHtml(value: string) {
  return value.replace(
    /[&<>'"]/g,
    (character) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        "'": "&#039;",
        '"': "&quot;",
      })[character] ?? character,
  );
}

export async function POST(req: Request) {
  try {
    if (!isAllowedOrigin(req)) {
      return json({ success: false, error: "Invalid request origin" }, { status: 403 });
    }

    const contentLength = Number(req.headers.get("content-length") ?? 0);
    if (contentLength > MAX_BODY_SIZE) {
      return json({ success: false, error: "Request is too large" }, { status: 413 });
    }

    let payload: unknown;
    try {
      payload = await req.json();
    } catch {
      return json({ success: false, error: "Invalid request body" }, { status: 400 });
    }

    const parsed = inquirySchema.safeParse(payload);
    if (!parsed.success) {
      return json(
        { success: false, error: "Please review the form fields and try again." },
        { status: 400 },
      );
    }

    const { name, email, company, projectType, message, website } = parsed.data;

    // Honeypot fields should remain empty. Respond successfully so bots do not retry.
    if (website) {
      return json({ success: true });
    }

    const retryAfter = isRateLimited(getClientIp(req));
    if (retryAfter) {
      return json(
        { success: false, error: "Too many requests. Please try again later." },
        { status: 429, headers: { "Retry-After": String(retryAfter) } },
      );
    }

    const emailUser = process.env.EMAIL_USER;
    const emailPass = process.env.EMAIL_PASS;

    if (!emailUser || !emailPass) {
      console.error("Contact form email credentials are not configured");
      return json(
        { success: false, error: "Email service is temporarily unavailable." },
        { status: 503 },
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST ?? "mail.privateemail.com",
      port: Number(process.env.EMAIL_PORT ?? 587),
      secure: process.env.EMAIL_SECURE === "true",
      auth: { user: emailUser, pass: emailPass },
    });

    const safe = {
      name: escapeHtml(name),
      email: escapeHtml(email),
      company: escapeHtml(company),
      projectType: escapeHtml(projectType),
      message: escapeHtml(message),
    };

    await transporter.sendMail({
      from: emailUser,
      to: process.env.EMAIL_TO ?? emailUser,
      replyTo: email,
      subject: `New Amberprint inquiry from ${name.replace(/[\r\n]+/g, " ")}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">New Amberprint Studio Inquiry</h2>
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <p><strong>Name:</strong> ${safe.name}</p>
            <p><strong>Email:</strong> ${safe.email}</p>
            ${company ? `<p><strong>Company:</strong> ${safe.company}</p>` : ""}
            <p><strong>Project type:</strong> ${safe.projectType}</p>
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap;">${safe.message}</p>
          </div>
        </div>
      `,
      text: [
        "New Amberprint Studio Inquiry",
        `Name: ${name}`,
        `Email: ${email}`,
        company ? `Company: ${company}` : "",
        `Project type: ${projectType}`,
        "",
        "Message:",
        message,
      ]
        .filter(Boolean)
        .join("\n"),
    });

    return json({ success: true });
  } catch (error) {
    console.error("Error sending contact form email:", error);
    return json(
      { success: false, error: "Failed to send email. Please try again later." },
      { status: 500 },
    );
  }
}
