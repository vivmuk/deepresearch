import { ModelInfo } from '../types';
import { X, Check, Zap, Code, Eye, Brain, Search } from 'lucide-react';

interface ModelSelectorProps {
  models: ModelInfo[];
  selectedModel: string;
  onSelect: (modelId: string) => void;
  onClose: () => void;
}

export default function ModelSelector({
  models,
  selectedModel,
  onSelect,
  onClose,
}: ModelSelectorProps) {
  const getTraitIcon = (trait: string) => {
    if (trait.includes('fast')) return <Zap size={16} />;
    if (trait.includes('code')) return <Code size={16} />;
    if (trait.includes('vision')) return <Eye size={16} />;
    if (trait.includes('reason')) return <Brain size={16} />;
    return null;
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Select AI Model</h2>
          <button className="icon-button" onClick={onClose}>
            <X />
          </button>
        </div>

        <div className="model-list">
          {models.length === 0 ? (
            <div className="empty-state">Loading models...</div>
          ) : (
            models.map((model) => (
              <div
                key={model.id}
                className={`model-card ${selectedModel === model.id ? 'selected' : ''}`}
                onClick={() => {
                  onSelect(model.id);
                  onClose();
                }}
              >
                <div className="model-header">
                  <div className="model-name-row">
                    <h3>{model.name}</h3>
                    {selectedModel === model.id && (
                      <Check className="check-icon" />
                    )}
                  </div>
                  <div className="model-id">{model.id}</div>
                </div>

                <div className="model-details">
                  <div className="model-spec">
                    <span className="spec-label">Context:</span>
                    <span className="spec-value">
                      {(model.contextTokens / 1000).toFixed(0)}k tokens
                    </span>
                  </div>
                  <div className="model-spec">
                    <span className="spec-label">Pricing:</span>
                    <span className="spec-value">
                      ${model.pricing.input}/M input
                    </span>
                  </div>
                </div>

                <div className="model-capabilities">
                  {model.capabilities.functionCalling && (
                    <span className="capability-badge" title="Function Calling">
                      Functions
                    </span>
                  )}
                  {model.capabilities.responseSchema && (
                    <span className="capability-badge" title="Response Schema">
                      Schema
                    </span>
                  )}
                  {model.capabilities.webSearch && (
                    <span className="capability-badge" title="Web Search">
                      <Search size={12} /> Web
                    </span>
                  )}
                  {model.capabilities.vision && (
                    <span className="capability-badge" title="Vision">
                      <Eye size={12} /> Vision
                    </span>
                  )}
                  {model.capabilities.reasoning && (
                    <span className="capability-badge" title="Reasoning">
                      <Brain size={12} /> Reasoning
                    </span>
                  )}
                </div>

                {model.traits && model.traits.length > 0 && (
                  <div className="model-traits">
                    {model.traits.map((trait, idx) => (
                      <span key={idx} className="trait-badge">
                        {getTraitIcon(trait)}
                        {trait}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

