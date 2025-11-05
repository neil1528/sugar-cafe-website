# Sugar Cafe Website

A beautiful, fully responsive website for Sugar Cafe - a cozy and minimalist coffee shop in Imus, Philippines.

## 🎨 Features

- **Responsive Design**: Optimized for phones, tablets, and desktops
- **Cozy Aesthetic**: Warm brown and beige color palette with minimalist design
- **Multiple Pages**:
  - Home page with hero section, about, menu, gallery, reviews, and news
  - Dedicated About, Menu, Gallery, Reviews, Access/Location, and Contact pages
  - Placeholder Order page for future online ordering system
- **Interactive Contact Form**: Fully functional form that saves messages to JSON file
- **Google Maps Integration**: Embedded map showing cafe location
- **Social Media Links**: Quick access to Instagram and Facebook

## 🚀 Quick Start

### Installation

```bash
npm install
```

### Development

```bash
npm start
```

The application will start on port 5000 (or the port specified in your environment).

Visit `http://localhost:5000` to view the website.

## 📁 Project Structure

```
sugar-cafe/
├── client/                    # Frontend React application
│   ├── src/
│   │   ├── components/       # Reusable UI components
│   │   │   ├── Navigation.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── MenuSection.tsx
│   │   │   ├── GallerySection.tsx
│   │   │   ├── ReviewsSection.tsx
│   │   │   ├── ContactForm.tsx
│   │   │   ├── LocationSection.tsx
│   │   │   ├── AboutSection.tsx
│   │   │   └── NewsSection.tsx
│   │   ├── pages/           # Page components
│   │   │   ├── Home.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Menu.tsx
│   │   │   ├── Gallery.tsx
│   │   │   ├── Reviews.tsx
│   │   │   ├── Access.tsx
│   │   │   ├── Contact.tsx
│   │   │   └── Order.tsx
│   │   ├── App.tsx          # Main app component with routing
│   │   └── index.css        # Global styles with color theme
│   └── index.html           # HTML entry point
├── server/                   # Backend Express server
│   ├── routes.ts            # API routes
│   ├── storage.ts           # Storage interface and implementation
│   └── index.ts             # Server entry point
├── shared/                   # Shared code between client and server
│   └── schema.ts            # TypeScript types and Zod schemas
├── data/                     # Data storage
│   └── messages.json        # Contact form submissions
├── attached_assets/          # Generated images and assets
│   └── generated_images/    # AI-generated cafe images
└── README.md
```

## 🎨 Design System

### Color Palette

- **Primary Brown**: #8B5E3C - Used for headers, key elements, and primary buttons
- **Background Beige**: #F5EBDC - Soft, warm backgrounds
- **White**: #FFFFFF - Cards and alternating sections
- **Black**: #000000 - Text and high contrast elements
- **Accent Green**: #B9C9A7 - Call-to-action buttons and accents

### Typography

- **Headings**: Playfair Display (serif)
- **Body**: Poppins (sans-serif)

### Key Design Principles

- Generous white space for breathing room
- Rounded corners for a softer, welcoming feel
- Minimalist approach with focus on content
- Warm, inviting color scheme

## 📋 Pages Overview

### Home Page
- Hero section with logo and tagline
- About section introducing Sugar Cafe
- Menu preview with categories
- Photo gallery
- Customer reviews
- News and announcements

### Menu Page
Full menu organized into three categories:
- **Coffee**: Espresso, Americano, Cappuccino, Latte, Mocha, Cold Brew
- **Pastries**: Croissant, Pain au Chocolat, Cinnamon Roll, Muffin, Banana Bread, Scone
- **Specials**: Signature drinks and seasonal items

### Contact Page
- Functional contact form (name, email, message)
- Contact information (address, phone, email, hours)
- Form submissions saved to `data/messages.json`

### Access/Location Page
- Google Maps embed showing cafe location
- Address: B2 L49-B Nia Road, Woodsite I, Pasong Buaya II 4103 Imus, Philippines
- Directions and transportation info

## 🔧 API Endpoints

### POST `/api/contact`
Submit a contact form message

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Your message here"
}
```

**Response (Success):**
```json
{
  "success": true,
  "message": "Message received successfully",
  "data": {
    "id": "uuid",
    "name": "John Doe",
    "email": "john@example.com",
    "message": "Your message here",
    "createdAt": "2025-01-15T10:30:00.000Z"
  }
}
```

### GET `/api/contact/messages`
Retrieve all contact messages (for admin use)

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": "uuid",
      "name": "John Doe",
      "email": "john@example.com",
      "message": "Your message here",
      "createdAt": "2025-01-15T10:30:00.000Z"
    }
  ]
}
```

## 📝 Editing Content

### Menu Items
Edit menu categories and items in:
`client/src/components/MenuSection.tsx`

### Reviews
Edit customer reviews in:
`client/src/components/ReviewsSection.tsx`

### News/Announcements
Edit announcements in:
`client/src/components/NewsSection.tsx`

### Images
Replace images in:
`attached_assets/generated_images/`

Update image imports in the respective component files.

## 🛠️ Technology Stack

- **Frontend**: React, TypeScript, Tailwind CSS, Wouter (routing)
- **Backend**: Node.js, Express
- **Forms**: React Hook Form with Zod validation
- **UI Components**: Shadcn/ui
- **Build Tool**: Vite
- **Storage**: JSON file-based storage

## 📱 Responsive Design

The website is fully responsive with breakpoints for:
- Mobile: Base styles, single column layouts
- Tablet (768px+): 2-column grids, expanded navigation
- Desktop (1024px+): 3-column grids, full navigation bar

## 🌐 Location

**Sugar Cafe**  
B2 L49-B Nia Road, Woodsite I  
Pasong Buaya II 4103 Imus, Philippines

**Hours:**
- Monday - Friday: 7:00 AM - 9:00 PM
- Saturday - Sunday: 8:00 AM - 10:00 PM

**Contact:**
- Phone: (046) 123-4567
- Email: hello@sugarcafe.ph

## 📄 License

This project is created for Sugar Cafe.

---

Built with ☕ and ❤️ for Sugar Cafe
