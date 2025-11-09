import { useState } from 'react';
import { Search as SearchIcon, Play } from 'lucide-react';

interface ResearchFormProps {
  onSubmit: (query: string, breadth: number, depth: number, searchProvider: string) => void;
  disabled: boolean;
}

export default function ResearchForm({ onSubmit, disabled }: ResearchFormProps) {
  const [query, setQuery] = useState('');
  const [breadth, setBreadth] = useState(3);
  const [depth, setDepth] = useState(2);
  const [searchProvider, setSearchProvider] = useState<'brave' | 'venice'>('brave');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim() && !disabled) {
      onSubmit(query.trim(), breadth, depth, searchProvider);
    }
  };

  return (
    <div className="research-form-container">
      <form className="research-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="query">Research Query</label>
          <div className="input-wrapper">
            <SearchIcon className="input-icon" />
            <input
              id="query"
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="What would you like to research?"
              disabled={disabled}
              required
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="breadth">Breadth</label>
            <input
              id="breadth"
              type="number"
              min="2"
              max="10"
              value={breadth}
              onChange={(e) => setBreadth(parseInt(e.target.value) || 3)}
              disabled={disabled}
            />
            <span className="form-hint">Parallel queries (2-10)</span>
          </div>

          <div className="form-group">
            <label htmlFor="depth">Depth</label>
            <input
              id="depth"
              type="number"
              min="1"
              max="5"
              value={depth}
              onChange={(e) => setDepth(parseInt(e.target.value) || 2)}
              disabled={disabled}
            />
            <span className="form-hint">Research depth (1-5)</span>
          </div>

          <div className="form-group">
            <label htmlFor="searchProvider">Search Provider</label>
            <select
              id="searchProvider"
              value={searchProvider}
              onChange={(e) => setSearchProvider(e.target.value as 'brave' | 'venice')}
              disabled={disabled}
            >
              <option value="brave">Brave Search</option>
              <option value="venice">Venice Search</option>
            </select>
          </div>
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          disabled={disabled || !query.trim()}
        >
          <Play className="btn-icon" />
          Start Research
        </button>
      </form>
    </div>
  );
}

