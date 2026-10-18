"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { localeNames, locales, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

export default function Header({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const menuId = useId();
  const langRef = useRef<HTMLDivElement>(null);

  const links = [
    { href: `/${locale}`, label: t.nav.home },
    { href: `/${locale}/chambres`, label: t.nav.rooms },
    { href: `/${locale}/experiences`, label: t.nav.experiences },
    { href: `/${locale}/a-propos`, label: t.nav.about },
    { href: `/${locale}/blog`, label: t.nav.blog },
    { href: `/${locale}/contact`, label: t.nav.contact },
  ];

  function switchLocale(next: Locale) {
    const parts = pathname.split("/");
    if (parts.length >= 2) {
      parts[1] = next;
      return parts.join("/") || `/${next}`;
    }
    return `/${next}`;
  }

  function isActive(href: string) {
    if (href === `/${locale}`) return pathname === href;
    return pathname === href || pathname.startsWith(href + "/");
  }

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpen(false);
        setLangOpen(false);
      }
    }
    function onClick(e: MouseEvent) {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    }
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-sand-50/95 backdrop-blur border-b border-gold-500/20">
      <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between gap-4">
        <Link
          href={`/${locale}`}
          className="font-serif text-lg sm:text-xl text-brown-800 tracking-wide focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brown-500 rounded"
        >
          Dar Shifa Shanti
        </Link>

        <nav className="hidden lg:flex items-center gap-6 text-sm" aria-label="Main">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brown-500 rounded ${
                isActive(l.href)
                  ? "text-brown-800 font-medium"
                  : "text-brown-700/80 hover:text-brown-800"
              }`}
              aria-current={isActive(l.href) ? "page" : undefined}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="relative" ref={langRef}>
            <button
              type="button"
              onClick={() => setLangOpen((v) => !v)}
              className="text-xs font-medium px-2.5 py-1.5 rounded-full border border-gold-500/40 text-brown-700 hover:bg-gold-500/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brown-500"
              aria-label="Language"
              aria-expanded={langOpen}
              aria-haspopup="listbox"
            >
              {localeNames[locale]}
            </button>
            {langOpen && (
              <ul
                role="listbox"
                className="absolute end-0 mt-1 w-36 bg-white border border-gold-500/30 rounded-lg shadow-lg py-1 z-50"
              >
                {locales.map((l) => (
                  <li key={l} role="option" aria-selected={l === locale}>
                    <Link
                      href={switchLocale(l)}
                      onClick={() => setLangOpen(false)}
                      className={`block px-3 py-2 text-sm hover:bg-sand-100 focus-visible:bg-sand-100 focus-visible:outline-none ${
                        l === locale ? "text-brown-800 font-medium" : "text-brown-600"
                      }`}
                    >
                      {localeNames[l]}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <Link
            href={`/${locale}/contact`}
            className="hidden sm:inline-flex text-xs font-semibold px-4 py-2 rounded-full bg-brown-500 text-white hover:bg-brown-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brown-500"
          >
            {t.nav.book}
          </Link>

          <button
            type="button"
            className="lg:hidden p-2 text-brown-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brown-500 rounded"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
            aria-expanded={open}
            aria-controls={menuId}
          >
            <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
              {open ? (
                <path d="M6 6l10 10M16 6L6 16" />
              ) : (
                <path d="M4 7h14M4 11h14M4 15h14" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div id={menuId} className="lg:hidden border-t border-gold-500/20 bg-sand-50 px-5 py-4 space-y-3">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`block text-sm py-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brown-500 rounded ${
                isActive(l.href) ? "text-brown-800 font-medium" : "text-brown-800"
              }`}
              aria-current={isActive(l.href) ? "page" : undefined}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href={`/${locale}/contact`}
            onClick={() => setOpen(false)}
            className="inline-flex mt-2 text-xs font-semibold px-4 py-2 rounded-full bg-brown-500 text-white"
          >
            {t.nav.book}
          </Link>
        </div>
      )}
    </header>
  );
}
