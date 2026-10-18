import type { Locale } from "@/i18n/config";

export type BlogSection = {
  type: "p" | "h2" | "ul";
  text?: string;
  items?: string[];
};

export type BlogArticle = {
  slug: string;
  image: string;
  date: string;
  dateLabel: Record<Locale, string>;
  readingTime: Record<Locale, string>;
  kicker: Record<Locale, string>;
  title: Record<Locale, string>;
  excerpt: Record<Locale, string>;
  metaDescription: Record<Locale, string>;
  sections: Record<Locale, BlogSection[]>;
  ctaTitle: Record<Locale, string>;
  ctaText: Record<Locale, string>;
  ctaButton: Record<Locale, string>;
  backToBlog: Record<Locale, string>;
};

export const articles: BlogArticle[] = [
  {
    slug: "visiter-merzouga",
    image: "/images/desert-adventure.webp",
    date: "2026-03-15",
    dateLabel: {
      fr: "15 mars 2026",
      en: "15 March 2026",
      ar: "15 مارس 2026",
      es: "15 de marzo de 2026",
    },
    readingTime: {
      fr: "6 min de lecture",
      en: "6 min read",
      ar: "6 دقائق قراءة",
      es: "6 min de lectura",
    },
    kicker: {
      fr: "Guide pratique",
      en: "Practical guide",
      ar: "دليل عملي",
      es: "Guía práctica",
    },
    title: {
      fr: "Guide complet pour visiter Merzouga",
      en: "Complete guide to visiting Merzouga",
      ar: "دليل شامل لزيارة مرزوكة",
      es: "Guía completa para visitar Merzouga",
    },
    excerpt: {
      fr: "Tout ce qu'il faut savoir pour préparer votre séjour à Merzouga : comment y aller, que faire, où dormir et les meilleurs moments pour profiter de l'Erg Chebbi.",
      en: "Everything you need to plan your stay in Merzouga: how to get there, what to do, where to stay, and the best times to enjoy Erg Chebbi.",
      ar: "كل ما تحتاج معرفته لتحضير إقامتك في مرزوكة: كيف تصل، ماذا تفعل، أين تنام وأفضل الأوقات للاستمتاع بإرغ شبي.",
      es: "Todo lo que necesita para preparar su estancia en Merzouga: cómo llegar, qué hacer, dónde dormir y los mejores momentos para disfrutar del Erg Chebbi.",
    },
    metaDescription: {
      fr: "Comment aller à Merzouga, que faire à l'Erg Chebbi, où dormir et les meilleurs conseils pour un séjour réussi dans le désert marocain.",
      en: "How to get to Merzouga, what to do at Erg Chebbi, where to stay, and the best tips for a successful stay in the Moroccan desert.",
      ar: "كيف تصل إلى مرزوكة، ماذا تفعل في إرغ شبي، أين تقيم وأفضل النصائح لإقامة ناجحة في صحراء المغرب.",
      es: "Cómo llegar a Merzouga, qué hacer en el Erg Chebbi, dónde dormir y los mejores consejos para una estancia exitosa en el desierto marroquí.",
    },
    sections: {
      fr: [
        {
          type: "p",
          text: "Merzouga est l'une des portes d'entrée les plus impressionnantes du Sahara marocain. Situé au pied des dunes majestueuses de l'Erg Chebbi, ce petit village attire les voyageurs en quête de silence, de grands espaces et d'authenticité.",
        },
        { type: "h2", text: "Comment se rendre à Merzouga ?" },
        {
          type: "p",
          text: "Depuis Marrakech, comptez environ 9 à 10 heures de route. Depuis Fès, le trajet dure environ 7 à 8 heures. De nombreux voyageurs choisissent un transfert organisé ou une location de voiture. Il est aussi possible d'arriver en bus jusqu'à Erfoud ou Rissani, puis de prendre un taxi local.",
        },
        { type: "h2", text: "Que faire à Merzouga ?" },
        {
          type: "ul",
          items: [
            "Balade à dos de chameau au lever ou au coucher du soleil",
            "Nuit en bivouac dans les dunes",
            "Promenade dans les dunes de l'Erg Chebbi",
            "Visite des villages environnants et rencontre avec les habitants",
            "Observation des étoiles (le ciel est exceptionnel)",
          ],
        },
        { type: "h2", text: "Où dormir à Merzouga ?" },
        {
          type: "p",
          text: "Pour une expérience authentique, privilégiez une maison d'hôtes traditionnelle plutôt qu'un grand hôtel. À Dar Shifa Shanti, vous dormez dans des chambres décorées avec soin, à proximité immédiate des dunes, avec une hospitalité berbère chaleureuse.",
        },
        { type: "h2", text: "Combien de jours prévoir ?" },
        {
          type: "p",
          text: "Idéalement 2 à 3 nuits. Cela vous laisse le temps d'arriver, de profiter d'un coucher de soleil, d'une nuit calme et d'un lever de soleil sur les dunes avant de repartir.",
        },
      ],
      en: [
        {
          type: "p",
          text: "Merzouga is one of the most impressive gateways to the Moroccan Sahara. At the foot of the majestic Erg Chebbi dunes, this small village attracts travelers seeking silence, open space and authenticity.",
        },
        { type: "h2", text: "How to get to Merzouga?" },
        {
          type: "p",
          text: "From Marrakech, allow about 9 to 10 hours by road. From Fez, the journey takes about 7 to 8 hours. Many travelers choose an organized transfer or a rental car. You can also take a bus to Erfoud or Rissani, then a local taxi.",
        },
        { type: "h2", text: "What to do in Merzouga?" },
        {
          type: "ul",
          items: [
            "Camel ride at sunrise or sunset",
            "Overnight stay in a desert camp among the dunes",
            "Walk on the Erg Chebbi dunes",
            "Visit nearby villages and meet local people",
            "Stargazing (the sky is exceptional)",
          ],
        },
        { type: "h2", text: "Where to stay in Merzouga?" },
        {
          type: "p",
          text: "For an authentic experience, choose a traditional guesthouse rather than a large hotel. At Dar Shifa Shanti, you sleep in carefully decorated rooms, right next to the dunes, with warm Berber hospitality.",
        },
        { type: "h2", text: "How many days should you plan?" },
        {
          type: "p",
          text: "Ideally 2 to 3 nights. That gives you time to arrive, enjoy a sunset, a quiet night and a sunrise over the dunes before you leave.",
        },
      ],
      ar: [
        {
          type: "p",
          text: "مرزوكة من أجمل بوابات الصحراء المغربية. تقع عند سفح كثبان إرغ شبي الشامخة، وتجذب المسافرين الباحثين عن الهدوء والمساحات الواسعة والأصالة.",
        },
        { type: "h2", text: "كيف تصل إلى مرزوكة؟" },
        {
          type: "p",
          text: "من مراكش حوالي 9 إلى 10 ساعات براً. من فاس حوالي 7 إلى 8 ساعات. كثير من المسافرين يختارون نقلاً منظماً أو سيارة كراء. يمكن أيضاً الوصول بالحافلة إلى أرفود أو الريصاني ثم تاكسي محلي.",
        },
        { type: "h2", text: "ماذا تفعل في مرزوكة؟" },
        {
          type: "ul",
          items: [
            "جولة على الجمال عند الشروق أو الغروب",
            "ليلة في مخيم وسط الكثبان",
            "نزهة على كثبان إرغ شبي",
            "زيارة القرى المجاورة والتعرف على السكان",
            "مراقبة النجوم (السماء استثنائية)",
          ],
        },
        { type: "h2", text: "أين تقيم في مرزوكة؟" },
        {
          type: "p",
          text: "لتجربة أصيلة، فضّل دار ضيافة تقليدية على فندق كبير. في دار شفاء شانتي تنام في غرف مزينة بعناية، قرب الكثبان مباشرة، مع ضيافة أمازيغية دافئة.",
        },
        { type: "h2", text: "كم يوماً تحتاج؟" },
        {
          type: "p",
          text: "من المثالي ليلتان إلى ثلاث ليالٍ. يكفي للوصول، والاستمتاع بغروب، وليلة هادئة، وشروق على الكثبان قبل المغادرة.",
        },
      ],
      es: [
        {
          type: "p",
          text: "Merzouga es una de las puertas más impresionantes del Sáhara marroquí. Al pie de las majestuosas dunas del Erg Chebbi, este pequeño pueblo atrae a viajeros en busca de silencio, grandes espacios y autenticidad.",
        },
        { type: "h2", text: "¿Cómo llegar a Merzouga?" },
        {
          type: "p",
          text: "Desde Marrakech, cuente unas 9 a 10 horas de camino. Desde Fez, el trayecto dura unas 7 a 8 horas. Muchos viajeros eligen un traslado organizado o un coche de alquiler. También se puede llegar en autobús hasta Erfoud o Rissani y luego tomar un taxi local.",
        },
        { type: "h2", text: "¿Qué hacer en Merzouga?" },
        {
          type: "ul",
          items: [
            "Paseo en camello al amanecer o al atardecer",
            "Noche en un campamento en las dunas",
            "Caminata por las dunas del Erg Chebbi",
            "Visita a los pueblos cercanos y encuentro con los habitantes",
            "Observación de estrellas (el cielo es excepcional)",
          ],
        },
        { type: "h2", text: "¿Dónde dormir en Merzouga?" },
        {
          type: "p",
          text: "Para una experiencia auténtica, elija una casa de huéspedes tradicional en lugar de un gran hotel. En Dar Shifa Shanti duerme en habitaciones decoradas con cuidado, junto a las dunas, con una hospitalidad bereber cálida.",
        },
        { type: "h2", text: "¿Cuántos días prever?" },
        {
          type: "p",
          text: "Idealmente 2 a 3 noches. Así tiene tiempo de llegar, disfrutar de un atardecer, una noche tranquila y un amanecer sobre las dunas antes de partir.",
        },
      ],
    },
    ctaTitle: {
      fr: "Prêt à découvrir Merzouga ?",
      en: "Ready to discover Merzouga?",
      ar: "هل أنت مستعد لاكتشاف مرزوكة؟",
      es: "¿Listo para descubrir Merzouga?",
    },
    ctaText: {
      fr: "Réservez votre séjour à Dar Shifa Shanti et vivez le désert autrement.",
      en: "Book your stay at Dar Shifa Shanti and experience the desert differently.",
      ar: "احجز إقامتك في دار شفاء شانتي وعش الصحراء بطريقة مختلفة.",
      es: "Reserve su estancia en Dar Shifa Shanti y viva el desierto de otra manera.",
    },
    ctaButton: {
      fr: "Nous contacter",
      en: "Contact us",
      ar: "تواصل معنا",
      es: "Contáctenos",
    },
    backToBlog: {
      fr: "← Retour au blog",
      en: "← Back to blog",
      ar: "→ العودة إلى المدونة",
      es: "← Volver al blog",
    },
  },
  {
    slug: "meilleure-periode-erg-chebbi",
    image: "/images/hero-sunset.webp",
    date: "2026-02-28",
    dateLabel: {
      fr: "28 février 2026",
      en: "28 February 2026",
      ar: "28 فبراير 2026",
      es: "28 de febrero de 2026",
    },
    readingTime: {
      fr: "5 min de lecture",
      en: "5 min read",
      ar: "5 دقائق قراءة",
      es: "5 min de lectura",
    },
    kicker: {
      fr: "Saisons",
      en: "Seasons",
      ar: "المواسم",
      es: "Temporadas",
    },
    title: {
      fr: "Quelle est la meilleure période pour aller à l'Erg Chebbi ?",
      en: "What is the best time to visit Erg Chebbi?",
      ar: "ما هي أفضل فترة لزيارة إرغ شبي؟",
      es: "¿Cuál es la mejor época para ir al Erg Chebbi?",
    },
    excerpt: {
      fr: "Printemps, automne, hiver ou été ? Découvrez la saison idéale pour visiter les dunes de Merzouga selon vos envies et votre tolérance à la chaleur.",
      en: "Spring, autumn, winter or summer? Find the ideal season to visit the Merzouga dunes according to your preferences and heat tolerance.",
      ar: "ربيع، خريف، شتاء أم صيف؟ اكتشف الموسم المثالي لزيارة كثبان مرزوكة حسب رغباتك وتحملك للحرارة.",
      es: "¿Primavera, otoño, invierno o verano? Descubra la temporada ideal para visitar las dunas de Merzouga según sus gustos y su tolerancia al calor.",
    },
    metaDescription: {
      fr: "Meilleure saison pour visiter l'Erg Chebbi et Merzouga : températures, foule et conseils par période.",
      en: "Best season to visit Erg Chebbi and Merzouga: temperatures, crowds and tips by period.",
      ar: "أفضل موسم لزيارة إرغ شبي ومرزوكة: درجات الحرارة والازدحام ونصائح حسب الفترة.",
      es: "Mejor temporada para visitar el Erg Chebbi y Merzouga: temperaturas, afluencia y consejos por periodo.",
    },
    sections: {
      fr: [
        {
          type: "p",
          text: "L'Erg Chebbi se visite toute l'année, mais l'expérience change selon la saison. Voici un guide simple pour choisir la meilleure période.",
        },
        { type: "h2", text: "Printemps (mars – mai)" },
        {
          type: "p",
          text: "Souvent considéré comme la meilleure période. Les températures sont agréables le jour, les nuits restent douces, et la lumière sur les dunes est magnifique.",
        },
        { type: "h2", text: "Automne (septembre – novembre)" },
        {
          type: "p",
          text: "Excellent choix également. La chaleur de l'été s'atténue, les journées sont encore longues, et le désert retrouve son calme après la haute saison.",
        },
        { type: "h2", text: "Hiver (décembre – février)" },
        {
          type: "p",
          text: "Journées douces à fraîches, nuits parfois très froides. Idéal si vous supportez mal la chaleur. Prévoyez des vêtements chauds pour le soir.",
        },
        { type: "h2", text: "Été (juin – août)" },
        {
          type: "p",
          text: "Très chaud en journée (souvent au-delà de 40°C). Possible si vous voyagez tôt le matin et en fin d'après-midi. Les nuits restent plus supportables.",
        },
        { type: "h2", text: "Notre conseil" },
        {
          type: "p",
          text: "Pour un premier séjour, privilégiez mars–mai ou septembre–novembre. Vous profiterez pleinement des dunes, des couchers de soleil et des soirées à la maison d'hôtes.",
        },
      ],
      en: [
        {
          type: "p",
          text: "Erg Chebbi can be visited year-round, but the experience changes with the season. Here is a simple guide to choosing the best time.",
        },
        { type: "h2", text: "Spring (March – May)" },
        {
          type: "p",
          text: "Often considered the best period. Daytime temperatures are pleasant, nights stay mild, and the light on the dunes is beautiful.",
        },
        { type: "h2", text: "Autumn (September – November)" },
        {
          type: "p",
          text: "Also an excellent choice. Summer heat eases, days are still long, and the desert is quieter after peak season.",
        },
        { type: "h2", text: "Winter (December – February)" },
        {
          type: "p",
          text: "Mild to cool days, nights can be very cold. Ideal if you dislike heat. Bring warm clothes for the evening.",
        },
        { type: "h2", text: "Summer (June – August)" },
        {
          type: "p",
          text: "Very hot during the day (often above 40°C). Possible if you go out early morning and late afternoon. Nights are more bearable.",
        },
        { type: "h2", text: "Our advice" },
        {
          type: "p",
          text: "For a first stay, prefer March–May or September–November. You will fully enjoy the dunes, sunsets and evenings at the guesthouse.",
        },
      ],
      ar: [
        {
          type: "p",
          text: "يمكن زيارة إرغ شبي على مدار السنة، لكن التجربة تختلف حسب الموسم. إليك دليل بسيط لاختيار أفضل فترة.",
        },
        { type: "h2", text: "الربيع (مارس – مايو)" },
        {
          type: "p",
          text: "غالباً ما تُعتبر أفضل فترة. درجات حرارة مريحة نهاراً، ليالٍ لطيفة، وضوء رائع على الكثبان.",
        },
        { type: "h2", text: "الخريف (سبتمبر – نوفمبر)" },
        {
          type: "p",
          text: "خيار ممتاز أيضاً. تخف حرارة الصيف، والأيام لا تزال طويلة، والصحراء أهدأ بعد موسم الذروة.",
        },
        { type: "h2", text: "الشتاء (ديسمبر – فبراير)" },
        {
          type: "p",
          text: "أيام معتدلة إلى باردة، وليالٍ قد تكون قارسة. مثالي إن كنت لا تتحمل الحرارة. أحضر ملابس دافئة للمساء.",
        },
        { type: "h2", text: "الصيف (يونيو – أغسطس)" },
        {
          type: "p",
          text: "حار جداً نهاراً (غالباً فوق 40°م). ممكن إن خرجت صباحاً باكراً وفي آخر العصر. الليالي أكثر احتمالاً.",
        },
        { type: "h2", text: "نصيحتنا" },
        {
          type: "p",
          text: "للإقامة الأولى فضّل مارس–مايو أو سبتمبر–نوفمبر. ستستمتع بالكامل بالكثبان والغروب والأمسيات في دار الضيافة.",
        },
      ],
      es: [
        {
          type: "p",
          text: "El Erg Chebbi se puede visitar todo el año, pero la experiencia cambia según la temporada. Aquí va una guía sencilla para elegir el mejor momento.",
        },
        { type: "h2", text: "Primavera (marzo – mayo)" },
        {
          type: "p",
          text: "A menudo se considera la mejor época. Temperaturas agradables de día, noches suaves y una luz preciosa sobre las dunas.",
        },
        { type: "h2", text: "Otoño (septiembre – noviembre)" },
        {
          type: "p",
          text: "También una excelente opción. El calor del verano disminuye, los días siguen siendo largos y el desierto recupera la calma tras la temporada alta.",
        },
        { type: "h2", text: "Invierno (diciembre – febrero)" },
        {
          type: "p",
          text: "Días suaves o frescos; las noches pueden ser muy frías. Ideal si no tolera bien el calor. Lleve ropa abrigada para la noche.",
        },
        { type: "h2", text: "Verano (junio – agosto)" },
        {
          type: "p",
          text: "Muy caluroso de día (a menudo por encima de 40°C). Posible si sale temprano por la mañana y al final de la tarde. Las noches son más llevaderas.",
        },
        { type: "h2", text: "Nuestro consejo" },
        {
          type: "p",
          text: "Para una primera estancia, prefiera marzo–mayo o septiembre–noviembre. Disfrutará plenamente de las dunas, los atardeceres y las veladas en la casa de huéspedes.",
        },
      ],
    },
    ctaTitle: {
      fr: "Venez vivre l'Erg Chebbi",
      en: "Come experience Erg Chebbi",
      ar: "تعال عِش إرغ شبي",
      es: "Venga a vivir el Erg Chebbi",
    },
    ctaText: {
      fr: "Dar Shifa Shanti vous accueille toute l'année au pied des dunes.",
      en: "Dar Shifa Shanti welcomes you year-round at the foot of the dunes.",
      ar: "دار شفاء شانتي تستقبلك على مدار السنة عند سفح الكثبان.",
      es: "Dar Shifa Shanti le recibe todo el año al pie de las dunas.",
    },
    ctaButton: {
      fr: "Nous contacter",
      en: "Contact us",
      ar: "تواصل معنا",
      es: "Contáctenos",
    },
    backToBlog: {
      fr: "← Retour au blog",
      en: "← Back to blog",
      ar: "→ العودة إلى المدونة",
      es: "← Volver al blog",
    },
  },
  {
    slug: "nuit-dans-le-desert",
    image: "/images/campfire.webp",
    date: "2026-02-10",
    dateLabel: {
      fr: "10 février 2026",
      en: "10 February 2026",
      ar: "10 فبراير 2026",
      es: "10 de febrero de 2026",
    },
    readingTime: {
      fr: "5 min de lecture",
      en: "5 min read",
      ar: "5 دقائق قراءة",
      es: "5 min de lectura",
    },
    kicker: {
      fr: "Expérience",
      en: "Experience",
      ar: "تجربة",
      es: "Experiencia",
    },
    title: {
      fr: "Nuit dans le désert : ce qu'il faut savoir",
      en: "A night in the desert: what you need to know",
      ar: "ليلة في الصحراء: ما يجب أن تعرفه",
      es: "Noche en el desierto: lo que debe saber",
    },
    excerpt: {
      fr: "Vivre une nuit sous les étoiles du Sahara est une expérience unique. Voici comment bien la préparer et ce que vous allez vraiment vivre.",
      en: "Spending a night under the Sahara stars is a unique experience. Here is how to prepare and what you will really experience.",
      ar: "قضاء ليلة تحت نجوم الصحراء تجربة فريدة. إليك كيف تستعد وماذا ستعيش حقاً.",
      es: "Pasar una noche bajo las estrellas del Sáhara es una experiencia única. Así se prepara y lo que realmente vivirá.",
    },
    metaDescription: {
      fr: "Préparer une nuit dans le désert à Merzouga : bivouac, température, que prévoir et conseils pratiques.",
      en: "Prepare for a night in the desert in Merzouga: camp, temperature, what to pack and practical tips.",
      ar: "التحضير لليلة في صحراء مرزوكة: المخيم، الحرارة، ماذا تحضر ونصائح عملية.",
      es: "Preparar una noche en el desierto en Merzouga: campamento, temperatura, qué llevar y consejos prácticos.",
    },
    sections: {
      fr: [
        {
          type: "p",
          text: "Une nuit dans le désert reste l'un des souvenirs les plus forts d'un voyage à Merzouga. Entre le silence des dunes, le feu de camp et le ciel étoilé, l'expérience est simple et puissante.",
        },
        { type: "h2", text: "Que se passe-t-il concrètement ?" },
        {
          type: "p",
          text: "Souvent, la soirée commence par une balade en chameau ou une marche vers les dunes, suivie d'un dîner, de musique traditionnelle autour du feu, puis d'une nuit sous tente ou à la belle étoile selon la formule.",
        },
        { type: "h2", text: "Que faut-il prévoir ?" },
        {
          type: "ul",
          items: [
            "Vêtements chauds pour la nuit (même en été, le désert refroidit)",
            "Chaussures confortables pour marcher dans le sable",
            "Petite lampe ou lampe frontale",
            "Crème solaire et foulard pour la journée",
          ],
        },
        { type: "h2", text: "Maison d'hôtes ou bivouac ?" },
        {
          type: "p",
          text: "Le bivouac dans les dunes est magique. Dormir à Dar Shifa Shanti offre le confort d'une vraie chambre, l'hospitalité de la maison et un accès facile aux dunes pour les couchers et levers de soleil.",
        },
        { type: "h2", text: "Le ciel de Merzouga" },
        {
          type: "p",
          text: "Loin des lumières de la ville, le ciel nocturne est d'une clarté rare. Beaucoup de voyageurs disent que c'est le moment le plus émouvant de leur séjour.",
        },
      ],
      en: [
        {
          type: "p",
          text: "A night in the desert remains one of the strongest memories of a trip to Merzouga. Between the silence of the dunes, the campfire and the starry sky, the experience is simple and powerful.",
        },
        { type: "h2", text: "What actually happens?" },
        {
          type: "p",
          text: "Often the evening starts with a camel ride or a walk toward the dunes, followed by dinner, traditional music around the fire, then a night in a tent or under the open sky depending on the package.",
        },
        { type: "h2", text: "What should you pack?" },
        {
          type: "ul",
          items: [
            "Warm clothes for the night (even in summer the desert cools down)",
            "Comfortable shoes for walking in the sand",
            "A small torch or headlamp",
            "Sunscreen and a scarf for daytime",
          ],
        },
        { type: "h2", text: "Guesthouse or desert camp?" },
        {
          type: "p",
          text: "A camp in the dunes is magical. Staying at Dar Shifa Shanti offers the comfort of a real room, the hospitality of the house and easy access to the dunes for sunset and sunrise.",
        },
        { type: "h2", text: "The Merzouga sky" },
        {
          type: "p",
          text: "Far from city lights, the night sky is exceptionally clear. Many travelers say it is the most moving moment of their stay.",
        },
      ],
      ar: [
        {
          type: "p",
          text: "ليلة في الصحراء من أقوى ذكريات رحلة مرزوكة. بين صمت الكثبان ونار المخيم وسماء النجوم، التجربة بسيطة وقوية.",
        },
        { type: "h2", text: "ماذا يحدث عملياً؟" },
        {
          type: "p",
          text: "غالباً تبدأ الأمسية بجولة جمال أو مشي نحو الكثبان، ثم عشاء وموسيقى تقليدية حول النار، ثم ليلة في خيمة أو تحت السماء حسب العرض.",
        },
        { type: "h2", text: "ماذا تحضر؟" },
        {
          type: "ul",
          items: [
            "ملابس دافئة لليل (حتى في الصيف تبرد الصحراء)",
            "حذاء مريح للمشي في الرمل",
            "مصباح صغير أو أمامي",
            "واقي شمس ووشاح للنهار",
          ],
        },
        { type: "h2", text: "دار ضيافة أم مخيم؟" },
        {
          type: "p",
          text: "المخيم وسط الكثبان ساحر. الإقامة في دار شفاء شانتي تمنحك راحة غرفة حقيقية وضيافة الدار وسهولة الوصول للكثبان عند الغروب والشروق.",
        },
        { type: "h2", text: "سماء مرزوكة" },
        {
          type: "p",
          text: "بعيداً عن أضواء المدينة، تكون السماء الليلية صافية بشكل نادر. كثير من المسافرين يقولون إنها أعمق لحظة في رحلتهم.",
        },
      ],
      es: [
        {
          type: "p",
          text: "Una noche en el desierto sigue siendo uno de los recuerdos más fuertes de un viaje a Merzouga. Entre el silencio de las dunas, el fuego y el cielo estrellado, la experiencia es simple y poderosa.",
        },
        { type: "h2", text: "¿Qué ocurre en la práctica?" },
        {
          type: "p",
          text: "A menudo la velada empieza con un paseo en camello o una caminata hacia las dunas, seguida de cena, música tradicional alrededor del fuego y una noche en tienda o al raso según la fórmula.",
        },
        { type: "h2", text: "¿Qué debe llevar?" },
        {
          type: "ul",
          items: [
            "Ropa abrigada para la noche (incluso en verano el desierto enfría)",
            "Calzado cómodo para caminar en la arena",
            "Una linterna pequeña o frontal",
            "Protector solar y un pañuelo para el día",
          ],
        },
        { type: "h2", text: "¿Casa de huéspedes o campamento?" },
        {
          type: "p",
          text: "El campamento en las dunas es mágico. Dormir en Dar Shifa Shanti ofrece el confort de una habitación real, la hospitalidad de la casa y un acceso fácil a las dunas para los atardeceres y amaneceres.",
        },
        { type: "h2", text: "El cielo de Merzouga" },
        {
          type: "p",
          text: "Lejos de las luces de la ciudad, el cielo nocturno es de una claridad rara. Muchos viajeros dicen que es el momento más emocionante de su estancia.",
        },
      ],
    },
    ctaTitle: {
      fr: "Vivez une nuit inoubliable",
      en: "Live an unforgettable night",
      ar: "عش ليلة لا تُنسى",
      es: "Viva una noche inolvidable",
    },
    ctaText: {
      fr: "Contactez Dar Shifa Shanti pour organiser votre séjour à Merzouga.",
      en: "Contact Dar Shifa Shanti to organize your stay in Merzouga.",
      ar: "تواصل مع دار شفاء شانتي لتنظيم إقامتك في مرزوكة.",
      es: "Contacte Dar Shifa Shanti para organizar su estancia en Merzouga.",
    },
    ctaButton: {
      fr: "Nous contacter",
      en: "Contact us",
      ar: "تواصل معنا",
      es: "Contáctenos",
    },
    backToBlog: {
      fr: "← Retour au blog",
      en: "← Back to blog",
      ar: "→ العودة إلى المدونة",
      es: "← Volver al blog",
    },
  },
];

export function getArticle(slug: string) {
  return articles.find((a) => a.slug === slug);
}

export function getPostsForLocale(locale: Locale) {
  return articles.map((a) => ({
    slug: a.slug,
    title: a.title[locale],
    excerpt: a.excerpt[locale],
    date: a.date,
    dateLabel: a.dateLabel[locale],
    image: a.image,
    readingTime: a.readingTime[locale],
  }));
}
