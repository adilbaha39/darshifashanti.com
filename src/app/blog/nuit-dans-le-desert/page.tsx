import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nuit dans le désert : ce qu'il faut savoir",
  description:
    "Comment se déroule une nuit dans le Sahara à Merzouga ? Préparation, ambiance, conseils pratiques pour une expérience inoubliable sous les étoiles.",
  openGraph: {
    title: "Nuit dans le désert à Merzouga",
    description:
      "Tout savoir pour vivre une nuit authentique sous les étoiles du Sahara.",
    images: ["/images/campfire.jpg"],
  },
};

export default function ArticlePage() {
  return (
    <article>
      <section className="relative h-[45vh] min-h-[320px] flex items-end">
        <div className="absolute inset-0">
          <Image
            src="/images/campfire.jpg"
            alt="Soirée autour du feu dans le désert"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-brown-900/80 via-brown-800/40 to-transparent" />
        <div className="relative max-w-3xl mx-auto px-5 pb-10 text-white w-full">
          <p className="text-xs tracking-[0.2em] uppercase text-gold-400 mb-3">
            Expérience
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl leading-tight">
            Nuit dans le désert : ce qu&apos;il faut savoir
          </h1>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-5 py-12 md:py-16">
        <p className="text-muted text-sm mb-8">
          Publié le 10 février 2026 · 5 min de lecture
        </p>

        <div className="space-y-6 text-[15px] leading-relaxed text-brown-800/90">
          <p>
            Passer une nuit dans le désert de Merzouga reste l&apos;un des
            souvenirs les plus forts d&apos;un voyage au Maroc. Entre le silence
            des dunes, le feu de camp et le ciel étoilé, l&apos;expérience est
            unique.
          </p>

          <h2 className="font-serif text-2xl text-brown-800 pt-4">
            Comment se déroule une nuit typique ?
          </h2>
          <p>
            En fin d&apos;après-midi, vous partez souvent à dos de chameau vers
            les dunes. Vous assistez au coucher de soleil, puis un dîner
            traditionnel est préparé. La soirée se prolonge autour du feu avec
            parfois de la musique berbère, avant une nuit sous les étoiles (en
            tente ou à la belle étoile selon la formule).
          </p>

          <h2 className="font-serif text-2xl text-brown-800 pt-4">
            Que faut-il emporter ?
          </h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Vêtements chauds (même en été, la température baisse la nuit)</li>
            <li>Lampe frontale ou petite lampe de poche</li>
            <li>Crème solaire et lunettes de soleil pour le lendemain</li>
            <li>Chaussures fermées confortables</li>
            <li>Appareil photo ou téléphone chargé</li>
          </ul>

          <h2 className="font-serif text-2xl text-brown-800 pt-4">
            Maison d&apos;hôtes ou bivouac ?
          </h2>
          <p>
            Les deux sont complémentaires. Beaucoup de voyageurs combinent une
            nuit en <strong>maison d&apos;hôtes</strong> (confort, douche,
            petit-déjeuner) et une nuit en bivouac dans les dunes. À Dar Shifa
            Shanti, vous pouvez organiser les deux facilement.
          </p>

          <h2 className="font-serif text-2xl text-brown-800 pt-4">
            Le conseil le plus important
          </h2>
          <p>
            Laissez-vous porter. Le désert invite à ralentir. Éteignez
            (presque) le téléphone et profitez du silence et de la lumière des
            étoiles.
          </p>

          <div className="bg-sand-100 border border-gold-500/30 rounded-lg p-6 my-10">
            <p className="font-serif text-lg text-brown-800 mb-2">
              Vivez cette expérience depuis Dar Shifa Shanti
            </p>
            <p className="text-sm text-muted mb-4">
              Nous organisons balades, couchers de soleil et nuits dans le
              désert sur demande.
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
