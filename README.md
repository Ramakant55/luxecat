# LuxeCater - Premium Catering Services Website

A modern, elegant, and animated catering services website built with React + Vite, featuring smooth animations, glassmorphism design, and a luxurious color palette.

## Features

- Beautiful animated hero section with floating food items
- Smooth scroll animations on each section
- Sticky modern navbar with hover glow effects
- Responsive layout for mobile/tablet/desktop
- Pages: Home, About Us, Our Menu, Signature Dishes Gallery, Pricing Packages, Testimonials, Booking Form, Contact Info
- Attractive CTA buttons with neon glow + glassmorphism style
- Form validation with React Hook Form
- Lightbox gallery using simple-react-lightbox
- Parallax effects and floating UI elements with Framer Motion

## Tech Stack

- **React** + **Vite** - For fast development and optimized builds
- **TailwindCSS** - For styling and responsive design
- **Framer Motion** - For smooth animations and page transitions
- **React Hook Form** - For form validation
- **Lucide React** - For beautiful icons
- **Simple React Lightbox** - For image gallery lightbox
- **Google Fonts** - Playfair Display (headings) + Poppins (body)

## Color Palette

- Cream White: #FFF8F0
- Gold Gradient: #D4AF37, #E6C567, #B8860B
- Forest Green: #228B22, #32CD32, #006400
- Pastel Peach: #FFDAB9, #FFE5B4, #E9967A

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## Folder Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   └── FloatingFoodItems.jsx
├── pages/
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Menu.jsx
│   ├── Gallery.jsx
│   ├── Pricing.jsx
│   ├── Testimonials.jsx
│   ├── Booking.jsx
│   └── Contact.jsx
├── App.jsx
├── main.jsx
└── index.css
```

## Available Scripts

- `npm run dev` - Starts the development server
- `npm run build` - Builds the project for production
- `npm run preview` - Previews the production build locally

## Customization

To customize the website:

1. Update the color palette in `tailwind.config.js`
2. Modify content in the page components
3. Replace images with your own
4. Adjust animations in components as needed

## License

This project is open source and available under the MIT License.