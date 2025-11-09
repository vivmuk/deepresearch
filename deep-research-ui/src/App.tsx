import { useState, useEffect } from 'react';
import { Search, Moon, Sun, Settings, Loader2 } from 'lucide-react';
import ResearchForm from './components/ResearchForm';
import ProgressTracker from './components/ProgressTracker';
import ResultsDisplay from './components/ResultsDisplay';
import ModelSelector from './components/ModelSelector';
import { ResearchProgress, ResearchResult, ModelInfo } from './types';
import './App.css';

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [isResearching, setIsResearching] = useState(false);
  const [progress, setProgress] = useState<ResearchProgress | null>(null);
  const [results, setResults] = useState<ResearchResult | null>(null);
  const [selectedModel, setSelectedModel] = useState<string>('llama-3.3-70b');
  const [models, setModels] = useState<ModelInfo[]>([]);
  const [showModelSelector, setShowModelSelector] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (savedTheme) {
      setTheme(savedTheme);
    }
    document.documentElement.setAttribute('data-theme', theme);
    
    // Load available models
    fetch('/api/models')
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setModels(data.models || []);
        }
      })
      .catch(console.error);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  const handleResearch = async (query: string, breadth: number, depth: number, searchProvider: string) => {
    setIsResearching(true);
    setProgress(null);
    setResults(null);

    try {
      const response = await fetch('/api/research', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          query,
          breadth,
          depth,
          searchProvider,
          model: selectedModel,
        }),
      });

      if (!response.ok) {
        throw new Error('Research request failed');
      }

      const reader = response.body?.getReader();
      const decoder = new TextDecoder();

      if (!reader) {
        throw new Error('No response body');
      }

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value);
        const lines = chunk.split('\n').filter(Boolean);

        for (const line of lines) {
          if (line.startsWith('data: ')) {
            const data = JSON.parse(line.slice(6));
            
            if (data.type === 'progress') {
              setProgress(data.progress);
            } else if (data.type === 'result') {
              setResults(data.result);
              setIsResearching(false);
            } else if (data.type === 'error') {
              throw new Error(data.error);
            }
          }
        }
      }
    } catch (error) {
      console.error('Research error:', error);
      alert(error instanceof Error ? error.message : 'Research failed');
      setIsResearching(false);
    }
  };

  return (
    <div className="app">
      <header className="header">
        <div className="header-content">
          <div className="logo">
            <Search className="logo-icon" />
            <h1>Deep Research</h1>
            <span className="badge">Privacy Edition</span>
          </div>
          <div className="header-actions">
            <button
              className="icon-button"
              onClick={() => setShowModelSelector(!showModelSelector)}
              title="Select Model"
            >
              <Settings />
            </button>
            <button
              className="icon-button"
              onClick={toggleTheme}
              title="Toggle Theme"
            >
              {theme === 'light' ? <Moon /> : <Sun />}
            </button>
          </div>
        </div>
      </header>

      <main className="main-content">
        {showModelSelector && (
          <ModelSelector
            models={models}
            selectedModel={selectedModel}
            onSelect={setSelectedModel}
            onClose={() => setShowModelSelector(false)}
          />
        )}

        <div className="container">
          <ResearchForm
            onSubmit={handleResearch}
            disabled={isResearching}
          />

          {isResearching && progress && (
            <ProgressTracker progress={progress} />
          )}

          {isResearching && !progress && (
            <div className="loading-state">
              <Loader2 className="spinner" />
              <p>Initializing research...</p>
            </div>
          )}

          {results && !isResearching && (
            <ResultsDisplay results={results} />
          )}
        </div>
      </main>

      <footer className="footer">
        <p>
          Powered by{' '}
          <a href="https://venice.ai" target="_blank" rel="noopener noreferrer">
            Venice.ai
          </a>{' '}
          and{' '}
          <a href="https://brave.com/search" target="_blank" rel="noopener noreferrer">
            Brave Search
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;

