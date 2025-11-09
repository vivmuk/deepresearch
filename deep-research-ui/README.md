# Deep Research UI

Modern web interface for Deep Research Privacy Edition.

## Features

- 🎨 Beautiful, modern UI with dark mode support
- ⚡ Real-time progress tracking
- 🤖 Model selection with capabilities display
- 📊 Interactive results visualization
- 🔍 Search provider selection (Brave/Venice)
- 📱 Fully responsive design

## Setup

1. Install dependencies:
```bash
npm install
```

2. Make sure the backend server is running (see server/README.md)

3. Start the development server:
```bash
npm run dev
```

4. Open http://localhost:3000 in your browser

## Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## Project Structure

```
deep-research-ui/
├── src/
│   ├── components/      # React components
│   ├── types.ts         # TypeScript types
│   ├── App.tsx          # Main app component
│   ├── App.css          # Styles
│   ├── index.css        # Global styles
│   └── main.tsx         # Entry point
├── index.html
├── vite.config.ts
└── package.json
```

