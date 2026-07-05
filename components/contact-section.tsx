"use client";

import React from "react"
import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { track } from "@vercel/analytics";

export function ContactSection() {
  const ref = useScrollAnimation({ staggerDelay: 0.15 });
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "Other",
    message: "",
    website: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });
    track("inquiry_submit_started", { project_type: formState.projectType });

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitStatus({
          type: "success",
          message: "Thank you! Your message has been sent successfully.",
        });
        setFormState({
          name: "",
          email: "",
          company: "",
          projectType: "Other",
          message: "",
          website: "",
        });
        track("inquiry_submit_success", { project_type: formState.projectType });
      } else {
        setSubmitStatus({
          type: "error",
          message: data.error || "Failed to send message. Please try again.",
        });
        track("inquiry_submit_error", { status: response.status });
      }
    } catch {
      setSubmitStatus({
        type: "error",
        message: "An error occurred. Please try again later.",
      });
      track("inquiry_submit_error", { status: "network" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 lg:py-32"
      style={{ background: "var(--bg-secondary, #faf8f5)" }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8" ref={ref}>
        <div className="mx-auto max-w-3xl text-center mb-16">
          <p
            className="mb-4 text-sm font-medium uppercase tracking-widest"
            style={{ color: "var(--amber-800, #92400e)", letterSpacing: "0.15em" }}
          >
            Partnerships & Licensing
          </p>
          <h2
            className="text-3xl font-semibold sm:text-4xl lg:text-5xl text-balance"
            style={{
              fontFamily: "var(--font-serif, 'Cormorant Garamond', serif)",
              lineHeight: "1.1",
              color: "var(--text-primary, #1c1917)",
              fontWeight: 400,
              letterSpacing: "-0.02em",
            }}
          >
            {"Let's Work Together"}
          </h2>
          <p
            className="mt-6 text-lg leading-relaxed mx-auto max-w-2xl"
            style={{ color: "var(--text-secondary, #57534e)", lineHeight: 1.7 }}
          >
            Amberprint Studio is currently open to licensing opportunities, production
            partnerships, and distribution agreements. The collection can be adapted to
            existing editorial formats, framed wall art systems, or custom decorative
            applications.
          </p>
        </div>

        <div className="mx-auto mb-14 grid max-w-5xl gap-4 md:grid-cols-3">
          {[
            {
              step: "01",
              title: "Share the brief",
              description: "Tell us about the space, application, quantity, and target installation date.",
            },
            {
              step: "02",
              title: "Adapt the system",
              description: "We align the format, finish, and modular composition with your project needs.",
            },
            {
              step: "03",
              title: "Plan production",
              description: "We confirm samples, production scope, lead time, and delivery requirements.",
            },
          ].map((item, index) => (
            <article
              key={item.step}
              data-animate="fade-up"
              data-delay={index}
              className="rounded-2xl border border-stone-200 bg-white/60 p-6 text-left"
            >
              <span className="text-xs font-semibold tracking-[0.2em] text-amber-800">
                {item.step}
              </span>
              <h3 className="mt-3 text-xl font-medium text-stone-900">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-stone-600">{item.description}</p>
            </article>
          ))}
        </div>

        {/* Contact form with glassmorphism */}
        <div
          data-animate="fade-up"
          data-delay="0"
          className="mx-auto max-w-xl rounded-3xl p-8 lg:p-10"
          style={{
            background: "rgba(255, 255, 255, 0.6)",
            border: "1px solid rgba(120, 113, 108, 0.1)",
            backdropFilter: "blur(24px) saturate(180%)",
            WebkitBackdropFilter: "blur(24px) saturate(180%)",
            boxShadow: "0 25px 50px -12px rgba(28, 25, 23, 0.1)",
          }}
        >
          {/* Status Message */}
          {submitStatus.type && (
            <div
              role={submitStatus.type === "error" ? "alert" : "status"}
              aria-live="polite"
              className="rounded-xl p-4 mb-6"
              style={{
                background: submitStatus.type === "success"
                  ? "rgba(22, 163, 74, 0.12)"
                  : "rgba(220, 38, 38, 0.12)",
                color: submitStatus.type === "success" ? "#166534" : "#991b1b",
                border: `1px solid ${submitStatus.type === "success" ? "rgba(22, 163, 74, 0.25)" : "rgba(220, 38, 38, 0.25)"}`,
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                fontSize: "0.9375rem",
                fontWeight: 500,
                animation: "fadeInUp 0.7s cubic-bezier(0.23, 1, 0.32, 1) forwards",
              }}
            >
              {submitStatus.message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6" aria-busy={isSubmitting}>
            {[
              { id: "name", label: "Full Name *", type: "text", required: true, placeholder: "Your name", autoComplete: "name", maxLength: 80 },
              { id: "email", label: "Email Address *", type: "email", required: true, placeholder: "you@company.com", autoComplete: "email", maxLength: 254 },
              { id: "company", label: "Company / Organization", type: "text", required: false, placeholder: "Your company", autoComplete: "organization", maxLength: 120 },
            ].map((field, i) => (
              <div key={field.id} data-animate="fade-up" data-delay={i + 1}>
                <label
                  htmlFor={field.id}
                  className="block text-sm font-medium mb-2"
                  style={{
                    color: "var(--text-primary, #1c1917)",
                    letterSpacing: "-0.01em",
                    transition: "all 0.5s cubic-bezier(0.23, 1, 0.32, 1)",
                  }}
                >
                  {field.label}
                </label>
                <input
                  type={field.type}
                  id={field.id}
                  name={field.id}
                  value={formState[field.id as keyof typeof formState]}
                  onChange={(e) => setFormState({ ...formState, [field.id]: e.target.value })}
                  className="w-full rounded-xl px-4 py-3"
                  style={{
                    border: "1px solid rgba(215, 211, 207, 0.4)",
                    fontFamily: "inherit",
                    fontSize: "0.9375rem",
                    background: "rgba(255, 255, 255, 0.7)",
                    transition: "all 0.6s cubic-bezier(0.23, 1, 0.32, 1)",
                    color: "var(--text-primary, #1c1917)",
                    backdropFilter: "blur(8px)",
                    WebkitBackdropFilter: "blur(8px)",
                    outline: "none",
                  }}
                  placeholder={field.placeholder}
                  required={field.required}
                  autoComplete={field.autoComplete}
                  maxLength={field.maxLength}
                />
              </div>
            ))}
            <div data-animate="fade-up" data-delay="4">
              <label
                htmlFor="projectType"
                className="block text-sm font-medium mb-2"
                style={{ color: "var(--text-primary, #1c1917)" }}
              >
                Project Type *
              </label>
              <select
                id="projectType"
                name="projectType"
                value={formState.projectType}
                onChange={(event) => setFormState({ ...formState, projectType: event.target.value })}
                className="w-full rounded-xl px-4 py-3"
                style={{
                  border: "1px solid rgba(215, 211, 207, 0.4)",
                  background: "rgba(255, 255, 255, 0.7)",
                  color: "var(--text-primary, #1c1917)",
                }}
                required
              >
                {[
                  "Hospitality",
                  "Retail",
                  "Residential",
                  "Licensing",
                  "Other",
                ].map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>
            <div data-animate="fade-up" data-delay="5">
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2"
                style={{
                  color: "var(--text-primary, #1c1917)",
                  letterSpacing: "-0.01em",
                  transition: "all 0.5s cubic-bezier(0.23, 1, 0.32, 1)",
                }}
              >
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                className="w-full rounded-xl px-4 py-3 resize-y"
                style={{
                  border: "1px solid rgba(215, 211, 207, 0.4)",
                  fontFamily: "inherit",
                  fontSize: "0.9375rem",
                  background: "rgba(255, 255, 255, 0.7)",
                  transition: "all 0.6s cubic-bezier(0.23, 1, 0.32, 1)",
                  color: "var(--text-primary, #1c1917)",
                  minHeight: "140px",
                  backdropFilter: "blur(8px)",
                  WebkitBackdropFilter: "blur(8px)",
                  outline: "none",
                }}
                placeholder="Tell us about your project or inquiry..."
                required
                minLength={20}
                maxLength={3000}
                autoComplete="off"
              />
            </div>

            <div className="absolute left-[-9999px]" aria-hidden="true">
              <label htmlFor="website">Website</label>
              <input
                id="website"
                name="website"
                type="text"
                value={formState.website}
                onChange={(event) => setFormState({ ...formState, website: event.target.value })}
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="contact-submit w-full py-4 px-8 text-base font-medium text-white relative overflow-hidden group"
              style={{
                letterSpacing: "-0.01em",
                cursor: isSubmitting ? "not-allowed" : "pointer",
                opacity: isSubmitting ? 0.6 : 1,
              }}
            >
              <span className="relative z-10 inline-flex items-center gap-3">
                {isSubmitting ? "Sending..." : "Send Inquiry"}
                {!isSubmitting && <span className="contact-submit-arrow" aria-hidden="true">→</span>}
              </span>
            </button>
            <p className="text-center text-xs leading-5 text-stone-500">
              Include approximate quantity and timing when available. We usually reply by email with the next steps for your project.
            </p>
          </form>

          {/* Input focus styles */}
          <style>{`
            #contact input:focus,
            #contact textarea:focus {
              border-color: var(--amber-400, #fbbf24) !important;
              background: rgba(255, 255, 255, 0.95) !important;
              box-shadow: 0 0 0 4px rgba(251, 191, 36, 0.08), 0 8px 16px rgba(0, 0, 0, 0.04) !important;
              transform: translateY(-3px) !important;
            }
            #contact input:focus + label,
            #contact div:focus-within label {
              color: var(--amber-800, #92400e) !important;
              transform: translateX(6px) !important;
            }
            #contact button[type="submit"]:not(:disabled):hover {
              background: linear-gradient(135deg, #93400f 0%, #6f2f0c 100%) !important;
              border-color: rgba(120, 53, 15, 0.8) !important;
              transform: translateY(-3px) !important;
              box-shadow: 0 20px 38px -20px rgba(120, 53, 15, 0.75) !important;
            }
            .contact-submit {
              background: linear-gradient(135deg, #292524 0%, #171412 100%);
              border: 1px solid rgba(146, 64, 14, 0.28);
              border-radius: 0.875rem;
              box-shadow:
                inset 0 1px 0 rgba(255, 255, 255, 0.08),
                0 14px 32px -24px rgba(28, 25, 23, 0.9);
              transition: all 0.45s cubic-bezier(0.23, 1, 0.32, 1);
            }
            .contact-submit-arrow {
              display: inline-block;
              transition: transform 0.45s cubic-bezier(0.23, 1, 0.32, 1);
            }
            .contact-submit:not(:disabled):hover .contact-submit-arrow {
              transform: translateX(4px);
            }
            .contact-submit:focus-visible {
              outline: 2px solid rgba(146, 64, 14, 0.5);
              outline-offset: 3px;
            }
            @media (prefers-reduced-motion: reduce) {
              .contact-submit,
              .contact-submit-arrow {
                transition: none;
              }
              #contact button[type="submit"]:not(:disabled):hover,
              .contact-submit:not(:disabled):hover .contact-submit-arrow {
                transform: none !important;
              }
            }
          `}</style>
        </div>
      </div>
    </section>
  );
}
