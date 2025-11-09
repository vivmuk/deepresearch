# ⚡ Quick Deploy Guide

Your code is on GitHub: **https://github.com/vivmuk/deepresearch**

## 🚀 Deploy in 5 Minutes

### Step 1: Deploy Backend (Railway) - 2 minutes

1. Go to **https://railway.app** → Sign in with GitHub
2. Click **"New Project"** → **"Deploy from GitHub repo"**
3. Select **`vivmuk/deepresearch`**
4. Click the **"..."** menu → **"Settings"**
5. Set **Root Directory** to: `server`
6. Go to **"Variables"** tab and add:
   ```
   VENICE_API_KEY=lnWNeSg0pA_rQUooNpbfpPDBaj2vJnWol5WqKWrIEF
   BRAVE_API_KEY=BSAPisTMws39hr7H0d7eG0Yc-yPPVaZ
   SEARCH_PROVIDER=brave
   USE_STRUCTURED_OUTPUTS=true
   VENICE_MODEL=llama-3.3-70b
   ```
7. Railway will auto-deploy! ✅
8. Copy your backend URL (e.g., `https://your-project.railway.app`)

### Step 2: Deploy Frontend (Vercel) - 3 minutes

1. Go to **https://vercel.com** → Sign in with GitHub
2. Click **"Add New Project"**
3. Import **`vivmuk/deepresearch`**
4. Configure:
   - **Root Directory**: `deep-research-ui`
   - **Framework Preset**: Vite (auto-detected)
   - **Build Command**: `npm run build` (auto)
   - **Output Directory**: `dist` (auto)
5. Click **"Environment Variables"** and add:
   ```
   VITE_API_URL=https://your-project.railway.app
   ```
   (Use your Railway URL from Step 1)
6. Click **"Deploy"** ✅

### Step 3: Update Backend CORS (1 minute)

1. Go back to **Railway** → Your backend project
2. **Variables** tab → Add:
   ```
   FRONTEND_URL=https://your-project.vercel.app
   ```
   (Use your Vercel URL from Step 2)
3. Railway will auto-redeploy ✅

## 🎉 Done!

Your app is live:
- **Frontend**: `https://your-project.vercel.app`
- **Backend**: `https://your-project.railway.app`

## 📝 What You Get

- ✅ Free hosting (both platforms have free tiers)
- ✅ Auto-deploy on git push
- ✅ HTTPS enabled
- ✅ Environment variables secured
- ✅ Production-ready

## 🐛 Troubleshooting

**Frontend can't connect?**
- Check `VITE_API_URL` in Vercel matches your Railway URL
- Verify `FRONTEND_URL` in Railway matches your Vercel URL
- Check browser console for CORS errors

**Backend errors?**
- Check Railway logs
- Verify all environment variables are set
- Make sure `axios` is installed (it should be)

**Need help?** See `DEPLOYMENT.md` for detailed instructions.

---

**That's it! Your Deep Research app is now online! 🚀**

