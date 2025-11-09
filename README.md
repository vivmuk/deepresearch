# Deep Research - Web UI Project

A beautiful, modern web interface for Deep Research Privacy Edition.

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm run install-all
```

Or install manually:
```bash
npm install
cd server && npm install && cd ..
cd deep-research-ui && npm install && cd ..
```

### 2. Create `.env` File

Create a `.env` file in the root directory with:

```env
VENICE_API_KEY=your_venice_api_key_here
BRAVE_API_KEY=your_brave_api_key_here
SEARCH_PROVIDER=brave
USE_STRUCTURED_OUTPUTS=true
VENICE_MODEL=llama-3.3-70b
```

### 3. Start the Application

**Option A: Start Both Servers (Recommended)**

```bash
npm run dev
```

**Option B: Start Separately**

Terminal 1 - Backend:
```bash
npm run start:server
```

Terminal 2 - Frontend:
```bash
npm run start:ui
```

### 4. Open Your Browser

- **Frontend UI:** http://localhost:3000
- **Backend API:** http://localhost:3001

## 📁 Project Structure

```
.
├── deep-research-ui/    # React frontend
├── server/              # Express backend API
├── src/                 # Research engine (from original repo)
├── .env                 # Environment variables (create this)
└── package.json         # Root package.json
```

## 🎨 Features

- 🎨 Modern UI with dark mode
- ⚡ Real-time progress tracking
- 🤖 Model selection (10+ Venice.ai models)
- 📊 Interactive results display
- 🔍 Search provider selection (Brave/Venice)

## 📖 Usage

1. Enter your research query
2. Adjust breadth (2-10) and depth (1-5)
3. Select search provider
4. (Optional) Select AI model
5. Click "Start Research"
6. View results!

## 📚 Documentation

- **Quick Start:** See `QUICK-START.md`
- **Setup Guide:** See `SETUP.md`
- **UI Details:** See `README-UI.md`
- **Frontend:** See `deep-research-ui/README.md`
- **Backend:** See `server/README.md`

## 🐛 Troubleshooting

**Port in use?** Change ports in:
- Frontend: `deep-research-ui/vite.config.ts`
- Backend: `server/server.ts` or set `PORT` in `.env`

**API errors?** Check `.env` file exists and has correct API keys.

**Module errors?** Make sure all dependencies are installed:
```bash
npm run install-all
```

