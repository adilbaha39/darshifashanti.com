import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Découvrez l'histoire et la philosophie de Dar Shifa Shanti, maison d'hôtes authentique au cœur du désert de Merzouga.",
};

export default function AboutPage() {
  return (
    <>
      <section className="relative h-[45vh] min-h-[320px] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-about.webp"
            alt="À propos de Dar Shifa Shanti"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-brown-800/55" />
        <div className="relative max-w-6xl mx-auto px-5 text-white">
          <p className="text-xs tracking-[0.25em] uppercase text-gold-400 mb-3 flex items-center gap-3">
            À propos
            <span className="w-10 h-px bg-gold-400" />
          </p>
          <h1 className="font-serif text-4xl md:text-5xl leading-tight mb-3">
            Notre histoire
          </h1>
          <p className="text-sand-100/85 max-w-lg text-sm sm:text-base">
            Une maison d&apos;hôtes née de la passion du désert et de
            l&apos;hospitalité marocaine.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-5">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="aspect-[4/3] relative rounded-lg overflow-hidden">
              <Image
                src="/images/philosophy-main.webp"
                alt="L'esprit de Dar Shifa Shanti"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-brown-500 mb-2 flex items-center gap-3">
                Philosophie
                <span className="w-8 h-px bg-gold-500" />
              </p>
              <h2 className="font-serif text-3xl text-brown-800 mb-5">
                L&apos;âme du Sahara, l&apos;esprit de l&apos;accueil
              </h2>
              <p className="text-muted text-sm leading-relaxed mb-4">
                Dar Shifa Shanti est bien plus qu&apos;une maison d&apos;hôtes.
                C&apos;est un lieu où le temps ralentit, où les traditions
                berbères se mêlent à un confort moderne discret, et où chaque
                voyageur est reçu comme un ami.
              </p>
              <p className="text-muted text-sm leading-relaxed">
                Située à Merzouga, au pied des dunes majestueuses de l&apos;Erg
                Chebbi, notre maison vous offre une immersion authentique dans
                le désert marocain.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 bg-sand-200/40 border-y border-gold-500/20">
        <div className="max-w-6xl mx-auto px-5">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="order-2 md:order-1">
              <p className="text-xs tracking-[0.2em] uppercase text-brown-500 mb-2 flex items-center gap-3">
                Le désert
                <span className="w-8 h-px bg-gold-500" />
              </p>
              <h2 className="font-serif text-3xl text-brown-800 mb-5">
                Au pied de l&apos;Erg Chebbi
              </h2>
              <p className="text-muted text-sm leading-relaxed mb-4">
                Les dunes dorées de Merzouga sont parmi les plus belles du
                Sahara marocain. Lever et coucher de soleil y offrent des
                spectacles inoubliables.
              </p>
              <p className="text-muted text-sm leading-relaxed">
                Depuis Dar Shifa Shanti, les aventures dans le désert sont à
                portée de main : balades à dos de chameau, nuits sous les
                étoiles, et rencontres avec la culture locale.
              </p>
            </div>
            <div className="aspect-[4/3] relative rounded-lg overflow-hidden order-1 md:order-2">
              <Image
                src="/images/desert-about.webp"
                alt="Dunes de Merzouga"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="max-w-3xl mx-auto px-5 text-center">
          <h2 className="font-serif text-2xl md:text-3xl text-brown-800 mb-4">
            Venez découvrir Dar Shifa Shanti
          </h2>
          <p className="text-muted text-sm mb-6">
            Nous serons ravis de vous accueillir et de partager avec vous la
            magie du désert.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-7 py-3 rounded-full bg-brown-500 text-white text-sm font-medium hover:bg-brown-600 transition-colors"
          >
            Nous contacter
          </Link>
        </div>
      </section>
    </>
  );
}
