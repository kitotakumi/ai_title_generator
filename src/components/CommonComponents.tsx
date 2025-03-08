// src/components/Common/CommonComponents.tsx
import React from 'react';

export const AppLogo: React.FC = () => (
  <div
    className="app-logo-container"
    onClick={() => window.location.reload()}
    style={{ cursor: 'pointer' }}
  >
    <img src="/logo.jpg" alt="App Logo" className="app-logo" />
  </div>
);

export const ExplanationBlock: React.FC = () => (
  <div className="description-block card">
    <p className="description">
      ターゲットキーワードを入力するとCUEBICのタイトル採点アルゴリズムに基づいて12個のタイトル案を生成します。Googleの検索上位10件とサジェストも表示します。
    </p>
    <div className="link-container">
      <a
        className="notion-link"
        href="https://www.notion.so/AI-1964e4709dde80d0bdd0e0ee77114475?pvs=4"
        target="_blank"
        rel="noopener noreferrer"
      >
        プロンプトや仕組みはこちら
      </a>
    </div>
  </div>
);
