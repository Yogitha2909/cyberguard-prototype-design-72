
import { ArrowLeft, BarChart3, Clock, Wifi, RefreshCw, Search, User, TrendingUp } from 'lucide-react';
import { useState } from 'react';
import AppScanModal from './AppScanModal';

const AppStatistics = ({ onBack }: { onBack: () => void }) => {
  const [isScanModalOpen, setIsScanModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-blue-50 to-violet-50 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-16 right-20 w-20 h-20 bg-peach-200 rounded-full opacity-40"></div>
      <div className="absolute bottom-32 left-16 w-14 h-14 bg-mint-200 rounded-full opacity-45"></div>
      <div className="absolute top-1/3 left-10 text-lavender-300 opacity-50 text-xl">📊</div>

      {/* Header */}
      <header className="relative z-10 bg-white/30 backdrop-blur-sm border-b border-white/40">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center space-x-4">
          <button onClick={onBack} className="p-2 text-slate-600 hover:text-slate-800 transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-mint-200 to-blue-200 rounded-xl flex items-center justify-center">
              <BarChart3 className="w-5 h-5 text-blue-600" />
            </div>
            <h1 className="text-xl font-bold text-slate-700">App Statistics</h1>
          </div>
        </div>
      </header>

      <main className="relative z-10 max-w-4xl mx-auto px-6 py-8">
        {/* Hero Section */}
        <div className="text-center mb-8">
          <div className="w-24 h-24 bg-gradient-to-br from-mint-200 to-blue-200 rounded-3xl mx-auto mb-4 flex items-center justify-center shadow-xl">
            <User className="w-12 h-12 text-blue-600" />
          </div>
          <h2 className="text-2xl font-bold text-slate-700 mb-2">CyberSecurity</h2>
          <h3 className="text-xl text-slate-500 mb-4">In The First Place</h3>
        </div>

        {/* Scan Button */}
        <div className="bg-white/40 backdrop-blur-sm rounded-3xl border border-white/50 p-8 mb-8 text-center shadow-xl">
          <button 
            onClick={() => setIsScanModalOpen(true)}
            className="w-full bg-gradient-to-r from-peach-200 to-rose-200 hover:from-peach-300 hover:to-rose-300 text-slate-700 py-6 px-8 rounded-3xl font-bold text-xl transition-all transform hover:scale-105 shadow-lg"
          >
            Scan Now
          </button>
        </div>

        {/* Statistics Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {[
            { title: 'Active Time Stats', icon: Clock, color: 'from-lavender-200 to-rose-200', description: 'Monitor app usage patterns' },
            { title: 'Data Usage Stats', icon: Wifi, color: 'from-blue-200 to-mint-200', description: 'Track network consumption' },
            { title: 'App Update', icon: RefreshCw, color: 'from-mint-200 to-sage-200', description: 'Check for updates' },
            { title: 'App Analysis', icon: Search, color: 'from-peach-200 to-coral-200', description: 'Detailed app insights' },
          ].map((option, index) => {
            const IconComponent = option.icon;
            return (
              <button
                key={index}
                className="bg-white/40 backdrop-blur-sm rounded-3xl p-6 border border-white/50 transition-all duration-300 hover:scale-105 hover:bg-white/60 text-left group shadow-lg"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${option.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-slate-700 text-lg mb-2">{option.title}</h3>
                <p className="text-sm text-slate-600">{option.description}</p>
                <div className="w-12 h-1 bg-gradient-to-r from-slate-300 to-slate-400 rounded-full mt-3"></div>
              </button>
            );
          })}
        </div>

        {/* Last Scan Info */}
        <div className="bg-white/40 backdrop-blur-sm border border-white/50 rounded-2xl p-4 text-center mb-8 shadow-lg">
          <p className="text-slate-600">
            <span className="font-medium text-slate-700">Last Scan:</span> Never
          </p>
        </div>

        {/* Sample Chart */}
        <div className="bg-white/40 backdrop-blur-sm rounded-3xl border border-white/50 p-6 shadow-xl">
          <h3 className="font-semibold text-slate-700 text-xl mb-6 flex items-center space-x-3">
            <TrendingUp className="w-6 h-6 text-slate-500" />
            <span>App Usage Overview</span>
          </h3>
          
          <div className="space-y-6">
            {[
              { name: 'Social Media', usage: 85, color: 'from-blue-200 to-mint-200' },
              { name: 'Productivity', usage: 65, color: 'from-mint-200 to-sage-200' },
              { name: 'Entertainment', usage: 45, color: 'from-lavender-200 to-rose-200' },
              { name: 'Games', usage: 30, color: 'from-peach-200 to-coral-200' },
              { name: 'Utilities', usage: 20, color: 'from-slate-200 to-slate-300' },
            ].map((app, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div className="w-24 text-sm text-slate-700 font-medium">{app.name}</div>
                <div className="flex-1 bg-white/40 rounded-full h-4 overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${app.color} transition-all duration-1000 rounded-full shadow-lg`}
                    style={{ width: `${app.usage}%` }}
                  ></div>
                </div>
                <div className="w-12 text-sm text-slate-600 text-right font-semibold">{app.usage}%</div>
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
