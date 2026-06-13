# Modern Portfolio Website

A beautiful, responsive portfolio website built with React, TypeScript, and Tailwind CSS featuring animated particles, smooth scrolling, and modern design.

## 🌟 Features

- **Animated Background**: Beautiful particle system with interconnected nodes
- **Responsive Design**: Works perfectly on all devices and screen sizes
- **Smooth Animations**: Scroll-triggered animations and hover effects
- **Modern UI**: Clean, professional design with blue color scheme
- **Interactive Skills Section**: Categorized skills with hover effects
- **Contact Form**: Functional contact form with validation
- **SEO Optimized**: Proper meta tags and semantic HTML

## 🚀 Live Demo

[View Live Site](https://nimble-pothos-2cee62.netlify.app)

## 🛠️ Built With

- **React 18** - Frontend framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Lucide React** - Icons
- **Vite** - Build tool

## 📱 Sections

- **Home**: Hero section with animated background and profile
- **About**: Personal introduction and background
- **Skills**: Interactive skills showcase with categories
- **Education**: Timeline of educational background
- **Projects**: Portfolio of work with links
- **Contact**: Contact form with validation

## 🎨 Customization

To customize this portfolio for your own use:

1. **Personal Information**: Update the `personalInfo` object in `src/App.tsx`
2. **Skills**: Modify the `skills` array with your technologies
3. **Education**: Update the `education` array with your background
4. **Projects**: Replace the `projects` array with your work
5. **Social Links**: Update the `socialLinks` array with your profiles
6. **Colors**: Modify the Tailwind classes for different color schemes

### Key Customization Areas:

```typescript
// Update your personal information
const personalInfo = {
  name: "Your Name",
  title: "Your Title",
  bio: "Your bio...",
  // ... more fields
};

// Add your skills
const skills = [
  { name: 'Your Skill', category: 'Category' },
  // ... more skills
];

// Add your projects
const projects = [
  {
    title: "Your Project",
    description: "Project description...",
    technologies: ["Tech1", "Tech2"],
    github: "your-github-link",
    demo: "your-demo-link"
  },
  // ... more projects
];
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio-website.git
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 📁 Project Structure

```
portfolio-website/
├── public/
│   └── vite.svg
├── src/
│   ├── App.tsx          # Main component with all sections
│   ├── index.css        # Global styles and animations
│   ├── main.tsx         # App entry point
│   └── vite-env.d.ts    # Vite type definitions
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
├── tailwind.config.js   # Tailwind configuration
├── tsconfig.json        # TypeScript configuration
└── vite.config.ts       # Vite configuration
```

## 🎯 Performance Features

- **Optimized Images**: Uses Pexels CDN for fast image loading
- **Lazy Loading**: Components load as needed
- **Smooth Animations**: 60fps particle system
- **Responsive Images**: Proper sizing for all devices
- **Minimal Bundle**: Optimized build size

## 🌐 Deployment

This project is configured for easy deployment to:

- **Netlify**: Drag and drop the `dist` folder
- **Vercel**: Connect your GitHub repository
- **GitHub Pages**: Use the `gh-pages` branch
- **Any static hosting**: Upload the `dist` folder

### Deploy to Netlify

1. Build the project: `npm run build`
2. Drag the `dist` folder to [Netlify](https://netlify.com)
3. Your site is live!

### Deploy to Vercel

1. Push to GitHub
2. Connect repository to [Vercel](https://vercel.com)
3. Deploy automatically on every push

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/yourusername/portfolio-website/issues).

## 📞 Contact

Your Name - [your.email@example.com](mailto:your.email@example.com)

Project Link: [https://github.com/yourusername/portfolio-website](https://github.com/yourusername/portfolio-website)

---

⭐ Star this repository if you found it helpful!