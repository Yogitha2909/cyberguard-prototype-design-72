
import { useState } from 'react';
import { Shield, Settings, Eye, Search, BarChart3, Scan, Menu, Bell } from 'lucide-react';
import SecurityAdvisor from '../components/SecurityAdvisor';
import HiddenApplications from '../components/HiddenApplications';
import ThreatAnalyzer from '../components/ThreatAnalyzer';
import AppStatistics from '../components/AppStatistics';
import AdwareScanner from '../components/AdwareScanner';
import DataBreachMonitor from '../components/DataBreachMonitor';

const modules = [
  { id: 'security', title: 'Security Advisor', icon: Shield, color: 'bg-blue-500' },
  { id: 'hidden', title: 'Hidden Applications', icon: Eye, color: 'bg-purple-500' },
  { id: 'threat', title: 'Threat Analyzer', icon: Search, color: 'bg-red-500' },
  { id: 'stats', title: 'App Statistics', icon: BarChart3, color: 'bg-green-500' },
  { id: 'adware', title: 'Adware Scan', icon: Scan, color: 'bg-orange-500' },
  { id: 'breach', title: 'Data Breach Monitor', icon: Bell, color: 'bg-cyan-500' },
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-xl font-bold text-slate-800">CyberGuard</h1>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="p-2 text-slate-600 hover:text-blue-600 transition-colors">
              <Settings className="w-5 h-5" />
            </button>
            <button className="p-2 text-slate-600 hover:text-blue-600 transition-colors">
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-block p-6 bg-gradient-to-br from-blue-500 to-blue-700 rounded-3xl shadow-lg mb-6">
            <Shield className="w-16 h-16 text-white mx-auto" />
          </div>
          <h2 className="text-2xl font-bold text-slate-800 mb-2">
            Securing Your Digital World
          </h2>
          <p className="text-slate-600">One Byte at a Time</p>
        </div>

        {/* Modules Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {modules.map((module) => {
            const IconComponent = module.icon;
            return (
              <button
                key={module.id}
                onClick={() => setActiveModule(module.id)}
                className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg border border-slate-200 transition-all duration-300 hover:scale-105"
              >
                <div className={`w-12 h-12 ${module.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-slate-800 text-sm leading-tight">
                  {module.title}
                </h3>
              </button>
            );
          })}
        </div>

        {/* Status Bar */}
        <div className="mt-8 bg-green-50 border border-green-200 rounded-xl p-4 flex items-center space-x-3">
          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-green-800 font-medium">Real-time protection enabled</span>
        </div>
      </main>
    </div>
  );
};

export default Index;
