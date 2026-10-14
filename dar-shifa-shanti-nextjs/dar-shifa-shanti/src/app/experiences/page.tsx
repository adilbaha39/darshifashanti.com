import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Expériences",
  description:
    "Vivez des expériences uniques à Merzouga : dîners sous les étoiles, balades à dos de chameau, moments authentiques dans le désert.",
};

const experiences = [
  {
    title: "Petit-déjeuner traditionnel",
    desc: "Commencez la journée avec un petit-déjeuner marocain maison : pain frais, miel du désert, fromage local, œufs et thé à la menthe.",
    image: "/images/breakfast.webp",
  },
  {
    title: "Soirées sous les étoiles",
    desc: "Partagez un dîner traditionnel autour du feu, accompagné de musique berbère et d'histoires du Sahara sous un ciel étoilé incomparable.",
    image: "/images/campfire.webp",
  },
  {
    title: "Espaces de détente",
    desc: "Profitez de nos terrasses, salons traditionnels et coins ombragés pour vous reposer entre deux aventures dans les dunes.",
    image: "/images/spaces.webp",
  },
  {
    title: "Aventures dans le désert",
    desc: "Excursions à dos de chameau, levers et couchers de soleil sur l'Erg Chebbi, et exploration des dunes dorées.",
    image: "/images/desert-adventure.webp",
  },
];

const details = [
  { title: "Thé à la menthe", image: "/images/detail-tea.webp" },
  { title: "Pâtisseries", image: "/images/detail-pastries.webp" },
  { title: "Salon", image: "/images/detail-salon.webp" },
  { title: "Entrée", image: "/images/detail-entrance.webp" },
  { title: "Dunes", image: "/images/detail-dunes.webp" },
  { title: "Terrasse", image: "/images/terrace.webp" },
];

export default function ExperiencesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[45vh] min-h-[320px] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-exp.webp"
            alt="Expériences au désert"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-brown-800/55" />
        <div className="relative max-w-6xl mx-auto px-5 text-white">
          <p className="text-xs tracking-[0.25em] uppercase text-gold-400 mb-3 flex items-center gap-3">
            Expériences
            <span className="w-10 h-px bg-gold-400" />
          </p>
          <h1 className="font-serif text-4xl md:text-5xl leading-tight mb-3">
            Vivre le Sahara autrement
          </h1>
          <p className="text-sand-100/85 max-w-lg text-sm sm:text-base">
            Au-delà de l&apos;hébergement, des moments authentiques qui
            resteront gravés dans votre mémoire.
          </p>
        </div>
      </section>

      {/* Main experiences */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-5">
          <div className="grid sm:grid-cols-2 gap-8">
            {experiences.map((exp) => (
              <article
                key={exp.title}
                className="bg-sand-50 border border-gold-500/30 rounded-lg overflow-hidden"
              >
                <div className="aspect-[16/10] relative">
                  <Image
                    src={exp.image}
                    alt={exp.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                </div>
                <div className="p-5">
                  <h2 className="font-serif text-xl text-brown-800 mb-2">
                    {exp.title}
                  </h2>
                  <p className="text-sm text-muted leading-relaxed">{exp.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Details gallery */}
      <section className="py-14 bg-sand-200/40 border-y border-gold-500/20">
        <div className="max-w-6xl mx-auto px-5">
          <p className="text-xs tracking-[0.2em] uppercase text-brown-500 mb-2 flex items-center gap-3">
            Ambiances
            <span className="w-8 h-px bg-gold-500" />
          </p>
          <h2 className="font-serif text-2xl md:text-3xl text-brown-800 mb-8">
            Les détails qui font la différence
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {details.map((d) => (
              <div
                key={d.title}
                className="aspect-square relative rounded-lg overflow-hidden"
              >
                <Image
                  src={d.image}
                  alt={d.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14">
        <div className="max-w-3xl mx-auto px-5 text-center">
          <h2 className="font-serif text-2xl md:text-3xl text-brown-800 mb-4">
            Vivez l&apos;expérience Dar Shifa Shanti
          </h2>
          <p className="text-muted text-sm mb-6">
            Contactez-nous pour organiser votre séjour et vos activités dans le
            désert.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-7 py-3 rounded-full bg-brown-500 text-white text-sm font-medium hover:bg-brown-600 transition-colors"
          >
            Réserver maintenant
          </Link>
        </div>
      </section>
    </>
  );
}
