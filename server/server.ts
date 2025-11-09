import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { ResearchEngine, ResearchProgress } from '../src/deep-research.js';
import { generateSummary } from '../src/ai/providers.js';
import { setSearchProvider } from '../src/search.js';
import { fetchAvailableModels } from '../src/ai/models.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors({
  origin: process.env.FRONTEND_URL || '*',
  credentials: true,
}));
app.use(express.json());

// Convert ResearchProgress to a serializable format
function serializeProgress(progress: ResearchProgress) {
  return {
    currentDepth: progress.currentDepth,
    totalDepth: progress.totalDepth,
    currentBreadth: progress.currentBreadth,
    totalBreadth: progress.totalBreadth,
    totalQueries: progress.totalQueries,
    completedQueries: progress.completedQueries,
    currentQuery: progress.currentQuery,
  };
}

// Models endpoint
app.get('/api/models', async (req, res) => {
  try {
    const apiKey = process.env.VENICE_API_KEY;
    if (!apiKey) {
      return res.status(500).json({
        success: false,
        error: 'VENICE_API_KEY not configured',
      });
    }

    const models = await fetchAvailableModels(
      'https://api.venice.ai/api/v1',
      apiKey,
    );

    const formattedModels = models.map(model => ({
      id: model.id,
      name: model.model_spec.name,
      contextTokens: model.model_spec.availableContextTokens,
      pricing: {
        input: model.model_spec.pricing.input.usd,
        output: model.model_spec.pricing.output.usd,
      },
      capabilities: {
        functionCalling: model.model_spec.capabilities.supportsFunctionCalling,
        responseSchema: model.model_spec.capabilities.supportsResponseSchema,
        webSearch: model.model_spec.capabilities.supportsWebSearch,
        vision: model.model_spec.capabilities.supportsVision,
        reasoning: model.model_spec.capabilities.supportsReasoning,
      },
      traits: model.model_spec.traits,
    }));

    res.json({
      success: true,
      models: formattedModels,
    });
  } catch (error) {
    console.error('Error fetching models:', error);
    res.status(500).json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    });
  }
});

// Research endpoint with streaming
app.post('/api/research', async (req, res) => {
  const { query, breadth, depth, searchProvider, model } = req.body;

  if (!query || !breadth || !depth) {
    return res.status(400).json({
      success: false,
      error: 'Missing required parameters: query, breadth, depth',
    });
  }

  // Set search provider
  if (searchProvider === 'brave' || searchProvider === 'venice') {
    setSearchProvider(searchProvider);
  }

  // Set model if provided
  if (model) {
    process.env.VENICE_MODEL = model;
  }

  // Set up Server-Sent Events
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');

  const sendEvent = (type: string, data: any) => {
    res.write(`data: ${JSON.stringify({ type, ...data })}\n\n`);
  };

  try {
    const engine = new ResearchEngine({
      query,
      breadth: parseInt(breadth),
      depth: parseInt(depth),
      onProgress: (progress) => {
        sendEvent('progress', { progress: serializeProgress(progress) });
      },
    });

    const { learnings, sources } = await engine.research();

    sendEvent('progress', {
      progress: {
        currentDepth: 0,
        totalDepth: parseInt(depth),
        currentBreadth: 0,
        totalBreadth: parseInt(breadth),
        totalQueries: 0,
        completedQueries: 0,
      },
    });

    sendEvent('info', { message: 'Generating summary...' });

    const summary = await generateSummary({
      query,
      learnings,
    });

    sendEvent('result', {
      result: {
        learnings,
        sources,
        summary,
      },
    });

    res.end();
  } catch (error) {
    console.error('Research error:', error);
    sendEvent('error', {
      error: error instanceof Error ? error.message : 'Unknown error occurred',
    });
    res.end();
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`API available at http://localhost:${PORT}/api`);
});

