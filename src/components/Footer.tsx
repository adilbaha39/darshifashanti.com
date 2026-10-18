import Link from "next/link";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { BUSINESS } from "@/lib/site";

export default function Footer({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);

  const explore = [
    { href: `/${locale}/chambres`, label: t.nav.rooms },
    { href: `/${locale}/experiences`, label: t.nav.experiences },
    { href: `/${locale}/a-propos`, label: t.nav.about },
    { href: `/${locale}/blog`, label: t.nav.blog },
    { href: `/${locale}/contact`, label: t.nav.contact },
  ];

  return (
    <footer className="bg-brown-800 text-sand-100 pt-14 pb-8">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          <div>
            <p className="font-serif text-xl text-white mb-3">Dar Shifa Shanti</p>
            <p className="text-sm text-sand-200/80 leading-relaxed max-w-xs">
              {t.footer.tagline}
            </p>
          </div>
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-gold-400 mb-4">
              {t.footer.explore}
            </p>
            <ul className="space-y-2 text-sm">
              {explore.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sand-200/80 hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-gold-400 mb-4">
              {t.footer.contact}
            </p>
            <ul className="space-y-2 text-sm text-sand-200/80">
              <li>
                <a href={`tel:${BUSINESS.phone}`} className="hover:text-white">
                  {BUSINESS.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${BUSINESS.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={BUSINESS.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  Merzouga
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-sand-100/10 text-center text-xs text-sand-200/50">
          © 2026 {t.footer.rights}
        </div>
      </div>
    </footer>
  );
}
