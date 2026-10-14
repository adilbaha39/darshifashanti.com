import Link from "next/link";
import Image from "next/image";

const rooms = [
  {
    name: "Blue Room",
    desc: "Atmosphère apaisante aux teintes bleues",
    guests: 2,
    bed: "1 lit double",
    image: "/images/blue-room.webp",
  },
  {
    name: "Green Room",
    desc: "Ambiance naturelle et chaleureuse",
    guests: 2,
    bed: "1 lit double",
    image: "/images/green-room.webp",
  },
  {
    name: "Desert Room",
    desc: "Esprit saharien et couleurs chaudes",
    guests: 2,
    bed: "1 lit double",
    image: "/images/desert-room.webp",
  },
  {
    name: "Suite",
    desc: "Espace généreux et confort raffiné",
    guests: 2,
    bed: "1 lit double",
    image: "/images/suite.webp",
  },
];

const experiences = [
  {
    title: "Petit-déjeuner traditionnel",
    image: "/images/breakfast.webp",
  },
  {
    title: "Soirées sous les étoiles",
    image: "/images/campfire.webp",
  },
  {
    title: "Espaces traditionnels",
    image: "/images/spaces.webp",
  },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative h-[70vh] min-h-[480px] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/hero.webp"
            alt="Dar Shifa Shanti – Maison d'hôtes à Merzouga"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-brown-800/70 via-brown-800/40 to-transparent" />

        <div className="relative max-w-6xl mx-auto px-5 text-white">
          <p className="text-xs tracking-[0.25em] uppercase text-gold-400 mb-4 flex items-center gap-3">
            Dar Shifa Shanti
            <span className="w-10 h-px bg-gold-400" />
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl leading-tight mb-5 max-w-xl">
            L&apos;âme du désert
            <br />
            vous attend
          </h1>
          <p className="text-sand-100/90 text-base sm:text-lg max-w-md mb-8 leading-relaxed">
            Maison d&apos;hôtes authentique à Merzouga, au pied des dunes
            majestueuses de l&apos;Erg Chebbi.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center px-7 py-3.5 rounded-full bg-brown-500 text-white text-sm font-medium hover:bg-brown-600 transition-colors"
            >
              Réserver votre séjour
            </Link>
            <Link
              href="/chambres"
              className="inline-flex items-center px-7 py-3.5 rounded-full border border-white/60 text-white text-sm font-medium hover:bg-white/10 transition-colors"
            >
              Découvrir les chambres
            </Link>
          </div>
        </div>
      </section>

      {/* ROOMS PREVIEW */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-5">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-brown-500 mb-2 flex items-center gap-3">
                Nos chambres
                <span className="w-8 h-px bg-gold-500" />
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-brown-800">
                Chambres uniques, séjour authentique
              </h2>
            </div>
            <Link
              href="/chambres"
              className="text-sm font-medium text-brown-500 border-b border-gold-500 pb-0.5 self-start sm:self-auto hover:text-brown-600"
            >
              Voir toutes les chambres →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {rooms.map((room) => (
              <article
                key={room.name}
                className="bg-sand-50 border border-gold-500/40 rounded-t-[100px] rounded-b-lg overflow-hidden hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="aspect-[4/5] relative">
                  <Image
                    src={room.image}
                    alt={room.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 25vw"
                  />
                </div>
                <div className="p-4 pt-5">
                  <h3 className="font-serif text-lg text-brown-800 mb-1">
                    {room.name}
                  </h3>
                  <p className="text-xs text-muted mb-3">{room.desc}</p>
                  <div className="flex gap-4 text-[11px] text-muted">
                    <span>{room.guests} personnes</span>
                    <span>{room.bed}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCES */}
      <section className="py-14 bg-sand-200/50 border-y border-gold-500/20">
        <div className="max-w-6xl mx-auto px-5">
          <div className="grid md:grid-cols-[280px_1fr] gap-8 items-center">
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-brown-500 mb-2 flex items-center gap-3">
                Expériences
                <span className="w-8 h-px bg-gold-500" />
              </p>
              <h2 className="font-serif text-2xl md:text-3xl text-brown-800 mb-4">
                Plus qu&apos;un simple séjour
              </h2>
              <p className="text-sm text-muted leading-relaxed mb-5">
                Du petit-déjeuner marocain aux soirées sous les étoiles, chaque
                moment est pensé pour vous plonger dans l&apos;âme du Sahara.
              </p>
              <Link
                href="/experiences"
                className="text-sm font-medium text-brown-500 border-b border-gold-500 pb-0.5 hover:text-brown-600"
              >
                Explorer les expériences →
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {experiences.map((exp) => (
                <div
                  key={exp.title}
                  className="bg-sand-50 border border-gold-500/30 rounded-lg overflow-hidden text-center"
                >
                  <div className="aspect-[4/3] relative">
                    <Image
                      src={exp.image}
                      alt={exp.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, 30vw"
                    />
                  </div>
                  <p className="font-serif text-sm py-3 px-2 text-brown-800">
                    {exp.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-5">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="aspect-[4/3] relative rounded-lg overflow-hidden">
              <Image
                src="/images/why.webp"
                alt="Pourquoi choisir Dar Shifa Shanti"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-brown-500 mb-2 flex items-center gap-3">
                Pourquoi nous choisir
                <span className="w-8 h-px bg-gold-500" />
              </p>
              <h2 className="font-serif text-3xl text-brown-800 mb-5">
                Une expérience saharienne authentique
              </h2>
              <p className="text-muted text-sm leading-relaxed mb-6">
                À Dar Shifa Shanti, vous n&apos;êtes pas seulement un client —
                vous faites partie d&apos;une expérience marocaine unique.
                Architecture traditionnelle, hospitalité chaleureuse et beauté
                intemporelle du désert se rencontrent pour créer des moments
                inoubliables.
              </p>
              <ul className="space-y-3 text-sm">
                {[
                  "Emplacement privilégié près des dunes de l'Erg Chebbi",
                  "Hospitalité berbère authentique",
                  "Chambres décorées avec soin",
                  "Expériences désertiques sur mesure",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-gold-500 shrink-0" />
                    <span className="text-brown-800/90">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brown-700 text-white">
        <div className="max-w-3xl mx-auto px-5 text-center">
          <h2 className="font-serif text-3xl md:text-4xl mb-4">
            Prêt pour l&apos;aventure ?
          </h2>
          <p className="text-sand-100/80 mb-8 max-w-lg mx-auto">
            Réservez votre séjour à Merzouga et laissez-vous porter par la magie
            du Sahara.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-3.5 rounded-full bg-gold-500 text-brown-800 text-sm font-semibold hover:bg-gold-400 transition-colors"
          >
            Nous contacter
          </Link>
        </div>
      </section>
    </>
  );
}
