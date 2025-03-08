// src/components/GoogleResultDisplay.tsx
import React from 'react';

interface GoogleResultDisplayProps {
  googleResult?: string | null;
}

const GoogleResultDisplay: React.FC<GoogleResultDisplayProps> = ({ googleResult }) => {
  if (!googleResult) return null;

  return (
    <div className="google-result-container card fade-in">
      <h3 className="section-title">Google検索結果：</h3>
      <pre className="google-result-text">{googleResult}</pre>
    </div>
  );
};

export default GoogleResultDisplay;
