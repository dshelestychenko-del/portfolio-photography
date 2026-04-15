# Photography Portfolio

A modern, minimalist Next.js portfolio website for professional brand and product photography services.

## Features

- **Next.js 14** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Responsive design** for all devices
- **Minimalist aesthetic** with clean typography
- **One-page landing** with smooth sections

## Project Structure

```
portfolio-photography/
|-- app/                    # Next.js App Router
|   |-- globals.css        # Global styles
|   |-- layout.tsx         # Root layout
|   |-- page.tsx           # Home page
|-- components/             # React components
|   |-- sections/          # Landing page sections
|   |   |-- Hero.tsx
|   |   |-- About.tsx
|   |   |-- SpecialOffers.tsx
|   |   |-- Services.tsx
|   |   |-- Portfolio.tsx
|   |   |-- WorkProcess.tsx
|   |   |-- Contacts.tsx
|   |   |-- Footer.tsx
|   |-- ui/               # Reusable UI components
|-- data/                  # Static data and content
|-- public/               # Static assets
|   |-- images/          # Image assets
|-- styles/              # Additional styles
```

## Sections

The landing page includes the following sections:

1. **Hero** - Main introduction with call-to-action
2. **About** - Professional background and expertise
3. **Special Offers** - Photography packages and pricing
4. **Services** - Detailed service offerings
5. **Portfolio** - Work showcase and examples
6. **Work Process** - Project workflow and conditions
7. **Contacts** - Contact information and form
8. **Footer** - Site navigation and social links

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build & Deploy

```bash
# Build for production
npm run build

# Start production server
npm start
```

## Customization

- **Colors**: Modify `tailwind.config.js` to update the color scheme
- **Fonts**: Update font imports in `app/layout.tsx`
- **Content**: Edit section components in `components/sections/`
- **Images**: Add your portfolio images to `public/images/`

## Technologies Used

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **React** - UI library

## License

© 2024 Photography Studio. All rights reserved.
