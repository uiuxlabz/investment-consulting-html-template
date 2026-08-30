# INVESTA — Investment Consulting & Wealth Management

**Tagline:** Smart Capital, Steady Growth.

A premium HTML template for investment consulting firms and wealth management advisors. Built with a sophisticated navy and gold color scheme, elegant DM Serif Display headings, and clean Inter body text. Framework-free: pure HTML, CSS, and vanilla JavaScript.

---

## Pages

| Page | File | Description |
|------|------|-------------|
| Home | [index.html](index.html) | Hero with background image, animated stats, service cards, testimonials carousel, CTA |
| About | [about.html](about.html) | Company story, leadership team, core values |
| Services | [services.html](services.html) | Detailed service cards with images, 4-step process timeline |
| Contact | [contact.html](contact.html) | Contact form with validation, info cards, office details |

---

## Brand Identity

- **Company:** INVESTA
- **Industry:** Investment Consulting & Wealth Management
- **Color Palette:** Navy `#1E3A5F` + Gold `#D4A853` + White `#F8FAFC` + Dark `#0F172A`
- **Typography:** DM Serif Display (headings) + Inter (body)
- **Logo Mark:** Gold square with "I" monogram

---

## Features

- **Responsive Design** — Fluid layout adapting to desktop, tablet (980px), and mobile (720px)
- **Scroll Reveal Animations** — Elements animate into view using IntersectionObserver
- **Animated Counters** — Stats count up when scrolled into view
- **Testimonials Carousel** — Auto-scrolling horizontal track with pause on hover
- **Form Validation** — Client-side validation with success/error feedback messages
- **Burger Menu** — Mobile navigation overlay with smooth transitions
- **Active Navigation** — Current page highlighted in nav
- **Dynamic Year** — Footer copyright year auto-updated via `[data-year]`
- **Reduced Motion** — Respects `prefers-reduced-motion` for accessibility
- **No Framework Dependencies** — Zero external libraries, pure vanilla HTML/CSS/JS

---

## File Structure

```
investment-consulting-html-template/
├── index.html
├── about.html
├── services.html
├── contact.html
├── README.md
└── assets/
    ├── css/
    │   └── style.css          (700+ lines — full design system)
    ├── js/
    │   └── main.js            (interactions & animations)
    └── img/
        ├── bg.png
        ├── about-2.jpg
        ├── about-3.png
        ├── carousel-1.jpg
        ├── carousel-2.jpg
        ├── carousel-3.jpg
        ├── customer-img-1.jpg
        ├── customer-img-2.jpg
        ├── customer-img-3.jpg
        ├── project-3.jpg
        ├── projects-1.jpg
        ├── projects-2.jpg
        ├── service-1.jpg
        ├── service-2.jpg
        ├── service-3.jpg
        └── service-4.jpg
```

---

## CSS Design System

The stylesheet (`assets/css/style.css`) is a complete design system with:

- **Custom Properties** — Colors, typography, spacing, shadows, transitions, z-index scale
- **Component Styles** — Header, hero, stats bar, service cards, testimonials, CTA, footer, forms
- **Page-Specific Styles** — About hero, team cards, values grid, service detail layout, contact form
- **Animation Classes** — `.reveal`, `.reveal--left`, `.reveal--right`, `.reveal--scale`, delay modifiers
- **Responsive Breakpoints** — 980px (tablet) and 720px (mobile)
- **Accessibility** — Reduced motion media query, print styles

---

## JavaScript Features

The script (`assets/js/main.js`) handles:

- **Burger Toggle** — Mobile navigation open/close
- **Active Nav** — Highlights current page link
- **Dynamic Year** — Updates `[data-year]` elements
- **Scroll Reveal** — IntersectionObserver triggers `.revealed` class
- **Counter Animation** — Animates `[data-count]` values with easing
- **Form Handling** — Validates `[data-form]` forms, shows `.form-ok` / `.form-err` messages
- **Smooth Scroll** — Anchor links with offset for fixed header
- **Testimonials Auto-scroll** — Pause on hover, respects reduced motion

---

## Quick Start

1. Open `index.html` in any modern browser
2. No build step required — no dependencies to install
3. All images are in `assets/img/`
4. Edit colors in `:root` CSS custom properties to rebrand

---

## Customization

Change the brand by modifying CSS custom properties in `assets/css/style.css`:

```css
:root {
  --navy: #1E3A5F;      /* Primary brand color */
  --gold: #D4A853;       /* Accent color */
  --white: #F8FAFC;      /* Background */
  --dark: #0F172A;       /* Text & dark sections */
}
```

Typography can be changed by updating the `@import` URL and `--font-heading` / `--font-body` variables.

---

*Built for INVESTA — Smart Capital, Steady Growth.*
