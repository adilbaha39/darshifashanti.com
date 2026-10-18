import Link from "next/link";
import type { Locale } from "@/i18n/config";
import { SITE_URL } from "@/lib/site";

export type Crumb = { name: string; path: string };

export default function Breadcrumbs({
  locale,
  items,
}: {
  locale: Locale;
  items: Crumb[];
}) {
  const all: Crumb[] = [{ name: "Dar Shifa Shanti", path: `/${locale}` }, ...items];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: all.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };

  return (
    <nav aria-label="Breadcrumb" className="max-w-6xl mx-auto px-5 pt-6 pb-2">
      <ol className="flex flex-wrap items-center gap-1.5 text-xs text-brown-600/80">
        {all.map((item, i) => (
          <li key={item.path} className="flex items-center gap-1.5">
            {i > 0 && <span aria-hidden className="text-gold-500">/</span>}
            {i === all.length - 1 ? (
              <span className="text-brown-800 font-medium" aria-current="page">
                {item.name}
              </span>
            ) : (
              <Link href={item.path} className="hover:text-brown-800 underline-offset-2 hover:underline">
                {item.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </nav>
  );
}
