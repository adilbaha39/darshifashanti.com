import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isValidLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { buildMetadata } from "@/lib/seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import { BUSINESS } from "@/lib/site";

const LOCAL_BLURB: Record<Locale, string> = {
  fr: "Dar Shifa Shanti est une maison d'hôtes à Merzouga, au cœur de la région de l'Erg Chebbi, idéale pour découvrir le désert marocain.",
  en: "Dar Shifa Shanti is a guesthouse in Merzouga, near the Erg Chebbi dunes, offering an authentic base for discovering the Moroccan Sahara.",
  ar: "دار شفاء شانتي دار ضيافة في مرزوكة قرب كثبان إرغ شبي، مناسبة لاكتشاف الصحراء المغربية وتجربة الضيافة المحلية.",
  es: "Dar Shifa Shanti es una casa de huéspedes en Merzouga, cerca de las dunas del Erg Chebbi, una base auténtica para descubrir el Sáhara marroquí.",
};

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
    path: "/contact",
    title: t.contact.metaTitle,
    description: t.contact.metaDesc,
    image: "/images/hero-contact.webp",
  });
}

export default async function ContactPage({
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
      <section className="relative h-[40vh] min-h-[280px] flex items-center">
        <Image src="/images/hero-contact.webp" alt={t.contact.heroTitle} fill className="object-cover" priority sizes="100vw" />
        <div className="absolute inset-0 bg-brown-800/50" />
        <div className="relative max-w-6xl mx-auto px-5 text-white">
          <h1 className="font-serif text-4xl md:text-5xl mb-3">{t.contact.heroTitle}</h1>
          <p className="text-sand-100/90 max-w-lg">{t.contact.heroText}</p>
        </div>
      </section>
      <Breadcrumbs locale={locale} items={[{ name: t.nav.contact, path: `/${locale}/contact` }]} />
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-5 grid md:grid-cols-2 gap-10 items-start">
          <div className="space-y-6">
            <p className="text-muted leading-relaxed">{LOCAL_BLURB[locale]}</p>
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-brown-500 mb-2">{t.contact.phone}</p>
              <a href={`tel:${BUSINESS.phone}`} className="text-lg text-brown-800 hover:text-brown-600">
                {BUSINESS.phoneDisplay}
              </a>
            </div>
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-brown-500 mb-2">{t.contact.location}</p>
              <p className="text-brown-800 mb-2">{t.contact.locationText}</p>
              <a
                href={BUSINESS.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-brown-500 border-b border-gold-500 pb-0.5"
              >
                {t.contact.map}
              </a>
            </div>
            <a
              href={`https://wa.me/${BUSINESS.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex px-6 py-3 rounded-full bg-green-600 text-white text-sm font-medium hover:bg-green-700"
            >
              {t.contact.whatsapp}
            </a>
          </div>
          <div className="aspect-[4/3] relative rounded-lg overflow-hidden">
            <Image src="/images/entrance.webp" alt={t.contact.location} fill className="object-cover" sizes="50vw" />
          </div>
        </div>
      </section>
    </>
  );
}
