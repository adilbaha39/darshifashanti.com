import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isValidLocale, type Locale, locales } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { buildMetadata } from "@/lib/seo";
import {
  getService,
  services,
  WHATSAPP_NUMBER,
  GOOGLE_MAPS_URL,
} from "@/lib/services";
import Breadcrumbs from "@/components/Breadcrumbs";
import { SITE_NAME, SITE_URL } from "@/lib/site";

export function generateStaticParams() {
  const params: { locale: string; slug: string }[] = [];
  for (const locale of locales) {
    for (const s of services) {
      params.push({ locale, slug: s.slug });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale: raw, slug } = await params;
  if (!isValidLocale(raw)) return {};
  const locale = raw as Locale;
  const service = getService(slug);
  if (!service) return {};
  return buildMetadata({
    locale,
    path: `/experiences/${slug}`,
    title: service.metaTitle[locale],
    description: service.metaDescription[locale],
    image: service.image,
    imageAlt: service.title[locale],
  });
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: raw, slug } = await params;
  if (!isValidLocale(raw)) notFound();
  const locale = raw as Locale;
  const service = getService(slug);
  if (!service) notFound();
  const t = getDictionary(locale);
  const sections = service.sections[locale];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title[locale],
    description: service.metaDescription[locale],
    provider: {
      "@type": "LodgingBusiness",
      name: SITE_NAME,
      url: SITE_URL,
    },
    areaServed: "Merzouga, Morocco",
    url: `${SITE_URL}/${locale}/experiences/${slug}`,
  };

  return (
    <article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="relative h-[45vh] min-h-[320px] flex items-end">
        <div className="absolute inset-0">
          <Image
            src={service.image}
            alt={service.title[locale]}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-brown-900/80 via-brown-800/40 to-transparent" />
        <div className="relative max-w-3xl mx-auto px-5 pb-10 text-white w-full">
          <p className="text-xs tracking-[0.2em] uppercase text-gold-400 mb-3">
            {service.kicker[locale]}
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl leading-tight">
            {service.title[locale]}
          </h1>
        </div>
      </section>

      <Breadcrumbs
        locale={locale}
        items={[
          { name: t.nav.experiences, path: `/${locale}/experiences` },
          {
            name: service.title[locale],
            path: `/${locale}/experiences/${slug}`,
          },
        ]}
      />

      <div className="max-w-3xl mx-auto px-5 py-10 md:py-14">
        <p className="text-lg text-brown-700/90 leading-relaxed mb-8">
          {service.excerpt[locale]}
        </p>

        <div className="space-y-5 text-brown-800/90 leading-relaxed">
          {sections.map((section, i) => {
            if (section.type === "h2") {
              return (
                <h2
                  key={i}
                  className="font-serif text-2xl text-brown-800 pt-4"
                >
                  {section.text}
                </h2>
              );
            }
            if (section.type === "ul") {
              return (
                <ul key={i} className="list-disc ps-5 space-y-2">
                  {section.items?.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              );
            }
            return <p key={i}>{section.text}</p>;
          })}
        </div>

        <div className="bg-sand-100 border border-gold-500/30 rounded-lg p-6 my-10">
          <p className="font-serif text-lg text-brown-800 mb-2">
            {service.ctaTitle[locale]}
          </p>
          <p className="text-sm text-brown-700/80 mb-4">
            {service.ctaText[locale]}
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-2.5 rounded-full bg-brown-500 text-white text-sm font-medium hover:bg-brown-600 transition-colors"
            >
              WhatsApp
            </a>
            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-2.5 rounded-full border border-brown-500/40 text-brown-700 text-sm font-medium hover:bg-white"
            >
              Google Maps
            </a>
            <Link
              href={`/${locale}/contact`}
              className="inline-flex items-center px-6 py-2.5 rounded-full border border-brown-500/40 text-brown-700 text-sm font-medium hover:bg-white"
            >
              {t.nav.contact}
            </Link>
          </div>
        </div>

        <Link
          href={`/${locale}/experiences`}
          className="text-sm font-medium text-brown-500 hover:text-brown-600"
        >
          ← {t.nav.experiences}
        </Link>
      </div>
    </article>
  );
}
