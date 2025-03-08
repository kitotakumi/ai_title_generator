// src/components/KeywordInput.tsx
import React, { useState, ChangeEvent, FormEvent } from 'react';
import { FiSend } from 'react-icons/fi';
import { RingLoader } from 'react-spinners';

interface KeywordInputProps {
  onSubmit: (inputText: string) => void;
  loading: boolean;
}

const KeywordInput: React.FC<KeywordInputProps> = ({ onSubmit, loading }) => {
  const [inputText, setInputText] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => setInputText(e.target.value);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputText.trim()) {
      onSubmit(inputText);
    }
  };

  // インラインスタイル用のオブジェクト
  const ringOverride = {
    margin: '0',
    transform: 'translate(-1.4px, -1.6px)',
  };

  return (
    <form onSubmit={handleSubmit} className="input-container">
      <input
        type="text"
        value={inputText}
        onChange={handleChange}
        placeholder="ターゲットキーワードを入力してください"
        className="text-input"
      />
      <button type="submit" disabled={loading} className="submit-button">
        {loading ? (
          <RingLoader size={20} color="#fff" loading={loading} cssOverride={ringOverride} />
        ) : (
          <FiSend size={20} />
        )}
      </button>
    </form>
  );
};

export default KeywordInput;
