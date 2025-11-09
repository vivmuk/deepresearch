# Deep Research UI Startup Script

Write-Host "🚀 Starting Deep Research UI..." -ForegroundColor Green
Write-Host ""

# Check if .env exists
if (-not (Test-Path ".env")) {
    Write-Host "⚠️  Warning: .env file not found!" -ForegroundColor Yellow
    Write-Host "   Please create a .env file with your API keys:" -ForegroundColor Yellow
    Write-Host "   VENICE_API_KEY=your_key" -ForegroundColor Gray
    Write-Host "   BRAVE_API_KEY=your_key" -ForegroundColor Gray
    Write-Host ""
}

# Check if node_modules exist
if (-not (Test-Path "node_modules")) {
    Write-Host "📦 Installing dependencies..." -ForegroundColor Cyan
    npm install
}

if (-not (Test-Path "server\node_modules")) {
    Write-Host "📦 Installing server dependencies..." -ForegroundColor Cyan
    cd server
    npm install
    cd ..
}

if (-not (Test-Path "deep-research-ui\node_modules")) {
    Write-Host "📦 Installing UI dependencies..." -ForegroundColor Cyan
    cd deep-research-ui
    npm install
    cd ..
}

Write-Host ""
Write-Host "✅ Starting servers..." -ForegroundColor Green
Write-Host "   Frontend: http://localhost:3000" -ForegroundColor Yellow
Write-Host "   Backend:  http://localhost:3001" -ForegroundColor Yellow
Write-Host ""
Write-Host "Press Ctrl+C to stop both servers" -ForegroundColor Gray
Write-Host ""

# Start both servers using concurrently if available, otherwise start separately
if (Get-Command npm -ErrorAction SilentlyContinue) {
    # Try to use concurrently if installed
    $hasConcurrently = Test-Path "node_modules\concurrently"
    
    if ($hasConcurrently) {
        npm run dev
    } else {
        Write-Host "Installing concurrently for easier startup..." -ForegroundColor Cyan
        npm install concurrently --save-dev
        npm run dev
    }
} else {
    Write-Host "❌ npm not found. Please install Node.js first." -ForegroundColor Red
}

