```markdown
# Nexify — Digital Agency for Accessible Innovation

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

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

```
web-agency-project/
│
├── index.html              # Homepage
├── services.html           # Services page (third page)
├── accessibility.html      # Accessibility statement (DIGG template)
│
├── css/
│   └── style.css           # All styles (no frameworks)
│
├── js/
│   └── script.js           # Hamburger menu, theme toggle, form validation
│
└── images/                 # (Optional) Your custom images folder
    └── (add your images here)
```

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

### Modifying the theme toggle position

In `css/style.css`, adjust the `.theme-toggle-btn` rules:

```css
.theme-toggle-btn {
    top: 1rem;
    right: 1rem;   /* Change to 'left: 1rem' for left edge */
}
```

### Disabling dark mode (optional)

Remove the theme toggle button from all HTML files, or comment out the JavaScript section handling `#themeToggle`.

## ♿ Accessibility Features

| Feature | Implementation |
|---------|----------------|
| Skip to main content | `.skip-link` hidden until focused |
| Semantic landmarks | `<header>`, `<main>`, `<footer>`, `<nav>`, `<section>` |
| ARIA attributes | `aria-label`, `aria-expanded`, `aria-current`, `aria-hidden` |
| Keyboard navigation | All interactive elements reachable via Tab |
| Focus indicators | Visible outline on `:focus` |
| Color contrast | Minimum 4.5:1 ratio (WCAG AA) |
| Screen reader ready | Proper heading hierarchy, alt text, form labels |
| Responsive zoom | No horizontal scroll up to 200% zoom |

The accessibility statement page follows the [Swedish DIGG template](https://www.digg.se/) for public sector compliance.

## 📱 Responsive Breakpoints

| Device | Breakpoint | Features |
|--------|------------|----------|
| Mobile | < 768px | Hamburger menu, stacked layout, 1 column grid |
| Tablet | 768px - 1024px | Horizontal nav, 2-3 column grids |
| Desktop | > 1024px | Full layout, max-width 1280px container |

## 🧪 Browser Support

| Chrome | Firefox | Safari | Edge | iOS Safari | Chrome Android |
|--------|---------|--------|------|------------|----------------|
| Latest | Latest | Latest | Latest | 14+ | Latest |

## 📝 Form Submission

The contact form includes client-side validation but **does not actually submit data** (demo mode). To enable backend submission:

1. Add a `method="POST"` and `action="your-endpoint"` to the `<form>` tag
2. Or integrate with a service like Formspree, Netlify Forms, or EmailJS

Example with Netlify Forms:

```html
<form class="agency-form" id="demoForm" method="POST" netlify>
    <!-- ... form fields ... -->
</form>
```

## 🛠️ Technologies Used

- **HTML5** – Semantic markup, ARIA, modern input types
- **CSS3** – CSS Grid, Flexbox, custom properties (variables), media queries
- **Vanilla JavaScript** – DOM manipulation, event handling, localStorage
- **Google Fonts** – Inter font family
- **Unsplash** – High-quality placeholder images (replaceable)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Credits

- Images from [Unsplash](https://unsplash.com)
- Placeholder icons from [Placehold.co](https://placehold.co)
- Accessibility guidelines from [W3C WCAG 2.1](https://www.w3.org/WAI/WCAG21/quickref/)

## 📬 Contact

For questions or feedback about this template:

- **Email:** hello@nexify.agency (fictitious)
- **GitHub Issues:** [Create an issue](https://github.com/yourusername/nexify-agency/issues)

---

## 📦 Deployment to GitHub Pages

1. Push this repository to GitHub
2. Go to **Settings → Pages**
3. Under **Branch**, select `main` and `/ (root)`
4. Click **Save**
5. Your site will be live at `https://yourusername.github.io/nexify-agency/`

## 🚢 Deployment to Netlify / Vercel

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/yourusername/nexify-agency)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/nexify-agency)

---

**Made with ♿ by Nexify — because the web should work for everyone.**
```