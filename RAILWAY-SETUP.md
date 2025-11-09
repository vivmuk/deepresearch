# 🚂 Railway Setup - Step by Step

## ✅ Quick Fix (Do This Now!)

### Step 1: Update Railway Settings

1. **Go to Railway** → Your Project → Your Service
2. **Click "Settings"** tab
3. **Set Root Directory** to: `server`
4. **Set Start Command** to: `npm start` (or leave blank - Railway will use package.json)
5. **Save**

### Step 2: Add Environment Variables

Go to **"Variables"** tab and add these:

```
VENICE_API_KEY=lnWNeSg0pA_rQUooNpbfpPDBaj2vJnWol5WqKWrIEF
BRAVE_API_KEY=BSAPisTMws39hr7H0d7eG0Yc-yPPVaZ
SEARCH_PROVIDER=brave
USE_STRUCTURED_OUTPUTS=true
VENICE_MODEL=llama-3.3-70b
```

**Important:** Railway will automatically set `PORT` - don't add it manually!

### Step 3: Redeploy

Railway should auto-redeploy after you save settings. If not:
1. Go to **"Deployments"** tab
2. Click **"Redeploy"**

## ✅ What Was Fixed

1. ✅ Updated `railway.json` with correct start command
2. ✅ Created `Procfile` as backup
3. ✅ Created `nixpacks.toml` for build configuration
4. ✅ Fixed `server/package.json` to work without `--env-file` flag
5. ✅ Railway will use environment variables directly (no .env file needed)

## 🔍 Verify It's Working

After redeploy, check the logs. You should see:
```
Server running on http://localhost:XXXX
API available at http://localhost:XXXX/api
```

## 📝 Railway Configuration Summary

- **Root Directory**: `server`
- **Start Command**: `npm start` (or blank - uses package.json)
- **Build Command**: (auto-detected)
- **Environment Variables**: Set in Railway UI (not .env file)

## 🐛 Still Having Issues?

1. **Check logs** - Look for any error messages
2. **Verify Root Directory** - Must be `server`
3. **Check Environment Variables** - All 5 must be set
4. **Try manual redeploy** - Sometimes helps

## 🎉 Success!

Once Railway shows "Deployed" and logs show the server running, copy your Railway URL and use it in Vercel for the frontend!

