# Deep Research - Web UI Edition 🚀

A beautiful, modern web interface for the Deep Research Privacy Edition tool, featuring real-time progress tracking, model selection, and interactive results visualization.

## ✨ Features

- 🎨 **Modern UI/UX** - Beautiful, responsive design with dark mode support
- ⚡ **Real-time Updates** - Live progress tracking via Server-Sent Events
- 🤖 **Model Selection** - Choose from 10+ Venice.ai models with capability display
- 📊 **Interactive Results** - Visualize learnings, sources, and citations
- 🔍 **Search Providers** - Switch between Brave and Venice search
- 📱 **Mobile Friendly** - Fully responsive design

## 🏗️ Architecture

The UI consists of two main parts:

1. **Frontend** (`deep-research-ui/`) - React + Vite + TypeScript
2. **Backend API** (`server/`) - Express server wrapping the research engine

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- Venice.ai API Key (required)
- Brave Search API Key (optional, for Brave search mode)

### Installation

1. **Install all dependencies:**

```bash
# Main project
npm install

# Backend server
cd server
npm install
cd ..

# Frontend UI
cd deep-research-ui
npm install
cd ..
```

2. **Create `.env` file** in the root directory:

```env
VENICE_API_KEY=your_venice_api_key_here
BRAVE_API_KEY=your_brave_api_key_here
SEARCH_PROVIDER=brave
USE_STRUCTURED_OUTPUTS=true
VENICE_MODEL=llama-3.3-70b
```

3. **Start the application:**

**Option A: Manual (Two Terminals)**

Terminal 1 - Backend:
```bash
cd server
npm start
```

Terminal 2 - Frontend:
```bash
cd deep-research-ui
npm run dev
```

**Option B: PowerShell Script (Windows)**
```powershell
.\start-ui.ps1
```

4. **Open your browser:**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:3001

## 📖 Usage

1. **Enter your research query** in the search box
2. **Adjust settings:**
   - **Breadth**: Number of parallel queries (2-10)
   - **Depth**: How deep to research (1-5)
   - **Search Provider**: Choose Brave or Venice
3. **Select a model** (click the settings icon) to see available Venice.ai models
4. **Click "Start Research"** and watch real-time progress
5. **View results** with learnings, sources, and summary

## 🎨 UI Components

### Research Form
- Query input with search icon
- Breadth/depth sliders
- Search provider selector
- Start research button

### Progress Tracker
- Real-time progress bar
- Query counter
- Current query display
- Depth/breadth indicators

### Results Display
- Summary section
- Numbered learnings list
- Clickable source links
- Copy-to-clipboard functionality

### Model Selector
- Modal with all available models
- Capability badges (Function Calling, Web Search, Vision, etc.)
- Pricing information
- Context window sizes
- Trait indicators (fastest, code-optimized, etc.)

## 🔧 Development

### Frontend Development

```bash
cd deep-research-ui
npm run dev
```

Uses Vite for fast HMR (Hot Module Replacement).

### Backend Development

```bash
cd server
npm run dev  # Auto-reloads on changes
```

### Building for Production

**Frontend:**
```bash
cd deep-research-ui
npm run build
```

Output will be in `deep-research-ui/dist/`

**Backend:**
No build step needed - runs directly with `tsx`

## 📁 Project Structure

```
deep-research-privacy/
├── src/                      # Original CLI research engine
├── server/                   # Express API server
│   ├── server.ts            # Main server file
│   ├── package.json
│   └── README.md
├── deep-research-ui/         # React frontend
│   ├── src/
│   │   ├── components/      # React components
│   │   │   ├── ResearchForm.tsx
│   │   │   ├── ProgressTracker.tsx
│   │   │   ├── ResultsDisplay.tsx
│   │   │   └── ModelSelector.tsx
│   │   ├── App.tsx          # Main app component
│   │   ├── App.css          # Component styles
│   │   ├── types.ts         # TypeScript types
│   │   └── main.tsx         # Entry point
│   ├── index.html
│   ├── vite.config.ts
│   ├── package.json
│   └── README.md
├── .env                      # Environment variables (create this)
├── start-ui.ps1             # Startup script (Windows)
└── SETUP.md                  # Detailed setup guide
```

## 🎯 API Endpoints

### GET /api/models
Returns list of available Venice.ai models with capabilities.

### POST /api/research
Starts research and streams progress via Server-Sent Events.

See `server/README.md` for detailed API documentation.

## 🐛 Troubleshooting

### Port Already in Use
- Change port in `deep-research-ui/vite.config.ts` (frontend)
- Set `PORT` in `.env` or change in `server/server.ts` (backend)

### API Key Errors
- Ensure `.env` is in root directory
- Check API keys are correct (no quotes needed)
- Verify `VENICE_API_KEY` is set

### Module Resolution
- Ensure Node.js 18+ is installed
- Delete `node_modules` and reinstall if needed
- Check all dependencies are installed

## 🎨 Customization

### Themes
The UI supports light/dark themes. Toggle via the sun/moon icon in the header.

### Colors
Edit CSS variables in `deep-research-ui/src/index.css`:
- `--color-primary`: Primary accent color
- `--color-secondary`: Secondary accent color
- `--bg-primary`: Background color
- `--text-primary`: Text color

## 📝 License

MIT License - see LICENSE file for details.

## 🙏 Credits

- Built with [React](https://react.dev/)
- Styled with modern CSS
- Icons from [Lucide](https://lucide.dev/)
- Powered by [Venice.ai](https://venice.ai) and [Brave Search](https://brave.com/search)

