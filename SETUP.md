# Deep Research UI - Setup Guide

## Quick Start

### Prerequisites

- Node.js 18+ installed
- API keys:
  - Venice.ai API Key (required)
  - Brave Search API Key (optional, only needed for Brave search mode)

### Step 1: Install Dependencies

Install dependencies for both the main project, server, and UI:

```bash
# Main project dependencies
npm install

# Server dependencies
cd server
npm install
cd ..

# UI dependencies
cd deep-research-ui
npm install
cd ..
```

### Step 2: Configure Environment

Create a `.env` file in the root directory:

```env
VENICE_API_KEY=your_venice_api_key_here
BRAVE_API_KEY=your_brave_api_key_here
SEARCH_PROVIDER=brave
USE_STRUCTURED_OUTPUTS=true
VENICE_MODEL=llama-3.3-70b
```

**Note:** The `.env` file is gitignored for security. Make sure to add your actual API keys.

### Step 3: Start the Application

#### Option A: Start Both Servers Manually

**Terminal 1 - Backend:**
```bash
cd server
npm start
```

**Terminal 2 - Frontend:**
```bash
cd deep-research-ui
npm run dev
```

#### Option B: Use PowerShell Script (Windows)

```powershell
.\start-ui.ps1
```

### Step 4: Access the Application

- **Frontend UI:** http://localhost:3000
- **Backend API:** http://localhost:3001

## Project Structure

```
deep-research-privacy/
├── src/                    # Original CLI research engine
├── server/                 # Express API server
│   ├── server.ts          # Main server file
│   └── package.json
├── deep-research-ui/       # React frontend
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── App.tsx        # Main app
│   │   └── types.ts       # TypeScript types
│   └── package.json
└── .env                    # Environment variables (create this)
```

## Features

### Frontend Features
- 🎨 Modern, responsive UI with dark mode
- ⚡ Real-time progress tracking via Server-Sent Events
- 🤖 Model selection with capabilities display
- 📊 Interactive results visualization
- 🔍 Search provider selection (Brave/Venice)
- 📱 Mobile-friendly design

### Backend Features
- RESTful API with Express
- Server-Sent Events for real-time updates
- Model discovery from Venice.ai API
- Wraps existing research engine
- Error handling and validation

## Troubleshooting

### Port Already in Use

If port 3000 or 3001 is already in use:

1. Change the port in `deep-research-ui/vite.config.ts` (frontend)
2. Change the PORT in `server/server.ts` or set `PORT` in `.env` (backend)

### API Key Errors

Make sure your `.env` file:
- Is in the root directory (not in server/ or deep-research-ui/)
- Has `VENICE_API_KEY` set
- Has correct API key values (no quotes needed)

### Module Resolution Errors

If you see import errors:
1. Make sure all dependencies are installed
2. Check that you're using Node.js 18+
3. Try deleting `node_modules` and reinstalling

## Development

### Frontend Development

```bash
cd deep-research-ui
npm run dev
```

The frontend uses Vite for fast HMR (Hot Module Replacement).

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

**Backend:**
The backend runs directly with `tsx`, no build step needed.

## API Documentation

See `server/README.md` for detailed API documentation.

## License

MIT License - see LICENSE file for details.

