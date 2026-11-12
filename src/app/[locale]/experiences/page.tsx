import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isValidLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { buildMetadata } from "@/lib/seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import { getServicesForLocale } from "@/lib/services";

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
  const serviceList = getServicesForLocale(locale);

  const main = [
    { title: t.experiences.breakfast, image: "/images/breakfast.webp" },
    { title: t.experiences.campfire, image: "/images/campfire.webp" },
    { title: t.experiences.spaces, image: "/images/spaces.webp" },
    { title: t.experiences.adventure, image: "/images/desert-adventure.webp" },
  ];

  return (
    <>
      <section className="relative h-[45vh] min-h-[320px] flex items-center">
        <Image
          src="/images/hero-exp.webp"
          alt={t.experiences.heroTitle}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-brown-800/50" />
        <div className="relative max-w-6xl mx-auto px-5 text-white">
          <h1 className="font-serif text-4xl md:text-5xl mb-3">
            {t.experiences.heroTitle}
          </h1>
          <p className="text-sand-100/90 max-w-lg">{t.experiences.heroText}</p>
        </div>
      </section>
      <Breadcrumbs
        locale={locale}
        items={[
          { name: t.nav.experiences, path: `/${locale}/experiences` },
        ]}
      />

      {serviceList.length > 0 && (
        <section className="py-12 border-b border-gold-500/15">
          <div className="max-w-6xl mx-auto px-5">
            <p className="text-xs tracking-[0.2em] uppercase text-brown-500 mb-2">
              Dar Shifa Shanti
            </p>
            <h2 className="font-serif text-2xl md:text-3xl text-brown-800 mb-8">
              {locale === "fr"
                ? "Activités dans le désert"
                : locale === "ar"
                  ? "أنشطة في الصحراء"
                  : locale === "es"
                    ? "Actividades en el desierto"
                    : "Desert activities"}
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {serviceList.map((s) => (
                <Link
                  key={s.slug}
                  href={`/${locale}/experiences/${s.slug}`}
                  className="group rounded-lg overflow-hidden border border-gold-500/20 bg-sand-50 hover:border-gold-500/40 transition-colors"
                >
                  <div className="aspect-[16/10] relative">
                    <Image
                      src={s.image}
                      alt={s.title}
                      fill
                      className="object-cover group-hover:scale-[1.02] transition-transform"
                      sizes="(max-width: 640px) 100vw, 50vw"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-serif text-xl text-brown-800 mb-2">
                      {s.title}
                    </h3>
                    <p className="text-sm text-brown-700/80 leading-relaxed line-clamp-3">
                      {s.excerpt}
                    </p>
                    <span className="inline-block mt-3 text-sm font-medium text-brown-500 border-b border-gold-500">
                      {locale === "fr"
                        ? "Voir l'expérience →"
                        : locale === "ar"
                          ? "عرض التجربة ←"
                          : locale === "es"
                            ? "Ver experiencia →"
                            : "View experience →"}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-12">
        <div className="max-w-6xl mx-auto px-5">
          <h2 className="font-serif text-2xl text-brown-800 mb-6">
            {t.experiences.gallery}
          </h2>
          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            {main.map((item) => (
              <div
                key={item.title}
                className="rounded-lg overflow-hidden border border-gold-500/20"
              >
                <div className="aspect-[16/10] relative">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="50vw"
                  />
                </div>
                <p className="font-serif text-lg p-4 text-brown-800">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
