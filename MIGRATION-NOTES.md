# Panto Furniture - Next.js Migration

This project has been successfully migrated from React (Vite) to Next.js 15 with App Router.

## What's New

### Enhanced Features
- **localStorage Persistence**: Theme and cart preferences now persist across page reloads
- **SEO Optimization**: Added metadata for all pages
- **Modern Stack**: Using Next.js 15 with App Router and Tailwind CSS v4
- **Improved Performance**: Server and client components optimized for better performance

### Tech Stack
- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS v4
- **State Management**: React Context API (ThemeContext, CartContext)
- **UI Components**: React Icons, Swiper (testimonials carousel)
- **Notifications**: SweetAlert2

## Project Structure

```
panto-furniture-nextjs/
├── public/
│   └── images/          # All static images
├── src/
│   ├── app/
│   │   ├── layout.js    # Root layout with Navbar/Footer
│   │   ├── page.js      # Home page
│   │   ├── shop/        # Shop page
│   │   ├── about/       # About page
│   │   └── contact/     # Contact page
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── Button.jsx
│   │   ├── Rating.jsx
│   │   ├── TooltipButton.jsx
│   │   ├── BasicToolTip.jsx
│   │   ├── home/        # Home page sections
│   │   └── shop/        # Shop components
│   ├── context/
│   │   ├── ThemeContext.jsx   # Dark/light mode with localStorage
│   │   └── CartContext.jsx    # Shopping cart with localStorage
│   ├── providers/
│   │   └── AppProviders.jsx   # Context providers wrapper
│   └── utils/
│       ├── products.js
│       ├── reviews.js
│       └── getImgUrl.js
```

## Getting Started

### Development
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000)

### Build
```bash
npm run build
```

### Production
```bash
npm start
```

## Key Features

### Pages
- **Home**: Hero section, Why Choose Us, Best Selling Products, Experiences, Materials, Testimonials
- **Shop**: Full product catalog with category filtering (Chair, Beds, Sofa, Lamp)
- **About**: Company information and experience section
- **Contact**: Contact information with materials and testimonials

### Functionality
- **Dark/Light Mode**: Toggle with persistence via localStorage
- **Shopping Cart**: Add to cart with duplicate prevention alerts
- **Product Filtering**: Filter by 4 categories
- **Responsive Design**: Mobile-first approach
- **Swiper Carousel**: Auto-playing testimonials slider
- **Image Optimization**: All images served from public directory

## Migration Changes

### React Router → Next.js App Router
- `NavLink` → `Link` from `next/link`
- `useLocation()` → `usePathname()` from `next/navigation`
- Client-side routing → File-based routing

### Image Handling
- Vite `import` → Public folder `/images/` paths
- Compatible with future `next/image` optimization

### Context Enhancement
- Added localStorage persistence to ThemeContext
- Added localStorage persistence to CartContext
- Proper hydration handling with `isInitialized` state

### Tailwind CSS v4
- Custom colors defined in `@theme inline`
- Class-based dark mode with `@variant dark`
- Custom utility classes in `@layer utilities`

## Custom Colors
- **Primary**: #E58411 (Orange)
- **Secondary**: #1E1E1E (Dark)
- **Secondary BG**: #F7F7F7 (Light Gray)

## Browser Support
Modern browsers with ES6+ support

## License
Same as original project
