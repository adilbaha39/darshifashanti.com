/**
 * Site configuration — confirm domain and local details with the owner.
 * Coordinates and exact street address are marked for verification.
 */
export const SITE_URL = "https://darshifashanti.com";
export const SITE_NAME = "Dar Shifa Shanti";

export const BUSINESS = {
  name: "Dar Shifa Shanti",
  phone: "+212768254033",
  phoneDisplay: "+212 7 68 25 40 33",
  whatsapp: "212768254033",
  mapsUrl: "https://maps.app.goo.gl/Y1AqY7ip7QdJ1oRe8",
  addressLocality: "Merzouga",
  addressRegion: "Drâa-Tafilalet",
  addressCountry: "MA",
  /** Confirm with owner before publishing as exact geo */
  geo: {
    latitude: 31.0801,
    longitude: -4.0134,
    verified: false,
  },
  priceRange: "$$",
} as const;

export const OG_LOCALE: Record<string, string> = {
  fr: "fr_FR",
  en: "en_US",
  ar: "ar_MA",
  es: "es_ES",
};
