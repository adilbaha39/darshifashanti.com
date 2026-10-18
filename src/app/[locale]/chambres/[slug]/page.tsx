import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isValidLocale, locales, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { buildMetadata } from "@/lib/seo";
import { getRoom, isRoomSlug, roomSlugs } from "@/lib/rooms";
import Breadcrumbs from "@/components/Breadcrumbs";
import { SITE_NAME, SITE_URL } from "@/lib/site";

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    roomSlugs.map((slug) => ({ locale, slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale: raw, slug } = await params;
  if (!isValidLocale(raw) || !isRoomSlug(slug)) return {};
  const locale = raw as Locale;
  const room = getRoom(slug)!;
  return buildMetadata({
    locale,
    path: `/chambres/${slug}`,
    title: room.metaTitle[locale],
    description: room.metaDesc[locale],
    image: room.image,
    imageAlt: room.name[locale],
  });
}

export default async function RoomDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: raw, slug } = await params;
  if (!isValidLocale(raw) || !isRoomSlug(slug)) notFound();
  const locale = raw as Locale;
  const room = getRoom(slug);
  if (!room) notFound();
  const t = getDictionary(locale);

  const schema = {
    "@context": "https://schema.org",
    "@type": "HotelRoom",
    name: room.name[locale],
    description: room.desc[locale],
    image: [`${SITE_URL}${room.image}`, `${SITE_URL}${room.detail}`],
    occupancy: {
      "@type": "QuantitativeValue",
      maxValue: room.guests,
    },
    bed: room.bed[locale],
    url: `${SITE_URL}/${locale}/chambres/${slug}`,
    containedInPlace: {
      "@type": "LodgingBusiness",
      name: SITE_NAME,
      url: `${SITE_URL}/${locale}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <section className="relative h-[40vh] min-h-[280px] flex items-end">
        <Image
          src={room.image}
          alt={room.name[locale]}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brown-900/70 to-transparent" />
        <div className="relative max-w-6xl mx-auto px-5 pb-10 text-white w-full">
          <h1 className="font-serif text-4xl md:text-5xl">{room.name[locale]}</h1>
        </div>
      </section>
      <Breadcrumbs
        locale={locale}
        items={[
          { name: t.nav.rooms, path: `/${locale}/chambres` },
          { name: room.name[locale], path: `/${locale}/chambres/${slug}` },
        ]}
      />
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-5 grid md:grid-cols-2 gap-10">
          <div className="grid grid-cols-2 gap-3">
            <div className="aspect-[3/4] relative rounded-lg overflow-hidden col-span-2 sm:col-span-1">
              <Image src={room.image} alt={room.name[locale]} fill className="object-cover" sizes="50vw" />
            </div>
            <div className="aspect-[3/4] relative rounded-lg overflow-hidden col-span-2 sm:col-span-1">
              <Image src={room.detail} alt={room.name[locale]} fill className="object-cover" sizes="50vw" />
            </div>
          </div>
          <div>
            <p className="text-muted leading-relaxed mb-6">{room.desc[locale]}</p>
            <p className="text-sm text-brown-700 mb-1">{t.rooms.guests}</p>
            <p className="text-sm text-brown-700 mb-8">{room.bed[locale]}</p>
            <div className="flex flex-wrap gap-3">
              <Link
                href={`/${locale}/contact`}
                className="inline-flex px-6 py-3 rounded-full bg-brown-500 text-white text-sm font-medium hover:bg-brown-600"
              >
                {t.rooms.book}
              </Link>
              <Link
                href={`/${locale}/chambres`}
                className="inline-flex px-6 py-3 rounded-full border border-brown-500/40 text-brown-700 text-sm font-medium hover:bg-sand-100"
              >
                {t.nav.rooms}
              </Link>
              <Link
                href={`/${locale}/experiences`}
                className="inline-flex px-6 py-3 rounded-full border border-brown-500/40 text-brown-700 text-sm font-medium hover:bg-sand-100"
              >
                {t.nav.experiences}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
