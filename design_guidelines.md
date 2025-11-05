# Sugar Cafe - Design Guidelines

## Design Approach
**Reference-Based Approach**: Drawing inspiration from cozy minimalist café websites with warm, inviting aesthetics. Think simple, elegant coffee shop experiences with emphasis on comfort and approachability.

## Color Palette (User-Specified)
- **Primary Brown**: #8B5E3C (warm brown for headers, key elements)
- **Background Beige**: #F5EBDC (soft, warm backgrounds)
- **White**: #FFFFFF (cards, alternating sections)
- **Black**: #000000 (text, sharp contrast elements)
- **Accent Green**: #B9C9A7 (subtle accents, CTAs)

## Typography System
- **Headings**: Clean serif or rounded sans-serif, warm and inviting (48-32-24-20px scale)
- **Body Text**: Readable sans-serif, 16-18px for optimal readability
- **Navigation**: 14-16px, uppercase for modern café feel
- **Line Height**: Generous 1.6-1.8 for breathability

## Layout & Spacing
- **Spacing Scale**: Tailwind units of 4, 6, 8, 12, 16, 20 (p-4, p-6, p-8, etc.)
- **Container**: max-w-7xl with generous padding
- **White Space**: Abundant breathing room between sections (py-16 to py-24)
- **Rounded Corners**: Consistent border-radius (rounded-lg to rounded-2xl)

## Core Components

### Navigation Bar
- Sticky top navigation with warm beige background
- Logo on left, menu links centered or right-aligned
- Mobile: Hamburger menu with smooth slide-in drawer
- Links: Home, About, Menu, Gallery, Reviews, Access, Contact
- Social icons and "Order Now" CTA button in navigation

### Hero Section (Homepage)
- Full-width hero with large background image showing café ambiance
- Centered logo overlay with tagline below
- Prominent "Order Now" button with blurred background for readability
- Height: 80-90vh for impactful entry

### Section Layouts
- **About Us**: Single column with centered text, max-w-3xl, optional side image
- **Menu**: Grid layout (grid-cols-1 md:grid-cols-2 lg:grid-cols-3) for categories
- **Gallery**: Masonry or equal-height grid (grid-cols-2 lg:grid-cols-3) with hover effects
- **Reviews**: 3-column card layout (grid-cols-1 md:grid-cols-3) with testimonials
- **News/Announcements**: 2-3 column card grid with placeholder content

### Cards
- Rounded corners (rounded-xl)
- Subtle shadows (shadow-md to shadow-lg)
- White or beige backgrounds alternating
- Padding: p-6 to p-8
- Hover: Gentle lift effect (translate-y)

### Forms (Contact Page)
- Clean, single-column layout with generous spacing
- Input fields: Rounded borders, beige focus states
- Labels above inputs, clear hierarchy
- Submit button using green accent
- Contact info sidebar or below form

### Footer
- Multi-column layout (4 columns on desktop, stacked mobile)
- Sections: Quick Links, Contact Info, Hours, Social Media
- Social media icons (Instagram, Facebook) with hover effects
- Warm brown background with white/beige text
- Newsletter signup integration area

### Location/Access Page
- Full-width Google Maps embed (h-96)
- Address and directions below or beside map
- 2-column layout: Map + Written Directions/Hours

## Images Strategy
**Hero Image**: Large, warm café interior or artisan coffee preparation shot
**Gallery Placeholders**: 6-9 images showing drinks (latte art), pastries, café interior, outdoor seating
**About Section**: Optional cozy café lifestyle image
**Menu Categories**: Small icon images or photo backgrounds for each category card
**Use high-quality, warm-toned photography throughout**

## Responsive Breakpoints
- **Mobile**: Base styles, single column, stacked navigation
- **Tablet (md:768px)**: 2-column grids, expanded navigation
- **Desktop (lg:1024px)**: 3-column grids, full navigation bar

## Interactive Elements
- Smooth scroll behavior for anchor links
- Subtle hover states on cards and buttons (scale, shadow increase)
- Form validation feedback with green/red indicators
- Mobile menu slide-in animation
- Gallery lightbox for image viewing
- Minimal animations—focus on smooth transitions over flashy effects

## Accessibility
- High contrast text (black on beige/white)
- Clear focus states on interactive elements
- Alt text for all images
- Semantic HTML structure
- Form labels and ARIA attributes

This creates a warm, inviting, and highly functional café website that balances minimalism with cozy aesthetics.