
import { ArrowLeft, Shield, Wifi, Lock, Bluetooth, Smartphone, Eye, Key, AlertTriangle, CheckCircle, XCircle, User, Moon, Sun } from 'lucide-react';
import { useApp } from '@/contexts/AppContext';

interface SecurityItem {
  title: string;
  icon: React.ElementType;
  status: 'safe' | 'warning' | 'danger';
  enabled: boolean;
}

const securityItems: SecurityItem[] = [
  { title: 'Root Status', icon: Shield, status: 'safe', enabled: false },
  { title: 'Hotspot Status', icon: Wifi, status: 'safe', enabled: false },
  { title: 'Google Play Protect', icon: Shield, status: 'safe', enabled: true },
  { title: 'USB Debugging', icon: Smartphone, status: 'safe', enabled: false },
  { title: 'Bluetooth Status', icon: Bluetooth, status: 'safe', enabled: true },
  { title: 'Lock Screen Status', icon: Lock, status: 'safe', enabled: true },
  { title: 'SEAndroid', icon: Shield, status: 'safe', enabled: true },
  { title: 'Device Encryption', icon: Key, status: 'safe', enabled: true },
  { title: 'NFC', icon: Wifi, status: 'safe', enabled: false },
  { title: 'Developer Options', icon: Key, status: 'safe', enabled: false },
  { title: 'Show Password', icon: Eye, status: 'warning', enabled: true },
  { title: 'Lock Screen Notifications', icon: Eye, status: 'danger', enabled: true },
  { title: 'Unknown Source Installation', icon: AlertTriangle, status: 'safe', enabled: false },
];

const SecurityAdvisor = ({ onBack }: { onBack: () => void }) => {
  const { isDarkMode, setIsDarkMode } = useApp();

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'safe': return 'text-emerald-600';
      case 'warning': return 'text-yellow-600';
      case 'danger': return 'text-rose-600';
      default: return 'text-gray-600';
    }
  };

  const getStatusIcon = (status: string, enabled: boolean) => {
    if (status === 'danger') return <XCircle className="w-5 h-5 text-rose-400" />;
    if (status === 'warning') return <AlertTriangle className="w-5 h-5 text-yellow-400" />;
    return enabled ? <CheckCircle className="w-5 h-5 text-emerald-400" /> : <XCircle className="w-5 h-5 text-slate-400" />;
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-slate-900' : 'bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100'} relative overflow-hidden`}>
      {/* Decorative Elements */}
      <div className={`absolute top-10 right-16 w-16 h-16 ${isDarkMode ? 'bg-cyan-200/20' : 'bg-cyan-200'} rounded-full opacity-40`}></div>
      <div className={`absolute bottom-20 left-20 w-12 h-12 ${isDarkMode ? 'bg-yellow-200/20' : 'bg-yellow-200'} rounded-full opacity-45`}></div>

      {/* Header */}
      <header className={`relative z-10 ${isDarkMode ? 'bg-slate-800/30' : 'bg-white/30'} backdrop-blur-sm border-b border-white/40`}>
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button onClick={onBack} className={`p-2 ${isDarkMode ? 'text-slate-300 hover:text-slate-100' : 'text-slate-600 hover:text-slate-800'} transition-colors`}>
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div className="flex items-center space-x-3">
              <div className={`w-10 h-10 ${isDarkMode ? 'bg-gradient-to-br from-blue-500/60 to-purple-600/60' : 'bg-gradient-to-br from-blue-200 to-purple-300'} rounded-xl flex items-center justify-center`}>
                <Shield className={`w-5 h-5 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
              </div>
              <h1 className={`text-xl font-bold ${isDarkMode ? 'text-slate-200' : 'text-slate-700'}`}>Security Advisor</h1>
            </div>
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

      <main className="relative z-10 max-w-4xl mx-auto px-6 py-8">
        {/* Hero Section */}
        <div className="text-center mb-8">
          <div className={`w-24 h-24 ${isDarkMode ? 'bg-gradient-to-br from-blue-500/60 to-purple-600/60' : 'bg-gradient-to-br from-blue-200 to-purple-300'} rounded-3xl mx-auto mb-4 flex items-center justify-center shadow-xl`}>
            <User className={`w-12 h-12 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
          </div>
          <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-slate-200' : 'text-slate-700'} mb-2`}>CyberSecurity</h2>
          <h3 className={`text-xl ${isDarkMode ? 'text-slate-400' : 'text-slate-500'} mb-4`}>In The First Place</h3>
        </div>

        <div className={`${isDarkMode ? 'bg-slate-800/40' : 'bg-white/40'} backdrop-blur-sm rounded-3xl border border-white/50 overflow-hidden shadow-xl`}>
          {securityItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div key={index} className={`flex items-center justify-between p-6 border-b border-white/30 last:border-b-0 ${item.status === 'danger' ? (isDarkMode ? 'bg-rose-900/30' : 'bg-rose-200/30') : ''} hover:bg-white/20 transition-colors`}>
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                    item.status === 'danger' ? (isDarkMode ? 'bg-rose-800/40' : 'bg-rose-200/40') :
                    item.status === 'warning' ? (isDarkMode ? 'bg-yellow-800/40' : 'bg-yellow-200/40') :
                    (isDarkMode ? 'bg-emerald-800/40' : 'bg-emerald-200/40')
                  }`}>
                    <IconComponent className={`w-6 h-6 ${getStatusColor(item.status)}`} />
                  </div>
                  <span className={`font-medium ${isDarkMode ? 'text-slate-200' : 'text-slate-700'} text-lg`}>{item.title}</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <span className={`text-sm font-medium px-3 py-1 rounded-full ${
                    item.status === 'danger' ? (isDarkMode ? 'bg-rose-800/50 text-rose-300' : 'bg-rose-200/50 text-rose-700') :
                    item.status === 'warning' ? (isDarkMode ? 'bg-yellow-800/50 text-yellow-300' : 'bg-yellow-200/50 text-yellow-700') :
                    item.enabled ? (isDarkMode ? 'bg-emerald-800/50 text-emerald-300' : 'bg-emerald-200/50 text-emerald-700') : (isDarkMode ? 'bg-slate-700/50 text-slate-400' : 'bg-slate-200/50 text-slate-600')
                  }`}>
                    {item.enabled ? 'Enabled' : 'Disabled'}
                  </span>
                  {getStatusIcon(item.status, item.enabled)}
                </div>
              </div>
            );
          })}
        </div>

        {/* Summary Cards */}
        <div className="mt-8 grid grid-cols-3 gap-6">
          <div className={`${isDarkMode ? 'bg-gradient-to-br from-emerald-800/60 to-emerald-900/60' : 'bg-gradient-to-br from-emerald-200/60 to-emerald-300/60'} backdrop-blur-sm rounded-2xl p-6 text-center border border-emerald-300/50`}>
            <div className={`text-3xl font-bold ${isDarkMode ? 'text-emerald-300' : 'text-emerald-700'} mb-2`}>8</div>
            <div className={`text-sm ${isDarkMode ? 'text-emerald-400' : 'text-emerald-600'}`}>Secure Settings</div>
            <div className={`w-full h-2 ${isDarkMode ? 'bg-emerald-800/50' : 'bg-emerald-300/50'} rounded-full mt-3`}>
              <div className={`w-4/5 h-2 ${isDarkMode ? 'bg-emerald-400' : 'bg-emerald-400'} rounded-full`}></div>
            </div>
          </div>
          <div className={`${isDarkMode ? 'bg-gradient-to-br from-yellow-800/60 to-orange-900/60' : 'bg-gradient-to-br from-yellow-200/60 to-orange-300/60'} backdrop-blur-sm rounded-2xl p-6 text-center border border-yellow-300/50`}>
            <div className={`text-3xl font-bold ${isDarkMode ? 'text-yellow-300' : 'text-yellow-700'} mb-2`}>1</div>
            <div className={`text-sm ${isDarkMode ? 'text-yellow-400' : 'text-yellow-600'}`}>Warning</div>
            <div className={`w-full h-2 ${isDarkMode ? 'bg-yellow-800/50' : 'bg-yellow-300/50'} rounded-full mt-3`}>
              <div className={`w-1/5 h-2 ${isDarkMode ? 'bg-yellow-400' : 'bg-yellow-400'} rounded-full`}></div>
            </div>
          </div>
          <div className={`${isDarkMode ? 'bg-gradient-to-br from-rose-800/60 to-pink-900/60' : 'bg-gradient-to-br from-rose-200/60 to-pink-300/60'} backdrop-blur-sm rounded-2xl p-6 text-center border border-rose-300/50`}>
            <div className={`text-3xl font-bold ${isDarkMode ? 'text-rose-300' : 'text-rose-700'} mb-2`}>1</div>
            <div className={`text-sm ${isDarkMode ? 'text-rose-400' : 'text-rose-600'}`}>Critical Issue</div>
            <div className={`w-full h-2 ${isDarkMode ? 'bg-rose-800/50' : 'bg-rose-300/50'} rounded-full mt-3`}>
              <div className={`w-1/5 h-2 ${isDarkMode ? 'bg-rose-400' : 'bg-rose-400'} rounded-full`}></div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SecurityAdvisor;
