```markdown
# PHPD IT Services - Virtual CIO Website

React + Vite + Bootstrap + Ant Design website for PHPD IT Services, positioned as Virtual CIO and IT partner for SMEs.

## 🚀 Quick Start

```
# Clone / download project
git clone <repo-url> phpd-it-services
cd phpd-it-services

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

Live demo: `http://localhost:5173`

## 🏗️ Tech Stack

| Category | Technology |
|----------|------------|
| Framework | React 18 + Vite |
| Routing | React Router DOM |
| Styling | Bootstrap 5 + Ant Design |
| CSS | Custom overrides (`src/styles/index.css`) |
| Form Handling | Native HTML forms (add Formik/React Hook Form later) |

## 📁 Project Structure

```
phpd-it-services/
├── public/
│   └── favicon.ico
├── src/
│   ├── main.jsx                 # Entry point, Bootstrap/Ant CSS imports
│   ├── App.jsx                  # AppRouter wrapper
│   │
│   ├── router/
│   │   └── AppRouter.jsx        # Routes + Layout wrapper
│   │
│   ├── components/
│   │   ├── layout/              # Shared across all pages
│   │   │   ├── Navbar.jsx       # Fixed Bootstrap navbar
│   │   │   ├── Footer.jsx       # Simple footer
│   │   │   └── Layout.jsx       # Navbar + Main + Footer wrapper
│   │   │
│   │   └── home/                # Home page sections only
│   │       ├── Hero.jsx         # Virtual CIO hero
│   │       ├── ServicesSection.jsx # IT services cards
│   │       ├── WhyUs.jsx        # 3-column benefits
│   │       ├── Leadership.jsx   # Founder/leadership section
│   │       └── ClientsSection.jsx # Clients logos/testimonials
│   │
│   ├── pages/                   # Route components
│   │   ├── Home.jsx             # Imports all home/* components
│   │   ├── Services.jsx         # Detailed services
│   │   ├── About.jsx            # Company story
│   │   └── Contact.jsx          # Contact form
│   │
│   ├── styles/
│   │   └── index.css            # Custom CSS overrides
│   │
│   └── assets/                  # Images, icons (add later)
│       ├── logo.png
│       └── hero-bg.jpg
│
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🧩 Key Components Breakdown

### Layout Flow
```
AppRouter → Layout → Routes → Pages → Home Sections
```

### Home Page Sections (in order)
1. **Hero** - Virtual CIO headline + CTAs
2. **ServicesSection** - 5 IT service cards  
3. **WhyUs** - 3 benefits columns
4. **Leadership** - Founder photo + bio placeholder
5. **ClientsSection** - Logos/testimonials placeholder

### Routing
```
 /                    → Home (full Virtual CIO landing)
 /services            → Services page  
 /about               → About page
 /contact             → Contact form
```

## 🎨 Design System

- **Colors**: Dark theme (`bg-dark`, `bg-black`) + Teal accents (`text-info`, `btn-primary`)
- **Typography**: Bootstrap headings (`h1` → `display-5`, `h2` → `h3`)
- **Spacing**: Bootstrap utilities (`py-5`, `container`, `row g-4`)
- **Components**: Ant Design buttons (`Button type="primary" shape="round"`)

## 📱 Responsive Design

- **Mobile-first**: Bootstrap grid (`col-12 col-md-6 col-lg-4`)
- **Navbar**: Collapsible (`navbar-expand-lg`)
- **Cards**: Full-width mobile, 2-col tablet, 3-col desktop

## 🚀 Deployment

### Vercel (Recommended)
```
npm i -g vercel
vercel
```

### Netlify
Drag `dist/` folder after `npm run build`

### GitHub Pages
```
npm run build
# Deploy dist/ folder
```

## 🔧 Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Development server (`http://localhost:5173`) |
| `npm run build` | Production build (`dist/` folder) |
| `npm run preview` | Local preview of production build |
| `npm run lint` | ESLint (add later) |

## 📝 Customization Guide

### 1. Update Branding
```
src/assets/logo.png          # Replace logo
src/components/layout/Navbar.jsx  # Brand name
src/config/siteConfig.js     # Phone/email (create later)
```

### 2. Add Real Content
```
src/components/home/         # Hero copy, services data
src/assets/clients/          # Client logos
src/components/home/Leadership.jsx # Founder photo/bio
```

### 3. Add Features
```
- WhatsApp floating button (components/common/WhatsAppButton.jsx)
- AOS animations 
- Contact form submission (EmailJS/Netlify Forms)
- Keen Slider for clients logos
```

## 🛠️ Development Workflow

1. **Edit components** → Hot reload in browser
2. **Test responsive** → Chrome DevTools device mode
3. **Build & preview** → `npm run build && npm run preview`
4. **Deploy** → Vercel/Netlify

## 🤝 Contributing

1. Fork repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📞 Contact

For PHPD IT Services business inquiries:
- **Virtual CIO Consultation**: `/contact`
- **Pune, India** based

## ⚖️ License

MIT License - see `LICENSE` file or contact for commercial use.

---

**Built with ❤️ for PHPD IT Services - Your Virtual CIO Partner**

*Last updated: December 2025*
```
