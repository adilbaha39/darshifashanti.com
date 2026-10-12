import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nos Chambres",
  description:
    "Découvrez nos chambres traditionnelles à Merzouga : Blue Room, Green Room, Desert Room et Suite. Confort et authenticité au cœur du désert.",
};

const rooms = [
  {
    name: "Blue Room",
    subtitle: "Chambre Double",
    desc: "Une atmosphère apaisante aux couleurs bleues qui invite à la détente. Idéale pour se ressourcer après une journée dans le désert.",
    guests: 2,
    bed: "1 lit double",
    image: "/images/blue-room.jpg",
    detail: "/images/blue-detail.jpg",
  },
  {
    name: "Green Room",
    subtitle: "Chambre Double",
    desc: "Une ambiance naturelle et chaleureuse avec des touches de vert. Un cocon de sérénité au cœur de Merzouga.",
    guests: 2,
    bed: "1 lit double",
    image: "/images/green-room.jpg",
    detail: "/images/green-detail.jpg",
  },
  {
    name: "Desert Room",
    subtitle: "Chambre Double",
    desc: "L'esprit du Sahara dans chaque détail. Couleurs chaudes et ambiance désertique pour une immersion totale.",
    guests: 2,
    bed: "1 lit double",
    image: "/images/desert-room.jpg",
    detail: "/images/desert-detail.jpg",
  },
  {
    name: "Suite",
    subtitle: "Suite",
    desc: "Un espace généreux alliant confort raffiné et charme marocain. Parfaite pour un séjour d'exception.",
    guests: 2,
    bed: "1 lit double",
    image: "/images/suite.jpg",
    detail: "/images/suite-detail.jpg",
  },
];

export default function ChambresPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[45vh] min-h-[320px] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-rooms.jpg"
            alt="Chambres Dar Shifa Shanti"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-brown-800/55" />
        <div className="relative max-w-6xl mx-auto px-5 text-white">
          <p className="text-xs tracking-[0.25em] uppercase text-gold-400 mb-3 flex items-center gap-3">
            Nos chambres
            <span className="w-10 h-px bg-gold-400" />
          </p>
          <h1 className="font-serif text-4xl md:text-5xl leading-tight mb-3">
            Des chambres au charme marocain
          </h1>
          <p className="text-sand-100/85 max-w-lg text-sm sm:text-base">
            Chaque chambre est une invitation au voyage, alliant confort et
            authenticité dans un cadre traditionnel.
          </p>
        </div>
      </section>

      {/* Rooms list */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-5 space-y-16">
          {rooms.map((room, i) => (
            <article
              key={room.name}
              className={`grid md:grid-cols-2 gap-8 items-center ${
                i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="aspect-[4/3] relative rounded-lg overflow-hidden">
                <Image
                  src={room.image}
                  alt={room.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div>
                <p className="text-xs tracking-[0.15em] uppercase text-brown-500 mb-1">
                  {room.subtitle}
                </p>
                <h2 className="font-serif text-3xl text-brown-800 mb-3">
                  {room.name}
                </h2>
                <p className="text-muted text-sm leading-relaxed mb-5">
                  {room.desc}
                </p>
                <div className="flex flex-wrap gap-5 text-sm text-brown-800/80 mb-6">
                  <span>{room.guests} personnes</span>
                  <span>{room.bed}</span>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-2.5 rounded-full bg-brown-500 text-white text-sm font-medium hover:bg-brown-600 transition-colors"
                >
                  Réserver
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-sand-200/50 border-t border-gold-500/20">
        <div className="max-w-3xl mx-auto px-5 text-center">
          <h2 className="font-serif text-2xl md:text-3xl text-brown-800 mb-4">
            Prêt à réserver votre chambre ?
          </h2>
          <p className="text-muted text-sm mb-6">
            Contactez-nous pour vérifier la disponibilité et organiser votre
            séjour à Merzouga.
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
