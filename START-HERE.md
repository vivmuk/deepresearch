# 🚀 Start Here - Deep Research UI

## ✅ Setup Complete!

All dependencies are installed. You're ready to start!

## 🎯 Quick Start

### Option 1: Use the Startup Script (Easiest)

```powershell
.\start.ps1
```

This will start both the backend and frontend servers automatically.

### Option 2: Start Manually (Two Terminals)

**Terminal 1 - Backend Server:**
```powershell
cd server
npm start
```

**Terminal 2 - Frontend UI:**
```powershell
cd deep-research-ui
npm run dev
```

### Option 3: Use npm script (if concurrently is installed)

```powershell
npm run dev
```

## 🌐 Access the Application

Once both servers are running:

- **Frontend UI:** http://localhost:3000
- **Backend API:** http://localhost:3001

## 📝 Verify Your .env File

Make sure your `.env` file in the root directory contains:

```env
VENICE_API_KEY=lnWNeSg0pA_rQUooNpbfpPDBaj2vJnWol5WqKWrIEF
BRAVE_API_KEY=BSAPisTMws39hr7H0d7eG0Yc-yPPVaZ
SEARCH_PROVIDER=brave
USE_STRUCTURED_OUTPUTS=true
VENICE_MODEL=llama-3.3-70b
```

## 🎨 Using the UI

1. Open http://localhost:3000 in your browser
2. Enter your research query
3. Adjust settings (breadth, depth, search provider)
4. (Optional) Click the settings icon to select a different AI model
5. Click "Start Research"
6. Watch real-time progress and view results!

## 🐛 Troubleshooting

**Port already in use?**
- Frontend: Change port in `deep-research-ui/vite.config.ts`
- Backend: Set `PORT=3002` in `.env` or change in `server/server.ts`

**API errors?**
- Check that `.env` file exists and has correct API keys
- Make sure backend server is running on port 3001

**Module errors?**
- All dependencies should be installed now
- If issues persist, try: `npm install` in each directory

## 📚 More Information

- See `README.md` for full documentation
- See `QUICK-START.md` for detailed setup
- See `SETUP.md` for troubleshooting

---

**Ready to research! 🎉**

