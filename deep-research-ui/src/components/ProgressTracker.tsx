import { ResearchProgress } from '../types';
import { Loader2, CheckCircle2 } from 'lucide-react';

interface ProgressTrackerProps {
  progress: ResearchProgress;
}

export default function ProgressTracker({ progress }: ProgressTrackerProps) {
  const progressPercent = progress.totalQueries > 0
    ? (progress.completedQueries / progress.totalQueries) * 100
    : 0;

  return (
    <div className="progress-tracker">
      <div className="progress-header">
        <h3>Research Progress</h3>
        <span className="progress-text">
          {progress.completedQueries} / {progress.totalQueries} queries
        </span>
      </div>

      <div className="progress-bar-container">
        <div
          className="progress-bar"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      <div className="progress-details">
        <div className="progress-item">
          <span className="progress-label">Depth:</span>
          <span className="progress-value">
            {progress.currentDepth} / {progress.totalDepth}
          </span>
        </div>
        <div className="progress-item">
          <span className="progress-label">Breadth:</span>
          <span className="progress-value">
            {progress.currentBreadth} / {progress.totalBreadth}
          </span>
        </div>
      </div>

      {progress.currentQuery && (
        <div className="current-query">
          <Loader2 className="spinner-small" />
          <span>Processing: {progress.currentQuery}</span>
        </div>
      )}
    </div>
  );
}

