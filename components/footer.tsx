"use client";

import Link from "next/link";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const ref = useScrollAnimation({ staggerDelay: 0.1 });

  return (
    <footer
      className="py-16 lg:py-20 relative overflow-hidden"
      style={{ background: "var(--stone-950, #0c0a09)", color: "var(--stone-300, #d6d3d1)" }}
    >
      {/* Scoped footer link styles */}
      <style>{`
        .footer-link {
          color: var(--stone-400, #a8a29e);
          text-decoration: none;
          transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
          font-size: 0.9375rem;
          position: relative;
          display: inline-block;
        }
        .footer-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 1px;
          background: var(--amber-400, #fbbf24);
          transition: width 0.5s cubic-bezier(0.23, 1, 0.32, 1);
        }
        .footer-link:hover {
          color: white;
          transform: translateX(6px);
        }
        .footer-link:hover::after {
          width: 100%;
        }
        .footer-email {
          color: var(--amber-400, #fbbf24);
          text-decoration: none;
          font-size: 0.9375rem;
          font-weight: 500;
          position: relative;
          display: inline-block;
          transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
        }
        .footer-email::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 1px;
          background: var(--amber-400, #fbbf24);
          transition: width 0.5s cubic-bezier(0.23, 1, 0.32, 1);
        }
        .footer-email:hover {
          color: var(--amber-300, #fcd34d);
        }
        .footer-email:hover::after {
          width: 100%;
        }
      `}</style>

      {/* Top gradient line */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 h-px"
        style={{
          width: "100%",
          background: "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent)",
        }}
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-10" ref={ref}>
        <div className="grid gap-12 lg:grid-cols-3 lg:gap-20 mb-12">
          {/* Brand */}
          <div data-animate="fade-up" data-delay="0" className="group">
            <h3
              className="text-2xl font-semibold mb-4 group-hover:translate-x-1.5"
              style={{
                fontFamily: "var(--font-serif, 'Cormorant Garamond', serif)",
                color: "white",
                fontWeight: 400,
                letterSpacing: "-0.02em",
                transition: "all 0.6s cubic-bezier(0.23, 1, 0.32, 1)",
              }}
            >
              Amberprint Studio
            </h3>
            <p
              className="mb-6 max-w-xs"
              style={{ color: "var(--stone-400, #a8a29e)", lineHeight: 1.7, fontSize: "0.9375rem" }}
            >
              Creating distinctive sculptural wall art inspired by the beauty of fossilized nature and geological time.
            </p>
            <a href="mailto:contact@amberprintstudio.com" className="footer-email">
              contact@amberprintstudio.com
            </a>
          </div>

          {/* Navigation Links */}
          <div data-animate="fade-up" data-delay="1">
            <h4
              className="mb-5 text-lg font-medium"
              style={{
                color: "white",
                fontFamily: "var(--font-serif, 'Cormorant Garamond', serif)",
                letterSpacing: "-0.01em",
              }}
            >
              Navigation
            </h4>
            <ul className="space-y-3">
              {["Collection", "About", "Process", "Contact"].map((item, i) => (
                <li key={item} data-animate="fade-left" data-delay={i + 2}>
                  <Link href={`#${item.toLowerCase()}`} className="footer-link">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div data-animate="fade-up" data-delay="2">
            <h4
              className="mb-5 text-lg font-medium"
              style={{
                color: "white",
                fontFamily: "var(--font-serif, 'Cormorant Garamond', serif)",
                letterSpacing: "-0.01em",
              }}
            >
              Legal
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Privacy Policy", href: "/privacy-policy" },
                { label: "Terms & Conditions", href: "/terms-and-conditions" },
              ].map((item, i) => (
                <li key={item.label} data-animate="fade-left" data-delay={i + 6}>
                  <Link href={item.href} className="footer-link">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div
          className="pt-8 text-center text-sm"
          style={{
            borderTop: "1px solid rgba(255, 255, 255, 0.08)",
            color: "var(--stone-500, #78716c)",
          }}
        >
          <p>© {currentYear} Amberprint Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
