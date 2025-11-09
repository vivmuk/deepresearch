# 🔧 Railway Deployment Fix

## The Problem
Railway is trying to run `npm start` from the root directory, but the start script is in the `server` directory.

## ✅ Solution

### Option 1: Set Root Directory in Railway (Easiest)

1. Go to your Railway project
2. Click on your service
3. Go to **Settings** tab
4. Scroll to **"Root Directory"**
5. Set it to: `server`
6. Railway will automatically redeploy ✅

### Option 2: Use Start Command (Already Fixed)

The `railway.json` file has been updated with the correct start command:
```json
"startCommand": "cd server && npm start"
```

Railway should pick this up automatically. If not, manually set it:

1. Go to Railway → Your Service → **Settings**
2. Find **"Start Command"**
3. Set it to: `cd server && npm start`

### Option 3: Use Procfile (Alternative)

A `Procfile` has been created as a backup. Railway will use this if available.

## 📝 Railway Settings Checklist

Make sure these are set correctly:

- ✅ **Root Directory**: `server` (or leave blank and use start command)
- ✅ **Start Command**: `cd server && npm start`
- ✅ **Environment Variables**:
  - `VENICE_API_KEY`
  - `BRAVE_API_KEY`
  - `SEARCH_PROVIDER=brave`
  - `USE_STRUCTURED_OUTPUTS=true`
  - `VENICE_MODEL=llama-3.3-70b`

## 🚀 After Fixing

1. Railway will automatically redeploy
2. Check the logs - you should see: `Server running on http://localhost:XXXX`
3. Copy your Railway URL (e.g., `https://your-project.railway.app`)
4. Use this URL in your Vercel frontend deployment

## 🐛 Still Not Working?

If Railway still can't find the start script:

1. Check that `server/package.json` exists and has a `start` script
2. Verify the Root Directory is set correctly
3. Check Railway logs for any other errors
4. Try redeploying manually

