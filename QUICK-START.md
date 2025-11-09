# 🚀 Quick Start Guide - Deep Research UI

## What's Been Built

A complete, modern web interface for Deep Research with:

✅ **React Frontend** - Beautiful, responsive UI with dark mode  
✅ **Express Backend** - REST API with Server-Sent Events  
✅ **Real-time Progress** - Live updates during research  
✅ **Model Selection** - Choose from 10+ Venice.ai models  
✅ **Interactive Results** - Visualize learnings and sources  

## 🎯 3-Step Setup

### Step 1: Install Dependencies

```bash
# Main project
npm install

# Backend
cd server && npm install && cd ..

# Frontend  
cd deep-research-ui && npm install && cd ..
```

### Step 2: Create `.env` File

Create a `.env` file in the **root directory** with:

```env
VENICE_API_KEY=lnWNeSg0pA_rQUooNpbfpPDBaj2vJnWol5WqKWrIEF
BRAVE_API_KEY=BSAPisTMws39hr7H0d7eG0Yc-yPPVaZ
SEARCH_PROVIDER=brave
USE_STRUCTURED_OUTPUTS=true
VENICE_MODEL=llama-3.3-70b
```

### Step 3: Start the Application

**Windows (PowerShell):**
```powershell
.\start-ui.ps1
```

**Manual (Two Terminals):**

Terminal 1:
```bash
cd server
npm start
```

Terminal 2:
```bash
cd deep-research-ui
npm run dev
```

## 🌐 Access

- **Frontend UI:** http://localhost:3000
- **Backend API:** http://localhost:3001

## 📖 How to Use

1. Open http://localhost:3000
2. Enter your research query
3. Adjust breadth (2-10) and depth (1-5)
4. Select search provider (Brave/Venice)
5. (Optional) Click settings icon to select a different AI model
6. Click "Start Research"
7. Watch real-time progress and view results!

## 🎨 Features

- **Dark Mode** - Toggle with sun/moon icon
- **Model Selection** - Click settings to see all available models
- **Real-time Progress** - See queries being processed live
- **Copy Results** - Click copy icon on any learning
- **Source Links** - Click sources to open in new tab

## 🐛 Troubleshooting

**Port in use?** Change ports in:
- Frontend: `deep-research-ui/vite.config.ts`
- Backend: `server/server.ts` or set `PORT` in `.env`

**API errors?** Check:
- `.env` file exists in root directory
- API keys are correct (no quotes)
- Backend server is running

**Module errors?** Try:
```bash
# Delete and reinstall
rm -rf node_modules package-lock.json
npm install
```

## 📚 More Info

- **Full Setup Guide:** See `SETUP.md`
- **UI Documentation:** See `deep-research-ui/README.md`
- **API Documentation:** See `server/README.md`
- **Main README:** See `README-UI.md`

## 🎉 You're Ready!

The UI is fully functional and ready to use. Enjoy researching with privacy-first AI! 🔒

