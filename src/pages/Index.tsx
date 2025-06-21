
import { useState } from 'react';
import { Shield, Settings, Eye, Search, BarChart3, Scan, Menu, Bell, User, Lock } from 'lucide-react';
import SecurityAdvisor from '../components/SecurityAdvisor';
import HiddenApplications from '../components/HiddenApplications';
import ThreatAnalyzer from '../components/ThreatAnalyzer';
import AppStatistics from '../components/AppStatistics';
import AdwareScanner from '../components/AdwareScanner';
import DataBreachMonitor from '../components/DataBreachMonitor';

const modules = [
  { id: 'security', title: 'Security Advisor', icon: Shield, color: 'from-blue-500 to-blue-600', bgColor: 'bg-blue-100' },
  { id: 'hidden', title: 'Hidden Applications', icon: Eye, color: 'from-purple-500 to-purple-600', bgColor: 'bg-purple-100' },
  { id: 'threat', title: 'Threat Analyzer', icon: Search, color: 'from-red-500 to-red-600', bgColor: 'bg-red-100' },
  { id: 'stats', title: 'App Statistics', icon: BarChart3, color: 'from-green-500 to-green-600', bgColor: 'bg-green-100' },
  { id: 'adware', title: 'Adware Scan', icon: Scan, color: 'from-orange-500 to-orange-600', bgColor: 'bg-orange-100' },
  { id: 'breach', title: 'Data Breach Monitor', icon: Bell, color: 'from-cyan-500 to-cyan-600', bgColor: 'bg-cyan-100' },
];

const Index = () => {
  const [activeModule, setActiveModule] = useState<string | null>(null);

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
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-400 rounded-full opacity-20"></div>
      <div className="absolute top-32 right-16 w-16 h-16 bg-cyan-400 rounded-full opacity-30"></div>
      <div className="absolute bottom-20 left-20 w-12 h-12 bg-pink-400 rounded-full opacity-25"></div>
      <div className="absolute top-1/2 right-10 w-8 h-8 bg-green-400 rounded-full opacity-20"></div>
      
      {/* Zigzag Pattern */}
      <div className="absolute top-16 right-32 text-yellow-400 opacity-30 text-2xl">⚡⚡⚡</div>
      <div className="absolute bottom-32 left-32 text-cyan-400 opacity-30 text-xl">◊◊◊</div>

      {/* Header */}
      <header className="relative z-10 px-6 py-6">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg">
              <Shield className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">CyberGuard</h1>
              <p className="text-cyan-200 text-sm">Security First</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <button className="p-3 bg-white/10 backdrop-blur-sm rounded-2xl text-white hover:bg-white/20 transition-all">
              <Bell className="w-5 h-5" />
            </button>
            <button className="p-3 bg-white/10 backdrop-blur-sm rounded-2xl text-white hover:bg-white/20 transition-all">
              <User className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      <main className="relative z-10 max-w-4xl mx-auto px-6 pb-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="relative mb-8">
            {/* Main illustration area */}
            <div className="bg-gradient-to-br from-cyan-400/20 to-blue-500/20 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
              <div className="relative">
                <div className="w-32 h-32 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center shadow-2xl">
                  <Shield className="w-16 h-16 text-white" />
                </div>
                
                {/* Floating security icons */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-green-400 to-green-500 rounded-xl flex items-center justify-center shadow-lg animate-bounce">
                  <Lock className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -top-2 -right-6 w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center shadow-lg animate-pulse">
                  <Eye className="w-5 h-5 text-white" />
                </div>
                <div className="absolute -bottom-2 right-2 w-14 h-14 bg-gradient-to-br from-pink-400 to-purple-500 rounded-xl flex items-center justify-center shadow-lg">
                  <Search className="w-7 h-7 text-white" />
                </div>
              </div>
            </div>
          </div>
          
          <h2 className="text-3xl font-bold text-white mb-3">
            Cyber Security
          </h2>
          <h3 className="text-2xl font-semibold text-cyan-300 mb-4">
            In The First Place
          </h3>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
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
                className="group bg-white/10 backdrop-blur-sm rounded-3xl p-6 border border-white/20 transition-all duration-300 hover:scale-105 hover:bg-white/20 shadow-xl"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${module.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-white text-sm leading-tight mb-2">
                  {module.title}
                </h3>
                <div className="w-8 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mx-auto"></div>
              </button>
            );
          })}
        </div>

        {/* Status Card */}
        <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm border border-green-400/30 rounded-2xl p-6 flex items-center space-x-4 shadow-xl">
          <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse shadow-lg"></div>
          <div>
            <span className="text-green-300 font-semibold text-lg">Real-time Protection Enabled</span>
            <p className="text-green-200 text-sm">Your device is actively protected</p>
          </div>
        </div>

        {/* Quick Action Button */}
        <div className="mt-8">
          <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white py-4 px-8 rounded-2xl font-bold text-lg transition-all transform hover:scale-105 shadow-2xl">
            Start Security Scan
          </button>
        </div>
      </main>
    </div>
  );
};

export default Index;
