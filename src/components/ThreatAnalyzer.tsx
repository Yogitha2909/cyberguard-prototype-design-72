
import { ArrowLeft, Shield, AlertTriangle, CheckCircle, Moon, Sun } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useApp } from '@/contexts/AppContext';
import DonutScanner from './DonutScanner';

const ThreatAnalyzer = ({ onBack }: { onBack: () => void }) => {
  const { isDarkMode, setIsDarkMode, pageScanStates, startPageScan } = useApp();

  const pageId = 'threat-analyzer';
  const scanState = pageScanStates[pageId];

  useEffect(() => {
    // Auto-start scan when page loads
    if (!scanState?.isComplete) {
      startPageScan(pageId);
    }
  }, []);

  const malignApps = 3;
  const benignApps = 47;
  const totalApps = malignApps + benignApps;

  const malignPercentage = (malignApps / totalApps) * 100;
  const benignPercentage = (benignApps / totalApps) * 100;

  // Show scanning animation if scanning or not complete
  if (scanState?.isScanning || (!scanState?.isComplete && !scanState)) {
    return (
      <div className={`min-h-screen ${isDarkMode ? 'bg-slate-900' : 'bg-gradient-to-br from-slate-50 to-blue-50'}`}>
        {/* Header */}
        <header className={`${isDarkMode ? 'bg-slate-800' : 'bg-white'} shadow-sm border-b ${isDarkMode ? 'border-slate-700' : 'border-slate-200'}`}>
          <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button onClick={onBack} className={`p-2 ${isDarkMode ? 'text-slate-400 hover:text-slate-200' : 'text-slate-600 hover:text-blue-600'} transition-colors`}>
                <ArrowLeft className="w-5 h-5" />
              </button>
              <h1 className={`text-xl font-bold ${isDarkMode ? 'text-slate-200' : 'text-slate-800'}`}>Threat Analyzer</h1>
            </div>
            
            <button 
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`p-3 ${isDarkMode ? 'bg-slate-700/50 text-slate-300 hover:bg-slate-600/50' : 'bg-white/50 text-slate-600 hover:bg-white/70'} backdrop-blur-sm rounded-2xl transition-all duration-300`}
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
        </header>

        <main className="max-w-4xl mx-auto px-6 py-8 flex items-center justify-center">
          <DonutScanner pageId={pageId} size={250} />
        </main>
      </div>
    );
  }

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-slate-900' : 'bg-gradient-to-br from-slate-50 to-blue-50'}`}>
      {/* Header */}
      <header className={`${isDarkMode ? 'bg-slate-800' : 'bg-white'} shadow-sm border-b ${isDarkMode ? 'border-slate-700' : 'border-slate-200'}`}>
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button onClick={onBack} className={`p-2 ${isDarkMode ? 'text-slate-400 hover:text-slate-200' : 'text-slate-600 hover:text-blue-600'} transition-colors`}>
              <ArrowLeft className="w-5 h-5" />
            </button>
            <h1 className={`text-xl font-bold ${isDarkMode ? 'text-slate-200' : 'text-slate-800'}`}>Threat Analyzer</h1>
          </div>
          
          <button 
            onClick={() => setIsDarkMode(!isDarkMode)}
            className={`p-3 ${isDarkMode ? 'bg-slate-700/50 text-slate-300 hover:bg-slate-600/50' : 'bg-white/50 text-slate-600 hover:bg-white/70'} backdrop-blur-sm rounded-2xl transition-all duration-300`}
          >
            {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-8">
        {/* Threat Chart */}
        <div className={`${isDarkMode ? 'bg-slate-800' : 'bg-white'} rounded-2xl shadow-sm border ${isDarkMode ? 'border-slate-700' : 'border-slate-200'} p-8 mb-6`}>
          <div className="text-center">
            <div className="relative w-48 h-48 mx-auto mb-6">
              {/* Outer Ring - Malign Apps */}
              <svg className="w-48 h-48 transform -rotate-90" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  stroke={isDarkMode ? "#fee2e2" : "#fee2e2"}
                  strokeWidth="8"
                  fill="none"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  stroke="#ef4444"
                  strokeWidth="8"
                  fill="none"
                  strokeDasharray={`${malignPercentage * 2.51} 251`}
                  className="transition-all duration-1000"
                />
                {/* Inner Ring - Benign Apps */}
                <circle
                  cx="50"
                  cy="50"
                  r="25"
                  stroke={isDarkMode ? "#dcfce7" : "#dcfce7"}
                  strokeWidth="8"
                  fill="none"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="25"
                  stroke="#22c55e"
                  strokeWidth="8"
                  fill="none"
                  strokeDasharray={`${benignPercentage * 1.57} 157`}
                  className="transition-all duration-1000"
                />
              </svg>
              
              {/* Center Icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center">
                  <Shield className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                  <span className={`text-sm font-medium ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>Potential Malign Apps</span>
                </div>
                <div className="text-3xl font-bold text-red-600">{malignApps}</div>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                  <span className={`text-sm font-medium ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>Potential Benign Apps</span>
                </div>
                <div className="text-3xl font-bold text-green-600">{benignApps}</div>
              </div>
            </div>

            {/* Manual Scan Button */}
            <button
              onClick={() => startPageScan(pageId)}
              className="w-full py-4 px-6 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 transition-all duration-300"
            >
              Start New Scan
            </button>
          </div>
        </div>

        {/* Status Banner */}
        <div className={`${isDarkMode ? 'bg-green-900/30' : 'bg-green-50'} border ${isDarkMode ? 'border-green-800' : 'border-green-200'} rounded-xl p-4 flex items-center space-x-3`}>
          <CheckCircle className="w-6 h-6 text-green-600" />
          <span className={`${isDarkMode ? 'text-green-300' : 'text-green-800'} font-medium`}>Real-time protection enabled</span>
        </div>

        {/* Threats List */}
        <div className={`mt-6 ${isDarkMode ? 'bg-slate-800' : 'bg-white'} rounded-2xl shadow-sm border ${isDarkMode ? 'border-slate-700' : 'border-slate-200'} overflow-hidden`}>
          <div className={`p-4 border-b ${isDarkMode ? 'border-slate-700' : 'border-slate-200'} ${isDarkMode ? 'bg-red-900/30' : 'bg-red-50'}`}>
            <h3 className={`font-semibold ${isDarkMode ? 'text-red-300' : 'text-red-800'} flex items-center space-x-2`}>
              <AlertTriangle className="w-5 h-5" />
              <span>Detected Threats</span>
            </h3>
          </div>
          
          {[
            { name: 'Suspicious APK', risk: 'High', description: 'Unknown source installation detected' },
            { name: 'Ad Network Tracker', risk: 'Medium', description: 'Excessive data collection permissions' },
            { name: 'Background Service', risk: 'Low', description: 'Unusual background activity' },
          ].map((threat, index) => (
            <div key={index} className={`p-4 border-b ${isDarkMode ? 'border-slate-700' : 'border-slate-100'} last:border-b-0`}>
              <div className="flex items-center justify-between">
                <div>
                  <h4 className={`font-medium ${isDarkMode ? 'text-slate-200' : 'text-slate-800'}`}>{threat.name}</h4>
                  <p className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>{threat.description}</p>
                </div>
                <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                  threat.risk === 'High' ? 'bg-red-100 text-red-800' :
                  threat.risk === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-gray-100 text-gray-800'
                }`}>
                  {threat.risk} Risk
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default ThreatAnalyzer;
