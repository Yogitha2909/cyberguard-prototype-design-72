
import { ArrowLeft, BarChart3, Clock, Wifi, RefreshCw, Search, User, TrendingUp, Moon, Sun } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useApp } from '@/contexts/AppContext';
import AppScanModal from './AppScanModal';
import DonutScanner from './DonutScanner';

const AppStatistics = ({ onBack }: { onBack: () => void }) => {
  const [isScanModalOpen, setIsScanModalOpen] = useState(false);
  const { isDarkMode, setIsDarkMode, pageScanStates, startPageScan } = useApp();

  const pageId = 'app-statistics';
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
      <div className={`min-h-screen ${isDarkMode ? 'bg-slate-900' : 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50'} relative overflow-hidden`}>
        {/* Header */}
        <header className={`relative z-10 ${isDarkMode ? 'bg-slate-800/30' : 'bg-white/30'} backdrop-blur-sm border-b border-white/40`}>
          <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button onClick={onBack} className={`p-2 ${isDarkMode ? 'text-slate-300 hover:text-slate-100' : 'text-slate-600 hover:text-slate-800'} transition-colors`}>
                <ArrowLeft className="w-5 h-5" />
              </button>
              <h1 className={`text-xl font-bold ${isDarkMode ? 'text-slate-200' : 'text-slate-700'}`}>App Statistics</h1>
            </div>
            
            <button 
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`p-3 ${isDarkMode ? 'bg-slate-700/50 text-slate-300 hover:bg-slate-600/50' : 'bg-white/50 text-slate-600 hover:bg-white/70'} backdrop-blur-sm rounded-2xl transition-all`}
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
        </header>

        <main className="relative z-10 max-w-4xl mx-auto px-6 py-8 flex items-center justify-center">
          <DonutScanner pageId={pageId} size={250} />
        </main>
      </div>
    );
  }

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-slate-900' : 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50'} relative overflow-hidden`}>
      {/* Decorative Elements */}
      <div className={`absolute top-16 right-20 w-20 h-20 ${isDarkMode ? 'bg-blue-400/20' : 'bg-blue-200'} rounded-full opacity-40`}></div>
      <div className={`absolute bottom-32 left-16 w-14 h-14 ${isDarkMode ? 'bg-purple-400/20' : 'bg-purple-200'} rounded-full opacity-45`}></div>
      <div className={`absolute top-1/3 left-10 ${isDarkMode ? 'text-blue-300' : 'text-blue-300'} opacity-50 text-xl`}>📊</div>

      {/* Header */}
      <header className={`relative z-10 ${isDarkMode ? 'bg-slate-800/30' : 'bg-white/30'} backdrop-blur-sm border-b border-white/40`}>
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button onClick={onBack} className={`p-2 ${isDarkMode ? 'text-slate-300 hover:text-slate-100' : 'text-slate-600 hover:text-slate-800'} transition-colors`}>
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div className="flex items-center space-x-3">
              <div className={`w-10 h-10 ${isDarkMode ? 'bg-gradient-to-br from-blue-500/60 to-purple-600/60' : 'bg-gradient-to-br from-blue-400 to-purple-500'} rounded-xl flex items-center justify-center`}>
                <BarChart3 className="w-5 h-5 text-white" />
              </div>
              <h1 className={`text-xl font-bold ${isDarkMode ? 'text-slate-200' : 'text-slate-700'}`}>App Statistics</h1>
            </div>
          </div>
          
          <button 
            onClick={() => setIsDarkMode(!isDarkMode)}
            className={`p-3 ${isDarkMode ? 'bg-slate-700/50 text-slate-300 hover:bg-slate-600/50' : 'bg-white/50 text-slate-600 hover:bg-white/70'} backdrop-blur-sm rounded-2xl transition-all`}
          >
            {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        </div>
      </header>

      <main className="relative z-10 max-w-4xl mx-auto px-6 py-8">
        {/* Hero Section */}
        <div className="text-center mb-8">
          <div className={`w-24 h-24 ${isDarkMode ? 'bg-gradient-to-br from-blue-500/60 to-purple-600/60' : 'bg-gradient-to-br from-blue-400 to-purple-500'} rounded-3xl mx-auto mb-4 flex items-center justify-center shadow-xl`}>
            <User className="w-12 h-12 text-white" />
          </div>
          <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-slate-200' : 'text-slate-700'} mb-2`}>CyberSecurity</h2>
          <h3 className={`text-xl ${isDarkMode ? 'text-slate-400' : 'text-slate-500'} mb-4`}>In The First Place</h3>
        </div>

        {/* Scan Button */}
        <div className={`${isDarkMode ? 'bg-slate-800/40' : 'bg-white/40'} backdrop-blur-sm rounded-3xl border border-white/50 p-8 mb-8 text-center shadow-xl`}>
          <button 
            onClick={() => setIsScanModalOpen(true)}
            className={`w-full ${isDarkMode ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700' : 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700'} text-white py-6 px-8 rounded-3xl font-bold text-xl transition-all transform hover:scale-105 shadow-lg`}
          >
            Scan Now
          </button>
        </div>

        {/* Statistics Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {[
            { title: 'Active Time Stats', icon: Clock, color: isDarkMode ? 'from-indigo-500/60 to-purple-600/60' : 'from-indigo-400 to-purple-500', description: 'Monitor app usage patterns' },
            { title: 'Data Usage Stats', icon: Wifi, color: isDarkMode ? 'from-blue-500/60 to-cyan-600/60' : 'from-blue-400 to-cyan-500', description: 'Track network consumption' },
            { title: 'App Update', icon: RefreshCw, color: isDarkMode ? 'from-emerald-500/60 to-teal-600/60' : 'from-emerald-400 to-teal-500', description: 'Check for updates' },
            { title: 'App Analysis', icon: Search, color: isDarkMode ? 'from-orange-500/60 to-red-600/60' : 'from-orange-400 to-red-500', description: 'Detailed app insights' },
          ].map((option, index) => {
            const IconComponent = option.icon;
            return (
              <button
                key={index}
                className={`${isDarkMode ? 'bg-slate-800/40 hover:bg-slate-700/60' : 'bg-white/40 hover:bg-white/60'} backdrop-blur-sm rounded-3xl p-6 border border-white/50 transition-all duration-300 hover:scale-105 text-left group shadow-lg`}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${option.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className={`font-semibold ${isDarkMode ? 'text-slate-200' : 'text-slate-700'} text-lg mb-2`}>{option.title}</h3>
                <p className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>{option.description}</p>
                <div className={`w-12 h-1 ${isDarkMode ? 'bg-gradient-to-r from-slate-600 to-slate-500' : 'bg-gradient-to-r from-slate-300 to-slate-400'} rounded-full mt-3`}></div>
              </button>
            );
          })}
        </div>

        {/* Last Scan Info */}
        <div className={`${isDarkMode ? 'bg-slate-800/40' : 'bg-white/40'} backdrop-blur-sm border border-white/50 rounded-2xl p-4 text-center mb-8 shadow-lg`}>
          <p className={`${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            <span className={`font-medium ${isDarkMode ? 'text-slate-200' : 'text-slate-700'}`}>Last Scan:</span> Just completed
          </p>
        </div>

        {/* Sample Chart */}
        <div className={`${isDarkMode ? 'bg-slate-800/40' : 'bg-white/40'} backdrop-blur-sm rounded-3xl border border-white/50 p-6 shadow-xl`}>
          <h3 className={`font-semibold ${isDarkMode ? 'text-slate-200' : 'text-slate-700'} text-xl mb-6 flex items-center space-x-3`}>
            <TrendingUp className={`w-6 h-6 ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`} />
            <span>App Usage Overview</span>
          </h3>
          
          <div className="space-y-6">
            {[
              { name: 'Social Media', usage: 85, color: isDarkMode ? 'from-blue-500/80 to-cyan-600/80' : 'from-blue-400 to-cyan-500' },
              { name: 'Productivity', usage: 65, color: isDarkMode ? 'from-emerald-500/80 to-teal-600/80' : 'from-emerald-400 to-teal-500' },
              { name: 'Entertainment', usage: 45, color: isDarkMode ? 'from-indigo-500/80 to-purple-600/80' : 'from-indigo-400 to-purple-500' },
              { name: 'Games', usage: 30, color: isDarkMode ? 'from-orange-500/80 to-red-600/80' : 'from-orange-400 to-red-500' },
              { name: 'Utilities', usage: 20, color: isDarkMode ? 'from-slate-500/80 to-slate-600/80' : 'from-slate-400 to-slate-500' },
            ].map((app, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div className={`w-24 text-sm ${isDarkMode ? 'text-slate-300' : 'text-slate-700'} font-medium`}>{app.name}</div>
                <div className={`flex-1 ${isDarkMode ? 'bg-slate-700/40' : 'bg-white/40'} rounded-full h-4 overflow-hidden`}>
                  <div
                    className={`h-full bg-gradient-to-r ${app.color} transition-all duration-1000 rounded-full shadow-lg`}
                    style={{ width: `${app.usage}%` }}
                  ></div>
                </div>
                <div className={`w-12 text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-600'} text-right font-semibold`}>{app.usage}%</div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Scan Modal */}
      <AppScanModal 
        isOpen={isScanModalOpen} 
        onClose={() => setIsScanModalOpen(false)} />
    </div>
  );
};

export default AppStatistics;
