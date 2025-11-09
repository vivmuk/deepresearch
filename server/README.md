# Deep Research API Server

Express server that wraps the Deep Research engine and provides a REST API for the web UI.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Make sure you have a `.env` file in the root directory with:
```
VENICE_API_KEY=your_venice_api_key
BRAVE_API_KEY=your_brave_api_key (optional)
SEARCH_PROVIDER=brave
USE_STRUCTURED_OUTPUTS=true
VENICE_MODEL=llama-3.3-70b
```

3. Start the server:
```bash
npm start
```

Or for development with auto-reload:
```bash
npm run dev
```

The server will run on http://localhost:3001

## API Endpoints

### GET /api/models
Returns a list of available Venice.ai models with their capabilities.

**Response:**
```json
{
  "success": true,
  "models": [
    {
      "id": "llama-3.3-70b",
      "name": "Llama 3.3 70B",
      "contextTokens": 131072,
      "pricing": {
        "input": 0.7,
        "output": 2.8
      },
      "capabilities": {
        "functionCalling": true,
        "responseSchema": true,
        "webSearch": true,
        "vision": false,
        "reasoning": false
      },
      "traits": ["default", "function_calling_default"]
    }
  ]
}
```

### POST /api/research
Starts a research task and streams progress updates via Server-Sent Events.

**Request Body:**
```json
{
  "query": "What is the impact of AI on healthcare?",
  "breadth": 3,
  "depth": 2,
  "searchProvider": "brave",
  "model": "llama-3.3-70b"
}
```

**Response:** Server-Sent Events stream with:
- `progress` events: Research progress updates
- `info` events: Informational messages
- `result` events: Final research results
- `error` events: Error messages

