import type { Locale } from "@/i18n/config";

export type ServiceSection = {
  type: "p" | "h2" | "ul";
  text?: string;
  items?: string[];
};

export type Service = {
  slug: string;
  image: string;
  metaTitle: Record<Locale, string>;
  metaDescription: Record<Locale, string>;
  kicker: Record<Locale, string>;
  title: Record<Locale, string>;
  excerpt: Record<Locale, string>;
  sections: Record<Locale, ServiceSection[]>;
  ctaTitle: Record<Locale, string>;
  ctaText: Record<Locale, string>;
};

/** Phone as stored for WhatsApp (digits only for wa.me) */
export const WHATSAPP_NUMBER = "212768254033";
export const GOOGLE_MAPS_URL = "https://maps.app.goo.gl/Y1AqY7ip7QdJ1oRe8";

export const services: Service[] = [
  {
    slug: "balade-chameau",
    image: "/images/desert-adventure.webp",
    metaTitle: {
      fr: "Merzouga Nuit Désert | Balade Chameau – Dar Shifa Shanti",
      en: "Desert Camp Merzouga | Camel Ride – Dar Shifa Shanti",
      ar: "رحلة جمل في مرزوكة | مبيت في الصحراء – دار شفاء شانتي",
      es: "Paseo en camello Merzouga | Noche en el desierto – Dar Shifa Shanti",
    },
    metaDescription: {
      fr: "Organisez une balade à dos de chameau avec possibilité de nuit dans le désert depuis Dar Shifa Shanti à Merzouga, près de l'Erg Chebbi. Durée et détails confirmés à la maison d'hôtes.",
      en: "Arrange a camel ride with optional overnight in the desert from Dar Shifa Shanti in Merzouga, near Erg Chebbi. Duration and details confirmed at the guesthouse.",
      ar: "نظم رحلة جمل مع إمكانية المبيت في الصحراء من دار شفاء شانتي بمرزوكة قرب إرغ شبي. المدة والتفاصيل تُؤكد في دار الضيافة.",
      es: "Organice un paseo en camello con opción de noche en el desierto desde Dar Shifa Shanti en Merzouga, cerca del Erg Chebbi. Duración y detalles en la casa de huéspedes.",
    },
    kicker: {
      fr: "Expérience désert",
      en: "Desert experience",
      ar: "تجربة صحراوية",
      es: "Experiencia en el desierto",
    },
    title: {
      fr: "Balade à dos de chameau et nuit dans le désert",
      en: "Camel ride and overnight in the desert",
      ar: "رحلة جمل ومبيت في الصحراء",
      es: "Paseo en camello y noche en el desierto",
    },
    excerpt: {
      fr: "Partez vers les dunes de l'Erg Chebbi à dos de chameau. Selon votre envie, combinez la balade avec un séjour à la maison d'hôtes, un dîner ou une nuit côté désert.",
      en: "Head toward the Erg Chebbi dunes by camel. Combine the ride with your guesthouse stay, dinner, or an overnight in the desert — as you prefer.",
      ar: "توجه نحو كثبان إرغ شبي على ظهر الجمل. اجمع الرحلة مع إقامتك في دار الضيافة أو العشاء أو مبيت في الصحراء حسب رغبتك.",
      es: "Diríjase hacia las dunas del Erg Chebbi en camello. Combine el paseo con su estancia, la cena o una noche en el desierto, según prefiera.",
    },
    sections: {
      fr: [
        {
          type: "p",
          text: "Depuis Dar Shifa Shanti à Merzouga, vous pouvez organiser une balade à dos de chameau vers les dunes de l'Erg Chebbi. C'est l'une des expériences les plus demandées pour découvrir le désert autrement qu'en véhicule. La balade se fait au rythme lent des chameaux, idéal pour profiter du silence et des paysages du Sahara.",
        },
        { type: "h2", text: "Déroulement d'une balade" },
        {
          type: "p",
          text: "Départ depuis la maison d'hôtes ou un point proche. Vous montez sur le chameau et avancez vers les dunes. La durée varie selon votre programme : balade courte en fin d'après-midi ou plus longue si vous combinez avec un bivouac. Le retour se fait généralement avant la nuit ou le lendemain matin selon l'organisation.",
        },
        { type: "h2", text: "Ce que vous pouvez combiner" },
        {
          type: "p",
          text: "La balade s'inscrit dans les services proposés autour de la maison d'hôtes. Selon votre programme, vous pouvez l'associer à :",
        },
        {
          type: "ul",
          items: [
            "Votre nuit en chambre à Dar Shifa Shanti",
            "Petit-déjeuner ou repas à la maison",
            "Une extension vers une nuit en bivouac dans le désert (selon disponibilité)",
            "Coucher de soleil sur les dunes",
          ],
        },
        { type: "h2", text: "Conseils pratiques" },
        {
          type: "ul",
          items: [
            "Portez des vêtements confortables et une écharpe contre le vent",
            "Protégez-vous du soleil (chapeau, crème)",
            "La balade est adaptée aux adultes et aux enfants",
            "Confirmez la durée et l'horaire à l'arrivée",
          ],
        },
        { type: "h2", text: "Durée et organisation" },
        {
          type: "p",
          text: "La durée exacte, l'horaire (coucher ou lever de soleil) et le déroulé se confirment à la maison d'hôtes, selon la saison, la météo et le nombre de voyageurs. Rien n'est imposé à l'avance en ligne : on adapte avec vous sur place.",
        },
        { type: "h2", text: "Tarifs" },
        {
          type: "p",
          text: "Les tarifs des activités sont indiqués et mis à jour sur notre fiche Google Maps. Vous pouvez aussi les demander par WhatsApp ou à l'arrivée à Dar Shifa Shanti.",
        },
        { type: "h2", text: "Pourquoi partir de la maison d'hôtes" },
        {
          type: "p",
          text: "Organiser la balade depuis Dar Shifa Shanti permet de relier confort de la chambre, conseils de l'équipe et accès aux dunes, sans multiplier les interlocuteurs. Idéal si vous cherchez une base calme près de l'Erg Chebbi pour une camel ride and overnight camp Merzouga ou une simple balade en fin de journée.",
        },
      ],
      en: [
        {
          type: "p",
          text: "From Dar Shifa Shanti in Merzouga, you can arrange a camel ride toward the Erg Chebbi dunes — one of the most popular ways to experience the desert beyond a vehicle tour.",
        },
        { type: "h2", text: "What you can combine" },
        {
          type: "p",
          text: "The ride is part of the services offered around the guesthouse. Depending on your plans, you can combine it with:",
        },
        {
          type: "ul",
          items: [
            "Your night in a room at Dar Shifa Shanti",
            "Breakfast or meals at the house",
            "An extension to a night on the desert side (subject to availability and on-site organisation)",
          ],
        },
        { type: "h2", text: "Duration and organisation" },
        {
          type: "p",
          text: "Exact duration, timing (sunset or sunrise) and the programme are confirmed at the guesthouse, according to season, weather and group size. Nothing is locked online in advance — we adapt with you on site.",
        },
        { type: "h2", text: "Prices" },
        {
          type: "p",
          text: "Activity prices are listed and updated on our Google Maps listing. You can also ask by WhatsApp or on arrival at Dar Shifa Shanti.",
        },
        { type: "h2", text: "Why start from the guesthouse" },
        {
          type: "p",
          text: "Arranging the ride from Dar Shifa Shanti links room comfort, local advice and access to the dunes without juggling multiple contacts. Ideal if you want a quiet base near Erg Chebbi for a camel ride and overnight camp in Merzouga, or simply an evening ride.",
        },
      ],
      ar: [
        {
          type: "p",
          text: "من دار شفاء شانتي في مرزوكة يمكن تنظيم رحلة جمل نحو كثبان إرغ شبي، من أكثر التجارب طلباً لاكتشاف الصحراء بخلاف السيارة.",
        },
        { type: "h2", text: "ما يمكن دمجه" },
        {
          type: "p",
          text: "الرحلة ضمن الخدمات المرتبطة بدار الضيافة. حسب برنامجك يمكن جمعها مع:",
        },
        {
          type: "ul",
          items: [
            "مبيتك في غرفة بدار شفاء شانتي",
            "الفطور أو وجبات في الدار",
            "امتداد لمبيت في جهة الصحراء (حسب التوفر والتنظيم في المكان)",
          ],
        },
        { type: "h2", text: "المدة والتنظيم" },
        {
          type: "p",
          text: "المدة الدقيقة والموعد (غروب أو شروق) والتفاصيل تُؤكد في دار الضيافة حسب الموسم والطقس وعدد المسافرين. لا شيء مفروض مسبقاً عبر الإنترنت؛ نتكيّف معكم في المكان.",
        },
        { type: "h2", text: "الأسعار" },
        {
          type: "p",
          text: "أسعار الأنشطة مذكورة ومحدَّثة على صفحة Google Maps. يمكن أيضاً الاستفسار عبر واتساب أو عند الوصول إلى دار شفاء شانتي.",
        },
        { type: "h2", text: "لماذا الانطلاق من دار الضيافة" },
        {
          type: "p",
          text: "تنظيم الرحلة من دار شفاء شانتي يربط راحة الغرفة بنصائح الفريق وبالوصول إلى الكثبان دون تعدد الوسطاء. مناسب إن أردت قاعدة هادئة قرب إرغ شبي لرحلة جمل ومبيت في مرزوكة أو نزهة مسائية فقط.",
        },
      ],
      es: [
        {
          type: "p",
          text: "Desde Dar Shifa Shanti en Merzouga puede organizar un paseo en camello hacia las dunas del Erg Chebbi, una de las experiencias más solicitadas para descubrir el desierto de otra forma.",
        },
        { type: "h2", text: "Qué puede combinar" },
        {
          type: "p",
          text: "El paseo forma parte de los servicios vinculados a la casa de huéspedes. Según su plan, puede asociarlo con:",
        },
        {
          type: "ul",
          items: [
            "Su noche en habitación en Dar Shifa Shanti",
            "Desayuno o comidas en la casa",
            "Una extensión a una noche hacia el desierto (según disponibilidad y organización in situ)",
          ],
        },
        { type: "h2", text: "Duración y organización" },
        {
          type: "p",
          text: "La duración exacta, el horario (atardecer o amanecer) y el programa se confirman en la casa de huéspedes según la temporada, el clima y el número de viajeros. Nada queda fijado por adelantado en línea: lo adaptamos con usted en el lugar.",
        },
        { type: "h2", text: "Precios" },
        {
          type: "p",
          text: "Los precios de las actividades figuran y se actualizan en nuestra ficha de Google Maps. También puede consultarlos por WhatsApp o a la llegada a Dar Shifa Shanti.",
        },
        { type: "h2", text: "Por qué salir desde la casa de huéspedes" },
        {
          type: "p",
          text: "Organizar el paseo desde Dar Shifa Shanti une el confort de la habitación, el consejo del equipo y el acceso a las dunas sin multiplicar interlocutores. Ideal si busca una base tranquila cerca del Erg Chebbi para un paseo en camello con noche en Merzouga o solo un paseo al atardecer.",
        },
      ],
    },
    ctaTitle: {
      fr: "Réserver ou poser une question",
      en: "Book or ask a question",
      ar: "احجز أو اسأل",
      es: "Reservar o preguntar",
    },
    ctaText: {
      fr: "Contactez-nous par WhatsApp ou via la page contact. Les tarifs sont aussi sur Google Maps.",
      en: "Contact us on WhatsApp or via the contact page. Prices are also on Google Maps.",
      ar: "تواصل معنا عبر واتساب أو صفحة الاتصال. الأسعار أيضاً على Google Maps.",
      es: "Contáctenos por WhatsApp o en la página de contacto. Los precios también están en Google Maps.",
    },
  },
  {
    slug: "bivouac",
    image: "/images/campfire.webp",
    metaTitle: {
      fr: "Bivouac Merzouga | Nuit dans le désert – Dar Shifa Shanti",
      en: "Bivouac Merzouga | Night in the Desert – Dar Shifa Shanti",
      ar: "بيفواك مرزوكة | مبيت في الصحراء – دار شفاء شانتي",
      es: "Bivouac Merzouga | Noche en el desierto – Dar Shifa Shanti",
    },
    metaDescription: {
      fr: "Organisez un bivouac à Merzouga depuis Dar Shifa Shanti : nuit dans le désert près de l'Erg Chebbi, dîner et petit-déjeuner. Durée et détails confirmés à la maison d'hôtes.",
      en: "Arrange a bivouac in Merzouga from Dar Shifa Shanti: night in the desert near Erg Chebbi, with dinner and breakfast. Duration and details confirmed at the guesthouse.",
      ar: "نظّم بيفواك في مرزوكة من دار شفاء شانتي: مبيت في الصحراء قرب إرغ شبي مع العشاء والفطور. المدة والتفاصيل تُؤكد في دار الضيافة.",
      es: "Organice un bivouac en Merzouga desde Dar Shifa Shanti: noche en el desierto cerca del Erg Chebbi, con cena y desayuno. Duración y detalles en la casa de huéspedes.",
    },
    kicker: {
      fr: "Nuit dans le désert",
      en: "Night in the desert",
      ar: "ليلة في الصحراء",
      es: "Noche en el desierto",
    },
    title: {
      fr: "Bivouac Merzouga",
      en: "Bivouac Merzouga",
      ar: "بيفواك مرزوكة",
      es: "Bivouac Merzouga",
    },
    excerpt: {
      fr: "Passez une nuit sous les étoiles dans le désert de Merzouga. Un bivouac près de l'Erg Chebbi, organisé depuis Dar Shifa Shanti.",
      en: "Spend a night under the stars in the Merzouga desert. A bivouac near Erg Chebbi, organised from Dar Shifa Shanti.",
      ar: "اقضِ ليلة تحت النجوم في صحراء مرزوكة. بيفواك قرب إرغ شبي، منظّم من دار شفاء شانتي.",
      es: "Pase una noche bajo las estrellas en el desierto de Merzouga. Un bivouac cerca del Erg Chebbi, organizado desde Dar Shifa Shanti.",
    },
    sections: {
      fr: [
        { type: "p", text: "Le bivouac à Merzouga est l'une des meilleures façons de vivre le désert de l'Erg Chebbi. Depuis Dar Shifa Shanti, nous organisons des nuits dans les dunes selon la saison, la météo et le nombre de voyageurs." },
        { type: "h2", text: "Ce que comprend un bivouac Merzouga" },
        { type: "ul", items: ["Transfert vers les dunes de l'Erg Chebbi", "Dîner traditionnel (tajine, pain, thé)", "Nuit en tente berbère ou sous les étoiles", "Couvertures et matelas fournis", "Petit-déjeuner au lever du soleil", "Retour à la maison d'hôtes le matin"] },
        { type: "h2", text: "Comment se déroule la nuit" },
        { type: "p", text: "Départ en fin d'après-midi vers les dunes. Installation au camp, dîner autour du feu, puis nuit sous le ciel du Sahara. Le lendemain matin, petit-déjeuner face aux dunes avant le retour à Dar Shifa Shanti." },
        { type: "h2", text: "Que prévoir" },
        { type: "ul", items: ["Vêtements chauds pour la nuit (le désert se refroidit)", "Écharpe ou chèche contre le vent", "Lampe de poche ou lampe frontale", "Appareil photo", "Eau et en-cas si besoin"] },
        { type: "h2", text: "Meilleure période" },
        { type: "p", text: "Le bivouac est possible toute l'année. Les nuits sont plus fraîches d'octobre à avril. En été, les températures restent élevées même la nuit." },
        { type: "h2", text: "Durée et organisation" },
        { type: "p", text: "La durée exacte et l'horaire se confirment à Dar Shifa Shanti selon la saison et le nombre de personnes. Contactez-nous pour organiser votre nuit dans le désert." },
        { type: "h2", text: "Tarifs" },
        { type: "p", text: "Les tarifs du bivouac sont indiqués sur notre fiche Google Maps ou disponibles sur demande par WhatsApp." },
      ],
      en: [
        { type: "p", text: "A bivouac in Merzouga is one of the best ways to experience the Erg Chebbi desert. From Dar Shifa Shanti, we organise nights in the dunes according to the season, weather and number of travellers." },
        { type: "h2", text: "What a Merzouga bivouac includes" },
        { type: "ul", items: ["Transfer to the Erg Chebbi dunes", "Traditional dinner (tajine, bread, tea)", "Night in a Berber tent or under the stars", "Blankets and mattresses provided", "Sunrise breakfast", "Return to the guesthouse in the morning"] },
        { type: "h2", text: "How the night unfolds" },
        { type: "p", text: "Departure in the late afternoon towards the dunes. Arrival at the camp, dinner around the fire, then a night under the Sahara sky. The next morning, breakfast facing the dunes before returning to Dar Shifa Shanti." },
        { type: "h2", text: "What to bring" },
        { type: "ul", items: ["Warm clothes for the night (the desert cools down)", "Scarf or cheche against the wind", "Flashlight or headlamp", "Camera", "Water and snacks if needed"] },
        { type: "h2", text: "Best time" },
        { type: "p", text: "Bivouac is possible year-round. Nights are cooler from October to April. In summer, temperatures stay high even at night." },
        { type: "h2", text: "Duration and organisation" },
        { type: "p", text: "Exact duration and timing are confirmed at Dar Shifa Shanti according to the season and number of people. Contact us to organise your night in the desert." },
        { type: "h2", text: "Prices" },
        { type: "p", text: "Bivouac prices are listed on our Google Maps profile or available on request via WhatsApp." },
      ],
      ar: [
        { type: "p", text: "البيفواك في مرزوكة من أفضل الطرق لعيش صحراء إرغ شبي. من دار شفاء شانتي ننظّم ليالي في الكثبان حسب الموسم والطقس وعدد المسافرين." },
        { type: "h2", text: "ما يشمله بيفواك مرزوكة" },
        { type: "ul", items: ["النقل إلى كثبان إرغ شبي", "عشاء تقليدي (طاجين، خبز، شاي)", "مبيت في خيمة أمازيغية أو تحت النجوم", "أغطية ومراتب متوفرة", "فطور عند الشروق", "العودة إلى دار الضيافة صباحاً"] },
        { type: "h2", text: "كيف تمر الليلة" },
        { type: "p", text: "المغادرة في آخر النهار نحو الكثبان. الوصول إلى المخيم، عشاء حول النار، ثم ليلة تحت سماء الصحراء. في الصباح، فطور أمام الكثبان قبل العودة إلى دار شفاء شانتي." },
        { type: "h2", text: "ماذا تأخذ معك" },
        { type: "ul", items: ["ملابس دافئة لليل (الصحراء تبرد)", "وشاح ضد الريح", "مصباح يدوي", "كاميرا", "ماء ووجبات خفيفة إن لزم"] },
        { type: "h2", text: "أفضل وقت" },
        { type: "p", text: "البيفواك ممكن طوال السنة. الليالي أبرد من أكتوبر إلى أبريل. في الصيف تبقى الحرارة مرتفعة حتى في الليل." },
        { type: "h2", text: "المدة والتنظيم" },
        { type: "p", text: "المدة الدقيقة والموعد يُؤكدان في دار شفاء شانتي حسب الموسم وعدد الأشخاص. تواصل معنا لتنظيم ليلتك في الصحراء." },
        { type: "h2", text: "الأسعار" },
        { type: "p", text: "أسعار البيفواك مذكورة على صفحة Google Maps أو عند الطلب عبر واتساب." },
      ],
      es: [
        { type: "p", text: "El bivouac en Merzouga es una de las mejores formas de vivir el desierto del Erg Chebbi. Desde Dar Shifa Shanti organizamos noches en las dunas según la temporada, el clima y el número de viajeros." },
        { type: "h2", text: "Qué incluye un bivouac Merzouga" },
        { type: "ul", items: ["Traslado a las dunas del Erg Chebbi", "Cena tradicional (tajine, pan, té)", "Noche en tienda bereber o bajo las estrellas", "Mantas y colchones incluidos", "Desayuno al amanecer", "Regreso a la casa de huéspedes por la mañana"] },
        { type: "h2", text: "Cómo transcurre la noche" },
        { type: "p", text: "Salida al final de la tarde hacia las dunas. Llegada al campamento, cena alrededor del fuego, luego noche bajo el cielo del Sáhara. A la mañana siguiente, desayuno frente a las dunas antes de regresar a Dar Shifa Shanti." },
        { type: "h2", text: "Qué llevar" },
        { type: "ul", items: ["Ropa de abrigo para la noche (el desierto se enfría)", "Bufanda o cheche contra el viento", "Linterna o frontal", "Cámara", "Agua y snacks si es necesario"] },
        { type: "h2", text: "Mejor época" },
        { type: "p", text: "El bivouac es posible todo el año. Las noches son más frescas de octubre a abril. En verano las temperaturas siguen altas incluso de noche." },
        { type: "h2", text: "Duración y organización" },
        { type: "p", text: "La duración exacta y el horario se confirman en Dar Shifa Shanti según la temporada y el número de personas. Contáctenos para organizar su noche en el desierto." },
        { type: "h2", text: "Precios" },
        { type: "p", text: "Los precios del bivouac figuran en nuestra ficha de Google Maps o están disponibles bajo consulta por WhatsApp." },
      ],
    },
    ctaTitle: {
      fr: "Réserver un bivouac",
      en: "Book a bivouac",
      ar: "احجز بيفواك",
      es: "Reservar un bivouac",
    },
    ctaText: {
      fr: "Contactez-nous par WhatsApp ou via la page contact pour organiser votre nuit dans le désert.",
      en: "Contact us on WhatsApp or via the contact page to organise your night in the desert.",
      ar: "تواصل معنا عبر واتساب أو صفحة الاتصال لتنظيم ليلتك في الصحراء.",
      es: "Contáctenos por WhatsApp o en la página de contacto para organizar su noche en el desierto.",
    },
  },

];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}

export function getServicesForLocale(locale: Locale) {
  return services.map((s) => ({
    slug: s.slug,
    title: s.title[locale],
    excerpt: s.excerpt[locale],
    image: s.image,
  }));
}
