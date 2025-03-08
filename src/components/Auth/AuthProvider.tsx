// src/components/Auth/AuthProvider.tsx
import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  ReactNode,
  Dispatch,
  SetStateAction
} from 'react';
import { getCurrentUser, signOut } from 'aws-amplify/auth';
import { getOrCreateUserId } from '../../utils/userId';

interface AuthContextType {
  user: any | null; // 必要に応じて、適切なユーザー型に変更してください
  uniqueId: string | null;
  setUser: Dispatch<SetStateAction<any | null>>;
  logout: () => Promise<void>;
}

// 初期値を与えた createContext を作成
const AuthContext = createContext<AuthContextType>({
  user: null,
  uniqueId: null,
  setUser: () => {},
  logout: async () => {}
});

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<any | null>(null);
  const [uniqueId, setUniqueId] = useState<string | null>(null);

  useEffect(() => {
    // ユーザー識別用の一意のIDを localStorage から取得または生成する
    const id = getOrCreateUserId();
    setUniqueId(id);

    async function checkAuth() {
      try {
        const currentUser = await getCurrentUser();
        setUser(currentUser);
      } catch (err) {
        setUser(null);
      }
    }
    checkAuth();
  }, []);

  const logout = async () => {
    try {
      await signOut();
      setUser(null);
    } catch (err) {
      console.error('Error signing out:', err);
    }
  };

  return (
    <AuthContext.Provider value={{ user, uniqueId, setUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
