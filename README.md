# petrovski.co

Personal portfolio website built with Next.js, showcasing my work as an Engineering Team Builder and Mobile Engineer.

🌐 **Live Site**: [https://petrovski.co](https://petrovski.co)

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: CSS with CSS Variables
- **Font**: Inter (Google Fonts)
- **Image Optimization**: Next.js Image component with WebP/AVIF support
- **Deployment**: Netlify

## Features

- 🎨 Dark mode design
- 📱 Fully responsive (mobile-first)
- ⚡ Optimized images with automatic WebP/AVIF conversion
- 🎭 Smooth animations and transitions
- 🔍 SEO optimized
- ♿ Accessibility considerations (reduced motion support)

## Getting Started

### Prerequisites

- Node.js 18+ 
- Yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/vladimirpetrovski/petrovski.co.git
cd petrovski.co
```

2. Install dependencies:
```bash
yarn install
```

3. Run the development server:
```bash
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `yarn dev` - Start development server
- `yarn build` - Build for production
- `yarn start` - Start production server
- `yarn lint` - Run ESLint

## Project Structure

```
petrovski.co/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles and CSS variables
│   └── articles/            # Article pages (if any)
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── Hero.tsx            # Hero section
│   ├── About.tsx           # About section
│   ├── Portfolio.tsx       # Portfolio/projects section
│   └── Footer.tsx         # Footer with contact info
├── public/
│   └── images/            # Static images
│       └── profile.jpeg   # Profile image
└── next.config.js         # Next.js configuration
```

## Deployment

The site is deployed on **Netlify** and live at [https://petrovski.co](https://petrovski.co).

The `netlify.toml` file contains the deployment configuration.

### Netlify Deployment

1. Connect your GitHub repository to Netlify
2. Netlify will automatically detect the Next.js configuration
3. The site will automatically deploy on every push to the main branch

The build uses Next.js standalone output for optimal deployment.

## Image Optimization

The site uses Next.js Image component which automatically:
- Converts images to WebP/AVIF formats
- Generates responsive image sizes
- Lazy loads images (except priority images)
- Optimizes image quality

Profile image is set to `priority` loading for optimal above-the-fold performance.

## Styling

The site uses CSS Variables for theming, making it easy to customize colors:

```css
:root {
  --color-bg: #1a1a1a;
  --color-text: #e5e5e5;
  --color-text-secondary: #b0b0b0;
  --color-accent: #e5e5e5;
  --color-border: #3a3a3a;
  --color-hover: #2a2a2a;
  --color-section-bg: #222222;
}
```

## Performance

- Images are automatically optimized by Next.js
- CSS is optimized and inlined
- Fonts are optimized with `next/font/google`
- Animations respect `prefers-reduced-motion`

## License

© 2026 Vladimir Petrovski. All rights reserved.
