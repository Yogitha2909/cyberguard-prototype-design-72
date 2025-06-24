
import { useState } from 'react';
import { Shield, Settings, Eye, Search, BarChart3, Scan, Menu, Bell, User, Lock, Moon, Sun } from 'lucide-react';
import { useApp } from '@/contexts/AppContext';
import SecurityAdvisor from '../components/SecurityAdvisor';
import HiddenApplications from '../components/HiddenApplications';
import ThreatAnalyzer from '../components/ThreatAnalyzer';
import AppStatistics from '../components/AppStatistics';
import AdwareScanner from '../components/AdwareScanner';
import DataBreachMonitor from '../components/DataBreachMonitor';

const modules = [
  { id: 'security', title: 'Security Advisor', icon: Shield, color: 'from-blue-300 to-blue-400', bgColor: 'bg-blue-100' },
  { id: 'hidden', title: 'Hidden Applications', icon: Eye, color: 'from-purple-300 to-purple-400', bgColor: 'bg-purple-100' },
  { id: 'threat', title: 'Threat Analyzer', icon: Search, color: 'from-rose-300 to-rose-400', bgColor: 'bg-rose-100' },
  { id: 'stats', title: 'App Statistics', icon: BarChart3, color: 'from-emerald-300 to-emerald-400', bgColor: 'bg-emerald-100' },
  { id: 'adware', title: 'Adware Scan', icon: Scan, color: 'from-orange-300 to-orange-400', bgColor: 'bg-orange-100' },
  { id: 'breach', title: 'Data Breach Monitor', icon: Bell, color: 'from-cyan-300 to-cyan-400', bgColor: 'bg-cyan-100' },
];

const Index = () => {
  const [activeModule, setActiveModule] = useState<string | null>(null);
  const { isDarkMode, setIsDarkMode } = useApp();

  const renderActiveModule = () => {
    switch (activeModule) {
      case 'security':
        return <SecurityAdvisor onBack={() => setActiveModule(null)} />;
      case 'hidden':
        return <HiddenApplications onBack={() => setActiveModule(null)} />;
      case 'threat':
        return <ThreatAnalyzer onBack={() => setActiveModule(null)} />;
      case 'stats':
        return <AppStatistics onBack={() => setActiveModule(null)} />;
      case 'adware':
        return <AdwareScanner onBack={() => setActiveModule(null)} />;
      case 'breach':
        return <DataBreachMonitor onBack={() => setActiveModule(null)} />;
      default:
        return null;
    }
  };

  if (activeModule) {
    return renderActiveModule();
  }

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-slate-900' : 'bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100'} relative overflow-hidden`}>
      {/* Decorative Elements */}
      <div className={`absolute top-10 left-10 w-20 h-20 ${isDarkMode ? 'bg-yellow-200/20' : 'bg-yellow-200'} rounded-full opacity-40`}></div>
      <div className={`absolute top-32 right-16 w-16 h-16 ${isDarkMode ? 'bg-cyan-200/20' : 'bg-cyan-200'} rounded-full opacity-50`}></div>
      <div className={`absolute bottom-20 left-20 w-12 h-12 ${isDarkMode ? 'bg-pink-200/20' : 'bg-pink-200'} rounded-full opacity-45`}></div>
      <div className={`absolute top-1/2 right-10 w-8 h-8 ${isDarkMode ? 'bg-emerald-200/20' : 'bg-emerald-200'} rounded-full opacity-40`}></div>
      
      {/* Zigzag Pattern */}
      <div className={`absolute top-16 right-32 ${isDarkMode ? 'text-yellow-300/30' : 'text-yellow-300'} opacity-50 text-2xl`}>⚡⚡⚡</div>
      <div className={`absolute bottom-32 left-32 ${isDarkMode ? 'text-cyan-300/30' : 'text-cyan-300'} opacity-50 text-xl`}>◊◊◊</div>

      {/* Header */}
      <header className="relative z-10 px-6 py-6">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className={`w-12 h-12 ${isDarkMode ? 'bg-gradient-to-br from-cyan-200/60 to-blue-300/60' : 'bg-gradient-to-br from-cyan-200 to-blue-300'} rounded-2xl flex items-center justify-center shadow-lg`}>
              <Shield className={`w-7 h-7 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
            </div>
            <div>
              <h1 className={`text-2xl font-bold ${isDarkMode ? 'text-slate-200' : 'text-slate-700'}`}>CyberGuard</h1>
              <p className={`${isDarkMode ? 'text-slate-400' : 'text-slate-500'} text-sm`}>Security First</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <button className={`p-3 ${isDarkMode ? 'bg-slate-700/50 text-slate-300 hover:bg-slate-600/50' : 'bg-white/50 text-slate-600 hover:bg-white/70'} backdrop-blur-sm rounded-2xl transition-all`}>
              <Bell className="w-5 h-5" />
            </button>
            <button className={`p-3 ${isDarkMode ? 'bg-slate-700/50 text-slate-300 hover:bg-slate-600/50' : 'bg-white/50 text-slate-600 hover:bg-white/70'} backdrop-blur-sm rounded-2xl transition-all`}>
              <User className="w-5 h-5" />
            </button>
            {/* Theme Toggle Button */}
            <button 
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`p-3 ${isDarkMode ? 'bg-slate-700/50 text-slate-300 hover:bg-slate-600/50' : 'bg-white/50 text-slate-600 hover:bg-white/70'} backdrop-blur-sm rounded-2xl transition-all`}
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      <main className="relative z-10 max-w-4xl mx-auto px-6 pb-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="relative mb-8">
            {/* Main illustration area */}
            <div className={`${isDarkMode ? 'bg-gradient-to-br from-cyan-100/20 to-blue-100/20' : 'bg-gradient-to-br from-cyan-100/60 to-blue-100/60'} backdrop-blur-sm rounded-3xl p-8 border border-white/30`}>
              <div className="relative">
                <div className={`w-32 h-32 ${isDarkMode ? 'bg-gradient-to-br from-cyan-200/60 to-blue-300/60' : 'bg-gradient-to-br from-cyan-200 to-blue-300'} rounded-full mx-auto mb-6 flex items-center justify-center shadow-xl`}>
                  <Shield className={`w-16 h-16 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                </div>
                
                {/* Floating security icons */}
                <div className={`absolute -top-4 -left-4 w-12 h-12 ${isDarkMode ? 'bg-gradient-to-br from-emerald-200/60 to-emerald-300/60' : 'bg-gradient-to-br from-emerald-200 to-emerald-300'} rounded-xl flex items-center justify-center shadow-lg animate-bounce`}>
                  <Lock className={`w-6 h-6 ${isDarkMode ? 'text-emerald-400' : 'text-emerald-600'}`} />
                </div>
                <div className={`absolute -top-2 -right-6 w-10 h-10 ${isDarkMode ? 'bg-gradient-to-br from-yellow-200/60 to-orange-300/60' : 'bg-gradient-to-br from-yellow-200 to-orange-300'} rounded-xl flex items-center justify-center shadow-lg animate-pulse`}>
                  <Eye className={`w-5 h-5 ${isDarkMode ? 'text-orange-400' : 'text-orange-600'}`} />
                </div>
                <div className={`absolute -bottom-2 right-2 w-14 h-14 ${isDarkMode ? 'bg-gradient-to-br from-pink-200/60 to-purple-300/60' : 'bg-gradient-to-br from-pink-200 to-purple-300'} rounded-xl flex items-center justify-center shadow-lg`}>
                  <Search className={`w-7 h-7 ${isDarkMode ? 'text-purple-400' : 'text-purple-600'}`} />
                </div>
              </div>
            </div>
          </div>
          
          <h2 className={`text-3xl font-bold ${isDarkMode ? 'text-slate-200' : 'text-slate-700'} mb-3`}>
            Cyber Security
          </h2>
          <h3 className={`text-2xl font-semibold ${isDarkMode ? 'text-slate-400' : 'text-slate-500'} mb-4`}>
            In The First Place
          </h3>
          <p className={`${isDarkMode ? 'text-slate-300' : 'text-slate-600'} text-lg mb-8 max-w-2xl mx-auto`}>
            Securing Your Digital World, One Byte at a Time
          </p>
        </div>

        {/* Modules Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">
          {modules.map((module) => {
            const IconComponent = module.icon;
            return (
              <button
                key={module.id}
                onClick={() => setActiveModule(module.id)}
                className={`group ${isDarkMode ? 'bg-slate-800/40 hover:bg-slate-700/60' : 'bg-white/40 hover:bg-white/60'} backdrop-blur-sm rounded-3xl p-6 border border-white/50 transition-all duration-300 hover:scale-105 shadow-lg`}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${module.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className={`font-semibold ${isDarkMode ? 'text-slate-200' : 'text-slate-700'} text-sm leading-tight mb-2`}>
                  {module.title}
                </h3>
                <div className={`w-8 h-1 ${isDarkMode ? 'bg-gradient-to-r from-slate-600 to-slate-500' : 'bg-gradient-to-r from-slate-300 to-slate-400'} rounded-full mx-auto`}></div>
              </button>
            );
          })}
        </div>

        {/* Status Card */}
        <div className={`${isDarkMode ? 'bg-gradient-to-r from-emerald-200/30 to-emerald-300/30' : 'bg-gradient-to-r from-emerald-200/60 to-emerald-300/60'} backdrop-blur-sm border border-emerald-300/50 rounded-2xl p-6 flex items-center space-x-4 shadow-lg`}>
          <div className="w-4 h-4 bg-emerald-400 rounded-full animate-pulse shadow-lg"></div>
          <div>
            <span className={`${isDarkMode ? 'text-emerald-300' : 'text-emerald-700'} font-semibold text-lg`}>Real-time Protection Enabled</span>
            <p className={`${isDarkMode ? 'text-emerald-400' : 'text-emerald-600'} text-sm`}>Your device is actively protected</p>
          </div>
        </div>

        {/* Quick Action Button */}
        <div className="mt-8">
          <button className={`w-full ${isDarkMode ? 'bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-700 hover:to-slate-800 text-slate-200' : 'bg-gradient-to-r from-slate-300 to-slate-400 hover:from-slate-400 hover:to-slate-500 text-slate-700'} py-4 px-8 rounded-2xl font-bold text-lg transition-all transform hover:scale-105 shadow-xl`}>
            Start Security Scan
          </button>
        </div>
      </main>
    </div>
  );
};

export default Index;
