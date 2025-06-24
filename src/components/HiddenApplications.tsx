
import { ArrowLeft, Eye, EyeOff, Ban, Moon, Sun } from 'lucide-react';
import { useState } from 'react';
import { useApp } from '@/contexts/AppContext';

const apps = [
  { name: 'Banking App', icon: '🏦', category: '3rd Party', hidden: false, banned: false },
  { name: 'Social Media', icon: '📱', category: '3rd Party', hidden: true, banned: false },
  { name: 'TikTok', icon: '🎵', category: 'Banned', hidden: false, banned: true },
  { name: 'Photo Editor', icon: '📷', category: '3rd Party', hidden: false, banned: false },
  { name: 'Gaming App', icon: '🎮', category: 'Hidden', hidden: true, banned: false },
  { name: 'Unknown APK', icon: '❓', category: 'Banned', hidden: false, banned: true },
];

const HiddenApplications = ({ onBack }: { onBack: () => void }) => {
  const [activeTab, setActiveTab] = useState<'3rd Party' | 'Banned' | 'Hidden'>('3rd Party');
  const { isDarkMode, setIsDarkMode } = useApp();

  const filteredApps = apps.filter(app => {
    if (activeTab === '3rd Party') return !app.banned && !app.hidden;
    if (activeTab === 'Banned') return app.banned;
    if (activeTab === 'Hidden') return app.hidden;
    return false;
  });

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-slate-900' : 'bg-gradient-to-br from-slate-50 to-blue-50'}`}>
      {/* Header */}
      <header className={`${isDarkMode ? 'bg-slate-800' : 'bg-white'} shadow-sm border-b ${isDarkMode ? 'border-slate-700' : 'border-slate-200'}`}>
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button onClick={onBack} className={`p-2 ${isDarkMode ? 'text-slate-400 hover:text-slate-200' : 'text-slate-600 hover:text-blue-600'} transition-colors`}>
              <ArrowLeft className="w-5 h-5" />
            </button>
            <h1 className={`text-xl font-bold ${isDarkMode ? 'text-slate-200' : 'text-slate-800'}`}>Applications</h1>
          </div>
          
          {/* Theme Toggle Button */}
          <button 
            onClick={() => setIsDarkMode(!isDarkMode)}
            className={`p-3 ${isDarkMode ? 'bg-slate-700/50 text-slate-300 hover:bg-slate-600/50' : 'bg-white/50 text-slate-600 hover:bg-white/70'} backdrop-blur-sm rounded-2xl transition-all duration-300`}
          >
            {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Tabs */}
      <div className={`${isDarkMode ? 'bg-slate-800' : 'bg-white'} border-b ${isDarkMode ? 'border-slate-700' : 'border-slate-200'}`}>
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex space-x-8">
            {['3rd Party', 'Banned', 'Hidden'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as any)}
                className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === tab
                    ? 'border-blue-500 text-blue-600'
                    : `border-transparent ${isDarkMode ? 'text-slate-400 hover:text-slate-200' : 'text-slate-500 hover:text-slate-700'}`
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      <main className="max-w-4xl mx-auto px-6 py-8">
        <div className={`${isDarkMode ? 'bg-slate-800' : 'bg-white'} rounded-2xl shadow-sm border ${isDarkMode ? 'border-slate-700' : 'border-slate-200'} overflow-hidden`}>
          {filteredApps.length === 0 ? (
            <div className={`p-8 text-center ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
              No applications found in this category
            </div>
          ) : (
            filteredApps.map((app, index) => (
              <div key={index} className={`flex items-center justify-between p-4 border-b ${isDarkMode ? 'border-slate-700' : 'border-slate-100'} last:border-b-0`}>
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 ${isDarkMode ? 'bg-slate-700' : 'bg-slate-100'} rounded-xl flex items-center justify-center text-2xl`}>
                    {app.icon}
                  </div>
                  <div>
                    <h3 className={`font-medium ${isDarkMode ? 'text-slate-200' : 'text-slate-800'}`}>{app.name}</h3>
                    <p className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>{app.category}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  {app.banned && (
                    <div className="flex items-center space-x-1 bg-red-100 text-red-800 px-2 py-1 rounded-lg text-xs">
                      <Ban className="w-3 h-3" />
                      <span>Banned</span>
                    </div>
                  )}
                  {app.hidden && (
                    <div className="flex items-center space-x-1 bg-purple-100 text-purple-800 px-2 py-1 rounded-lg text-xs">
                      <EyeOff className="w-3 h-3" />
                      <span>Hidden</span>
                    </div>
                  )}
                  <button className={`p-2 ${isDarkMode ? 'text-slate-400 hover:text-slate-200' : 'text-slate-400 hover:text-slate-600'} transition-colors`}>
                    <Eye className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </main>
    </div>
  );
};

export default HiddenApplications;
