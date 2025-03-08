import React from 'react';
import { createRoot } from 'react-dom/client'; // ここが重要
import App from './App';
import { Amplify } from 'aws-amplify';
import awsconfig from './aws-exports';
import './styles/App.css';

Amplify.configure(awsconfig);

const container = document.getElementById('root')!;
const root = createRoot(container);
root.render(<App />);
