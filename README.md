# Feather Fitness

A structured Next.js + Tailwind CSS website for the Feather Fitness badminton brand.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Reusable shared components
- Responsive page layouts
- Assets stored in `public/images`

## Pages

- `/` Home
- `/services` Services & Amenities
- `/booking` Interactive booking prototype
- `/membership` Membership tiers and feedback
- `/events` Events and community night
- `/about` Mission, vision and environments

## Local setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Deploy to Vercel

1. Push this repository to GitHub.
2. Import the repository in Vercel.
3. Framework preset: Next.js.
4. Build command: `npm run build`.
5. Output directory: leave blank/default.

## Project structure

```txt
app/          Route pages and global styles
components/   Shared UI components
data/         Shared navigation/footer data
public/images Brand and page assets
```

## Notes

This is a maintainable production foundation. The visual system is based on the supplied Figma screenshots and uses the available exported images as first-pass assets. Some photography can be replaced later with higher-resolution regenerated images while keeping the same layout and components.
