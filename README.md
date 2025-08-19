# Portfolio Website Deployment Guide
<img width="1901" height="977" alt="image" src="https://github.com/user-attachments/assets/6fcccbd4-9e0e-43a1-85d1-5b5e1401b6ca" />

## Deploy to Vercel

This portfolio website is ready to be deployed on Vercel. Here's how to do it:

### Method 1: Using Vercel CLI (Recommended)

1. **Install Vercel CLI**:
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy from this directory**:
   ```bash
   vercel
   ```

4. **Follow the prompts**:
   - Project name: `portfolio-website` (or your preferred name)
   - Directory to deploy: `./` (current directory)
   - Link to existing project? No (first time)

### Method 2: Using Vercel Dashboard

1. Go to [vercel.com](https://vercel.com)
2. Sign up/login with your preferred account
3. Click "New Project"
4. Import from your Git repository (GitHub, GitLab, or Bitbucket)
5. Configure the project:
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

### Environment Variables

If your project uses environment variables, add them in the Vercel dashboard:

1. Go to your project dashboard
2. Navigate to "Settings" → "Environment Variables"
3. Add any required variables (like `DATABASE_URL` if using a database)

### Custom Domain (Optional)

1. In your Vercel project dashboard
2. Go to "Settings" → "Domains"
3. Add your custom domain

## Project Structure

- `client/` - React frontend application
- `server/` - Express backend API
- `shared/` - Shared types and schemas
- `api/` - Vercel serverless functions
- `dist/` - Build output directory

## Features

- ✅ Full-stack React + Express application
- ✅ TypeScript throughout
- ✅ Tailwind CSS styling
- ✅ Dark/Light theme support
- ✅ Mobile responsive design
- ✅ Project filtering and categories
- ✅ Contact form functionality
- ✅ Optimized for Vercel deployment
