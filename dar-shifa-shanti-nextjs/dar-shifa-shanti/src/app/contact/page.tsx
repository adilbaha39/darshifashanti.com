import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez Dar Shifa Shanti à Merzouga pour réserver votre séjour. WhatsApp, téléphone et localisation Google Maps.",
};

export default function ContactPage() {
  return (
    <>
      <section className="relative h-[40vh] min-h-[280px] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-contact.webp"
            alt="Contact Dar Shifa Shanti"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-brown-800/55" />
        <div className="relative max-w-6xl mx-auto px-5 text-white">
          <p className="text-xs tracking-[0.25em] uppercase text-gold-400 mb-3 flex items-center gap-3">
            Contact
            <span className="w-10 h-px bg-gold-400" />
          </p>
          <h1 className="font-serif text-4xl md:text-5xl leading-tight mb-3">
            Réservez votre séjour
          </h1>
          <p className="text-sand-100/85 max-w-lg text-sm sm:text-base">
            Nous sommes à votre disposition pour organiser votre arrivée et
            répondre à toutes vos questions.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-5">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-brown-500 mb-2 flex items-center gap-3">
                Nous joindre
                <span className="w-8 h-px bg-gold-500" />
              </p>
              <h2 className="font-serif text-3xl text-brown-800 mb-6">
                Contactez-nous
              </h2>

              <div className="space-y-6 text-sm">
                <div>
                  <p className="font-medium text-brown-800 mb-1">Adresse</p>
                  <p className="text-muted">
                    Merzouga, Province d&apos;Errachidia
                    <br />
                    Maroc
                  </p>
                </div>

                <div>
                  <p className="font-medium text-brown-800 mb-1">WhatsApp</p>
                  <a
                    href="https://wa.me/212768254033"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brown-500 hover:text-brown-600 underline underline-offset-2"
                  >
                    +212 7 68 25 40 33
                  </a>
                </div>

                <div>
                  <p className="font-medium text-brown-800 mb-1">Localisation</p>
                  <a
                    href="https://maps.app.goo.gl/Y1AqY7ip7QdJ1oRe8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brown-500 hover:text-brown-600 underline underline-offset-2"
                  >
                    Voir sur Google Maps →
                  </a>
                </div>
              </div>

              <div className="mt-10">
                <a
                  href="https://wa.me/212768254033?text=Bonjour%2C%20je%20souhaite%20r%C3%A9server%20un%20s%C3%A9jour%20%C3%A0%20Dar%20Shifa%20Shanti"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#25D366] text-white text-sm font-medium hover:bg-[#1da851] transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.073-1.691-1.802-.73-.201-.314-.347-.535-.52.173-.372.43-.87.497-1.07.066-.201.066-.37-.033-.52-.099-.149-.67-1.611-.916-2.206-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Réserver via WhatsApp
                </a>
              </div>
            </div>

            <div className="aspect-[4/3] relative rounded-lg overflow-hidden">
              <Image
                src="/images/entrance.webp"
                alt="Entrée de Dar Shifa Shanti"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="max-w-6xl mx-auto px-5">
          <div className="bg-sand-100 border border-gold-500/30 rounded-lg p-6 text-center">
            <p className="text-sm text-muted mb-3">
              Retrouvez-nous facilement sur Google Maps
            </p>
            <a
              href="https://maps.app.goo.gl/Y1AqY7ip7QdJ1oRe8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-2.5 rounded-full border border-brown-500 text-brown-600 text-sm font-medium hover:bg-brown-500 hover:text-white transition-colors"
            >
              Ouvrir Google Maps
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
