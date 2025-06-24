
import { ArrowLeft, AlertTriangle, Settings, Moon, Sun } from 'lucide-react';
import { useEffect } from 'react';
import { useApp } from '@/contexts/AppContext';
import DonutScanner from './DonutScanner';

const adwareApps = [
  { name: 'Photo Editor Pro', icon: '📷', adServices: 'AdMob, Facebook Ads', risk: 'Medium' },
  { name: 'Free Game Hub', icon: '🎮', adServices: 'Unity Ads, Vungle', risk: 'High' },
  { name: 'Weather Widget', icon: '🌤️', adServices: 'Google Ads', risk: 'Low' },
  { name: 'File Manager+', icon: '📁', adServices: 'InMobi, Chartboost', risk: 'Medium' },
  { name: 'Music Player', icon: '🎵', adServices: 'AdColony', risk: 'Low' },
];

const AdwareScanner = ({ onBack }: { onBack: () => void }) => {
  const { isDarkMode, setIsDarkMode, pageScanStates, startPageScan } = useApp();

  const pageId = 'adware-scanner';
  const scanState = pageScanStates[pageId];

  useEffect(() => {
    // Auto-start scan when page loads
    if (!scanState?.isComplete) {
      startPageScan(pageId);
    }
  }, []);

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
              <h1 className={`text-xl font-bold ${isDarkMode ? 'text-slate-200' : 'text-slate-800'}`}>Ad Services (Adware)</h1>
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
            <h1 className={`text-xl font-bold ${isDarkMode ? 'text-slate-200' : 'text-slate-800'}`}>Ad Services (Adware)</h1>
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
        {/* Summary */}
        <div className={`${isDarkMode ? 'bg-orange-900/30' : 'bg-orange-50'} border ${isDarkMode ? 'border-orange-800' : 'border-orange-200'} rounded-xl p-4 mb-6 flex items-center space-x-3`}>
          <AlertTriangle className="w-6 h-6 text-orange-600" />
          <div>
            <h3 className={`font-medium ${isDarkMode ? 'text-orange-300' : 'text-orange-800'}`}>Ad-Supported Apps Detected</h3>
            <p className={`text-sm ${isDarkMode ? 'text-orange-400' : 'text-orange-700'}`}>{adwareApps.length} apps contain advertising services</p>
          </div>
        </div>

        {/* Apps List */}
        <div className={`${isDarkMode ? 'bg-slate-800' : 'bg-white'} rounded-2xl shadow-sm border ${isDarkMode ? 'border-slate-700' : 'border-slate-200'} overflow-hidden`}>
          {adwareApps.map((app, index) => (
            <div key={index} className={`flex items-center justify-between p-4 border-b ${isDarkMode ? 'border-slate-700' : 'border-slate-100'} last:border-b-0`}>
              <div className="flex items-center space-x-4">
                <div className={`w-12 h-12 ${isDarkMode ? 'bg-slate-700' : 'bg-slate-100'} rounded-xl flex items-center justify-center text-2xl`}>
                  {app.icon}
                </div>
                <div>
                  <h3 className={`font-medium ${isDarkMode ? 'text-slate-200' : 'text-slate-800'}`}>{app.name}</h3>
                  <p className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>Ad Services: {app.adServices}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                  app.risk === 'High' ? 'bg-red-100 text-red-800' :
                  app.risk === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-green-100 text-green-800'
                }`}>
                  {app.risk} Risk
                </div>
                <button className={`p-2 ${isDarkMode ? 'text-slate-400 hover:text-slate-200' : 'text-slate-400 hover:text-slate-600'} transition-colors`}>
                  <Settings className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Risk Distribution */}
        <div className="mt-6 grid grid-cols-3 gap-4">
          <div className={`${isDarkMode ? 'bg-red-900/30' : 'bg-red-50'} rounded-xl p-4 text-center`}>
            <div className={`text-2xl font-bold ${isDarkMode ? 'text-red-300' : 'text-red-600'}`}>1</div>
            <div className={`text-sm ${isDarkMode ? 'text-red-400' : 'text-red-800'}`}>High Risk</div>
          </div>
          <div className={`${isDarkMode ? 'bg-yellow-900/30' : 'bg-yellow-50'} rounded-xl p-4 text-center`}>
            <div className={`text-2xl font-bold ${isDarkMode ? 'text-yellow-300' : 'text-yellow-600'}`}>2</div>
            <div className={`text-sm ${isDarkMode ? 'text-yellow-400' : 'text-yellow-800'}`}>Medium Risk</div>
          </div>
          <div className={`${isDarkMode ? 'bg-green-900/30' : 'bg-green-50'} rounded-xl p-4 text-center`}>
            <div className={`text-2xl font-bold ${isDarkMode ? 'text-green-300' : 'text-green-600'}`}>2</div>
            <div className={`text-sm ${isDarkMode ? 'text-green-400' : 'text-green-800'}`}>Low Risk</div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdwareScanner;
