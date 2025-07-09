# Namaste Soft - Professional Software Development Services

A modern, responsive website built with SvelteKit and Tailwind CSS showcasing software development services with a focus on WhatsApp automation solutions.

## 🚀 Features

- **Modern Design**: Beautiful, responsive UI built with Tailwind CSS v4
- **WhatsApp Integration**: Automated WhatsApp contact functionality
- **Component-Based**: Modular Svelte components for easy maintenance
- **TypeScript Support**: Full TypeScript integration for better development experience
- **Optimized Performance**: Fast loading with Vite and SvelteKit
- **SEO Ready**: Proper meta tags and structured data

## 🛠️ Technologies Used

- **Framework**: SvelteKit
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide Svelte
- **Language**: TypeScript
- **Build Tool**: Vite
- **Package Manager**: npm

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd namastesoft
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5174`

## 🏗️ Project Structure

```
src/
├── components/           # Reusable Svelte components
│   ├── ui/              # UI components (Button, etc.)
│   ├── Hero.svelte      # Hero section
│   ├── Navigation.svelte # Navigation bar
│   ├── Services.svelte   # Services section
│   ├── WhatsAppAutomation.svelte # WhatsApp automation showcase
│   └── ...
├── lib/                 # Utility functions and configurations
│   ├── config.ts        # Application configuration
│   └── utils.ts         # Utility functions
├── routes/              # SvelteKit routes
│   ├── +layout.svelte   # Main layout
│   ├── +layout.server.ts # Server-side data loading
│   └── +page.svelte     # Homepage
└── app.css             # Global styles and CSS variables
```

## 🎨 Customization

### Colors and Themes
Edit the CSS variables in `src/app.css` to customize the color scheme.

### Company Information
Update the configuration in `src/lib/config.ts` to change company details.

### WhatsApp Integration
The WhatsApp functionality automatically uses the phone number from the config file.

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## 📱 Features Showcase

- WhatsApp Automation Section with interactive cards
- Modern UI with glass-morphism effects
- Responsive design for all devices
- Smooth animations and transitions
