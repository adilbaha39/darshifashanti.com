import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guide complet pour visiter Merzouga",
  description:
    "Comment aller à Merzouga, que faire à l'Erg Chebbi, où dormir et les meilleurs conseils pour un séjour réussi dans le désert marocain.",
  openGraph: {
    title: "Guide complet pour visiter Merzouga",
    description:
      "Tout savoir pour préparer votre voyage à Merzouga et l'Erg Chebbi.",
    images: ["/images/desert-adventure.jpg"],
  },
};

export default function ArticlePage() {
  return (
    <article>
      <section className="relative h-[45vh] min-h-[320px] flex items-end">
        <div className="absolute inset-0">
          <Image
            src="/images/desert-adventure.jpg"
            alt="Dunes de Merzouga"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-brown-900/80 via-brown-800/40 to-transparent" />
        <div className="relative max-w-3xl mx-auto px-5 pb-10 text-white w-full">
          <p className="text-xs tracking-[0.2em] uppercase text-gold-400 mb-3">
            Guide pratique
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl leading-tight">
            Guide complet pour visiter Merzouga
          </h1>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-5 py-12 md:py-16">
        <p className="text-muted text-sm mb-8">
          Publié le 15 mars 2026 · 6 min de lecture
        </p>

        <div className="prose-desert space-y-6 text-[15px] leading-relaxed text-brown-800/90">
          <p>
            Merzouga est l&apos;une des portes d&apos;entrée les plus
            impressionnantes du Sahara marocain. Situé au pied des dunes
            majestueuses de l&apos;<strong>Erg Chebbi</strong>, ce petit village
            attire les voyageurs en quête de silence, de grands espaces et
            d&apos;authenticité.
          </p>

          <h2 className="font-serif text-2xl text-brown-800 pt-4">
            Comment se rendre à Merzouga ?
          </h2>
          <p>
            Depuis Marrakech, comptez environ 9 à 10 heures de route. Depuis
            Fès, le trajet dure environ 7 à 8 heures. De nombreux voyageurs
            choisissent un transfert organisé ou une location de voiture. Il
            est aussi possible d&apos;arriver en bus jusqu&apos;à Erfoud ou
            Rissani, puis de prendre un taxi local.
          </p>

          <h2 className="font-serif text-2xl text-brown-800 pt-4">
            Que faire à Merzouga ?
          </h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Balade à dos de chameau au lever ou au coucher du soleil</li>
            <li>Nuit en bivouac dans les dunes</li>
            <li>Promenade dans les dunes de l&apos;Erg Chebbi</li>
            <li>Visite des villages environnants et rencontre avec les habitants</li>
            <li>Observation des étoiles (le ciel est exceptionnel)</li>
          </ul>

          <h2 className="font-serif text-2xl text-brown-800 pt-4">
            Où dormir à Merzouga ?
          </h2>
          <p>
            Pour une expérience authentique, privilégiez une maison d&apos;hôtes
            traditionnelle plutôt qu&apos;un grand hôtel. À{" "}
            <strong>Dar Shifa Shanti</strong>, vous dormez dans des chambres
            décorées avec soin, à proximité immédiate des dunes, avec une
            hospitalité berbère chaleureuse.
          </p>

          <h2 className="font-serif text-2xl text-brown-800 pt-4">
            Combien de jours prévoir ?
          </h2>
          <p>
            Idéalement 2 à 3 nuits. Cela vous laisse le temps d&apos;arriver,
            de profiter d&apos;un coucher de soleil, d&apos;une nuit calme et
            d&apos;un lever de soleil sur les dunes avant de repartir.
          </p>

          <div className="bg-sand-100 border border-gold-500/30 rounded-lg p-6 my-10">
            <p className="font-serif text-lg text-brown-800 mb-2">
              Prêt à découvrir Merzouga ?
            </p>
            <p className="text-sm text-muted mb-4">
              Réservez votre séjour à Dar Shifa Shanti et vivez le désert
              autrement.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-2.5 rounded-full bg-brown-500 text-white text-sm font-medium hover:bg-brown-600 transition-colors"
            >
              Nous contacter
            </Link>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-gold-500/20">
          <Link
            href="/blog"
            className="text-sm font-medium text-brown-500 hover:text-brown-600"
          >
            ← Retour au blog
          </Link>
        </div>
      </div>
    </article>
  );
}
