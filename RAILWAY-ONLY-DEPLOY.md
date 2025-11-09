# 🚂 Deploy Everything on Railway (No Vercel Needed!)

You can deploy both frontend and backend on Railway - it's simpler!

## 🚀 Step-by-Step Guide

### Step 1: Deploy Backend Service

1. **Go to Railway** → **New Project** → **Deploy from GitHub repo**
2. **Select**: `vivmuk/deepresearch`
3. **After it deploys**, click the **"..."** menu → **Settings**
4. **Set Root Directory** to: `server`
5. **Go to Variables** tab and add:
   ```
   VENICE_API_KEY=lnWNeSg0pA_rQUooNpbfpPDBaj2vJnWol5WqKWrIEF
   BRAVE_API_KEY=BSAPisTMws39hr7H0d7eG0Yc-yPPVaZ
   SEARCH_PROVIDER=brave
   USE_STRUCTURED_OUTPUTS=true
   VENICE_MODEL=llama-3.3-70b
   ```
6. **Copy your backend URL** (e.g., `https://your-backend.railway.app`)

### Step 2: Deploy Frontend Service (Same Project!)

1. **In the same Railway project**, click **"+ New"** → **"GitHub Repo"**
2. **Select the same repo**: `vivmuk/deepresearch`
3. **After it deploys**, click **Settings**
4. **Set Root Directory** to: `deep-research-ui`
5. **Set Build Command** to: `npm run build`
6. **Set Start Command** to: `npm run preview` (or use static hosting - see below)
7. **Go to Variables** tab and add:
   ```
   VITE_API_URL=https://your-backend.railway.app
   ```
   (Use your backend URL from Step 1)
8. **Generate Domain** - Railway will give you a URL like `https://your-frontend.railway.app`

### Step 3: Update Backend CORS

1. **Go back to your backend service**
2. **Variables** tab → Add:
   ```
   FRONTEND_URL=https://your-frontend.railway.app
   ```
   (Use your frontend URL from Step 2)
3. Railway will auto-redeploy ✅

## 🎉 Done!

Your app is live:
- **Frontend**: `https://your-frontend.railway.app`
- **Backend**: `https://your-backend.railway.app`

## 💡 Alternative: Static Frontend Hosting

Railway can also serve the frontend as static files:

1. **In frontend service settings**, set:
   - **Root Directory**: `deep-research-ui`
   - **Build Command**: `npm run build`
   - **Start Command**: Leave blank or use a static server
2. **Or use Railway's static file serving** - Railway will auto-detect `dist` folder

## 📝 Railway Project Structure

Your Railway project will have **2 services**:
- **Backend Service** (from `server/` directory)
- **Frontend Service** (from `deep-research-ui/` directory)

Both in one project, easy to manage! 🎯

## 🆚 Railway vs Vercel

**Railway (Both):**
- ✅ One platform for everything
- ✅ Easier to manage
- ✅ Free tier available
- ✅ Both services in one project

**Vercel + Railway:**
- ✅ Vercel optimized for frontend
- ✅ Slightly faster frontend CDN
- ⚠️ Two platforms to manage

**Recommendation:** Railway for both is perfectly fine and simpler! 🚂

