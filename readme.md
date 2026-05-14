```markdown
# Nexify — Digital Agency for Accessible Innovation

A modern, production-ready, and fully accessible website for a fictitious web agency. Built with semantic HTML5, vanilla CSS, and JavaScript — no frameworks, no CMS. Follows WCAG 2.1 AA standards, mobile-first design principles, and includes an interactive form, hamburger menu, dark/light theme toggle, and a formal accessibility statement.

🔗 **Live Demo:** *[Add your Netlify/Vercel/GitHub Pages link here]*

## 📸 Screenshots

| Homepage | Services | Accessibility Statement |
|----------|----------|------------------------|
| ![Homepage](https://placehold.co/600x400/3b82f6/white?text=Homepage+Preview) | ![Services](https://placehold.co/600x400/3b82f6/white?text=Services+Preview) | ![Accessibility](https://placehold.co/600x400/3b82f6/white?text=Accessibility+Preview) |

## ✨ Features

- ✅ **3 fully responsive pages** – Home, Services, Accessibility Statement
- ✅ **Mobile-first design** – Adapts seamlessly from 320px to 4K
- ✅ **Semantic HTML5** – ARIA labels, landmarks, skip-to-content link
- ✅ **WCAG 2.1 AA compliant** – High contrast, keyboard navigation, screen reader friendly
- ✅ **Interactive form** – Text, email, date, numeric fields with validation (demo mode)
- ✅ **Hamburger menu** – Pure JavaScript, touch-friendly, accessible
- ✅ **Dark/Light theme toggle** – Persistent using localStorage, positioned at top-right
- ✅ **Real image placeholders** – Unsplash images ready for replacement
- ✅ **Fixed dark footer** – Footer always stays dark, unaffected by theme toggle
- ✅ **Logo with image** – Placeholder icon before the brand name
- ✅ **No frameworks or CMS** – 100% vanilla HTML/CSS/JS

## 📁 Project Structure

## 🚀 Quick Start

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/nexify-agency.git
cd nexify-agency
```

### 2. Open the website

Simply open `index.html` in your browser, or use a local development server:

```bash
# Using Python 3
python -m http.server 8000

# Using VS Code Live Server extension
# Right-click on index.html → Open with Live Server
```

### 3. Customize images

Replace the Unsplash placeholder URLs in each `.html` file with your own images. Look for:

```html
<img src="https://images.unsplash.com/..." alt="...">
```

Also replace the logo placeholder:

```html
<img src="https://placehold.co/40x40/3b82f6/ffffff?text=N" alt="Nexify logo" class="logo-img">
```

### 4. Update content

Modify the text, contact information, and services descriptions directly in the HTML files.

## 🎨 Customization Guide

### Changing colors

Edit the CSS variables in `css/style.css`:

```css
:root {
    --primary: #3b82f6;      /* Main brand color */
    --primary-dark: #2563eb; /* Darker hover state */
    --primary-light: #60a5fa;/* Lighter accent */
    --dark: #0f172a;         /* Text color light mode */
    --white: #ffffff;        /* Background light mode */
}
```

### Adding your own logo

1. Place your logo image in the `images/` folder
2. Update the `src` attribute in all `.html` files:

```html
<img src="images/your-logo.png" alt="Nexify logo" class="logo-img">
```

## 🛠️ Technologies Used

- **HTML5** – Semantic markup, ARIA, modern input types
- **CSS3** – CSS Grid, Flexbox, custom properties (variables), media queries
- **Vanilla JavaScript** – DOM manipulation, event handling, localStorage
- **Google Fonts** – Inter font family
- **Unsplash** – High-quality placeholder images (replaceable)
