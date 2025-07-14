# Copilot Instructions for Frijol Mágico

## Project Overview

- **Frijol Mágico** is a Next.js 15 (App Router) web platform for the Frijol Mágico Festival, focused on illustrators from the Coquimbo Region.
- Built with React 19, TypeScript, and Tailwind CSS. Uses Bun as the package manager.
- Google Sheets is used as a headless CMS for static content (see `src/services/googleSpreadsheetController.ts`).

## Key Architecture & Patterns

- **App Directory Structure:**
  - `src/app/` uses Next.js App Router. Each section (e.g., `catalogo`, `festivales`) is a route folder with its own `page.tsx` and components.
  - Shared UI components are in `src/components/`.
  - Data and config are in `src/data/` and `src/config/`.
  - TypeScript types are in `src/types/`.
- **Styling:**
  - Tailwind CSS is used throughout, with custom variants via `tailwind-variants`.
  - Global and section-specific styles are in `src/styles/`.
- **State Management:**
  - Uses Zustand for global state management.
- **Content Loading:**
  - Static data is loaded from Google Sheets via service in `src/services/`.
- **Parallax & Animation:**
  - GSAP and ScrollTrigger are used for parallax effects (see `ParallaxBackground.tsx`).

## Developer Workflows

- **Install dependencies:**
  - `bun install` (preferred) or `npm install`
- **Run development server:**
  - `bun run dev` or `npm run dev`
- **Build for production:**
  - `bun run build` or `npm run build`
- **Lint code:**
  - `bun run lint` or `npm run lint`
- **Format code:**
  - Prettier is configured; format on save or run via your editor.

## Project-Specific Conventions

- **Component Naming:**
  - Use PascalCase for components. Place section-specific components in their respective `components/` folders.
- **TypeScript:**
  - All code should be strongly typed. Types are defined in `src/types/` and section-specific `types/` folders.
- **Data Fetching:**
  - Use static generation (Next.js) where possible. For dynamic content, use the Google Sheets service.
- **No direct DOM manipulation:**
  - Use React refs and GSAP for animations; avoid direct DOM changes outside these patterns.
- **Accessibility:**
  - Use semantic HTML and provide alt text for all images.

## Integration Points

- **Google Sheets API:**
  - See `src/services/googleSpreadsheetController.ts` for data integration.
- **External Fonts:**
  - Managed via `next/font` and local font files in `public/fonts/`.
- **Images:**
  - Store section images in `public/sections/` and reference with Next.js `<Image />`.

## Example: Adding a New Festival Section

1. Create a new folder in `src/app/(sections)/festivales/{year}/`.
2. Add `page.tsx` and any components in a `components/` subfolder.
3. Add images to `public/sections/festivales/{year}/images/`.
4. Define types in `types/` if needed.

---

For questions about project structure or conventions, see `README.md` or ask the maintainers.
