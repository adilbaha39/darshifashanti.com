import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isValidLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { buildMetadata } from "@/lib/seo";
import { rooms as roomsData } from "@/lib/rooms";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isValidLocale(raw)) return {};
  const locale = raw as Locale;
  const t = getDictionary(locale);
  return buildMetadata({
    locale,
    path: "",
    title: t.meta.title,
    description: t.meta.description,
    image: "/images/hero.webp",
  });
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isValidLocale(raw)) notFound();
  const locale = raw as Locale;
  const t = getDictionary(locale);

  const roomCards = roomsData.map((r) => ({
    slug: r.slug,
    name: r.name[locale],
    desc: r.desc[locale],
    image: r.image,
  }));

  const experiences = [
    { title: t.experiences.breakfast, image: "/images/breakfast.webp" },
    { title: t.experiences.campfire, image: "/images/campfire.webp" },
    { title: t.experiences.spaces, image: "/images/spaces.webp" },
  ];

  return (
    <>
      <section className="relative h-[70vh] min-h-[480px] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/hero.webp"
            alt={t.meta.title}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-brown-800/70 via-brown-800/40 to-transparent" />
        <div className="relative max-w-6xl mx-auto px-5 text-white">
          <p className="text-xs tracking-[0.25em] uppercase text-gold-400 mb-4 flex items-center gap-3">
            {t.home.heroKicker}
            <span className="w-10 h-px bg-gold-400" />
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl leading-tight mb-5 max-w-xl">
            {t.home.heroTitle1}
            <br />
            {t.home.heroTitle2}
          </h1>
          <p className="text-sand-100/90 text-base sm:text-lg max-w-md mb-8 leading-relaxed">
            {t.home.heroText}
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href={`/${locale}/contact`}
              className="inline-flex items-center px-7 py-3.5 rounded-full bg-brown-500 text-white text-sm font-medium hover:bg-brown-600 transition-colors"
            >
              {t.home.ctaBook}
            </Link>
            <Link
              href={`/${locale}/chambres`}
              className="inline-flex items-center px-7 py-3.5 rounded-full border border-white/60 text-white text-sm font-medium hover:bg-white/10 transition-colors"
            >
              {t.home.ctaRooms}
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-5">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-brown-500 mb-2 flex items-center gap-3">
                {t.home.roomsKicker}
                <span className="w-8 h-px bg-gold-500" />
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-brown-800">
                {t.home.roomsTitle}
              </h2>
            </div>
            <Link
              href={`/${locale}/chambres`}
              className="text-sm font-medium text-brown-500 border-b border-gold-500 pb-0.5 self-start sm:self-auto hover:text-brown-600"
            >
              {t.home.roomsAll}
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {roomCards.map((room) => (
              <Link
                key={room.slug}
                href={`/${locale}/chambres/${room.slug}`}
                className="bg-sand-50 border border-gold-500/20 rounded-lg overflow-hidden group"
              >
                <div className="aspect-[3/4] relative">
                  <Image
                    src={room.image}
                    alt={room.name}
                    fill
                    className="object-cover group-hover:scale-[1.02] transition-transform"
                    sizes="(max-width: 640px) 100vw, 25vw"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-serif text-lg text-brown-800 mb-1">{room.name}</h3>
                  <p className="text-sm text-muted line-clamp-2">{room.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-sand-100/50">
        <div className="max-w-6xl mx-auto px-5">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-brown-500 mb-2 flex items-center gap-3">
                {t.home.expKicker}
                <span className="w-8 h-px bg-gold-500" />
              </p>
              <h2 className="font-serif text-3xl text-brown-800 mb-4">{t.home.expTitle}</h2>
              <p className="text-muted text-sm leading-relaxed mb-5">{t.home.expText}</p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href={`/${locale}/experiences`}
                  className="text-sm font-medium text-brown-500 border-b border-gold-500 pb-0.5 hover:text-brown-600"
                >
                  {t.home.expAll}
                </Link>
                <Link
                  href={`/${locale}/blog`}
                  className="text-sm font-medium text-brown-500 border-b border-gold-500 pb-0.5 hover:text-brown-600"
                >
                  {t.nav.blog} →
                </Link>
              </div>
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
                  <p className="font-serif text-sm py-3 px-2 text-brown-800">{exp.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-5">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="aspect-[4/3] relative rounded-lg overflow-hidden">
              <Image
                src="/images/why.webp"
                alt={t.home.whyTitle}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-brown-500 mb-2 flex items-center gap-3">
                {t.home.whyKicker}
                <span className="w-8 h-px bg-gold-500" />
              </p>
              <h2 className="font-serif text-3xl text-brown-800 mb-5">{t.home.whyTitle}</h2>
              <p className="text-muted text-sm leading-relaxed mb-6">{t.home.whyText}</p>
              <ul className="space-y-3 text-sm mb-6">
                {t.home.whyItems.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-gold-500 shrink-0" />
                    <span className="text-brown-800/90">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={`/${locale}/a-propos`}
                className="text-sm font-medium text-brown-500 border-b border-gold-500 pb-0.5 hover:text-brown-600"
              >
                {t.nav.about} →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-brown-700 text-white">
        <div className="max-w-3xl mx-auto px-5 text-center">
          <h2 className="font-serif text-3xl md:text-4xl mb-4">{t.home.ctaTitle}</h2>
          <p className="text-sand-100/80 mb-8 max-w-lg mx-auto">{t.home.ctaText}</p>
          <Link
            href={`/${locale}/contact`}
            className="inline-flex items-center px-8 py-3.5 rounded-full bg-gold-500 text-brown-800 text-sm font-semibold hover:bg-gold-400 transition-colors"
          >
            {t.home.ctaContact}
          </Link>
        </div>
      </section>
    </>
  );
}
