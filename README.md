# Parth Chaudhary - Portfolio Website

A minimal portfolio website showcasing Full Stack Web Development and AI/ML projects. Built with React, TypeScript, and Express with a clean design inspired by modern web aesthetics.

## 🌟 Features

- **Clean, Minimal Design**: Black and white color scheme with smooth animations
- **Project Showcase**: 10 projects across Full Stack, AI/ML, Frontend, and CSS Animations
- **Advanced Filtering**: Filter projects by category (All, AI/ML, FullStack, Frontend, CSS Animations, Open Source)
- **Dark/Light Theme**: Toggle between themes with system preference detection
- **Responsive Design**: Optimized for all screen sizes
- **Smooth Navigation**: Section-based scrolling with full-screen layouts
- **Contact Integration**: Social media links and contact information

## 🚀 Quick Start

### Prerequisites

- Node.js 20+ installed on your system
- npm or yarn package manager

### Installation Steps

1. **Clone or Download the Project**
   ```bash
   # If using git
   git clone <your-repo-url>
   cd portfolio-website
   
   # Or download and extract the project files
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Start Development Server**
   ```bash
   npm run dev
   ```

4. **Open Your Browser**
   - Navigate to `http://localhost:5000`
   - The website should load with your portfolio

## 🛠️ Project Structure

```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/         # Main pages (home, etc.)
│   │   ├── lib/           # Utilities and configuration
│   │   └── hooks/         # Custom React hooks
├── server/                # Backend Express server
│   ├── index.ts           # Main server file
│   ├── routes.ts          # API routes
│   └── vite.ts            # Vite integration
├── shared/                # Shared types and schemas
└── package.json           # Dependencies and scripts
```

## 🎨 Customization

### Adding New Projects

1. Open `client/src/pages/home.tsx`
2. Find the `projects` array
3. Add your new project following this format:

```typescript
{
  id: "unique-id",
  title: "Project Title",
  description: "Project description...",
  category: "fullstack" | "ai-ml" | "frontend" | "css-animations" | "open-source",
  image: "https://your-image-url.jpg",
  technologies: ["Tech1", "Tech2", "Tech3"],
  githubUrl: "https://github.com/username/repo",
  liveUrl: "https://your-live-demo.com", // Optional
  badge: "Category Badge",
  badgeColor: "bg-color-class"
}
```

### Updating Personal Information

1. **Name and Title**: Edit the hero section in `client/src/pages/home.tsx`
2. **About Section**: Update the about text in the same file
3. **Contact Links**: Update social media URLs in the contact section
4. **Profile Image**: Replace the image URL in the hero section

### Changing Colors/Theme

1. Open `client/src/index.css`
2. Modify the CSS variables in `:root` (light theme) and `.dark` (dark theme)
3. Update color values to match your preferred palette

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🔧 Technologies Used

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **Backend**: Node.js, Express.js
- **UI Components**: shadcn/ui, Radix UI
- **Build Tool**: Vite
- **Icons**: Lucide React
- **Routing**: Wouter
- **State Management**: TanStack React Query

## 📄 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run linting

## 🌐 Deployment

### Option 1: Replit Deployment
1. Click the "Deploy" button in your Replit workspace
2. Follow the deployment wizard
3. Your site will be available at `your-repl-name.replit.app`

### Option 2: Vercel Deployment
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in project directory
3. Follow the prompts to deploy

### Option 3: Netlify Deployment
1. Build the project: `npm run build`
2. Drag the `dist` folder to Netlify's deploy area
3. Your site will be live at a Netlify URL

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes
4. Commit: `git commit -am 'Add new feature'`
5. Push: `git push origin feature-name`
6. Submit a pull request

## 📧 Contact

- **Email**: [Your Email]
- **LinkedIn**: [Your LinkedIn]
- **GitHub**: https://github.com/Pikolosan
- **Twitter**: [Your Twitter]

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ by Parth Chaudhary