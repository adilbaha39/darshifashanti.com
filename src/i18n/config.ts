export const locales = ["fr", "en", "ar", "es"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "fr";

export const localeNames: Record<Locale, string> = {
  fr: "Français",
  en: "English",
  ar: "العربية",
  es: "Español",
};

export const localeDir: Record<Locale, "ltr" | "rtl"> = {
  fr: "ltr",
  en: "ltr",
  ar: "rtl",
  es: "ltr",
};

export function isValidLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}
