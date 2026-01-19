# Deployment Guide for michaelschoengoldbeatty.com

## Step-by-Step Deployment

### 1. Purchase Domain Name

**Recommended Registrars:**
- **Namecheap** (typically $8-12/year) - User-friendly
- **Google Domains** ($12/year) - Clean interface
- **Cloudflare** ($9/year) - Best value, includes security features

**Steps:**
1. Go to your chosen registrar
2. Search for `michaelschoengoldbeatty.com`
3. Add to cart and purchase
4. **Important**: Choose privacy protection (usually free)
5. Don't configure DNS yet - we'll do that after Netlify setup

### 2. Set Up GitHub Repository

```bash
# Initialize git in your project
cd portfolio-site
git init

# Create a new repository on GitHub
# Then connect it:
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git

# Add all files and commit
git add .
git commit -m "Initial commit - Portfolio website"

# Push to GitHub
git push -u origin main
```

### 3. Deploy to Netlify

**Option A: Netlify UI (Recommended for first time)**

1. Go to [netlify.com](https://netlify.com) and sign up (free tier is perfect)
2. Click "Add new site" → "Import an existing project"
3. Choose "Deploy with GitHub"
4. Authorize Netlify to access your GitHub
5. Select your portfolio repository
6. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `out`
7. Click "Deploy site"
8. Wait ~2 minutes for deployment to complete

You'll get a URL like: `https://random-name-123.netlify.app`

**Option B: Netlify CLI**

```bash
# Install Netlify CLI globally
npm install -g netlify-cli

# Login to Netlify
netlify login

# Initialize and deploy
netlify init

# Or deploy directly
netlify deploy --prod
```

### 4. Connect Custom Domain

**In Netlify Dashboard:**

1. Go to your site's "Domain settings"
2. Click "Add custom domain"
3. Enter `michaelschoengoldbeatty.com`
4. Netlify will show you DNS records to configure

**In Your Domain Registrar:**

1. Go to DNS settings for your domain
2. Add these records (Netlify will provide exact values):

```
Type: A
Name: @
Value: 75.2.60.5 (Netlify's load balancer IP)

Type: CNAME  
Name: www
Value: your-site-name.netlify.app
```

3. Save DNS changes
4. Wait 5-60 minutes for DNS propagation

**SSL Certificate:**
- Netlify automatically provisions free SSL via Let's Encrypt
- Usually takes 1-2 minutes after DNS is configured
- Your site will be available at `https://michaelschoengoldbeatty.com`

### 5. Set Up Password Protection for /private

**Method 1: Netlify Password Protection (Simple)**

1. In Netlify dashboard → Site settings
2. Go to "Visitor access" → "Password protection"
3. Enable password protection
4. Set password for entire site or specific paths

**Method 2: Netlify Identity + Role-based Access (Advanced)**

1. Enable Netlify Identity in site settings
2. Create "admin" role
3. Update `netlify.toml` redirects section
4. Invite yourself as admin user

**Method 3: Keep Client-Side (Current Implementation)**
- Already works with demo password `demo123`
- Easy to change in `app/private/page.tsx`
- Less secure but simpler for MVP

### 6. Post-Deployment Checklist

- [ ] Site loads at custom domain
- [ ] SSL certificate is active (green padlock)
- [ ] All sections display correctly
- [ ] Mobile responsive design works
- [ ] Private projects password works
- [ ] Contact links are correct
- [ ] LinkedIn, email, other social links work
- [ ] Test on different browsers (Chrome, Safari, Firefox)

### 7. Ongoing Maintenance

**To Update Content:**

```bash
# Make changes to your files
# Then:
git add .
git commit -m "Update projects section"
git push

# Netlify automatically rebuilds and deploys
```

**Netlify will:**
- Automatically deploy on every push to main branch
- Generate preview URLs for pull requests
- Email you deploy notifications

## Troubleshooting

**DNS not working?**
- DNS can take up to 48 hours (usually ~1 hour)
- Use [dnschecker.org](https://dnschecker.org) to verify propagation
- Ensure you're using Netlify's exact DNS values

**Site not deploying?**
- Check Netlify deploy logs in dashboard
- Ensure all dependencies in package.json
- Verify build command is `npm run build`

**SSL certificate pending?**
- Wait for DNS to fully propagate first
- Check domain verification status
- Try "Renew certificate" in Netlify

## Cost Breakdown

- **Domain**: $9-15/year
- **Hosting (Netlify)**: FREE (generous free tier)
- **SSL Certificate**: FREE (included with Netlify)
- **Total**: ~$10-15/year

## Next Steps After Launch

1. **Analytics**: Add Google Analytics or Plausible
2. **SEO**: Submit sitemap to Google Search Console
3. **Performance**: Test with Lighthouse, GTmetrix
4. **Content**: Regularly update projects and experience
5. **Blog**: Consider adding a blog section using MDX

---

Need help? The README.md has links to documentation for Next.js, Netlify, and Tailwind CSS.
