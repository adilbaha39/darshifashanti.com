import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isValidLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { getPostsForLocale } from "@/lib/blog-content";
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
    path: "/blog",
    title: t.blog.metaTitle,
    description: t.blog.metaDesc,
    image: "/images/desert-about.webp",
  });
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isValidLocale(raw)) notFound();
  const locale = raw as Locale;
  const t = getDictionary(locale);
  const posts = getPostsForLocale(locale);

  return (
    <>
      <section className="relative h-[40vh] min-h-[280px] flex items-center">
        <Image
          src="/images/desert-about.webp"
          alt={t.blog.heroTitle}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-brown-800/50" />
        <div className="relative max-w-6xl mx-auto px-5 text-white">
          <h1 className="font-serif text-4xl md:text-5xl mb-3">{t.blog.heroTitle}</h1>
          <p className="text-sand-100/90 max-w-lg">{t.blog.heroText}</p>
        </div>
      </section>
      <Breadcrumbs locale={locale} items={[{ name: t.nav.blog, path: `/${locale}/blog` }]} />
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-5 grid md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="border border-gold-500/20 rounded-lg overflow-hidden bg-sand-50"
            >
              <div className="aspect-[16/10] relative">
                <Image src={post.image} alt={post.title} fill className="object-cover" sizes="33vw" />
              </div>
              <div className="p-5">
                <time className="text-xs text-muted" dateTime={post.date}>
                  {post.dateLabel}
                </time>
                <h2 className="font-serif text-xl text-brown-800 mt-2 mb-2">{post.title}</h2>
                <p className="text-sm text-muted mb-4 line-clamp-3">{post.excerpt}</p>
                <Link
                  href={`/${locale}/blog/${post.slug}`}
                  className="text-sm font-medium text-brown-500 border-b border-gold-500 pb-0.5"
                >
                  {t.blog.readMore}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
