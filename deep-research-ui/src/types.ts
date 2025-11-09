export interface ResearchProgress {
  currentDepth: number;
  totalDepth: number;
  currentBreadth: number;
  totalBreadth: number;
  totalQueries: number;
  completedQueries: number;
  currentQuery?: string;
}

export interface ResearchResult {
  learnings: string[];
  sources: string[];
  summary?: string;
}

export interface ModelInfo {
  id: string;
  name: string;
  contextTokens: number;
  pricing: {
    input: number;
    output: number;
  };
  capabilities: {
    functionCalling: boolean;
    responseSchema: boolean;
    webSearch: boolean;
    vision: boolean;
    reasoning: boolean;
  };
  traits?: string[];
}

export interface ResearchRequest {
  query: string;
  breadth: number;
  depth: number;
  searchProvider: 'brave' | 'venice';
  model: string;
}

