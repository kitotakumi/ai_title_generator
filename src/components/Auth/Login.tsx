// src/components/Auth/Login.tsx
import React, { useState } from 'react';
import { signIn } from 'aws-amplify/auth';
import { useAuth } from './AuthProvider';
import { AppLogo, ExplanationBlock } from '../CommonComponents';
import '../../styles/Login.css';

interface FormState {
  username: string;
  password: string;
}

const Login: React.FC = () => {
  const { setUser } = useAuth();
  const [formState, setFormState] = useState<FormState>({ username: '', password: '' });
  const [error, setError] = useState<string>('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    const { username, password } = formState;
    if (!username || !password) {
      setError('Username and password are required');
      return;
    }
    try {
      const userData = await signIn({ username, password });
      setUser(userData);
      setError('');
    } catch (err: any) {
      console.error('Error signing in:', err);
      setError(err.message || 'Error signing in');
    }
  };

  return (
    <div className="login-container fade-in">
      <AppLogo /> {/* ログイン画面上部に共通のロゴを表示 */}
      {error && <p className="error-message">{error}</p>}
      <div className="login-card">
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formState.username}
            onChange={onChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formState.password}
            onChange={onChange}
          />
          <button type="submit">ログイン</button>
        </form>
        <div className="id-password-link">
          <a
            href="https://www.notion.so/Username-Password-1964e4709dde802bb5cfc0bc609ff24f?pvs=4"
            target="_blank"
            rel="noopener noreferrer"
          >
            UsernameとPasswordはこちらに記載してあります
          </a>
        </div>
      </div>
      <ExplanationBlock /> {/* 共通の説明ブロック */}
    </div>
  );
};

export default Login;
