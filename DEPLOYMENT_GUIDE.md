# RAANA Deployment Guide

## 🚀 Deployment Overview

This guide covers deploying the RAANA luxury fashion e-commerce application:
- **Frontend**: Netlify (React.js)
- **Backend**: Railway (Node.js/Express)

## 📋 Prerequisites

- GitHub repository with your code
- Netlify account
- Railway account
- MongoDB Atlas account (recommended for production)
- Stripe account for payments

## 🌐 Frontend Deployment (Netlify)

### 1. Environment Variables for Netlify

Set these environment variables in your Netlify dashboard:

```env
REACT_APP_API_URL=https://your-railway-backend.railway.app
REACT_APP_STRIPE_PUBLISHABLE_KEY=pk_live_your_stripe_publishable_key
GENERATE_SOURCEMAP=false
CI=false
```

### 2. Build Settings

- **Build command**: `npm run build`
- **Publish directory**: `build`
- **Base directory**: `gucci-clone`

### 3. Netlify Configuration

The `netlify.toml` file is already optimized with:
- Build settings and environment variables
- Redirect rules for SPA routing
- Security headers
- Cache optimization
- API proxy for development

## 🚂 Backend Deployment (Railway)

### 1. Environment Variables for Railway

Set these environment variables in your Railway dashboard:

```env
NODE_ENV=production
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/raana-store
JWT_SECRET=your-super-secure-jwt-secret-key
STRIPE_SECRET_KEY=sk_live_your_stripe_secret_key
STRIPE_PUBLISHABLE_KEY=pk_live_your_stripe_publishable_key
STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
```

### 2. Railway Configuration

The `railway.json` file includes:
- Build and deployment settings
- Health check configuration
- Restart policies
- Environment-specific variables

## 🗄️ Database Setup (MongoDB Atlas)

1. Create a MongoDB Atlas cluster
2. Create a database user
3. Whitelist Railway's IP addresses (or use 0.0.0.0/0 for all IPs)
4. Get your connection string and add it to Railway's `MONGO_URI`

## 💳 Stripe Configuration

1. Get your API keys from Stripe Dashboard
2. Set up webhooks pointing to your Railway backend:
   - Endpoint: `https://your-railway-backend.railway.app/api/payment/webhook`
   - Events: `payment_intent.succeeded`, `payment_intent.payment_failed`
3. Add the webhook secret to Railway's environment variables

## 📧 Email Configuration

For Gmail SMTP:
1. Enable 2-factor authentication
2. Generate an app password
3. Use the app password in `EMAIL_PASS`

## 🔧 Deployment Steps

### Frontend (Netlify)

1. Connect your GitHub repository to Netlify
2. Set the base directory to `gucci-clone`
3. Configure environment variables
4. Deploy!

### Backend (Railway)

1. Connect your GitHub repository to Railway
2. Select the root directory (Railway will use `railway.json`)
3. Configure environment variables
4. Deploy!

## 🧪 Testing Your Deployment

### Frontend Testing
```bash
# Test build locally
cd gucci-clone
npm run build
npm run build:analyze
```

### Backend Testing
```bash
# Test backend locally with production env
cd backend
NODE_ENV=production npm start
```

### Health Checks
- Frontend: `https://your-netlify-site.netlify.app`
- Backend: `https://your-railway-backend.railway.app`
- API Status: `https://your-railway-backend.railway.app/api`

## 🔒 Security Considerations

1. **Environment Variables**: Never commit sensitive data to Git
2. **CORS**: Backend is configured for your Netlify domain
3. **HTTPS**: Both platforms provide SSL certificates
4. **Headers**: Security headers are configured in Netlify

## 🚨 Troubleshooting

### Common Issues

1. **Build Failures**: Check environment variables and build logs
2. **CORS Errors**: Verify backend CORS configuration matches your Netlify URL
3. **Database Connection**: Ensure MongoDB Atlas allows Railway connections
4. **Stripe Webhooks**: Verify webhook URL and secret

### Logs Access
- **Netlify**: Deploy logs in dashboard
- **Railway**: Runtime logs in dashboard

## 📈 Performance Optimization

### Frontend
- Source maps disabled in production
- Static asset caching configured
- Image optimization recommended

### Backend
- Health checks configured
- Graceful shutdown implemented
- Error handling optimized for production

## 🔄 CI/CD Pipeline

Both platforms support automatic deployments:
- **Netlify**: Deploys on push to main branch
- **Railway**: Deploys on push to main branch

## 📞 Support

If you encounter issues:
1. Check platform status pages
2. Review deployment logs
3. Verify environment variables
4. Test locally with production settings

---

**Note**: Replace placeholder URLs and keys with your actual values before deployment.