# 🚀 Deployment Guide

Your code is now on GitHub at: https://github.com/vivmuk/deepresearch

## Deployment Options

### Option 1: Vercel (Frontend) + Railway (Backend) - Recommended ⭐

#### Frontend Deployment (Vercel)

1. **Go to [Vercel](https://vercel.com)** and sign in with GitHub
2. **Click "New Project"**
3. **Import your repository**: `vivmuk/deepresearch`
4. **Configure:**
   - **Root Directory**: `deep-research-ui`
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. **Environment Variables** (optional - only if needed):
   - Add any frontend-specific env vars
6. **Click "Deploy"**

Your frontend will be live at: `https://your-project.vercel.app`

#### Backend Deployment (Railway)

1. **Go to [Railway](https://railway.app)** and sign in with GitHub
2. **Click "New Project"** → **"Deploy from GitHub repo"**
3. **Select**: `vivmuk/deepresearch`
4. **Configure:**
   - **Root Directory**: `server`
   - **Start Command**: `npm start`
5. **Add Environment Variables:**
   - `VENICE_API_KEY` = your Venice API key
   - `BRAVE_API_KEY` = your Brave API key
   - `SEARCH_PROVIDER` = brave
   - `USE_STRUCTURED_OUTPUTS` = true
   - `VENICE_MODEL` = llama-3.3-70b
   - `PORT` = (Railway will set this automatically)
6. **Click "Deploy"**

Railway will give you a URL like: `https://your-project.railway.app`

#### Update Frontend to Use Backend URL

1. **In Vercel**, go to your project settings
2. **Add Environment Variable:**
   - `VITE_API_URL` = `https://your-project.railway.app`
3. **Update `deep-research-ui/vite.config.ts`** to use this env var
4. **Redeploy**

---

### Option 2: Netlify (Frontend) + Render (Backend)

#### Frontend (Netlify)

1. **Go to [Netlify](https://netlify.com)** and sign in with GitHub
2. **Click "Add new site"** → **"Import an existing project"**
3. **Select**: `vivmuk/deepresearch`
4. **Configure:**
   - **Base directory**: `deep-research-ui`
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
5. **Click "Deploy site"**

#### Backend (Render)

1. **Go to [Render](https://render.com)** and sign in with GitHub
2. **Click "New"** → **"Web Service"**
3. **Connect**: `vivmuk/deepresearch`
4. **Configure:**
   - **Root Directory**: `server`
   - **Environment**: Node
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
5. **Add Environment Variables** (same as Railway above)
6. **Click "Create Web Service"**

---

### Option 3: Full Stack on Railway

Deploy both frontend and backend on Railway:

1. **Railway** → **New Project** → **Deploy from GitHub**
2. **Select**: `vivmuk/deepresearch`
3. **Add two services:**
   - **Service 1 (Backend):**
     - Root: `server`
     - Start: `npm start`
   - **Service 2 (Frontend):**
     - Root: `deep-research-ui`
     - Build: `npm run build`
     - Start: `npm run preview` (or use static hosting)

---

## Quick Deploy Scripts

### Update Frontend API URL

After deploying backend, update the frontend to point to it:

**Edit `deep-research-ui/vite.config.ts`:**

```typescript
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: process.env.VITE_API_URL || 'http://localhost:3001',
        changeOrigin: true,
      },
    },
  },
});
```

**Or update `deep-research-ui/src/App.tsx`** to use environment variable:

```typescript
const API_URL = import.meta.env.VITE_API_URL || '';
// Then use: fetch(`${API_URL}/api/research`, ...)
```

---

## Environment Variables Checklist

### Backend (.env or Railway/Render env vars):
- ✅ `VENICE_API_KEY`
- ✅ `BRAVE_API_KEY`
- ✅ `SEARCH_PROVIDER`
- ✅ `USE_STRUCTURED_OUTPUTS`
- ✅ `VENICE_MODEL`
- ✅ `PORT` (auto-set by hosting)

### Frontend (if needed):
- `VITE_API_URL` (your backend URL)

---

## Post-Deployment

1. **Test your deployment:**
   - Frontend should load
   - Try a research query
   - Check browser console for errors

2. **Update CORS** (if needed):
   - In `server/server.ts`, update CORS to allow your frontend domain:
   ```typescript
   app.use(cors({
     origin: ['https://your-frontend.vercel.app', 'http://localhost:3000']
   }));
   ```

3. **Share your app:**
   - Your frontend URL is live!
   - Share it with others

---

## Troubleshooting

**Frontend can't connect to backend:**
- Check CORS settings
- Verify backend URL is correct
- Check environment variables

**Backend errors:**
- Verify all env vars are set
- Check Railway/Render logs
- Ensure `axios` is in root `package.json`

**Build failures:**
- Check Node.js version (should be 18+)
- Verify all dependencies are in package.json
- Check build logs for specific errors

---

## Recommended: Vercel + Railway

This is the easiest and most reliable combination:
- **Vercel**: Free, fast, great for React/Vite
- **Railway**: Free tier available, easy env var management

Your app will be live in minutes! 🎉

