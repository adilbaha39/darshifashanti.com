import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isValidLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { buildMetadata } from "@/lib/seo";
import { rooms } from "@/lib/rooms";
import Breadcrumbs from "@/components/Breadcrumbs";

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
    path: "/chambres",
    title: t.rooms.metaTitle,
    description: t.rooms.metaDesc,
    image: "/images/hero-rooms.webp",
  });
}

export default async function ChambresPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isValidLocale(raw)) notFound();
  const locale = raw as Locale;
  const t = getDictionary(locale);

  return (
    <>
      <section className="relative h-[45vh] min-h-[320px] flex items-center">
        <Image
          src="/images/hero-rooms.webp"
          alt={t.rooms.heroTitle}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-brown-800/50" />
        <div className="relative max-w-6xl mx-auto px-5 text-white">
          <h1 className="font-serif text-4xl md:text-5xl mb-3">{t.rooms.heroTitle}</h1>
          <p className="text-sand-100/90 max-w-lg">{t.rooms.heroText}</p>
        </div>
      </section>
      <Breadcrumbs
        locale={locale}
        items={[{ name: t.nav.rooms, path: `/${locale}/chambres` }]}
      />
      <section className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-5 space-y-16">
          {rooms.map((room) => (
            <article
              key={room.slug}
              className="grid md:grid-cols-2 gap-8 items-center"
            >
              <div className="grid grid-cols-2 gap-3">
                <div className="aspect-[3/4] relative rounded-lg overflow-hidden">
                  <Image
                    src={room.image}
                    alt={room.name[locale]}
                    fill
                    className="object-cover"
                    sizes="40vw"
                  />
                </div>
                <div className="aspect-[3/4] relative rounded-lg overflow-hidden">
                  <Image
                    src={room.detail}
                    alt={room.name[locale]}
                    fill
                    className="object-cover"
                    sizes="40vw"
                  />
                </div>
              </div>
              <div>
                <h2 className="font-serif text-3xl text-brown-800 mb-3">
                  <Link
                    href={`/${locale}/chambres/${room.slug}`}
                    className="hover:text-brown-600"
                  >
                    {room.name[locale]}
                  </Link>
                </h2>
                <p className="text-muted mb-4">{room.desc[locale]}</p>
                <p className="text-sm text-brown-700 mb-1">{t.rooms.guests}</p>
                <p className="text-sm text-brown-700 mb-6">{room.bed[locale]}</p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href={`/${locale}/chambres/${room.slug}`}
                    className="inline-flex px-6 py-3 rounded-full border border-brown-500 text-brown-700 text-sm font-medium hover:bg-brown-50"
                  >
                    {room.name[locale]}
                  </Link>
                  <Link
                    href={`/${locale}/contact`}
                    className="inline-flex px-6 py-3 rounded-full bg-brown-500 text-white text-sm font-medium hover:bg-brown-600"
                  >
                    {t.rooms.book}
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
