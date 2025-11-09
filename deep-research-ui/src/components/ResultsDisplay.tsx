import { ResearchResult } from '../types';
import { CheckCircle2, ExternalLink, Copy, Check } from 'lucide-react';
import { useState } from 'react';

interface ResultsDisplayProps {
  results: ResearchResult;
}

export default function ResultsDisplay({ results }: ResultsDisplayProps) {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const copyToClipboard = async (text: string, index: number) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="results-display">
      <div className="results-header">
        <h2>
          <CheckCircle2 className="header-icon" />
          Research Results
        </h2>
      </div>

      {results.summary && (
        <div className="results-section">
          <h3>Summary</h3>
          <div className="summary-content">{results.summary}</div>
        </div>
      )}

      <div className="results-section">
        <h3>Key Learnings ({results.learnings.length})</h3>
        <div className="learnings-list">
          {results.learnings.map((learning, index) => (
            <div key={index} className="learning-item">
              <div className="learning-content">
                <span className="learning-number">{index + 1}</span>
                <p>{learning}</p>
              </div>
              <button
                className="icon-button-small"
                onClick={() => copyToClipboard(learning, index)}
                title="Copy"
              >
                {copiedIndex === index ? <Check size={16} /> : <Copy size={16} />}
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="results-section">
        <h3>Sources ({results.sources.length})</h3>
        <div className="sources-list">
          {results.sources.map((source, index) => (
            <a
              key={index}
              href={source}
              target="_blank"
              rel="noopener noreferrer"
              className="source-item"
            >
              <ExternalLink className="source-icon" />
              <span className="source-url">{source}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

