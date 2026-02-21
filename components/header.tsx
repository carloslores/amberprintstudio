"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#collection", label: "Collection" },
  { href: "#about", label: "About" },
  { href: "#process", label: "Process" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let lastScroll = 0;
    let ticking = false;

    const updateNavbar = () => {
      const currentScroll = window.scrollY;
      setScrolled(currentScroll > 50);
      setHidden(currentScroll > lastScroll && currentScroll > 200);
      lastScroll = currentScroll;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateNavbar);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: scrolled ? "rgba(253, 252, 249, 0.85)" : "rgba(253, 252, 249, 0.65)",
        backdropFilter: "blur(24px) saturate(200%)",
        WebkitBackdropFilter: "blur(24px) saturate(200%)",
        borderBottom: scrolled
          ? "1px solid rgba(120, 113, 108, 0.12)"
          : "1px solid rgba(120, 113, 108, 0.08)",
        boxShadow: scrolled ? "0 4px 16px rgba(28, 25, 23, 0.06)" : "0 1px 3px rgba(28, 25, 23, 0.02)",
        padding: scrolled ? "0.875rem 0" : "1.25rem 0",
        transform: hidden ? "translateY(-110%)" : "translateY(0)",
        opacity: hidden ? 0 : 1,
        transition: "all 0.8s cubic-bezier(0.23, 1, 0.32, 1)",
      }}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-10">
        <Link
          href="/"
          className="text-xl font-semibold tracking-tight text-foreground"
          style={{
            fontFamily: "var(--font-serif, 'Cormorant Garamond', serif)",
            letterSpacing: "-0.02em",
            textDecoration: "none",
          }}
        >
          Amberprint Studio
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="nav-link"
            >
              {link.label}
            </Link>
          ))}
          <Link href="#contact" className="cta-btn">
            <span>Inquire</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="md:hidden flex h-11 w-11 items-center justify-center rounded-full text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className="md:hidden overflow-hidden"
        style={{
          maxHeight: mobileMenuOpen ? "400px" : "0",
          opacity: mobileMenuOpen ? 1 : 0,
          transition: "all 0.6s cubic-bezier(0.23, 1, 0.32, 1)",
          borderTop: mobileMenuOpen ? "1px solid rgba(120, 113, 108, 0.1)" : "none",
          background: "rgba(253, 252, 249, 0.95)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
        }}
      >
        <div className="flex flex-col gap-1 px-6 py-4">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              className="py-3 text-base font-medium"
              style={{
                color: "var(--text-secondary, #57534e)",
                textDecoration: "none",
                transitionProperty: "all",
                transitionDuration: "0.5s",
                transitionTimingFunction: "cubic-bezier(0.23, 1, 0.32, 1)",
                transitionDelay: mobileMenuOpen ? `${i * 0.05}s` : "0s",
                transform: mobileMenuOpen ? "translateX(0)" : "translateX(-20px)",
                opacity: mobileMenuOpen ? 1 : 0,
              }}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#contact"
            className="btn-primary mt-3 text-center"
            onClick={() => setMobileMenuOpen(false)}
            style={{
              transitionDelay: mobileMenuOpen ? "0.2s" : "0s",
              transform: mobileMenuOpen ? "translateY(0)" : "translateY(10px)",
              opacity: mobileMenuOpen ? 1 : 0,
            }}
          >
            <span>Inquire</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
