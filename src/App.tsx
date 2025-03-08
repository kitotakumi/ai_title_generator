// src/App.tsx
import React from 'react';
import { AuthProvider, useAuth } from './components/Auth/AuthProvider';
import Login from './components/Auth/Login';
import Dashboard from './components/Dashboard';

const AppContent: React.FC = () => {
  const { user } = useAuth();
  return user ? <Dashboard /> : <Login />;
};

const App: React.FC = () => {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
};

export default App;
