"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/chambres", label: "Chambres" },
  { href: "/experiences", label: "Expériences" },
  { href: "/blog", label: "Blog" },
  { href: "/a-propos", label: "À propos" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-sand-100/95 backdrop-blur-md border-b border-gold-500/25">
      <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <svg
            viewBox="0 0 32 32"
            className="w-8 h-8 text-brown-500 group-hover:text-brown-600 transition-colors"
            fill="currentColor"
          >
            <path d="M16 2c-1.5 3-3 5.5-4.5 8.5C9.5 14 8 17 8 20c0 4.4 3.6 8 8 8s8-3.6 8-8c0-3-1.5-6-3.5-9.5C19 7.5 17.5 5 16 2z" />
            <path
              d="M16 10c-.8 1.6-1.5 3-2.2 4.5-.8 1.8-1.3 3.3-1.3 4.5 0 2 1.6 3.5 3.5 3.5s3.5-1.5 3.5-3.5c0-1.2-.5-2.7-1.3-4.5C17.5 13 16.8 11.6 16 10z"
              fill="var(--color-sand-100)"
            />
          </svg>
          <span className="font-serif text-xl tracking-wide text-brown-800">
            Dar Shifa Shanti
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                pathname === link.href
                  ? "text-brown-500 border-b border-gold-500 pb-0.5"
                  : "text-brown-800/80 hover:text-brown-500"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA + Mobile */}
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden sm:inline-flex items-center px-5 py-2.5 rounded-full bg-brown-500 text-white text-sm font-medium hover:bg-brown-600 transition-colors"
          >
            Réserver
          </Link>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 text-brown-700"
            aria-label="Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
            >
              {open ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t border-gold-500/20 bg-sand-100">
          <nav className="flex flex-col px-5 py-4 gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`py-2.5 text-base font-medium ${
                  pathname === link.href
                    ? "text-brown-500"
                    : "text-brown-800/80"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex justify-center items-center px-5 py-3 rounded-full bg-brown-500 text-white text-sm font-medium"
            >
              Réserver
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
