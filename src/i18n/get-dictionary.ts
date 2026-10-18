import type { Locale } from "./config";
import { fr } from "@/messages/fr";
import { en } from "@/messages/en";
import { ar } from "@/messages/ar";
import { es } from "@/messages/es";

const dictionaries = { fr, en, ar, es };

export type Dictionary = typeof fr;

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries.fr;
}
