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
    path: "/a-propos",
    title: t.about.metaTitle,
    description: t.about.metaDesc,
    image: "/images/hero-about.webp",
  });
}

export default async function AboutPage({
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
        <Image src="/images/hero-about.webp" alt={t.about.heroTitle} fill className="object-cover" priority sizes="100vw" />
        <div className="absolute inset-0 bg-brown-800/50" />
        <div className="relative max-w-6xl mx-auto px-5 text-white">
          <h1 className="font-serif text-4xl md:text-5xl mb-3">{t.about.heroTitle}</h1>
          <p className="text-sand-100/90 max-w-lg">{t.about.heroText}</p>
        </div>
      </section>
      <Breadcrumbs locale={locale} items={[{ name: t.nav.about, path: `/${locale}/a-propos` }]} />
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-5 space-y-16">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="aspect-[4/3] relative rounded-lg overflow-hidden">
              <Image src="/images/philosophy-main.webp" alt={t.about.philosophyTitle} fill className="object-cover" sizes="50vw" />
            </div>
            <div>
              <h2 className="font-serif text-3xl text-brown-800 mb-4">{t.about.philosophyTitle}</h2>
              <p className="text-muted leading-relaxed">{t.about.philosophyText}</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="md:order-2 aspect-[4/3] relative rounded-lg overflow-hidden">
              <Image src="/images/desert-about.webp" alt={t.about.desertTitle} fill className="object-cover" sizes="50vw" />
            </div>
            <div className="md:order-1">
              <h2 className="font-serif text-3xl text-brown-800 mb-4">{t.about.desertTitle}</h2>
              <p className="text-muted leading-relaxed">{t.about.desertText}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
