# Frijol Mágico Cultural Association

Frijol Mágico is a space that brings together illustrators from the Coquimbo Region, creating various opportunities to enhance their work. This modern web platform, built with Next.js, React, and TypeScript, serves as the digital hub for the Frijol Mágico Festival, facilitating communication, open calls, and artist participation in the annual event.

## 🌱 About the Project

Frijol Mágico is more than just a festival; it's a community that seeks to showcase and empower the work of local illustrators. Through this platform, artists can:

- Stay informed about the latest news and events
- Participate in open calls for the annual festival
- Connect with other illustrators in the region
- Access resources and opportunities from the artistic community

The website serves as a digital meeting point for this community, providing information about the upcoming festival, important dates, and ways to participate.

## 🚀 Technologies Used

- **Frontend Framework**: Next.js 15 (App Router)
- **UI Components**: React 19 and TypeScript
- **Styling**: Tailwind CSS (with `tailwind-variants` and custom variants)
- **Content Management**: Google Sheets as a headless CMS (via `google-spreadsheet`)
- **State Management**: Zustand
- **Parallax & Animation**: GSAP and ScrollTrigger
- **Code Quality**: ESLint and Prettier
- **Package Manager**: Bun (preferred) or npm

## 📦 Prerequisites

- Node.js (v18 or later)
- Bun (preferred) or npm package manager
- Google Cloud Platform account (for Google Sheets API if needed)

## 🏗️ Project Structure

```
src/
├── app/              # Next.js app directory with App Router (routes, layouts, sections)
│   ├── (home)/       # Home page and its components
│   ├── (sections)/   # Main sections (catalogo, festivales, convocatoria, etc.)
│   └── layout.tsx    # Root layout
├── components/       # Shared UI components (Header, Footer, Grid, etc.)
│   └── ui/           # UI primitives (Button, Pagination, etc.)
├── config/           # App configuration (paths, etc.)
├── data/             # Static site data (site.json, etc.)
├── lib/              # Shared libraries and utilities
├── services/         # Data fetching and integration (Google Sheets, etc.)
├── styles/           # Global and section-specific styles (Tailwind CSS)
└── types/            # TypeScript type definitions
public/
├── fonts/            # Local fonts
├── images/           # Shared images
└── sections/         # Section-specific images and assets
```

## 📝 Scripts

- `bun run dev` / `npm run dev`: Start the development server
- `bun run build` / `npm run build`: Create a production build
- `bun run start` / `npm run start`: Start the production server
- `bun run lint` / `npm run lint`: Run ESLint for code quality

## 📐 Project Conventions

- **Component Naming**: PascalCase for components; section-specific components in their own folders
- **TypeScript**: All code is strongly typed; types in `src/types/` and section-specific folders
- **Styling**: Tailwind CSS with custom variants; global and section styles in `src/styles/`
- **State Management**: Zustand for global state
- **Data Fetching**: Static generation preferred; dynamic content via Google Sheets service
- **No direct DOM manipulation**: Use React refs and GSAP for animations
- **Accessibility**: Semantic HTML and alt text for all images
- **Images**: Use Next.js `<Image />` and store in `public/sections/`

---

Built with ❤️ by Strocs
