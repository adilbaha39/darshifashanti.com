import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meilleure période pour aller à l'Erg Chebbi",
  description:
    "Printemps, automne, hiver ou été ? Découvrez la meilleure saison pour visiter les dunes de Merzouga et profiter pleinement de l'Erg Chebbi.",
  openGraph: {
    title: "Meilleure période pour l'Erg Chebbi",
    description:
      "Quelle saison choisir pour visiter Merzouga et les dunes du Sahara marocain ?",
    images: ["/images/hero-sunset.jpg"],
  },
};

export default function ArticlePage() {
  return (
    <article>
      <section className="relative h-[45vh] min-h-[320px] flex items-end">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-sunset.jpg"
            alt="Coucher de soleil sur l'Erg Chebbi"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-brown-900/80 via-brown-800/40 to-transparent" />
        <div className="relative max-w-3xl mx-auto px-5 pb-10 text-white w-full">
          <p className="text-xs tracking-[0.2em] uppercase text-gold-400 mb-3">
            Conseils pratiques
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl leading-tight">
            Quelle est la meilleure période pour aller à l&apos;Erg Chebbi ?
          </h1>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-5 py-12 md:py-16">
        <p className="text-muted text-sm mb-8">
          Publié le 28 février 2026 · 5 min de lecture
        </p>

        <div className="space-y-6 text-[15px] leading-relaxed text-brown-800/90">
          <p>
            Les dunes de l&apos;<strong>Erg Chebbi</strong> à Merzouga se
            visitent toute l&apos;année, mais chaque saison offre une expérience
            différente. Voici un guide clair pour choisir la période qui vous
            convient.
          </p>

          <h2 className="font-serif text-2xl text-brown-800 pt-4">
            Printemps (mars – mai)
          </h2>
          <p>
            C&apos;est souvent la <strong>meilleure période</strong>. Les
            températures sont agréables (20–28°C), les journées sont longues et
            le désert est magnifique. Idéal pour les balades et les nuits en
            bivouac.
          </p>

          <h2 className="font-serif text-2xl text-brown-800 pt-4">
            Automne (septembre – novembre)
          </h2>
          <p>
            Très bonne alternative au printemps. La chaleur de l&apos;été
            s&apos;atténue progressivement et les conditions redeviennent
            confortables. Les couchers de soleil sont spectaculaires.
          </p>

          <h2 className="font-serif text-2xl text-brown-800 pt-4">
            Hiver (décembre – février)
          </h2>
          <p>
            Les journées sont douces, mais les nuits peuvent être très froides
            (parfois proches de 0°C). Emportez des vêtements chauds. L&apos;avantage
            : moins de monde et une ambiance plus intimiste.
          </p>

          <h2 className="font-serif text-2xl text-brown-800 pt-4">
            Été (juin – août)
          </h2>
          <p>
            Les températures dépassent souvent les 40°C. Possible, mais
            exigeant. Privilégiez les activités tôt le matin et en fin de
            journée. Hydratez-vous beaucoup.
          </p>

          <h2 className="font-serif text-2xl text-brown-800 pt-4">
            Notre conseil
          </h2>
          <p>
            Pour un premier séjour, visez <strong>mars-avril</strong> ou{" "}
            <strong>octobre-novembre</strong>. Vous profitez des plus belles
            lumières et d&apos;un confort optimal.
          </p>

          <div className="bg-sand-100 border border-gold-500/30 rounded-lg p-6 my-10">
            <p className="font-serif text-lg text-brown-800 mb-2">
              Venez vivre le désert à Merzouga
            </p>
            <p className="text-sm text-muted mb-4">
              Dar Shifa Shanti vous accueille toute l&apos;année, au pied des
              dunes.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-2.5 rounded-full bg-brown-500 text-white text-sm font-medium hover:bg-brown-600 transition-colors"
            >
              Réserver votre séjour
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
