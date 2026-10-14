# Dar Shifa Shanti — Site Web

Maison d'hôtes à Merzouga (Erg Chebbi, Maroc)

## Stack

- **Next.js 16** (App Router)
- **TypeScript**
- **React 19**
- **Tailwind CSS 4**

## Démarrage

```bash
npm install
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000)

## Structure

```
src/
├── app/
│   ├── page.tsx              → Accueil
│   ├── chambres/page.tsx     → Nos Chambres
│   ├── experiences/page.tsx  → Expériences
│   ├── a-propos/page.tsx     → À propos
│   ├── contact/page.tsx      → Contact & Réservation
│   ├── layout.tsx
│   └── globals.css
└── components/
    ├── Header.tsx
    └── Footer.tsx
```

## Images

Ajoutez vos photos dans `public/images/` en suivant les noms indiqués dans `public/images/LISEZ-MOI.txt`.

Les placeholders (dégradés marron) s'affichent tant que les images ne sont pas présentes.

## Contact intégré

Le formulaire de contact envoie la demande directement sur WhatsApp (+212 7 68 25 40 33).

## Google Maps

https://maps.app.goo.gl/Y1AqY7ip7QdJ1oRe8
