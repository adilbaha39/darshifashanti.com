export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  readingTime: string;
};

export const posts: Post[] = [
  {
    slug: "visiter-merzouga",
    title: "Guide complet pour visiter Merzouga",
    excerpt:
      "Tout ce qu'il faut savoir pour préparer votre séjour à Merzouga : comment y aller, que faire, où dormir et les meilleurs moments pour profiter de l'Erg Chebbi.",
    date: "2026-03-15",
    image: "/images/desert-adventure.jpg",
    readingTime: "6 min",
  },
  {
    slug: "meilleure-periode-erg-chebbi",
    title: "Quelle est la meilleure période pour aller à l'Erg Chebbi ?",
    excerpt:
      "Printemps, automne, hiver ou été ? Découvrez la saison idéale pour visiter les dunes de Merzouga selon vos envies et votre tolérance à la chaleur.",
    date: "2026-02-28",
    image: "/images/hero-sunset.jpg",
    readingTime: "5 min",
  },
  {
    slug: "nuit-dans-le-desert",
    title: "Nuit dans le désert : ce qu'il faut savoir",
    excerpt:
      "Vivre une nuit sous les étoiles du Sahara est une expérience unique. Voici comment bien la préparer et ce que vous allez vraiment vivre.",
    date: "2026-02-10",
    image: "/images/campfire.jpg",
    readingTime: "5 min",
  },
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}
