# Deployment Guide

This guide covers how to deploy the portfolio website to various platforms and environments.

## Prerequisites

Before deploying, ensure you have:
- A built version of the project (`npm run build`)
- Environment variables configured
- Domain name (optional)
- Platform account (Vercel, Netlify, etc.)

## Build Process

### 1. Production Build
```bash
# Install dependencies
npm install

# Create production build
npm run build

# Verify build
ls -la build/
```

### 2. Environment Variables
Ensure all required environment variables are set:

```env
# EmailJS Configuration
REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key

# Optional: Analytics
REACT_APP_GA_TRACKING_ID=your_ga_id
```

## Deployment Platforms

### Vercel (Recommended)

Vercel is the recommended platform for React applications due to its excellent performance and ease of use.

#### Method 1: Vercel CLI
```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy from project directory
vercel

# Deploy to production
vercel --prod
```

#### Method 2: GitHub Integration
1. Push code to GitHub repository
2. Connect repository to Vercel
3. Configure environment variables in Vercel dashboard
4. Deploy automatically on push

#### Vercel Configuration
Create `vercel.json`:
```json
{
  "version": 2,
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/static-build",
      "config": {
        "distDir": "build"
      }
    }
  ],
  "routes": [
    {
      "src": "/static/(.*)",
      "dest": "/static/$1"
    },
    {
      "src": "/(.*)",
      "dest": "/index.html"
    }
  ]
}
```

### Netlify

#### Method 1: Drag & Drop
1. Run `npm run build`
2. Drag `build` folder to Netlify dashboard
3. Configure environment variables
4. Set up custom domain (optional)

#### Method 2: Git Integration
1. Connect GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `build`
4. Configure environment variables

#### Netlify Configuration
Create `netlify.toml`:
```toml
[build]
  command = "npm run build"
  publish = "build"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[build.environment]
  NODE_VERSION = "18"
```

### GitHub Pages

#### Setup
```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add deploy script to package.json
"scripts": {
  "deploy": "gh-pages -d build"
}

# Deploy
npm run build
npm run deploy
```

#### Configuration
Update `package.json`:
```json
{
  "homepage": "https://yourusername.github.io/Portfolio_Jeel",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  }
}
```

### AWS S3 + CloudFront

#### S3 Setup
1. Create S3 bucket
2. Enable static website hosting
3. Upload `build` folder contents
4. Configure bucket policy for public access

#### CloudFront Setup
1. Create CloudFront distribution
2. Set S3 bucket as origin
3. Configure caching behaviors
4. Set up custom domain (optional)

#### AWS CLI Deployment
```bash
# Install AWS CLI
pip install aws-cli

# Configure credentials
aws configure

# Sync build files
aws s3 sync build/ s3://your-bucket-name --delete

# Invalidate CloudFront cache
aws cloudfront create-invalidation --distribution-id YOUR_DISTRIBUTION_ID --paths "/*"
```

## Environment Configuration

### Development Environment
```env
# .env.development
REACT_APP_EMAILJS_SERVICE_ID=dev_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=dev_template_id
REACT_APP_EMAILJS_PUBLIC_KEY=dev_public_key
NODE_ENV=development
```

### Production Environment
```env
# .env.production
REACT_APP_EMAILJS_SERVICE_ID=prod_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=prod_template_id
REACT_APP_EMAILJS_PUBLIC_KEY=prod_public_key
NODE_ENV=production
```

### Staging Environment
```env
# .env.staging
REACT_APP_EMAILJS_SERVICE_ID=staging_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=staging_template_id
REACT_APP_EMAILJS_PUBLIC_KEY=staging_public_key
NODE_ENV=production
```

## Custom Domain Setup

### DNS Configuration
1. **A Record**: Point domain to hosting IP
2. **CNAME Record**: Point www to main domain
3. **SSL Certificate**: Enable HTTPS

### Vercel Custom Domain
1. Go to Vercel dashboard
2. Select project
3. Go to Settings > Domains
4. Add custom domain
5. Configure DNS records as instructed

### Netlify Custom Domain
1. Go to Netlify dashboard
2. Select site
3. Go to Domain management
4. Add custom domain
5. Configure DNS records

## Performance Optimization

### Build Optimization
```bash
# Analyze bundle size
npm install --save-dev webpack-bundle-analyzer

# Add to package.json
"scripts": {
  "analyze": "npm run build && npx webpack-bundle-analyzer build/static/js/*.js"
}
```

### CDN Configuration
- Enable gzip compression
- Set appropriate cache headers
- Use CDN for static assets
- Optimize images

### Lighthouse Optimization
```bash
# Install Lighthouse CLI
npm install -g lighthouse

# Run audit
lighthouse https://your-site.com --output html --output-path ./lighthouse-report.html
```

## Monitoring and Analytics

### Google Analytics
```javascript
// Add to public/index.html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_TRACKING_ID');
</script>
```

### Error Tracking
```bash
# Install Sentry
npm install @sentry/react @sentry/tracing

# Configure in src/index.js
import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";

Sentry.init({
  dsn: "YOUR_SENTRY_DSN",
  integrations: [new Integrations.BrowserTracing()],
  tracesSampleRate: 1.0,
});
```

### Performance Monitoring
```javascript
// Add to src/App.js
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

getCLS(console.log);
getFID(console.log);
getFCP(console.log);
getLCP(console.log);
getTTFB(console.log);
```

## Security Considerations

### Environment Variables
- Never commit `.env` files
- Use platform-specific secret management
- Rotate keys regularly
- Use different keys for different environments

### HTTPS Configuration
- Enable HTTPS for all environments
- Use HSTS headers
- Configure secure cookies
- Implement CSP headers

### Content Security Policy
```html
<meta http-equiv="Content-Security-Policy" content="
  default-src 'self';
  script-src 'self' 'unsafe-inline' https://www.googletagmanager.com;
  style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
  font-src 'self' https://fonts.gstatic.com;
  img-src 'self' data: https:;
  connect-src 'self' https://api.emailjs.com;
">
```

## Troubleshooting

### Common Issues

#### Build Failures
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

#### Environment Variables Not Loading
- Check variable names start with `REACT_APP_`
- Verify variables are set in deployment platform
- Restart development server after changes

#### Routing Issues
- Ensure all routes redirect to `index.html`
- Check for trailing slashes
- Verify base path configuration

#### Performance Issues
- Check bundle size with analyzer
- Optimize images and assets
- Enable compression
- Use CDN for static assets

### Debug Mode
```javascript
// Enable debug logging
const DEBUG = process.env.NODE_ENV === 'development';
if (DEBUG) {
  console.log('Debug mode enabled');
}
```

## Rollback Strategy

### Vercel Rollback
1. Go to Vercel dashboard
2. Select project
3. Go to Deployments
4. Click on previous deployment
5. Click "Promote to Production"

### Netlify Rollback
1. Go to Netlify dashboard
2. Select site
3. Go to Deployments
4. Click "Deploy" on previous deployment

### Manual Rollback
```bash
# Revert to previous commit
git revert HEAD

# Push changes
git push origin main

# Redeploy
npm run deploy
```

## Maintenance

### Regular Updates
- Update dependencies monthly
- Monitor security advisories
- Test after updates
- Keep documentation current

### Backup Strategy
- Version control all code
- Backup environment variables
- Document configuration changes
- Test disaster recovery procedures

### Monitoring
- Set up uptime monitoring
- Monitor performance metrics
- Track error rates
- Review analytics regularly
