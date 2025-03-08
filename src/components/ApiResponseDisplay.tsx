// src/components/ApiResponseDisplay.tsx
import React from 'react';

interface SortedOutputItem {
  title: string;
  type_of_mold: string;
  suggestions_used_word: string;
  techniques_used: string;
  total_point: number;
}

interface ApiResponseData {
  sorted_output: string; // JSON 文字列として格納されている
  suggest: string;
}

interface ApiResponseDisplayProps {
  responseData?: ApiResponseData | null;
}

const ApiResponseDisplay: React.FC<ApiResponseDisplayProps> = ({ responseData }) => {
  if (!responseData) return null;

  const sortedOutputStr = responseData.sorted_output;
  let sortedOutputArray: SortedOutputItem[] | null = null;

  try {
    // sorted_output に含まれるシングルクオートをダブルクオートに置換してパースする
    sortedOutputArray = JSON.parse(sortedOutputStr.replace(/'/g, '"'));
  } catch (error) {
    console.error('Error parsing sorted_output:', error);
    sortedOutputArray = null;
  }

  return (
    <>
      {/* タイトル一覧用のカード */}
      <div className="response-container card fade-in">
        <h3 className="section-title-result">生成結果：</h3>
        {Array.isArray(sortedOutputArray) ? (
          <ul className="result-list">
            {sortedOutputArray.map((item, index) => (
              <li key={index} className="result-item">
                <h3 className="result-title">{item.title}</h3>
                <strong>型:</strong> {item.type_of_mold} <br />
                <strong>サジェストワード:</strong> {item.suggestions_used_word} <br />
                <strong>テクニック:</strong> {item.techniques_used} <br />
                <strong>点数:</strong> {item.total_point}点 <br />
              </li>
            ))}
          </ul>
        ) : (
          <pre>{JSON.stringify(sortedOutputArray, null, 2)}</pre>
        )}
      </div>

      {/* サジェスト一覧用のカード */}
      <div className="response-container card fade-in">
        <h3 className="section-title">サジェスト一覧：</h3>
        <p>{responseData.suggest}</p>
      </div>
    </>
  );
};

export default ApiResponseDisplay;
