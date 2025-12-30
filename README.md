# 🚀 Oskar Śledź - Full Stack Developer Portfolio

<div align="center">

[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen)](https://oski.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19-blue)](https://react.dev/)
[![License](https://img.shields.io/badge/license-MIT-blue)](LICENSE)

**[View Live Demo](https://oski.dev)** | **[Report Bug](https://github.com/oski3k/portfolio/issues)** | **[Request Feature](https://github.com/oski3k/portfolio/issues)**

</div>

---

## 🎯 About This Project

Professional portfolio showcasing my work as a Full Stack Developer specializing in React, TypeScript, Flutter, and modern web technologies. Built with performance, accessibility, and user experience as top priorities.

### 🌟 Key Features

- **⚡ Blazing Fast** - Vite build tool with optimized production bundles
- **🎨 Premium Animations** - Smooth transitions powered by Framer Motion
- **🌍 Multilingual** - Full support for 5 languages (PL, EN, DE, FR, ES)
- **📱 Fully Responsive** - Optimized for all devices from mobile to 4K displays
- **📊 Analytics Ready** - Firebase Analytics integration for visitor insights
- **♿ Accessible** - Semantic HTML and ARIA labels for screen readers
- **🎭 Dark Theme** - Eye-friendly design with glassmorphism effects
- **🔍 SEO Optimized** - JSON-LD structured data and comprehensive meta tags

## 🛠️ Tech Stack

**Frontend:**

- [React 19](https://react.dev/) - Latest React with concurrent features
- [TypeScript 5.8](https://www.typescriptlang.org/) - Type-safe development
- [Tailwind CSS 3](https://tailwindcss.com/) - Utility-first styling with local optimization
- [Framer Motion 12](https://www.framer.com/motion/) - Production-ready animation library
- [Lenis](https://github.com/studio-freight/lenis) - Smooth scroll library

**Backend & Services:**

- [Firebase](https://firebase.google.com/) - Analytics and Firestore
- [Vite 6](https://vitejs.dev/) - Next-generation build tool

**Code Quality:**

- ESLint 9 - Linting with flat config
- Prettier - Code formatting
- TypeScript strict mode - Type safety

**DevOps:**

- GitHub - Version control
- Vercel - Deployment platform (recommended)

## 📸 Features Showcase

- **Interactive Hero Section** - Animated typing effect with parallax scrolling
- **Skill Cards** - Glassmorphism cards with hover effects
- **Project Gallery** - Filterable projects with smooth animations
- **Contact Form** - Firebase integration with validation
- **Live User Counter** - Real-time Firebase presence detection
- **Smooth Scrolling** - Lenis-powered buttery smooth navigation

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18.x or higher
- **npm** or **yarn** package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/oski3k/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Create environment file**

   ```bash
   cp .env.example .env.local
   ```

4. **Add your Firebase credentials** to `.env.local`

   ```env
   VITE_FIREBASE_API_KEY=your_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
   VITE_FIREBASE_PROJECT_ID=your_project_id
   # ... (see .env.example for all variables)
   ```

5. **Start development server**

   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to `http://localhost:3000`

## 📦 Available Scripts

| Script               | Description                           |
| -------------------- | ------------------------------------- |
| `npm run dev`        | Start development server on port 3000 |
| `npm run build`      | Build for production                  |
| `npm run preview`    | Preview production build locally      |
| `npm run lint`       | Check code for linting errors         |
| `npm run lint:fix`   | Auto-fix linting issues               |
| `npm run format`     | Format code with Prettier             |
| `npm run type-check` | Run TypeScript type checking          |

## 🏗️ Project Structure

```
portfolio/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── features/    # Feature-specific components
│   │   ├── layout/      # Layout components
│   │   ├── sections/    # Page sections
│   │   └── ui/          # Reusable UI components
│   ├── contexts/        # React contexts
│   ├── hooks/           # Custom React hooks
│   ├── lib/             # Utilities and configs
│   ├── data/            # Static data
│   ├── types/           # TypeScript type definitions
│   └── utils/           # Helper functions
├── .env.example         # Environment variables template
├── tailwind.config.cjs  # Tailwind configuration
├── vite.config.ts       # Vite configuration
└── tsconfig.json        # TypeScript configuration
```

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy!

### Other Platforms

Build the project:

```bash
npm run build
```

The `dist/` folder contains the production-ready static files.

## 🧪 Code Quality

This project maintains high code quality standards:

- ✅ **TypeScript** - Full type coverage, zero `@ts-ignore`
- ✅ **ESLint** - Configured with React and TypeScript rules
- ✅ **Prettier** - Consistent code formatting
- ✅ **Zero Vulnerabilities** - Regular dependency updates

## 📈 Performance

- **Lighthouse Score:** 95+ across all categories
- **First Contentful Paint:** < 1.5s
- **Time to Interactive:** < 3.0s
- **Bundle Size:** Optimized with Tailwind purging

## 🌍 Internationalization (i18n)

Full translation support for:

- 🇵🇱 Polish (Polski)
- 🇬🇧 English
- 🇩🇪 German (Deutsch)
- 🇫🇷 French (Français)
- 🇪🇸 Spanish (Español)

Language switcher available in navigation bar.

## 🤝 Contributing

Contributions are welcome! Feel free to:

- Report bugs
- Suggest new features
- Submit pull requests

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📧 Contact

**Oskar Śledź**

- Website: [oski.dev](https://oski.dev)
- GitHub: [@oski3k](https://github.com/oski3k)
- LinkedIn: [Oskar Śledź](https://www.linkedin.com/in/oskar-śledź-841a7337b/)

---

<p align="center">
  Made with ❤️ and ☕ by <a href="https://github.com/oski3k">Oskar Śledź</a>
</p>

<p align="center">
  <sub>Built with React 19, TypeScript, Tailwind CSS, and Framer Motion</sub>
</p>
