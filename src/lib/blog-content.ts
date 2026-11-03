import type { Locale } from "@/i18n/config";

export type BlogSection = {
  type: "p" | "h2" | "ul" | "img";
  text?: string;
  items?: string[];
  src?: string;
  alt?: string;
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
  {
    slug: "ou-manger-a-merzouga",
    image: "/images/blog-tagine.webp",
    date: "2026-11-01",
    dateLabel: {
      fr: "1 novembre 2026",
      en: "1 November 2026",
      ar: "1 نوفمبر 2026",
      es: "1 de noviembre de 2026",
    },
    readingTime: {
      fr: "8 min de lecture",
      en: "8 min read",
      ar: "8 دقائق قراءة",
      es: "8 min de lectura",
    },
    kicker: {
      fr: "Guide pratique",
      en: "Practical guide",
      ar: "دليل عملي",
      es: "Guía práctica",
    },
    title: {
      fr: "Où manger à Merzouga : 7 restaurants à tester",
      en: "Where to eat in Merzouga: 7 restaurant types to try",
      ar: "أين تأكل في مرزوكة: 7 أنواع مطاعم للتجربة",
      es: "Dónde comer en Merzouga: 7 tipos de restaurantes",
    },
    excerpt: {
      fr: "Où manger à Merzouga sans piège à touristes ? Critères concrets, profils d'adresses, plats locaux et astuces budget près de l'Erg Chebbi.",
      en: "Where to eat in Merzouga without tourist traps? Practical criteria, types of places, local dishes and budget tips near Erg Chebbi.",
      ar: "أين تأكل في مرزوكة دون الوقوع في فخ السياح؟ معايير عملية وأنواع أماكن وأطباق محلية ونصائح للميزانية قرب إرغ شبي.",
      es: "¿Dónde comer en Merzouga sin trampas para turistas? Criterios prácticos, tipos de locales, platos locales y consejos de presupuesto cerca del Erg Chebbi.",
    },
    metaDescription: {
      fr: "Où manger à Merzouga quand on dort en maison d'hôtes ? Repérez les meilleurs restaurants Merzouga et savourez la cuisine locale. Réservez.",
      en: "Where to eat in Merzouga when staying in a guesthouse? Find reliable restaurants and local cuisine near Erg Chebbi. Book your stay.",
      ar: "أين تأكل في مرزوكة أثناء إقامتك في دار ضيافة؟ اكتشف المطاعم الموثوقة والمطبخ المحلي قرب إرغ شبي.",
      es: "¿Dónde comer en Merzouga si se aloja en una casa de huéspedes? Descubra restaurantes fiables y cocina local cerca del Erg Chebbi.",
    },
    sections: {
      fr: [
        {
          type: "p",
          text: "Vous avez réservé votre excursion dans les dunes, votre chambre, et il ne reste qu'une question : où manger à Merzouga sans tomber dans le piège à touristes ni payer trois fois le prix d'un tajine ? Entre les menus affichés en cinq langues, les adresses sans prix clair et les terrasses vides à l'heure du repas, le casse-tête est bien réel.",
        },
        {
          type: "p",
          text: "Cet article ne vous donne pas une liste de noms inventés ou de fausses notes. Son objectif est plus utile : vous proposer des critères concrets, des profils d'adresses et des repères de budget pour savoir où manger à Merzouga en toute confiance.",
        },
        {
          type: "p",
          text: "Petite précision honnête : les « 7 restaurants à tester » sont présentés comme des profils types. Le voyageur vérifie les noms, horaires et emplacements sur place. Les prix et les cartes changent vite dans le désert.",
        },
        {
          type: "img",
          src: "/images/blog-breakfast-dunes.webp",
          alt: "Petit-déjeuner marocain avec vue sur les dunes de l'Erg Chebbi",
        },
        { type: "h2", text: "Comment choisir où manger à Merzouga : les critères qui comptent" },
        { type: "h2", text: "Observer la clientèle locale" },
        {
          type: "p",
          text: "Un lieu où mangent des habitants et des travailleurs locaux est souvent un bon signe. À l'inverse, une salle vide avec un rabatteur devant la porte doit vous faire réfléchir. Demandez conseil à votre hébergement, sans forcément réserver chez lui : l'astuce marche presque toujours.",
        },
        { type: "h2", text: "Vérifier les prix avant de s'installer" },
        {
          type: "p",
          text: "Cherchez une carte ou un menu avec prix affichés. Demandez le prix du plat et de la boisson avant de commander. Comparez deux ou trois adresses autour de la place ou de la rue principale : l'écart peut être surprenant.",
        },
        { type: "h2", text: "Miser sur une carte courte et fraîche" },
        {
          type: "p",
          text: "Une carte limitée indique souvent des produits préparés du jour. Repérez les plats du jour, les grillades préparées devant vous, les légumes visibles. Évitez les cartes immenses qui mélangent pizza, sushi et tajine.",
        },
        { type: "h2", text: "Tenir compte de l'emplacement" },
        {
          type: "p",
          text: "Près d'Erg Chebbi, les restaurants peuvent être plus chers à cause de la logistique. Dans le village, les adresses simples restent plus abordables. Pensez à la distance à pied ou en voiture selon l'heure et la saison.",
        },
        { type: "h2", text: "Types d'adresses : village, hôtel, café simple" },
        {
          type: "p",
          text: "Les restaurants de village offrent de petites salles familiales, un service simple et une cuisine locale idéale pour découvrir la cuisine de tous les jours à prix doux. Vérifiez l'hygiène visible et demandez ce qui est disponible le jour même.",
        },
        {
          type: "p",
          text: "Les restaurants d'hôtel sont pratiques après une excursion ou pour un repas sans stress. Souvent plus chers et moins typiques, mais plus confortables. Vérifiez si le repas est inclus dans une formule ou facturé à part.",
        },
        {
          type: "p",
          text: "Les cafés simples conviennent pour un thé à la menthe, un jus, une soupe ou un en-cas. Budget accessible, ambiance locale. Demandez ce qui est réellement servi le jour même.",
        },
        { type: "h2", text: "Les 7 profils de restaurants à tester à Merzouga" },
        {
          type: "p",
          text: "Il s'agit de profils pour guider votre recherche, pas de noms inventés. Notez l'adresse exacte sur place.",
        },
        {
          type: "ul",
          items: [
            "Le restaurant de village tenu en famille — petite salle simple, tajine du jour ou brochettes, prix demandé avant de s'installer.",
            "La table de quartier sans chichi — fréquentée par les habitants, carte courte, couscous du vendredi ou harira.",
            "Le café simple pour un déjeuner léger — thé à la menthe, msemen, omelette ou soupe entre deux visites.",
            "Le restaurant d'hôtel pratique — utile après Erg Chebbi ; comparez le menu avec le village.",
            "La terrasse avec vue sur les dunes — souvent plus chère ; vérifiez prix et horaires, réservez en haute saison.",
            "L'adresse de cuisine berbère authentique — plats mijotés, galettes maison ; demandez composition et temps d'attente.",
            "Le spot petit budget — brochettes, sandwichs ou plat du jour ; espèces et monnaie à vérifier.",
          ],
        },
        { type: "h2", text: "Plats typiques à goûter pour savoir où manger à Merzouga" },
        {
          type: "p",
          text: "Le tajine (légumes, poulet, kefta, poisson selon arrivage) reste la base. Demandez s'il est préparé à la commande. Le couscous est souvent servi le vendredi. Le mechoui se commande parfois pour un groupe. Le thé à la menthe accompagne repas et pauses. Harira, msemen, omelette et brochettes conviennent pour un déjeuner léger et un budget maîtrisé.",
        },
        {
          type: "img",
          src: "/images/blog-mint-tea.webp",
          alt: "Thé à la menthe servi dans des verres traditionnels",
        },
        {
          type: "img",
          src: "/images/blog-harira.webp",
          alt: "Harira et salade marocaine, repas simple du quotidien",
        },
        { type: "h2", text: "Pièges à éviter quand on cherche où manger à Merzouga" },
        {
          type: "ul",
          items: [
            "Menus « touristiques » en plusieurs langues sans prix clair",
            "Rabatteurs insistants devant les restaurants",
            "Addition avec suppléments non annoncés",
            "Photos de plats qui ne correspondent pas à l'assiette",
            "Adresses vides à l'heure du repas, sans clients locaux",
            "Pourboires réclamés agressivement",
          ],
        },
        {
          type: "p",
          text: "Demandez le prix, vérifiez la monnaie et évitez les lieux sans carte visible.",
        },
        { type: "h2", text: "Astuces budget pour bien manger à Merzouga" },
        {
          type: "ul",
          items: [
            "Privilégiez le déjeuner pour tester une adresse moins chère qu'au dîner",
            "Partagez un tajine ou commandez des entrées simples",
            "Buvez de l'eau en bouteille scellée et limitez les sodas",
            "Demandez le plat du jour plutôt que la carte complète",
            "Prévoyez des espèces pour les petits cafés et restaurants de village",
            "Comparez le prix d'un menu à l'hôtel et dans une adresse locale",
            "Évitez les terrasses les plus touristiques aux heures de pointe",
          ],
        },
        { type: "h2", text: "Séjour au calme et repas locaux : l'option maison d'hôtes près des dunes" },
        {
          type: "p",
          text: "Une maison d'hôtes tranquille comme Dar Shifa Shanti, près d'Erg Chebbi, peut vous aider à identifier des adresses simples et fiables. L'équipe connaît souvent les restaurants ouverts, les plats du jour et les prix pratiqués. Cela évite de tourner en voiture ou de tomber sur une adresse uniquement touristique.",
        },
        {
          type: "img",
          src: "/images/blog-terrace-dinner.webp",
          alt: "Dîner en terrasse près des dunes de Merzouga au coucher du soleil",
        },
        {
          type: "p",
          text: "Demandez conseil à l'arrivée, sans obligation de manger sur place. Vérifiez si un dîner local peut être préparé sur demande et à quel prix. Précisez allergies, budget et horaire. Alternez repas au village, pique-nique léger et dîner en maison d'hôtes.",
        },
        { type: "h2", text: "Conclusion — Où manger à Merzouga avec confiance" },
        {
          type: "p",
          text: "Retenez les critères clés : prix affichés, clientèle locale, carte courte et hygiène visible. Testez les sept profils d'adresses sans chercher à tout prix un nom célèbre, et vérifiez sur place noms, horaires et emplacements : cet article donne une méthode, pas une liste figée.",
        },
        {
          type: "p",
          text: "Pour un séjour au calme près d'Erg Chebbi, une maison d'hôtes qui conseille sur la cuisine locale reste un atout. Découvrez les chambres de Dar Shifa Shanti et contactez-nous pour organiser vos repas et répondre à la question « où manger à Merzouga » sans mauvaise surprise.",
        },
      ],
      en: [
        {
          type: "p",
          text: "You've booked your desert excursion and your room, and only one question remains: where to eat in Merzouga without falling into the tourist trap or paying three times the price of a tajine? Between menus in several languages, places with no clear prices, and empty terraces at mealtime, the puzzle is real.",
        },
        {
          type: "p",
          text: "This article does not give a list of made-up names or fake reviews. Its goal is more useful: concrete criteria, profiles of places, and budget tips so you know where to eat in Merzouga with confidence.",
        },
        {
          type: "p",
          text: "Honest clarification: the \"7 restaurants to try\" are typical profiles, not fixed names. Verify names, opening hours, and locations on site. Prices and menus change quickly in the desert.",
        },
        {
          type: "img",
          src: "/images/blog-breakfast-dunes.webp",
          alt: "Moroccan breakfast with a view of the Erg Chebbi dunes",
        },
        { type: "h2", text: "How to choose where to eat in Merzouga: criteria that matter" },
        { type: "h2", text: "Observe the local clientele" },
        {
          type: "p",
          text: "A place where locals and workers eat is usually a good sign. An empty room with someone hustling customers at the door should make you think twice. Ask your accommodation for advice without feeling obliged to eat there.",
        },
        { type: "h2", text: "Check prices before sitting down" },
        {
          type: "p",
          text: "Look for a menu with displayed prices. Ask the price of the dish and the drink before ordering. Compare two or three places around the square or main street: the difference can be surprising.",
        },
        { type: "h2", text: "Go for a short, fresh menu" },
        {
          type: "p",
          text: "A limited menu often means food prepared that day. Look for dishes of the day, grills prepared in front of you, and visible vegetables. Avoid huge menus that mix pizza, sushi, and tajine.",
        },
        { type: "h2", text: "Take location into account" },
        {
          type: "p",
          text: "Near Erg Chebbi, restaurants can be more expensive due to logistics. In the village, simple places are usually more affordable. Consider distance on foot or by car depending on the time and season.",
        },
        { type: "h2", text: "Types of places: village, hotel, simple café" },
        {
          type: "p",
          text: "Village restaurants: small family rooms, simple service, and local cuisine ideal for everyday cooking at a reasonable price. Check visible hygiene and ask what is available that day.",
        },
        {
          type: "p",
          text: "Hotel restaurants: practical after an excursion or for a stress-free meal; often more expensive and less typical, but more comfortable. Check whether the meal is included in a package or billed separately.",
        },
        {
          type: "p",
          text: "Simple cafés: perfect for mint tea, juice, soup, or a snack, with an affordable budget and local atmosphere. Ask what is actually served that day.",
        },
        { type: "h2", text: "The 7 restaurant profiles to try in Merzouga" },
        {
          type: "p",
          text: "These are profiles to guide your search, not invented names. Note the exact address on site.",
        },
        {
          type: "ul",
          items: [
            "Family-run village restaurant — simple room and visible kitchen; tajine of the day or skewers; ask the price before sitting down.",
            "No-frills neighborhood table — locals, short menu; Friday couscous or harira.",
            "Simple café for a light lunch — mint tea, msemen, omelette, or soup between visits or before the dunes.",
            "Practical hotel restaurant — useful after Erg Chebbi; compare the menu with the village.",
            "Terrace with a view of the dunes — often more expensive; check prices and hours; book in high season.",
            "Authentic Berber cuisine — slow-cooked dishes and local products; ask about ingredients and waiting time.",
            "Budget spot — skewers, sandwich, or dish of the day; pay in cash and ask for change.",
          ],
        },
        { type: "h2", text: "Typical dishes to try when deciding where to eat in Merzouga" },
        {
          type: "p",
          text: "Tajine (vegetables, chicken, kefta, fish depending on supply) is the staple; ask if it is prepared to order. Couscous is often served on Fridays. Mechoui is sometimes ordered for a group. Mint tea goes with meals and breaks. Harira, msemen, omelette, and skewers suit a light lunch and a controlled budget.",
        },
        {
          type: "img",
          src: "/images/blog-mint-tea.webp",
          alt: "Moroccan mint tea in traditional glasses",
        },
        {
          type: "img",
          src: "/images/blog-harira.webp",
          alt: "Harira soup and Moroccan salad, simple everyday meal",
        },
        { type: "h2", text: "Traps to avoid when looking for where to eat in Merzouga" },
        {
          type: "ul",
          items: [
            "\"Tourist\" menus in several languages with no clear price",
            "Pushy people hustling customers in front of restaurants",
            "Bills that climb with unannounced extras",
            "Photos of dishes that do not match the plate served",
            "Empty places at mealtime with no local customers",
            "Tips demanded aggressively",
          ],
        },
        {
          type: "p",
          text: "Ask the price, check the change, and avoid places with no visible menu.",
        },
        { type: "h2", text: "Budget tips for eating well in Merzouga" },
        {
          type: "ul",
          items: [
            "Favor lunch to try a cheaper place than at dinner",
            "Share a tajine or order simple starters",
            "Drink sealed bottled water and limit sodas",
            "Ask for the dish of the day instead of the full menu",
            "Bring cash for small cafés and village restaurants",
            "Compare a hotel menu with a local place",
            "Avoid the most touristy terraces at peak times",
          ],
        },
        { type: "h2", text: "Quiet stay and local meals: the guesthouse option near the dunes" },
        {
          type: "p",
          text: "A quiet guesthouse like Dar Shifa Shanti, near Erg Chebbi, can help you identify simple and reliable places. The team often knows which restaurants are open, the dishes of the day, and typical prices, which avoids driving around or ending up at a tourist-only address.",
        },
        {
          type: "img",
          src: "/images/blog-terrace-dinner.webp",
          alt: "Dinner on a terrace near the Merzouga dunes at sunset",
        },
        {
          type: "p",
          text: "Ask for advice on arrival with no obligation to eat there. Check whether a local dinner can be prepared on request and at what price. Specify allergies, budget, and timing. Alternate village meals, a light picnic, and dinner at the guesthouse, and respect local customs.",
        },
        { type: "h2", text: "Conclusion — Where to eat in Merzouga with confidence" },
        {
          type: "p",
          text: "Remember the key criteria: displayed prices, local clientele, short menu, and visible hygiene. Try the seven profiles without chasing a famous name at all costs, and verify names, hours, and locations on site. This article offers a method, not a fixed list.",
        },
        {
          type: "p",
          text: "For a quiet stay near Erg Chebbi, a guesthouse that advises on local cuisine is a real plus. Discover the rooms at Dar Shifa Shanti and contact us: we will help you organize your meals and answer \"where to eat in Merzouga\" without bad surprises.",
        },
      ],
      ar: [
        {
          type: "p",
          text: "حجزت رحلتك إلى الكثبان وغرفتك، ولم يبقَ سوى سؤال واحد: أين تأكل في مرزوكة دون الوقوع في فخ السياح أو دفع ثلاثة أضعاف ثمن طاجين؟ بين قوائم معروضة بعدة لغات، وعناوين دون أسعار واضحة، وشرفات فارغة وقت الوجبة، يصبح الأمر حيرة حقيقية.",
        },
        {
          type: "p",
          text: "هذا المقال لا يقدّم قائمة أسماء مختلقة أو تقييمات وهمية. هدفه أن يمنحك معايير ملموسة وأنماط أماكن ومراجع للميزانية لتعرف أين تأكل في مرزوكة بثقة.",
        },
        {
          type: "p",
          text: "توضيح مهم: «المطاعم السبعة» هنا أنماط وليست أسماء محددة. تحقق من الأسماء والمواعيد والمواقع على عين المكان؛ فالأسعار والقوائم تتغير بسرعة في الصحراء.",
        },
        {
          type: "img",
          src: "/images/blog-breakfast-dunes.webp",
          alt: "فطور مغربي مع إطلالة على كثبان إرغ شبي",
        },
        { type: "h2", text: "كيف تختار أين تأكل في مرزوكة: المعايير المهمة" },
        { type: "h2", text: "راقب الزبائن المحليين" },
        {
          type: "p",
          text: "المكان الذي يأكل فيه السكان والعمال المحليون غالبًا علامة جيدة. أما القاعة الفارغة مع من يستجلب الزبائن أمام الباب فتستدعي الحذر. اطلب نصيحة من مكان إقامتك دون إلزام بالأكل عنده.",
        },
        { type: "h2", text: "تحقق من الأسعار قبل الجلوس" },
        {
          type: "p",
          text: "ابحث عن قائمة بأسعار معروضة. اسأل عن سعر الطبق والمشروب قبل الطلب. قارن عنوانين أو ثلاثة حول الساحة أو الشارع الرئيسي؛ الفرق قد يكون مفاجئًا.",
        },
        { type: "h2", text: "اعتمد قائمة قصيرة وطازجة" },
        {
          type: "p",
          text: "القائمة المحدودة تشير غالبًا إلى منتجات تُحضَّر في اليوم نفسه. لاحظ أطباق اليوم والمشويات أمامك والخضروات الظاهرة. تجنب القوائم الضخمة التي تخلط البيتزا والسوشي والطاجين.",
        },
        { type: "h2", text: "راعِ الموقع" },
        {
          type: "p",
          text: "قرب إرغ شبي قد تكون المطاعم أغلى بسبب النقل. في القرية تبقى الأماكن البسيطة أرخص. فكّر في المسافة سيرًا أو بالسيارة حسب الوقت والموسم.",
        },
        { type: "h2", text: "أنواع الأماكن: القرية، الفندق، المقهى البسيط" },
        {
          type: "p",
          text: "مطاعم القرية: قاعات عائلية صغيرة وخدمة بسيطة ومطبخ محلي مناسب لاكتشاف طعام الحياة اليومية بأسعار معقولة. تحقق من النظافة الظاهرة واسأل عما هو متوفر في اليوم نفسه.",
        },
        {
          type: "p",
          text: "مطاعم الفنادق: عملية بعد رحلة أو لوجبة دون قلق، وغالباً أغلى وأقل أصالة لكنها أكثر راحة. تحقق إن كانت الوجبة مشمولة في عرض أم تُحسب منفصلة.",
        },
        {
          type: "p",
          text: "المقاهي البسيطة: مناسبة لشاي بالنعناع أو عصير أو حساء أو وجبة خفيفة، بميزانية في المتناول وأجواء محلية. اسأل عما يُقدَّم فعليًا في ذلك اليوم.",
        },
        { type: "h2", text: "الأنماط السبعة للمطاعم في مرزوكة" },
        {
          type: "p",
          text: "هذه أنماط لإرشاد بحثك وليست أسماء مختلقة. دوّن العنوان الدقيق على عين المكان.",
        },
        {
          type: "ul",
          items: [
            "مطعم قرية تديره عائلة — قاعة بسيطة ومطبخ ظاهر؛ اطلب طاجين اليوم أو أسياخًا واسأل عن السعر قبل الجلوس.",
            "طاولة الحي دون تكلّف — يرتادها السكان، قائمة قصيرة؛ مناسبة لكسكس الجمعة أو الحريرة.",
            "مقهى بسيط لغداء خفيف — شاي بالنعناع، مسمن، أومليت أو حساء بين زيارتين أو قبل الكثبان.",
            "مطعم فندق عملي — مفيد بعد إرغ شبي؛ قارن سعر المنيو مع القرية.",
            "شرفة تطل على الكثبان — غالبًا أغلى؛ تحقق من الأسعار والمواعيد واحجز في الموسم المرتفع.",
            "مطبخ أمازيغي أصيل — أطباق مطهوة ببطء ومنتجات محلية؛ اسأل عن المكونات ووقت الانتظار.",
            "خيار الميزانية الصغيرة — أسياخ أو سندويش أو طبق اليوم؛ ادفع نقدًا واطلب الباقي.",
          ],
        },
        { type: "h2", text: "أطباق تقليدية تساعدك على معرفة أين تأكل في مرزوكة" },
        {
          type: "p",
          text: "الطاجين (خضروات، دجاج، كفتة، سمك حسب التوريد) أساس المائدة؛ اسأل إن كان يُحضَّر عند الطلب. الكسكس غالبًا يوم الجمعة. المشوي قد يُطلب لمجموعة. الشاي بالنعناع يرافق الوجبات والاستراحات. الحريرة والمسمن والأومليت والأسياخ مناسبة لغداء خفيف وميزانية مضبوطة.",
        },
        {
          type: "img",
          src: "/images/blog-mint-tea.webp",
          alt: "شاي بالنعناع في كؤوس تقليدية",
        },
        {
          type: "img",
          src: "/images/blog-harira.webp",
          alt: "حريرة وسلطة مغربية، وجبة يومية بسيطة",
        },
        { type: "h2", text: "فخاخ يجب تجنبها عند البحث عن أين تأكل في مرزوكة" },
        {
          type: "ul",
          items: [
            "قوائم «سياحية» بعدة لغات دون سعر واضح",
            "من يلحّ في استجلاب الزبائن أمام المطعم",
            "فاتورة بإضافات غير معلنة",
            "صور أطباق لا تطابق ما يُقدَّم",
            "أماكن فارغة وقت الوجبة دون زبائن محليين",
            "إكراميات تُطلب بإلحاح مفرط",
          ],
        },
        {
          type: "p",
          text: "اسأل عن السعر، تحقق من الباقي، وتجنب الأماكن دون قائمة ظاهرة.",
        },
        { type: "h2", text: "نصائح الميزانية للأكل الجيد في مرزوكة" },
        {
          type: "ul",
          items: [
            "فضّل الغداء لتجربة مكان أرخص من العشاء",
            "شارك طاجينًا أو اطلب مقبلات بسيطة",
            "اشرب ماءً في قنينة مغلقة وقلل المشروبات الغازية",
            "اطلب طبق اليوم بدل القائمة الكاملة",
            "جهّز نقدًا للمقاهي الصغيرة ومطاعم القرية",
            "قارن سعر منيو الفندق مع عنوان محلي",
            "تجنب الشرفات الأقرب للنقاط السياحية في ساعات الذروة",
          ],
        },
        { type: "h2", text: "إقامة هادئة ووجبات محلية: دار الضيافة قرب الكثبان" },
        {
          type: "p",
          text: "دار ضيافة هادئة مثل دار شفاء شانتي قرب إرغ شبي يمكنها مساعدتك في تحديد أماكن بسيطة وموثوقة. الفريق غالبًا يعرف المطاعم المفتوحة وأطباق اليوم والأسعار، فيجنّبك الدوران أو الوقوع على عنوان سياحي فقط.",
        },
        {
          type: "img",
          src: "/images/blog-terrace-dinner.webp",
          alt: "عشاء على الشرفة قرب كثبان مرزوكة عند الغروب",
        },
        {
          type: "p",
          text: "اطلب النصيحة عند الوصول دون إلزام بالأكل في المكان. تحقق إن أمكن تحضير عشاء محلي بالطلب وبأي سعر. حدّد الحساسية والميزانية والوقت. نوّع بين القرية ونزهة خفيفة وعشاء في دار الضيافة، مع احترام العادات المحلية.",
        },
        { type: "h2", text: "خاتمة — أين تأكل في مرزوكة بثقة" },
        {
          type: "p",
          text: "تذكّر المعايير: أسعار معروضة، زبائن محليون، قائمة قصيرة، ونظافة ظاهرة. جرّب الأنماط السبعة دون الإصرار على اسم شهير، وتحقق على عين المكان من الأسماء والمواعيد والمواقع. هذا المقال منهج وليس قائمة ثابتة.",
        },
        {
          type: "p",
          text: "للاستمتاع بإقامة هادئة قرب إرغ شبي، دار ضيافة تنصحك حول المطبخ المحلي مفيدة. اكتشف غرف دار شفاء شانتي وتواصل معنا لنساعدك في تنظيم وجباتك والإجابة عن «أين تأكل في مرزوكة» دون مفاجآت سيئة.",
        },
      ],
      es: [
        {
          type: "p",
          text: "Has reservado tu excursión a las dunas y tu habitación, y solo queda una pregunta: ¿dónde comer en Merzouga sin caer en la trampa turística ni pagar tres veces el precio de un tajine? Entre menús en varios idiomas, lugares sin precios claros y terrazas vacías a la hora de comer, el dilema es real.",
        },
        {
          type: "p",
          text: "Este artículo no ofrece una lista de nombres inventados ni reseñas falsas. Su objetivo es darte criterios concretos, perfiles de locales y referencias de presupuesto para saber dónde comer en Merzouga con confianza.",
        },
        {
          type: "p",
          text: "Aclaración importante: los «7 restaurantes» son perfiles tipo, no nombres fijos. Verifica en el lugar nombres, horarios y ubicaciones; precios y cartas cambian rápido en el desierto.",
        },
        {
          type: "img",
          src: "/images/blog-breakfast-dunes.webp",
          alt: "Desayuno marroquí con vistas a las dunas del Erg Chebbi",
        },
        { type: "h2", text: "Cómo elegir dónde comer en Merzouga: criterios que importan" },
        { type: "h2", text: "Observa a los clientes locales" },
        {
          type: "p",
          text: "Un lugar donde comen habitantes y trabajadores locales suele ser buena señal. Una sala vacía con alguien que capta clientes en la puerta debe hacerte dudar. Pide consejo a tu alojamiento sin obligarte a comer allí.",
        },
        { type: "h2", text: "Verifica los precios antes de sentarte" },
        {
          type: "p",
          text: "Busca una carta con precios visibles. Pregunta el precio del plato y de la bebida antes de pedir. Compara dos o tres locales cerca de la plaza o la calle principal: la diferencia puede sorprender.",
        },
        { type: "h2", text: "Apuesta por una carta corta y fresca" },
        {
          type: "p",
          text: "Una carta limitada suele indicar productos del día. Fíjate en platos del día, parrillas a la vista y verduras visibles. Evita cartas enormes que mezclan pizza, sushi y tajine.",
        },
        { type: "h2", text: "Ten en cuenta la ubicación" },
        {
          type: "p",
          text: "Cerca de Erg Chebbi los restaurantes pueden ser más caros por la logística. En el pueblo, los locales sencillos suelen ser más asequibles. Valora la distancia a pie o en coche según la hora y la temporada.",
        },
        { type: "h2", text: "Tipos de lugares: pueblo, hotel, café sencillo" },
        {
          type: "p",
          text: "Restaurantes de pueblo: salas familiares pequeñas, servicio sencillo y cocina local ideal para comer como en el día a día a precio moderado. Comprueba la higiene visible y pregunta qué hay ese día.",
        },
        {
          type: "p",
          text: "Restaurantes de hotel: prácticos tras una excursión o para comer sin estrés; a menudo más caros y menos típicos, pero más cómodos. Comprueba si la comida está incluida o se cobra aparte.",
        },
        {
          type: "p",
          text: "Cafés sencillos: perfectos para té con menta, zumo, sopa o un tentempié, con presupuesto accesible y ambiente local. Pregunta qué se sirve realmente ese día.",
        },
        { type: "h2", text: "Los 7 perfiles de restaurantes en Merzouga" },
        {
          type: "p",
          text: "Son perfiles para guiar tu búsqueda, no nombres inventados. Anota la dirección exacta en el lugar.",
        },
        {
          type: "ul",
          items: [
            "Restaurante de pueblo familiar — sala sencilla y cocina visible; tajine del día o brochetas; pregunta el precio antes de sentarte.",
            "Mesa de barrio sin pretensiones — clientes locales, carta corta; cuscús del viernes o harira.",
            "Café sencillo para almuerzo ligero — té con menta, msemen, tortilla o sopa entre visitas o antes de las dunas.",
            "Restaurante de hotel práctico — útil tras Erg Chebbi; compara el menú con el pueblo.",
            "Terraza con vistas a las dunas — a menudo más cara; verifica precios y horarios; reserva en temporada alta.",
            "Cocina bereber auténtica — guisos lentos y productos locales; pregunta ingredientes y tiempo de espera.",
            "Opción de bajo presupuesto — brochetas, bocadillo o plato del día; paga en efectivo y pide el cambio.",
          ],
        },
        { type: "h2", text: "Platos típicos para saber dónde comer en Merzouga" },
        {
          type: "p",
          text: "El tajine (verduras, pollo, kefta, pescado según suministro) es la base; pregunta si se prepara al momento. El cuscús suele servirse los viernes. El mechoui a veces se encarga para un grupo. El té con menta acompaña comidas y pausas. Harira, msemen, tortilla y brochetas van bien para un almuerzo ligero y un presupuesto controlado.",
        },
        {
          type: "img",
          src: "/images/blog-mint-tea.webp",
          alt: "Té con menta en vasos tradicionales",
        },
        {
          type: "img",
          src: "/images/blog-harira.webp",
          alt: "Harira y ensalada marroquí, comida sencilla del día a día",
        },
        { type: "h2", text: "Trampas a evitar al buscar dónde comer en Merzouga" },
        {
          type: "ul",
          items: [
            "Menús «turísticos» en varios idiomas sin precio claro",
            "Personas insistentes que captan clientes frente al local",
            "Cuenta con suplementos no anunciados",
            "Fotos de platos que no coinciden con lo servido",
            "Locales vacíos a la hora de comer sin clientes locales",
            "Propinas reclamadas con agresividad",
          ],
        },
        {
          type: "p",
          text: "Pregunta el precio, verifica el cambio y evita lugares sin carta visible.",
        },
        { type: "h2", text: "Consejos de presupuesto para comer bien en Merzouga" },
        {
          type: "ul",
          items: [
            "Prioriza el almuerzo para probar un local más barato que en la cena",
            "Comparte un tajine o pide entrantes sencillos",
            "Bebe agua en botella sellada y limita los refrescos",
            "Pide el plato del día en lugar de la carta completa",
            "Lleva efectivo para cafés pequeños y restaurantes de pueblo",
            "Compara el menú del hotel con un local del pueblo",
            "Evita las terrazas más turísticas en horas punta",
          ],
        },
        { type: "h2", text: "Estancia tranquila y comidas locales: casa de huéspedes cerca de las dunas" },
        {
          type: "p",
          text: "Una casa de huéspedes tranquila como Dar Shifa Shanti, cerca de Erg Chebbi, puede ayudarte a identificar locales sencillos y fiables. El equipo suele conocer restaurantes abiertos, platos del día y precios, y te evita dar vueltas o caer solo en opciones turísticas.",
        },
        {
          type: "img",
          src: "/images/blog-terrace-dinner.webp",
          alt: "Cena en terraza cerca de las dunas de Merzouga al atardecer",
        },
        {
          type: "p",
          text: "Pide consejo a la llegada sin obligación de comer allí. Pregunta si se puede preparar una cena local por encargo y a qué precio. Indica alergias, presupuesto y horario. Alterna pueblo, picnic ligero y cena en la casa de huéspedes, respetando las costumbres locales.",
        },
        { type: "h2", text: "Conclusión — Dónde comer en Merzouga con confianza" },
        {
          type: "p",
          text: "Recuerda los criterios: precios visibles, clientela local, carta corta e higiene visible. Prueba los siete perfiles sin buscar a toda costa un nombre famoso, y verifica en el lugar nombres, horarios y ubicaciones. Este artículo es un método, no una lista fija.",
        },
        {
          type: "p",
          text: "Para una estancia tranquila cerca de Erg Chebbi, una casa de huéspedes que aconseje sobre la cocina local es una ventaja. Descubre las habitaciones de Dar Shifa Shanti y contáctanos: te ayudaremos a organizar tus comidas y a responder «dónde comer en Merzouga» sin malas sorpresas.",
        },
      ],
    },
    ctaTitle: {
      fr: "Séjournez près des dunes",
      en: "Stay near the dunes",
      ar: "أقم قرب الكثبان",
      es: "Alojese cerca de las dunas",
    },
    ctaText: {
      fr: "Dar Shifa Shanti vous accueille à Merzouga et peut vous orienter vers des adresses simples pour bien manger.",
      en: "Dar Shifa Shanti welcomes you in Merzouga and can point you to simple places to eat well.",
      ar: "دار شفاء شانتي ترحب بكم في مرزوكة ويمكنها توجيهكم لأماكن بسيطة لتناول طعام جيد.",
      es: "Dar Shifa Shanti le recibe en Merzouga y puede orientarle hacia locales sencillos para comer bien.",
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
