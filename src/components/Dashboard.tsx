// src/components/Dashboard.tsx
import React, { useState } from 'react';
import KeywordInput from './KeywordInput';
import ApiResponseDisplay from './ApiResponseDisplay';
import GoogleResultDisplay from './GoogleResultDisplay';
import { getGoogleTitles } from '../services/googleApi';
import { runDifyWorkflow } from '../services/difyApi';
import { AppLogo, ExplanationBlock } from './CommonComponents';
import '../styles/App.css';

const Dashboard: React.FC = () => {
  const [googleResult, setGoogleResult] = useState<string>('');
  const [difyResponse, setDifyResponse] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleKeywordSubmit = async (inputText: string): Promise<void> => {
    if (!inputText) return;
    setGoogleResult('');
    setDifyResponse(null);
    setLoading(true);
    try {
      const titles = await getGoogleTitles(inputText);
      setGoogleResult(titles);
      const outputs = await runDifyWorkflow(inputText, titles);
      setDifyResponse(outputs);
    } catch (error) {
      console.error('Error fetching data:', error);
      setGoogleResult('');
      setDifyResponse(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-container fade-in">
      <div className="content">
        <AppLogo /> {/* 共通のロゴ表示 */}
        <KeywordInput onSubmit={handleKeywordSubmit} loading={loading} />
        {!difyResponse ? (
          <>
            <ExplanationBlock /> {/* 共通の説明ブロック */}
            {googleResult && <GoogleResultDisplay googleResult={googleResult} />}
          </>
        ) : (
          <>
            <ApiResponseDisplay responseData={difyResponse} />
            {googleResult && <GoogleResultDisplay googleResult={googleResult} />}
            <ExplanationBlock />
          </>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
