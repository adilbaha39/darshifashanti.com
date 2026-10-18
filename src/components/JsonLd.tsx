import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { BUSINESS, SITE_NAME, SITE_URL } from "@/lib/site";

export default function JsonLd({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);

  const lodging: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    name: BUSINESS.name,
    description: t.meta.description,
    url: `${SITE_URL}/${locale}`,
    telephone: BUSINESS.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: BUSINESS.addressLocality,
      addressRegion: BUSINESS.addressRegion,
      addressCountry: BUSINESS.addressCountry,
    },
    image: [
      `${SITE_URL}/images/hero.webp`,
      `${SITE_URL}/images/blue-room.webp`,
      `${SITE_URL}/images/desert-room.webp`,
    ],
    priceRange: BUSINESS.priceRange,
    areaServed: {
      "@type": "Place",
      name: "Merzouga, Erg Chebbi, Morocco",
    },
    inLanguage: locale,
  };

  // Only include geo if marked verified — currently false, so omit exact coords
  if (BUSINESS.geo.verified) {
    lodging.geo = {
      "@type": "GeoCoordinates",
      latitude: BUSINESS.geo.latitude,
      longitude: BUSINESS.geo.longitude,
    };
  }

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    inLanguage: ["fr", "en", "ar", "es"],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(lodging) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
    </>
  );
}
