
import { Shield, CheckCircle, AlertTriangle } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useApp } from '@/contexts/AppContext';

interface ScanningModalProps {
  isOpen: boolean;
  onClose: () => void;
  onComplete: (results: any) => void;
}

const ScanningModal = ({ isOpen, onClose, onComplete }: ScanningModalProps) => {
  const { scanProgress, setScanProgress } = useApp();
  const [currentStep, setCurrentStep] = useState('Initializing...');
  const [isComplete, setIsComplete] = useState(false);

  const scanSteps = [
    'Initializing scan...',
    'Checking system integrity...',
    'Analyzing installed apps...',
    'Scanning for threats...',
    'Checking permissions...',
    'Validating security settings...',
    'Finalizing results...'
  ];

  useEffect(() => {
    if (!isOpen) return;

    let progress = 0;
    let stepIndex = 0;
    
    const interval = setInterval(() => {
      progress += Math.random() * 15;
      
      if (progress >= 100) {
        progress = 100;
        setIsComplete(true);
        setTimeout(() => {
          onComplete({
            threatsFound: 3,
            appsScanned: 47,
            securityScore: 85
          });
        }, 1500);
        clearInterval(interval);
      }
      
      setScanProgress(progress);
      setCurrentStep(scanSteps[Math.min(stepIndex, scanSteps.length - 1)]);
      
      if (progress > (stepIndex + 1) * 14) {
        stepIndex++;
      }
    }, 300);

    return () => clearInterval(interval);
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-6">
      <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 max-w-md w-full shadow-2xl border border-white/50">
        <div className="text-center">
          {/* Scanning Icon */}
          <div className="relative mb-6">
            <div className={`w-24 h-24 mx-auto rounded-full flex items-center justify-center ${
              isComplete ? 'bg-emerald-100' : 'bg-blue-100'
            } ${!isComplete ? 'animate-pulse' : ''}`}>
              {isComplete ? (
                <CheckCircle className="w-12 h-12 text-emerald-600" />
              ) : (
                <Shield className="w-12 h-12 text-blue-600" />
              )}
            </div>
            
            {/* Scanning Animation Rings */}
            {!isComplete && (
              <>
                <div className="absolute inset-0 border-4 border-blue-200 rounded-full animate-ping"></div>
                <div className="absolute inset-2 border-2 border-blue-300 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
              </>
            )}
          </div>

          {/* Progress */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-slate-700 font-medium">
                {isComplete ? 'Scan Complete!' : 'Scanning...'}
              </span>
              <span className="text-slate-600 text-sm">{Math.round(scanProgress)}%</span>
            </div>
            
            <div className="w-full bg-slate-200 rounded-full h-3 overflow-hidden">
              <div 
                className={`h-full rounded-full transition-all duration-300 ${
                  isComplete ? 'bg-emerald-400' : 'bg-blue-400'
                }`}
                style={{ width: `${scanProgress}%` }}
              ></div>
            </div>
            
            <p className="text-slate-500 text-sm mt-2">{currentStep}</p>
          </div>

          {/* Results Preview */}
          {isComplete && (
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="bg-emerald-50 rounded-xl p-3">
                <div className="text-emerald-600 font-bold text-xl">85</div>
                <div className="text-emerald-700 text-xs">Security Score</div>
              </div>
              <div className="bg-blue-50 rounded-xl p-3">
                <div className="text-blue-600 font-bold text-xl">47</div>
                <div className="text-blue-700 text-xs">Apps Scanned</div>
              </div>
              <div className="bg-orange-50 rounded-xl p-3">
                <div className="text-orange-600 font-bold text-xl">3</div>
                <div className="text-orange-700 text-xs">Issues Found</div>
              </div>
            </div>
          )}

          {/* Action Button */}
          {isComplete && (
            <button
              onClick={onClose}
              className="w-full bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white py-3 px-6 rounded-xl font-semibold transition-all transform hover:scale-105"
            >
              View Results
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ScanningModal;
