import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isValidLocale, type Locale } from "@/i18n/config";
import { getArticle, articles } from "@/lib/blog-content";
import { getDictionary } from "@/i18n/get-dictionary";
import { buildMetadata } from "@/lib/seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import { SITE_NAME, SITE_URL } from "@/lib/site";

const SLUG = "meilleure-periode-erg-chebbi";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isValidLocale(raw)) return {};
  const locale = raw as Locale;
  const article = getArticle(SLUG);
  if (!article) return {};
  return buildMetadata({
    locale,
    path: `/blog/${SLUG}`,
    title: article.title[locale],
    description: article.metaDescription[locale],
    image: article.image,
    imageAlt: article.title[locale],
    type: "article",
  });
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isValidLocale(raw)) notFound();
  const locale = raw as Locale;
  const article = getArticle(SLUG);
  if (!article) notFound();
  const t = getDictionary(locale);
  const sections = article.sections[locale];
  const related = articles.filter((a) => a.slug !== SLUG).slice(0, 2);

  const blogPosting = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title[locale],
    description: article.metaDescription[locale],
    image: `${SITE_URL}${article.image}`,
    datePublished: article.date,
    dateModified: article.date,
    author: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/images/hero.webp`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/${locale}/blog/${SLUG}`,
    },
    inLanguage: locale,
  };

  return (
    <article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPosting) }}
      />
      <section className="relative h-[45vh] min-h-[320px] flex items-end">
        <div className="absolute inset-0">
          <Image
            src={article.image}
            alt={article.title[locale]}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-brown-900/80 via-brown-800/40 to-transparent" />
        <div className="relative max-w-3xl mx-auto px-5 pb-10 text-white w-full">
          <p className="text-xs tracking-[0.2em] uppercase text-gold-400 mb-3">
            {article.kicker[locale]}
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl leading-tight">
            {article.title[locale]}
          </h1>
        </div>
      </section>

      <Breadcrumbs
        locale={locale}
        items={[
          { name: t.nav.blog, path: `/${locale}/blog` },
          { name: article.title[locale], path: `/${locale}/blog/${SLUG}` },
        ]}
      />

      <div className="max-w-3xl mx-auto px-5 py-10 md:py-14">
        <p className="text-muted text-sm mb-8">
          {article.dateLabel[locale]} · {article.readingTime[locale]}
        </p>

        <div className="space-y-6 text-[15px] leading-relaxed text-brown-800/90">
          {sections.map((section, i) => {
            if (section.type === "h2") {
              return (
                <h2 key={i} className="font-serif text-2xl text-brown-800 pt-4">
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

          <div className="bg-sand-100 border border-gold-500/30 rounded-lg p-6 my-10">
            <p className="font-serif text-lg text-brown-800 mb-2">
              {article.ctaTitle[locale]}
            </p>
            <p className="text-sm text-muted mb-4">{article.ctaText[locale]}</p>
            <div className="flex flex-wrap gap-3">
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center px-6 py-2.5 rounded-full bg-brown-500 text-white text-sm font-medium hover:bg-brown-600 transition-colors"
              >
                {article.ctaButton[locale]}
              </Link>
              <Link
                href={`/${locale}/chambres`}
                className="inline-flex items-center px-6 py-2.5 rounded-full border border-brown-500/40 text-brown-700 text-sm font-medium hover:bg-white"
              >
                {t.nav.rooms}
              </Link>
            </div>
          </div>

          {related.length > 0 && (
            <div className="pt-6 border-t border-gold-500/20">
              <h2 className="font-serif text-xl text-brown-800 mb-4">{t.nav.blog}</h2>
              <ul className="space-y-2">
                {related.map((r) => (
                  <li key={r.slug}>
                    <Link
                      href={`/${locale}/blog/${r.slug}`}
                      className="text-sm text-brown-600 hover:text-brown-800 border-b border-gold-500/50"
                    >
                      {r.title[locale]}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="mt-10 pt-8 border-t border-gold-500/20">
          <Link
            href={`/${locale}/blog`}
            className="text-sm font-medium text-brown-500 hover:text-brown-600"
          >
            {article.backToBlog[locale]}
          </Link>
        </div>
      </div>
    </article>
  );
}
