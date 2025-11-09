# Sugar Cafe Website - Project Documentation

## Project Overview

Sugar Cafe is a fully responsive, modern website for a cozy coffee shop in Imus, Philippines. The site features a warm, minimalist design with brown and beige color palette, showcasing the cafe's menu, gallery, customer reviews, and location information.

## Architecture

### Frontend
- **Framework**: React with TypeScript
- **Routing**: Wouter (lightweight React router)
- **Styling**: Tailwind CSS with custom theme
- **UI Components**: Shadcn/ui component library
- **Forms**: React Hook Form with Zod validation
- **State Management**: React Query for server state

### Backend
- **Runtime**: Node.js
- **Framework**: Express
- **Storage**: In-memory storage with JSON file persistence
- **Validation**: Zod schemas shared between frontend and backend

## Key Features Implemented

1. **Multi-page Website**
   - Home (with all sections combined)
   - About
   - Menu
   - Gallery
   - Reviews
   - Access/Location
   - Contact
   - Order (placeholder)

2. **Functional Contact Form**
   - Client-side validation with Zod
   - Server-side validation
   - Saves messages to `data/messages.json`
   - Success/error toast notifications
   - Form reset after successful submission

3. **Responsive Design**
   - Mobile-first approach
   - Breakpoints: mobile, tablet (768px), desktop (1024px)
   - Collapsible mobile navigation
   - Adaptive layouts for all screen sizes

4. **Content Sections**
   - Hero with logo and CTA
   - About with mission and values
   - Menu with three categories (Coffee, Pastries, Specials)
   - Photo gallery (8 AI-generated images)
   - Customer reviews (3 testimonials)
   - News/announcements (3 cards)
   - Google Maps integration for location

## Design System

### Colors (HSL format in index.css)
- Background: Warm beige (30 45% 93%)
- Card: White (0 0% 100%)
- Primary: Warm brown (25 35% 38%)
- Accent: Soft green (90 27% 72%)
- Foreground: Black (0 0% 0%)

### Typography
- Sans-serif: Poppins
- Serif: Playfair Display (for headings)

### Component Standards
- All interactive elements have hover states
- Cards use hover-elevate for subtle animations
- Rounded corners (border-radius: 0.5rem)
- Consistent spacing scale (Tailwind's spacing system)

## File Structure

```
/client
  /src
    /components      # Reusable UI components
    /pages          # Page-level components
    /lib            # Utility functions, queryClient
    App.tsx         # Main app with routing
    index.css       # Global styles and theme

/server
  routes.ts         # API endpoints
  storage.ts        # Storage interface and implementation
  index.ts          # Express server setup

/shared
  schema.ts         # Shared TypeScript types and Zod schemas

/data
  messages.json     # Persisted contact messages

/attached_assets
  /generated_images # AI-generated cafe images
```

## API Endpoints

- `POST /api/contact` - Submit contact form
- `GET /api/contact/messages` - Get all contact messages

## Storage Implementation

Uses in-memory storage with file persistence:
- Contact messages saved to `data/messages.json`
- Auto-creates data directory if it doesn't exist
- Loads existing messages on server start
- Saves immediately after each new message

## Testing

Contact form functionality has been tested end-to-end:
- Form validation (client and server)
- Message persistence to JSON file
- Success feedback to user
- Form reset after submission

## Development Notes

### Content Editing
All content (menu items, reviews, announcements) is currently hardcoded in component files for easy editing. To update:
- Menu: `client/src/components/MenuSection.tsx`
- Reviews: `client/src/components/ReviewsSection.tsx`
- News: `client/src/components/NewsSection.tsx`

### Future Enhancements
- Online ordering system (currently placeholder)
- Admin dashboard to view contact messages
- Content management system for menu/announcements
- Image upload for gallery
- Newsletter signup
- Customer loyalty program integration

## Running the Application

```bash
npm install  # Install dependencies
npm start    # Start the application
```

The app runs on port 5000 by default.

## Recent Changes

- January 2025: Initial website launch with all core features
- Contact form integrated with backend storage
- All pages designed and implemented with responsive layouts
- AI-generated placeholder images for gallery and sections
