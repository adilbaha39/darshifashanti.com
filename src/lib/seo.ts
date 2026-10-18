import type { Metadata } from "next";
import { defaultLocale, locales, type Locale } from "@/i18n/config";
import { OG_LOCALE, SITE_NAME, SITE_URL } from "@/lib/site";

type BuildSeoInput = {
  locale: Locale;
  path?: string;
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
  type?: "website" | "article";
  noIndex?: boolean;
};

export function localizedPath(locale: Locale, path = ""): string {
  const clean = path.startsWith("/") ? path : path ? `/${path}` : "";
  return `/${locale}${clean}`;
}

export function absoluteUrl(locale: Locale, path = ""): string {
  return `${SITE_URL}${localizedPath(locale, path)}`;
}

export function languageAlternates(path = ""): Record<string, string> {
  const languages: Record<string, string> = {};
  for (const l of locales) {
    languages[l] = absoluteUrl(l, path);
  }
  languages["x-default"] = absoluteUrl(defaultLocale, path);
  return languages;
}

export function buildMetadata({
  locale,
  path = "",
  title,
  description,
  image = "/images/hero.webp",
  imageAlt = SITE_NAME,
  type = "website",
  noIndex = false,
}: BuildSeoInput): Metadata {
  const url = absoluteUrl(locale, path);
  const imageUrl = image.startsWith("http") ? image : `${SITE_URL}${image}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: languageAlternates(path),
    },
    openGraph: {
      type,
      locale: OG_LOCALE[locale] ?? "fr_FR",
      url,
      siteName: SITE_NAME,
      title,
      description,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
          },
        },
  };
}
