# 🚨 Quick Fix for Railway Error

## The Problem
```
Cannot find module '/src/deep-research.js'
```

This happens because Railway's Root Directory is set to `server`, so it can't access the `src` folder.

## ✅ Fix (Do This Now!)

### In Railway Backend Service Settings:

1. **Go to Settings** → **Root Directory**
2. **DELETE** the value (leave it **BLANK** or set to `.`)
3. **Go to Start Command**
4. **Set it to**: `cd server && npm start`
5. **Save** - Railway will redeploy automatically ✅

### Why This Works

- Without Root Directory, Railway builds from the **root** of your repo
- The `src` folder is available
- The start command changes to `server/` directory and runs `npm start`
- Now `../src/deep-research.js` resolves correctly!

## 📝 Updated Settings

**Root Directory**: (blank/empty)  
**Start Command**: `cd server && npm start`  
**Build Command**: (blank - auto-detected)

## 🎉 That's It!

Railway should now deploy successfully. Check the logs - you should see:
```
Server running on http://localhost:XXXX
```

