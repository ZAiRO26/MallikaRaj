# RAANA Luxury Fashion Platform - Deployment Guide

## 🚀 Netlify Deployment

### Prerequisites
- GitHub repository connected
- Netlify account
- Backend API deployed (Heroku, Railway, or similar)

### Step 1: Environment Variables
Before deploying, ensure your backend API is deployed and update the API URL in your frontend:

1. Deploy your backend to a platform like:
   - **Heroku**: `heroku create raana-backend`
   - **Railway**: Connect your GitHub repo
   - **Render**: Deploy from GitHub

2. Update the API URL in `src/utils/api.js`:
   ```javascript
   const API_BASE_URL = process.env.REACT_APP_API_URL || 'https://your-backend-url.com';
   ```

### Step 2: Deploy to Netlify

#### Option A: Deploy from GitHub (Recommended)
1. Go to [Netlify](https://netlify.com)
2. Click "New site from Git"
3. Connect your GitHub account
4. Select the `RAANAXGUCCI` repository
5. Set build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `build`
6. Add environment variables:
   - `REACT_APP_API_URL`: Your backend URL
   - `REACT_APP_STRIPE_PUBLIC_KEY`: Your Stripe public key
7. Click "Deploy site"

#### Option B: Deploy from Local Build
1. Run `npm run build` locally
2. Drag the `build` folder to Netlify's deploy area
3. Configure environment variables in Netlify dashboard

### Step 3: Configure Domain
1. In Netlify dashboard, go to "Domain settings"
2. Add your custom domain (optional)
3. Configure SSL certificate (automatic with Netlify)

## 🔧 Environment Variables

### Frontend (.env)
```env
REACT_APP_API_URL=https://your-backend-url.com
REACT_APP_STRIPE_PUBLIC_KEY=pk_test_your_stripe_key
```

### Backend (.env)
```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=sk_test_your_stripe_secret
STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_email_app_password
```

## 📱 Alternative Deployment Options

### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in the project directory
3. Follow the prompts

### GitHub Pages
1. Add to package.json:
   ```json
   {
     "homepage": "https://yourusername.github.io/RAANAXGUCCI",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d build"
     }
   }
   ```
2. Install gh-pages: `npm install --save-dev gh-pages`
3. Run `npm run deploy`

## 🔍 Post-Deployment Checklist

- [ ] Frontend loads without errors
- [ ] User registration/login works
- [ ] Product browsing works
- [ ] Shopping cart functions
- [ ] Checkout process works
- [ ] Admin panel accessible
- [ ] Stripe payments working
- [ ] Email notifications sent
- [ ] Mobile responsiveness
- [ ] Performance optimized

## 🛠️ Troubleshooting

### Common Issues:
1. **API Connection Errors**: Check environment variables
2. **Build Failures**: Ensure all dependencies are installed
3. **Routing Issues**: Verify Netlify redirects are configured
4. **CORS Errors**: Update backend CORS settings

### Performance Optimization:
1. Enable Netlify's asset optimization
2. Configure CDN settings
3. Enable compression
4. Set up caching headers

## 📞 Support
For deployment issues, check:
- Netlify documentation
- React deployment guide
- Backend platform documentation 