
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ScanResults {
  appsScanned: number;
  threatsFound: number;
  deviceSafe: boolean;
}

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
  // New scanning states for each page
  pageScanStates: Record<string, {
    isScanning: boolean;
    progress: number;
    isComplete: boolean;
    results?: ScanResults;
  }>;
  startPageScan: (pageId: string) => void;
  resetPageScan: (pageId: string) => void;
  // Security settings states
  securitySettings: Record<string, boolean>;
  toggleSecuritySetting: (settingName: string) => void;
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

  const [pageScanStates, setPageScanStates] = useState<Record<string, {
    isScanning: boolean;
    progress: number;
    isComplete: boolean;
    results?: ScanResults;
  }>>({});

  const [securitySettings, setSecuritySettings] = useState<Record<string, boolean>>({
    'Root Status': false,
    'Hotspot Status': false,
    'Google Play Protect': true,
    'USB Debugging': false,
    'Bluetooth Status': true,
    'Lock Screen Status': true,
    'SEAndroid': true,
    'Device Encryption': true,
    'NFC': false,
    'Developer Options': false,
    'Show Password': true,
    'Lock Screen Notifications': true,
    'Unknown Source Installation': false,
  });

  const toggleAppStatus = (appName: string) => {
    setDisabledApps(prev => ({
      ...prev,
      [appName]: !prev[appName]
    }));
  };

  const startPageScan = (pageId: string) => {
    setPageScanStates(prev => ({
      ...prev,
      [pageId]: {
        isScanning: true,
        progress: 0,
        isComplete: false
      }
    }));

    // Simulate scanning progress
    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.random() * 15 + 5; // Random progress increments
      if (progress >= 100) {
        progress = 100;
        clearInterval(interval);
        
        // Generate mock results based on page
        const mockResults: ScanResults = {
          appsScanned: Math.floor(Math.random() * 50) + 20,
          threatsFound: Math.floor(Math.random() * 5),
          deviceSafe: Math.random() > 0.3
        };

        setPageScanStates(prev => ({
          ...prev,
          [pageId]: {
            isScanning: false,
            progress: 100,
            isComplete: true,
            results: mockResults
          }
        }));
      } else {
        setPageScanStates(prev => ({
          ...prev,
          [pageId]: {
            ...prev[pageId],
            progress
          }
        }));
      }
    }, 100);
  };

  const resetPageScan = (pageId: string) => {
    setPageScanStates(prev => ({
      ...prev,
      [pageId]: {
        isScanning: false,
        progress: 0,
        isComplete: false
      }
    }));
  };

  const toggleSecuritySetting = (settingName: string) => {
    setSecuritySettings(prev => ({
      ...prev,
      [settingName]: !prev[settingName]
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
      toggleAppStatus,
      pageScanStates,
      startPageScan,
      resetPageScan,
      securitySettings,
      toggleSecuritySetting
    }}>
      {children}
    </AppContext.Provider>
  );
};
