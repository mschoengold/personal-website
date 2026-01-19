# Michael Schoengold Beatty - Portfolio Website

A modern, dark-themed personal portfolio website built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- 🌙 Dark mode with blue/gray/black color scheme
- 📱 Fully responsive design
- 🎨 Modern UI with smooth animations
- 🔒 Password-protected private projects section
- ⚡ Optimized for performance
- 🚀 Ready for deployment to Netlify

## Sections

1. **Hero** - Landing page with name and tagline
2. **About** - Personal bio and background
3. **Projects** - Public project showcase
4. **Experience** - Professional history and education
5. **Contact** - Contact information and social links
6. **Private Projects** - Password-protected section (accessible at `/private`)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
```

This creates an optimized static export in the `out` directory.

## Customization

### Update Content

1. **Personal Information**: Edit components in `/components` directory
2. **Projects**: Update the projects array in `components/Projects.tsx`
3. **Experience**: Modify the experiences array in `components/Experience.tsx`
4. **Contact Links**: Update social links in `components/Contact.tsx`

### Change Colors

Edit `tailwind.config.ts` to customize the color scheme:
- `primary`: Main accent color (currently blue)
- `dark`: Background and text colors

### Private Projects Password

The demo password is `demo123`. For production:
1. Use Netlify's password protection (recommended)
2. Or update the password in `app/private/page.tsx`

## Deployment to Netlify

### Option 1: Netlify UI

1. Push your code to GitHub
2. Go to [Netlify](https://netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect your GitHub repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `out`
6. Click "Deploy site"

### Option 2: Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy
netlify deploy --prod
```

### Password Protection on Netlify

For the `/private` route, set up Netlify's password protection:

1. Go to your site settings on Netlify
2. Navigate to "Visitor access" → "Password protection"
3. Enable password protection for specific paths
4. Or create a `_redirects` file:

```
/private/* 200! Role=admin
```

Then set up basic auth in Netlify's dashboard.

### Custom Domain Setup

1. Purchase `michaelschoengoldbeatty.com` from:
   - [Namecheap](https://www.namecheap.com)
   - [Google Domains](https://domains.google)
   - [GoDaddy](https://www.godaddy.com)

2. In Netlify:
   - Go to "Domain settings"
   - Click "Add custom domain"
   - Enter `michaelschoengoldbeatty.com`
   - Follow instructions to update DNS records

3. Netlify will automatically provision SSL certificate

## Technologies Used

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Deployment**: Netlify (recommended)

## Project Structure

```
portfolio-site/
├── app/
│   ├── layout.tsx          # Root layout with navigation
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles
│   └── private/
│       └── page.tsx        # Password-protected private projects
├── components/
│   ├── Navigation.tsx      # Main navigation bar
│   ├── Hero.tsx           # Landing section
│   ├── About.tsx          # About section
│   ├── Projects.tsx       # Public projects
│   ├── Experience.tsx     # Work history
│   ├── Contact.tsx        # Contact information
│   └── Footer.tsx         # Site footer
├── tailwind.config.ts      # Tailwind configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Dependencies
```

## Tips for Content Updates

1. **Keep it concise**: Follow the minimalist design philosophy
2. **Use consistent tone**: Professional but approachable
3. **Update regularly**: Add new projects as you complete them
4. **Test on mobile**: Ensure responsive design works well
5. **SEO**: Update metadata in `app/layout.tsx`

## Support

For questions or issues with deployment, refer to:
- [Next.js Documentation](https://nextjs.org/docs)
- [Netlify Documentation](https://docs.netlify.com)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

---

Built with Next.js 14, TypeScript, and Tailwind CSS
