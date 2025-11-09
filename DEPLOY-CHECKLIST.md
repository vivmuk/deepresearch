# ✅ Railway Deployment Checklist

## 🎯 Quick Steps (Copy & Paste Ready)

### Backend Service Setup

**In Railway, for your backend service:**

1. **Settings → Root Directory**: `server`
2. **Settings → Start Command**: Leave blank (or `npm start`)
3. **Variables tab** - Add these exactly:

```
VENICE_API_KEY=lnWNeSg0pA_rQUooNpbfpPDBaj2vJnWol5WqKWrIEF
BRAVE_API_KEY=BSAPisTMws39hr7H0d7eG0Yc-yPPVaZ
SEARCH_PROVIDER=brave
USE_STRUCTURED_OUTPUTS=true
VENICE_MODEL=llama-3.3-70b
```

4. **Copy your backend URL** (e.g., `https://your-backend.up.railway.app`)

---

### Frontend Service Setup

**In Railway, add a new service:**

1. **"+ New" → "GitHub Repo"** → Select `vivmuk/deepresearch`
2. **Settings → Root Directory**: `deep-research-ui`
3. **Settings → Build Command**: `npm run build`
4. **Settings → Start Command**: `npm start`
5. **Variables tab** - Add:

```
VITE_API_URL=https://your-backend.up.railway.app
```
(Replace with your actual backend URL from above)

6. **Settings → Generate Domain** - Click to get your frontend URL
7. **Copy your frontend URL** (e.g., `https://your-frontend.up.railway.app`)

---

### Update Backend CORS

**Go back to backend service:**

1. **Variables tab** - Add:

```
FRONTEND_URL=https://your-frontend.up.railway.app
```
(Replace with your actual frontend URL)

2. Railway will auto-redeploy ✅

---

## 🎉 Done!

Your app URLs:
- **Frontend**: `https://your-frontend.up.railway.app`
- **Backend**: `https://your-backend.up.railway.app`

## 🔍 Verify It Works

1. Open your frontend URL in a browser
2. You should see the Deep Research UI
3. Try a test query
4. Check browser console (F12) for any errors

## 🐛 Troubleshooting

**Backend not starting?**
- Check Root Directory is `server`
- Verify all 5 environment variables are set
- Check Railway logs for errors

**Frontend can't connect?**
- Verify `VITE_API_URL` matches your backend URL exactly
- Check `FRONTEND_URL` in backend matches frontend URL
- Check browser console for CORS errors

**Need help?** Check Railway logs - they show exactly what's happening!

