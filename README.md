# Frijol Mágico Cultural Association

Frijol Mágico is a space that brings together illustrators from the Coquimbo Region, creating various opportunities to enhance their work. This modern web platform, built with Next.js, React, and TypeScript, serves as the digital hub for the Frijol Mágico Festival, facilitating communication, open calls, and artist participation in the annual event.

## 🌱 About the Project

Frijol Mágico is more than just a festival; it's a community that seeks to showcase and empower the work of local illustrators. Through this platform, artists can:

- Stay informed about the latest news and events
- Participate in open calls for the annual festival
- Connect with other illustrators in the region
- Access resources and opportunities from the artistic community

The website serves as a digital meeting point for this community, providing information about the upcoming festival, important dates, and ways to participate.

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or later)
- Bun (preferred) or npm package manager
- Google Cloud Platform account (for Google Sheets API)

### Installation

1. **Clone the repository**

   ```bash
   git clone [repository-url]
   cd frijolmagico
   ```

2. **Install dependencies**

   ```bash
   bun install
   # or
   npm install
   ```

3. **Set up environment variables**

   - Create a `.env.local` file in the root directory
   - Add the required environment variables (see Environment Variables section)

4. **Run development server**

   ```bash
   bun run dev
   # or
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🛠️ Technologies Used

- **Frontend Framework**: Next.js 15 (App Router)
- **UI Components**: React 19 and TypeScript
- **Styling**: Tailwind CSS with custom variants and `class-variance-authority`
- **Content Management**: Google Sheets as headless CMS (via `google-spreadsheet`)
- **State Management**: Zustand
- **Animation**: GSAP and ScrollTrigger (via `@gsap/react`)
- **Code Quality**: ESLint and Prettier
- **Package Manager**: Bun (preferred) or npm
- **Additional Libraries**:
  - `clsx` and `tailwind-merge` for conditional styling
  - `react-markdown` for markdown content rendering
  - `next-sitemap` for SEO sitemap generation
  - `lucide-react` for iconography

## 🔧 Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```bash
# Google Sheets API Configuration
GOOGLE_API_KEY=your_google_api_key_here
CATALOG_SHEET_ID=your_catalog_sheet_id_here

# Site Configuration
SITE_URL=https://frijolmagico.cl

# Vercel Environment (automatically set in production)
VERCEL_ENV=production
```

**Note**: In development mode, the app uses mock data, so Google Sheets configuration is optional for local development.

## 🏗️ Project Structure

```
src/
├── app/              # Next.js app directory with App Router
│   ├── (home)/       # Home page and its components
│   ├── (sections)/   # Main sections (catalogo, festivales, convocatoria, etc.)
│   │   └── */store/  # Section-specific Zustand stores
│   └── layout.tsx    # Root layout
├── components/       # Shared UI components (Header, Footer, Grid, etc.)
│   └── ui/           # UI primitives (Button, Pagination, etc.)
├── config/           # App configuration (paths, etc.)
├── data/             # Static site data (site.json, etc.)
├── lib/              # Shared libraries and utilities
├── services/         # Data fetching and integration (Google Sheets, etc.)
├── styles/           # Global and section-specific styles
│   └── palettes/     # Color palette system
└── types/            # TypeScript type definitions
public/
├── fonts/            # Local fonts
├── images/           # Shared images
└── sections/         # Section-specific images and assets
```

## 📝 Scripts

- `bun run dev` / `npm run dev`: Start development server with Turbopack
- `bun run build` / `npm run build`: Create production build
- `bun run postbuild`: Generate sitemap (runs automatically after build)
- `bun run start` / `npm run start`: Start production server
- `bun run lint` / `npm run lint`: Run ESLint for code quality

## 📊 Data Management

The application uses a flexible data management system:

- **Development Environment**: Uses mock data for faster development and testing
- **Production Environment**: Integrates with Google Sheets API for real-time content
- **Environment Detection**: Automatically switches data sources based on `VERCEL_ENV` or `NODE_ENV`
- **Error Handling**: Graceful fallbacks with user-friendly error messages
- **Type Safety**: All data structures are strongly typed with TypeScript

## 🎨 Advanced Styling Features

### Flexible Color Palette System

- **Dynamic Theming**: Uses `[data-palette]` attributes for context-specific styling
- **CSS-in-Tailwind**: Custom CSS themes defined in `@theme` blocks
- **Flexible Tokens**: Color tokens that can be overridden per section/component
- **Festival-Specific Palettes**: Dedicated color schemes for different festival years

### Custom Animations

- **Card Slides**: Infinite scrolling animations for promotional content
- **Soft Bounce**: Subtle hover effects and micro-interactions
- **Keyframe System**: Custom CSS animations integrated with Tailwind
- **Accessibility**: Respects `prefers-reduced-motion` for accessibility

### Responsive Design

- **Mobile-First**: Progressive enhancement from mobile to desktop
- **Custom Breakpoints**: Tailored breakpoints for optimal viewing experience
- **Grid System**: Flexible grid components for complex layouts

## 🚀 Deployment

- **Production URL**: [https://frijolmagico.cl](https://frijolmagico.cl)
- **Platform**: Optimized for Vercel deployment
- **SEO**: Automatic sitemap generation via `next-sitemap`
- **Performance**: Static generation with dynamic data fetching
- **Environment Handling**: Automatic environment detection and configuration

## 📐 Development Guidelines

### Component Conventions

- **Naming**: PascalCase for components; section-specific components in dedicated folders
- **Structure**: Co-locate components with their styles, types, and tests
- **Composition**: Prefer composition over inheritance; use compound components pattern

### TypeScript Standards

- **Strict Typing**: All code is strongly typed with strict TypeScript configuration
- **Type Organization**: Types in `src/types/` for global types, section-specific types in respective folders
- **Interface Naming**: Use descriptive interface names with proper suffixes (Props, State, Config)

### Styling Guidelines

- **Tailwind CSS**: Primary styling solution with custom variants and extensions
- **Class Composition**: Use `clsx` and `tailwind-merge` for conditional and merged classes
- **Component Variants**: Leverage `class-variance-authority` for component API design
- **Custom CSS**: Minimal custom CSS; prefer Tailwind utilities and custom theme tokens

### State Management

- **Zustand**: Preferred for client-side state management
- **Local State**: Use React's built-in state for component-specific data
- **URL State**: Sync filters and navigation state with URL parameters
- **Server State**: Fetch data at build time when possible; use dynamic fetching sparingly

### Data Fetching

- **Static Generation**: Preferred approach for most content
- **Dynamic Content**: Google Sheets integration for real-time data updates
- **Error Boundaries**: Implement proper error handling and user feedback
- **Loading States**: Provide skeleton loaders and loading indicators

### Accessibility

- **Semantic HTML**: Use proper HTML elements and structure
- **ARIA Labels**: Provide meaningful labels for screen readers
- **Keyboard Navigation**: Ensure full keyboard accessibility
- **Image Alt Text**: Descriptive alt text for all images and graphics
- **Motion Preferences**: Respect user preferences for reduced motion

### Performance

- **Image Optimization**: Use Next.js `<Image />` component for all images
- **Code Splitting**: Leverage Next.js automatic code splitting
- **Bundle Analysis**: Monitor bundle size and optimize imports
- **Core Web Vitals**: Maintain excellent performance scores

### File Organization

- **Images**: Store in `public/sections/` for section-specific assets
- **Fonts**: Local fonts in `public/fonts/` with proper loading strategies
- **Icons**: Use `lucide-react` for consistent iconography
- **Data**: Static data in `src/data/`, dynamic data via services

---

Built with ❤️ by [Strocs](https://github.com/Strocs)
