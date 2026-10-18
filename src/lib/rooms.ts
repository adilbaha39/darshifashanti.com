import type { Locale } from "@/i18n/config";

export const roomSlugs = ["blue-room", "green-room", "desert-room", "suite"] as const;
export type RoomSlug = (typeof roomSlugs)[number];

export type RoomData = {
  slug: RoomSlug;
  image: string;
  detail: string;
  guests: 2;
  bed: Record<Locale, string>;
  name: Record<Locale, string>;
  desc: Record<Locale, string>;
  metaTitle: Record<Locale, string>;
  metaDesc: Record<Locale, string>;
};

export const rooms: RoomData[] = [
  {
    slug: "blue-room",
    image: "/images/blue-room.webp",
    detail: "/images/blue-detail.webp",
    guests: 2,
    bed: {
      fr: "1 lit double",
      en: "1 double bed",
      ar: "سرير مزدوج واحد",
      es: "1 cama doble",
    },
    name: {
      fr: "Blue Room",
      en: "Blue Room",
      ar: "الغرفة الزرقاء",
      es: "Blue Room",
    },
    desc: {
      fr: "Atmosphère apaisante aux teintes bleues, idéale pour se ressourcer après une journée dans le désert de Merzouga.",
      en: "A soothing blue-toned room, ideal for resting after a day in the Merzouga desert.",
      ar: "غرفة هادئة بألوان زرقاء، مثالية للاسترخاء بعد يوم في صحراء مرزوكة.",
      es: "Ambiente sereno en tonos azules, ideal para descansar tras un día en el desierto de Merzouga.",
    },
    metaTitle: {
      fr: "Blue Room à Merzouga | Dar Shifa Shanti",
      en: "Blue Room in Merzouga | Dar Shifa Shanti",
      ar: "الغرفة الزرقاء في مرزوكة | دار شفاء شانتي",
      es: "Blue Room en Merzouga | Dar Shifa Shanti",
    },
    metaDesc: {
      fr: "Séjournez dans la Blue Room de Dar Shifa Shanti à Merzouga : chambre traditionnelle pour 2 personnes près de l'Erg Chebbi.",
      en: "Stay in the Blue Room at Dar Shifa Shanti in Merzouga: traditional room for 2 guests near Erg Chebbi.",
      ar: "أقم في الغرفة الزرقاء بدار شفاء شانتي في مرزوكة: غرفة تقليدية لشخصين قرب إرغ شبي.",
      es: "Aloje se en la Blue Room de Dar Shifa Shanti en Merzouga: habitación tradicional para 2 cerca del Erg Chebbi.",
    },
  },
  {
    slug: "green-room",
    image: "/images/green-room.webp",
    detail: "/images/green-detail.webp",
    guests: 2,
    bed: {
      fr: "1 lit double",
      en: "1 double bed",
      ar: "سرير مزدوج واحد",
      es: "1 cama doble",
    },
    name: {
      fr: "Green Room",
      en: "Green Room",
      ar: "الغرفة الخضراء",
      es: "Green Room",
    },
    desc: {
      fr: "Ambiance naturelle et chaleureuse, avec un décor inspiré de l'artisanat marocain et du désert.",
      en: "Natural and warm atmosphere, with décor inspired by Moroccan craftsmanship and the desert.",
      ar: "أجواء طبيعية ودافئة، مع ديكور مستوحى من الحرف المغربية والصحراء.",
      es: "Ambiente natural y cálido, con decoración inspirada en la artesanía marroquí y el desierto.",
    },
    metaTitle: {
      fr: "Green Room à Merzouga | Dar Shifa Shanti",
      en: "Green Room in Merzouga | Dar Shifa Shanti",
      ar: "الغرفة الخضراء في مرزوكة | دار شفاء شانتي",
      es: "Green Room en Merzouga | Dar Shifa Shanti",
    },
    metaDesc: {
      fr: "Découvrez la Green Room de Dar Shifa Shanti à Merzouga, chambre d'hôtes chaleureuse près des dunes de l'Erg Chebbi.",
      en: "Discover the Green Room at Dar Shifa Shanti in Merzouga, a warm guesthouse room near the Erg Chebbi dunes.",
      ar: "اكتشف الغرفة الخضراء في دار شفاء شانتي بمرزوكة، غرفة ضيافة دافئة قرب كثبان إرغ شبي.",
      es: "Descubra la Green Room de Dar Shifa Shanti en Merzouga, habitación cálida cerca de las dunas del Erg Chebbi.",
    },
  },
  {
    slug: "desert-room",
    image: "/images/desert-room.webp",
    detail: "/images/desert-detail.webp",
    guests: 2,
    bed: {
      fr: "1 lit double",
      en: "1 double bed",
      ar: "سرير مزدوج واحد",
      es: "1 cama doble",
    },
    name: {
      fr: "Desert Room",
      en: "Desert Room",
      ar: "غرفة الصحراء",
      es: "Desert Room",
    },
    desc: {
      fr: "Esprit saharien et couleurs chaudes pour une immersion dans l'ambiance du désert marocain.",
      en: "Saharan spirit and warm colors for an immersion in the atmosphere of the Moroccan desert.",
      ar: "روح صحراوية وألوان دافئة للانغماس في أجواء الصحراء المغربية.",
      es: "Espíritu sahariano y colores cálidos para una inmersión en el ambiente del desierto marroquí.",
    },
    metaTitle: {
      fr: "Desert Room à Merzouga | Dar Shifa Shanti",
      en: "Desert Room in Merzouga | Dar Shifa Shanti",
      ar: "غرفة الصحراء في مرزوكة | دار شفاء شانتي",
      es: "Desert Room en Merzouga | Dar Shifa Shanti",
    },
    metaDesc: {
      fr: "La Desert Room de Dar Shifa Shanti à Merzouga offre une ambiance saharienne authentique près de l'Erg Chebbi.",
      en: "The Desert Room at Dar Shifa Shanti in Merzouga offers an authentic Saharan atmosphere near Erg Chebbi.",
      ar: "غرفة الصحراء في دار شفاء شانتي بمرزوكة تقدم أجواء صحراوية أصيلة قرب إرغ شبي.",
      es: "La Desert Room de Dar Shifa Shanti en Merzouga ofrece un ambiente sahariano auténtico cerca del Erg Chebbi.",
    },
  },
  {
    slug: "suite",
    image: "/images/suite.webp",
    detail: "/images/suite-detail.webp",
    guests: 2,
    bed: {
      fr: "1 lit double",
      en: "1 double bed",
      ar: "سرير مزدوج واحد",
      es: "1 cama doble",
    },
    name: {
      fr: "Suite",
      en: "Suite",
      ar: "الجناح",
      es: "Suite",
    },
    desc: {
      fr: "Espace généreux et confort raffiné pour un séjour plus spacieux à Merzouga.",
      en: "Generous space and refined comfort for a more spacious stay in Merzouga.",
      ar: "مساحة واسعة وراحة راقية لإقامة أرحب في مرزوكة.",
      es: "Espacio generoso y confort refinado para una estancia más amplia en Merzouga.",
    },
    metaTitle: {
      fr: "Suite à Merzouga | Dar Shifa Shanti",
      en: "Suite in Merzouga | Dar Shifa Shanti",
      ar: "الجناح في مرزوكة | دار شفاء شانتي",
      es: "Suite en Merzouga | Dar Shifa Shanti",
    },
    metaDesc: {
      fr: "Réservez la Suite de Dar Shifa Shanti à Merzouga : espace confortable pour 2 personnes près du désert.",
      en: "Book the Suite at Dar Shifa Shanti in Merzouga: comfortable space for 2 guests near the desert.",
      ar: "احجز الجناح في دار شفاء شانتي بمرزوكة: مساحة مريحة لشخصين قرب الصحراء.",
      es: "Reserve la Suite de Dar Shifa Shanti en Merzouga: espacio cómodo para 2 cerca del desierto.",
    },
  },
];

export function getRoom(slug: string): RoomData | undefined {
  return rooms.find((r) => r.slug === slug);
}

export function isRoomSlug(value: string): value is RoomSlug {
  return roomSlugs.includes(value as RoomSlug);
}
