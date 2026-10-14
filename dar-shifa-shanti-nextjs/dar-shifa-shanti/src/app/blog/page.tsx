import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { posts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Conseils, guides et inspirations pour visiter Merzouga, l'Erg Chebbi et vivre le désert marocain. Articles pratiques pour préparer votre séjour.",
  openGraph: {
    title: "Blog — Dar Shifa Shanti",
    description:
      "Guides et conseils pour découvrir Merzouga et le Sahara marocain.",
  },
};

export default function BlogPage() {
  return (
    <>
      <section className="relative h-[40vh] min-h-[280px] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/desert-about.webp"
            alt="Blog Dar Shifa Shanti"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-brown-800/55" />
        <div className="relative max-w-6xl mx-auto px-5 text-white">
          <p className="text-xs tracking-[0.25em] uppercase text-gold-400 mb-3 flex items-center gap-3">
            Blog
            <span className="w-10 h-px bg-gold-400" />
          </p>
          <h1 className="font-serif text-4xl md:text-5xl leading-tight mb-3">
            Guides & inspirations
          </h1>
          <p className="text-sand-100/85 max-w-lg text-sm sm:text-base">
            Conseils pratiques et récits pour préparer votre séjour à Merzouga
            et découvrir le désert autrement.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-5">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="bg-sand-50 border border-gold-500/30 rounded-lg overflow-hidden hover:-translate-y-1 transition-transform duration-300"
              >
                <Link href={`/blog/${post.slug}`} className="block">
                  <div className="aspect-[16/10] relative">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-3 text-[11px] text-muted mb-2">
                      <time dateTime={post.date}>
                        {post.dateLabel}
                      </time>
                      <span>·</span>
                      <span>{post.readingTime}</span>
                    </div>
                    <h2 className="font-serif text-xl text-brown-800 mb-2 leading-snug">
                      {post.title}
                    </h2>
                    <p className="text-sm text-muted leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                    <span className="inline-block mt-4 text-sm font-medium text-brown-500 border-b border-gold-500 pb-0.5">
                      Lire l&apos;article →
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
