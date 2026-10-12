import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-brown-800 text-sand-100">
      <div className="max-w-6xl mx-auto px-5 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <svg
                viewBox="0 0 32 32"
                className="w-7 h-7 text-gold-400"
                fill="currentColor"
              >
                <path d="M16 2c-1.5 3-3 5.5-4.5 8.5C9.5 14 8 17 8 20c0 4.4 3.6 8 8 8s8-3.6 8-8c0-3-1.5-6-3.5-9.5C19 7.5 17.5 5 16 2z" />
              </svg>
              <span className="font-serif text-xl tracking-wide">
                Dar Shifa Shanti
              </span>
            </div>
            <p className="text-sand-200/80 text-sm leading-relaxed max-w-xs">
              Maison d&apos;hôtes authentique au cœur du désert de Merzouga.
              Hospitalité berbère et magie de l&apos;Erg Chebbi.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-serif text-lg text-gold-400 mb-4">Navigation</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-gold-400 transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  href="/chambres"
                  className="hover:text-gold-400 transition-colors"
                >
                  Chambres
                </Link>
              </li>
              <li>
                <Link
                  href="/experiences"
                  className="hover:text-gold-400 transition-colors"
                >
                  Expériences
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="hover:text-gold-400 transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/a-propos"
                  className="hover:text-gold-400 transition-colors"
                >
                  À propos
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-gold-400 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg text-gold-400 mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <svg
                  className="w-4 h-4 mt-0.5 shrink-0 text-gold-400"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                  />
                </svg>
                <span>Merzouga, Erg Chebbi, Maroc</span>
              </li>
              <li className="flex items-center gap-2.5">
                <svg
                  className="w-4 h-4 shrink-0 text-gold-400"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                  />
                </svg>
                <a
                  href="tel:+212768254033"
                  className="hover:text-gold-400 transition-colors"
                >
                  +212 7 68 25 40 33
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <svg
                  className="w-4 h-4 shrink-0 text-gold-400"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                  />
                </svg>
                <a
                  href="mailto:darshifashanti@gmail.com"
                  className="hover:text-gold-400 transition-colors"
                >
                  darshifashanti@gmail.com
                </a>
              </li>
              <li className="pt-1">
                <a
                  href="https://wa.me/212768254033"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-700/30 border border-green-500/40 text-green-200 text-sm hover:bg-green-700/50 transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-sand-100/10 text-center text-xs text-sand-200/50">
          © {new Date().getFullYear()} Dar Shifa Shanti — Merzouga, Maroc
        </div>
      </div>
    </footer>
  );
}
