import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isValidLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { buildMetadata } from "@/lib/seo";
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
    path: "/experiences",
    title: t.experiences.metaTitle,
    description: t.experiences.metaDesc,
    image: "/images/hero-exp.webp",
  });
}

export default async function ExperiencesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isValidLocale(raw)) notFound();
  const locale = raw as Locale;
  const t = getDictionary(locale);

  const main = [
    { title: t.experiences.breakfast, image: "/images/breakfast.webp" },
    { title: t.experiences.campfire, image: "/images/campfire.webp" },
    { title: t.experiences.spaces, image: "/images/spaces.webp" },
    { title: t.experiences.adventure, image: "/images/desert-adventure.webp" },
  ];
  const gallery = [
    { title: "Tea", image: "/images/detail-tea.webp" },
    { title: "Pastries", image: "/images/detail-pastries.webp" },
    { title: "Salon", image: "/images/detail-salon.webp" },
    { title: "Entrance", image: "/images/detail-entrance.webp" },
    { title: "Dunes", image: "/images/detail-dunes.webp" },
    { title: "Terrace", image: "/images/terrace.webp" },
  ];

  return (
    <>
      <section className="relative h-[45vh] min-h-[320px] flex items-center">
        <Image src="/images/hero-exp.webp" alt={t.experiences.heroTitle} fill className="object-cover" priority sizes="100vw" />
        <div className="absolute inset-0 bg-brown-800/50" />
        <div className="relative max-w-6xl mx-auto px-5 text-white">
          <h1 className="font-serif text-4xl md:text-5xl mb-3">{t.experiences.heroTitle}</h1>
          <p className="text-sand-100/90 max-w-lg">{t.experiences.heroText}</p>
        </div>
      </section>
      <Breadcrumbs locale={locale} items={[{ name: t.nav.experiences, path: `/${locale}/experiences` }]} />
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-5">
          <div className="grid sm:grid-cols-2 gap-6 mb-16">
            {main.map((item) => (
              <div key={item.title} className="rounded-lg overflow-hidden border border-gold-500/20">
                <div className="aspect-[16/10] relative">
                  <Image src={item.image} alt={item.title} fill className="object-cover" sizes="50vw" />
                </div>
                <p className="font-serif text-lg p-4 text-brown-800">{item.title}</p>
              </div>
            ))}
          </div>
          <h2 className="font-serif text-2xl text-brown-800 mb-6">{t.experiences.gallery}</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {gallery.map((g) => (
              <div key={g.image} className="aspect-square relative rounded-lg overflow-hidden">
                <Image src={g.image} alt={g.title} fill className="object-cover" sizes="33vw" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
