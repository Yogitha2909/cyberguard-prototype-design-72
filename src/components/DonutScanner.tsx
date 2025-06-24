
import { CheckCircle, Shield, AlertTriangle } from 'lucide-react';
import { useApp } from '@/contexts/AppContext';

interface DonutScannerProps {
  pageId: string;
  size?: number;
  showResults?: boolean;
}

const DonutScanner = ({ pageId, size = 200, showResults = true }: DonutScannerProps) => {
  const { isDarkMode, pageScanStates } = useApp();
  
  const scanState = pageScanStates[pageId] || { 
    isScanning: false, 
    progress: 0, 
    isComplete: false 
  };

  const { isScanning, progress, isComplete, results } = scanState;
  const radius = (size - 20) / 2;
  const strokeWidth = 12;
  const normalizedRadius = radius - strokeWidth * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDasharray = `${circumference} ${circumference}`;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  if (isComplete && showResults && results) {
    return (
      <div className={`${isDarkMode ? 'bg-slate-800' : 'bg-white'} rounded-2xl p-6 text-center border ${isDarkMode ? 'border-slate-700' : 'border-slate-200'} shadow-lg`}>
        <div className="mb-4">
          {results.deviceSafe ? (
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
          ) : (
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <AlertTriangle className="w-8 h-8 text-red-600" />
            </div>
          )}
        </div>
        
        <h3 className={`text-xl font-bold mb-2 ${isDarkMode ? 'text-slate-200' : 'text-slate-800'}`}>
          {results.deviceSafe ? 'Device is Safe' : 'Threats Detected'}
        </h3>
        
        <div className={`space-y-2 text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
          <p>Apps Scanned: <span className="font-semibold">{results.appsScanned}</span></p>
          <p>Threats Found: <span className={`font-semibold ${results.threatsFound > 0 ? 'text-red-600' : 'text-green-600'}`}>{results.threatsFound}</span></p>
        </div>
        
        <button className={`mt-4 px-6 py-2 rounded-lg font-medium ${
          results.deviceSafe 
            ? 'bg-green-600 hover:bg-green-700 text-white' 
            : 'bg-red-600 hover:bg-red-700 text-white'
        } transition-colors`}>
          {results.deviceSafe ? 'Done' : 'Fix Now'}
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center">
      <div className="relative" style={{ width: size, height: size }}>
        <svg
          height={size}
          width={size}
          className="transform -rotate-90"
        >
          {/* Background circle */}
          <circle
            stroke={isDarkMode ? "#374151" : "#e5e7eb"}
            fill="transparent"
            strokeWidth={strokeWidth}
            r={normalizedRadius}
            cx={size / 2}
            cy={size / 2}
          />
          {/* Progress circle */}
          <circle
            stroke="url(#gradient)"
            fill="transparent"
            strokeWidth={strokeWidth}
            strokeDasharray={strokeDasharray}
            style={{ strokeDashoffset }}
            strokeLinecap="round"
            r={normalizedRadius}
            cx={size / 2}
            cy={size / 2}
            className="transition-all duration-300"
          />
          {/* Gradient definition */}
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
          </defs>
        </svg>
        
        {/* Center content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-2">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <div className={`text-2xl font-bold ${isDarkMode ? 'text-slate-200' : 'text-slate-800'}`}>
            {Math.round(progress)}%
          </div>
          <div className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            {isScanning ? 'Scanning...' : 'Ready'}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonutScanner;
