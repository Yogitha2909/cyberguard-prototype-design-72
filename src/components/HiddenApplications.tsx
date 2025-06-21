
import { ArrowLeft, Eye, EyeOff, Ban } from 'lucide-react';
import { useState } from 'react';

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

  const filteredApps = apps.filter(app => {
    if (activeTab === '3rd Party') return !app.banned && !app.hidden;
    if (activeTab === 'Banned') return app.banned;
    if (activeTab === 'Hidden') return app.hidden;
    return false;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center space-x-4">
          <button onClick={onBack} className="p-2 text-slate-600 hover:text-blue-600 transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="text-xl font-bold text-slate-800">Applications</h1>
        </div>
      </header>

      {/* Tabs */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex space-x-8">
            {['3rd Party', 'Banned', 'Hidden'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as any)}
                className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === tab
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-slate-500 hover:text-slate-700'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      <main className="max-w-4xl mx-auto px-6 py-8">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          {filteredApps.length === 0 ? (
            <div className="p-8 text-center text-slate-500">
              No applications found in this category
            </div>
          ) : (
            filteredApps.map((app, index) => (
              <div key={index} className="flex items-center justify-between p-4 border-b border-slate-100 last:border-b-0">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-2xl">
                    {app.icon}
                  </div>
                  <div>
                    <h3 className="font-medium text-slate-800">{app.name}</h3>
                    <p className="text-sm text-slate-600">{app.category}</p>
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
                  <button className="p-2 text-slate-400 hover:text-slate-600 transition-colors">
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
