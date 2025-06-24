
import { Shield, CheckCircle, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useApp } from '@/contexts/AppContext';
import { useToast } from '@/hooks/use-toast';

interface AppScanModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface AppData {
  name: string;
  icon: string;
  timeUsed: string;
  dataUsed: string;
  backgroundData: string;
}

const AppScanModal = ({ isOpen, onClose }: AppScanModalProps) => {
  const { scanProgress, setScanProgress, disabledApps, toggleAppStatus } = useApp();
  const { toast } = useToast();
  const [isComplete, setIsComplete] = useState(false);
  const [scannedApps, setScannedApps] = useState<AppData[]>([]);

  const appPool = [
    { name: 'Paint By Number', icon: '🎨', timeUsed: '2h 45min', dataUsed: '125MB', backgroundData: '12MB' },
    { name: 'Picsart', icon: '📷', timeUsed: '1h 30min', dataUsed: '89MB', backgroundData: '25MB' },
    { name: 'Jetpack', icon: '🚀', timeUsed: '45min', dataUsed: '67MB', backgroundData: '8MB' },
    { name: 'Hill Climb Racing', icon: '🏎️', timeUsed: '3h 15min', dataUsed: '156MB', backgroundData: '18MB' },
    { name: 'Remini', icon: '✨', timeUsed: '55min', dataUsed: '78MB', backgroundData: '15MB' },
    { name: 'Zen Word', icon: '🧘', timeUsed: '1h 20min', dataUsed: '34MB', backgroundData: '5MB' },
    { name: 'TikTok', icon: '🎵', timeUsed: '4h 30min', dataUsed: '234MB', backgroundData: '45MB' },
    { name: 'Instagram', icon: '📸', timeUsed: '2h 10min', dataUsed: '189MB', backgroundData: '32MB' },
  ];

  const getRandomApps = (count: number) => {
    const shuffled = [...appPool].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  const circumference = 2 * Math.PI * 45; // radius = 45

  useEffect(() => {
    if (!isOpen) {
      setIsComplete(false);
      setScanProgress(0);
      return;
    }

    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.random() * 8 + 2;
      
      if (progress >= 100) {
        progress = 100;
        setIsComplete(true);
        setScannedApps(getRandomApps(Math.floor(Math.random() * 3) + 3)); // 3-5 apps
        clearInterval(interval);
      }
      
      setScanProgress(progress);
    }, 150);

    return () => clearInterval(interval);
  }, [isOpen, setScanProgress]);

  const handleToggleApp = (appName: string) => {
    toggleAppStatus(appName);
    const isDisabled = !disabledApps[appName];
    toast({
      title: isDisabled ? "App Disabled" : "App Enabled",
      description: `${appName} has been ${isDisabled ? 'disabled' : 'enabled'} successfully`,
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-6">
      <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 max-w-md w-full shadow-2xl border border-white/50 max-h-[90vh] overflow-y-auto">
        <div className="text-center">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-slate-700">App Analysis</h2>
            <button onClick={onClose} className="p-2 text-slate-500 hover:text-slate-700">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Donut Chart */}
          <div className="relative mb-6">
            <svg className="w-32 h-32 mx-auto transform -rotate-90" viewBox="0 0 100 100">
              {/* Background circle */}
              <circle
                cx="50"
                cy="50"
                r="45"
                stroke="rgb(226 232 240)"
                strokeWidth="8"
                fill="transparent"
              />
              {/* Progress circle */}
              <circle
                cx="50"
                cy="50"
                r="45"
                stroke={isComplete ? "rgb(34 197 94)" : "rgb(59 130 246)"}
                strokeWidth="8"
                fill="transparent"
                strokeDasharray={circumference}
                strokeDashoffset={circumference - (scanProgress / 100) * circumference}
                strokeLinecap="round"
                className="transition-all duration-300"
              />
            </svg>
            
            {/* Center content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              {isComplete ? (
                <CheckCircle className="w-8 h-8 text-emerald-600 mb-1" />
              ) : (
                <Shield className="w-8 h-8 text-blue-600 mb-1 animate-pulse" />
              )}
              <span className="text-2xl font-bold text-slate-700">{Math.round(scanProgress)}%</span>
            </div>
          </div>

          {/* Status */}
          <p className="text-slate-600 mb-6">
            {isComplete ? 'Scan Complete!' : 'Analyzing apps...'}
          </p>

          {/* Results */}
          {isComplete && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-slate-700 text-left mb-4">
                Found {scannedApps.length} apps using significant resources:
              </h3>
              
              {scannedApps.map((app, index) => {
                const isDisabled = disabledApps[app.name];
                return (
                  <div key={index} className="bg-white/60 rounded-2xl p-4 text-left">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <div className="text-2xl">{app.icon}</div>
                        <div>
                          <h4 className="font-semibold text-slate-700">{app.name}</h4>
                          <p className="text-xs text-slate-500">Time: {app.timeUsed}</p>
                        </div>
                      </div>
                      <button
                        onClick={() => handleToggleApp(app.name)}
                        className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                          isDisabled
                            ? 'bg-emerald-200 text-emerald-700 hover:bg-emerald-300'
                            : 'bg-rose-200 text-rose-700 hover:bg-rose-300'
                        }`}
                      >
                        {isDisabled ? 'Enable' : 'Disable'}
                      </button>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-xs text-slate-600">
                      <div>Data: {app.dataUsed}</div>
                      <div>Background: {app.backgroundData}</div>
                    </div>
                  </div>
                );
              })}
              
              <button
                onClick={onClose}
                className="w-full bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white py-3 px-6 rounded-xl font-semibold transition-all transform hover:scale-105 mt-6"
              >
                Done
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AppScanModal;
