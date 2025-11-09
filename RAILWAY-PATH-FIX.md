# 🔧 Railway Path Fix

## The Problem
Railway can't find `/src/deep-research.js` because when Root Directory is set to `server`, the `src` folder isn't available.

## ✅ Solution: Don't Set Root Directory

Instead of setting Root Directory to `server`, leave it blank and use a start command:

### In Railway Settings:

1. **Root Directory**: Leave **BLANK** (or set to `.` for root)
2. **Start Command**: `cd server && npm start`
3. **Build Command**: Leave blank (or `npm install && cd server && npm install`)

This way Railway builds from the root, so `server/` can access `../src/` properly.

## Alternative: Update Build Process

If you must use Root Directory = `server`, update the build to copy src:

**Build Command:**
```bash
cp -r ../src . && npm install
```

But the first solution (no root directory) is simpler!

