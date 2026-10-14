export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    "@id": "https://darshifashanti.com/#business",
    name: "Dar Shifa Shanti",
    description:
      "Maison d'hôtes authentique à Merzouga, au pied des dunes de l'Erg Chebbi. Hospitalité marocaine, chambres traditionnelles et expériences sahariennes.",
    url: "https://darshifashanti.com",
    telephone: "+212768254033",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Merzouga",
      addressRegion: "Drâa-Tafilalet",
      addressCountry: "MA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 31.0801,
      longitude: -4.0134,
    },
    image: [
      "https://darshifashanti.com/images/hero.webp",
      "https://darshifashanti.com/images/blue-room.webp",
      "https://darshifashanti.com/images/desert-room.webp",
    ],
    priceRange: "$$",
    currenciesAccepted: "MAD, EUR",
    paymentAccepted: "Cash, Bank Transfer",
    checkinTime: "14:00",
    checkoutTime: "11:00",
    numberOfRooms: 4,
    petsAllowed: false,
    smokingAllowed: false,
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Petit-déjeuner inclus", value: true },
      { "@type": "LocationFeatureSpecification", name: "Wi-Fi", value: true },
      { "@type": "LocationFeatureSpecification", name: "Climatisation", value: true },
      { "@type": "LocationFeatureSpecification", name: "Terrasse", value: true },
    ],
    sameAs: [
      "https://maps.app.goo.gl/Y1AqY7ip7QdJ1oRe8",
    ],
    potentialAction: {
      "@type": "ReserveAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://wa.me/212768254033",
        actionPlatform: [
          "http://schema.org/DesktopWebPlatform",
          "http://schema.org/MobileWebPlatform",
        ],
      },
      result: {
        "@type": "LodgingReservation",
        name: "Réservation Dar Shifa Shanti",
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
