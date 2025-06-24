
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AppContextType {
  isDarkMode: boolean;
  setIsDarkMode: (value: boolean) => void;
  isScanning: boolean;
  setIsScanning: (value: boolean) => void;
  scanProgress: number;
  setScanProgress: (value: number) => void;
  realtimeProtection: boolean;
  setRealtimeProtection: (value: boolean) => void;
  language: string;
  setLanguage: (value: string) => void;
  disabledApps: Record<string, boolean>;
  toggleAppStatus: (appName: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isScanning, setIsScanning] = useState(false);
  const [scanProgress, setScanProgress] = useState(0);
  const [realtimeProtection, setRealtimeProtection] = useState(true);
  const [language, setLanguage] = useState('English');
  const [disabledApps, setDisabledApps] = useState<Record<string, boolean>>({});

  const toggleAppStatus = (appName: string) => {
    setDisabledApps(prev => ({
      ...prev,
      [appName]: !prev[appName]
    }));
  };

  return (
    <AppContext.Provider value={{
      isDarkMode,
      setIsDarkMode,
      isScanning,
      setIsScanning,
      scanProgress,
      setScanProgress,
      realtimeProtection,
      setRealtimeProtection,
      language,
      setLanguage,
      disabledApps,
      toggleAppStatus
    }}>
      {children}
    </AppContext.Provider>
  );
};
