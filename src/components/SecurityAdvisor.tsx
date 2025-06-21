
import { ArrowLeft, Shield, Wifi, Lock, Bluetooth, Smartphone, Eye, Key, AlertTriangle, CheckCircle, XCircle, User } from 'lucide-react';

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
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'safe': return 'text-green-600';
      case 'warning': return 'text-yellow-600';
      case 'danger': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  const getStatusIcon = (status: string, enabled: boolean) => {
    if (status === 'danger') return <XCircle className="w-5 h-5 text-red-500" />;
    if (status === 'warning') return <AlertTriangle className="w-5 h-5 text-yellow-500" />;
    return enabled ? <CheckCircle className="w-5 h-5 text-green-500" /> : <XCircle className="w-5 h-5 text-gray-400" />;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-10 right-16 w-16 h-16 bg-cyan-400 rounded-full opacity-20"></div>
      <div className="absolute bottom-20 left-20 w-12 h-12 bg-yellow-400 rounded-full opacity-25"></div>

      {/* Header */}
      <header className="relative z-10 bg-white/10 backdrop-blur-sm border-b border-white/20">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center space-x-4">
          <button onClick={onBack} className="p-2 text-white hover:text-cyan-300 transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-xl font-bold text-white">Security Advisor</h1>
          </div>
        </div>
      </header>

      <main className="relative z-10 max-w-4xl mx-auto px-6 py-8">
        {/* Hero Section */}
        <div className="text-center mb-8">
          <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl mx-auto mb-4 flex items-center justify-center shadow-2xl">
            <User className="w-12 h-12 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">CyberSecurity</h2>
          <h3 className="text-xl text-cyan-300 mb-4">In The First Place</h3>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-3xl border border-white/20 overflow-hidden shadow-2xl">
          {securityItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div key={index} className={`flex items-center justify-between p-6 border-b border-white/10 last:border-b-0 ${item.status === 'danger' ? 'bg-red-500/20' : ''} hover:bg-white/5 transition-colors`}>
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                    item.status === 'danger' ? 'bg-red-500/20' :
                    item.status === 'warning' ? 'bg-yellow-500/20' :
                    'bg-green-500/20'
                  }`}>
                    <IconComponent className={`w-6 h-6 ${getStatusColor(item.status)}`} />
                  </div>
                  <span className="font-medium text-white text-lg">{item.title}</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <span className={`text-sm font-medium px-3 py-1 rounded-full ${
                    item.status === 'danger' ? 'bg-red-500/20 text-red-300' :
                    item.status === 'warning' ? 'bg-yellow-500/20 text-yellow-300' :
                    item.enabled ? 'bg-green-500/20 text-green-300' : 'bg-gray-500/20 text-gray-300'
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
          <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-sm rounded-2xl p-6 text-center border border-green-400/30">
            <div className="text-3xl font-bold text-green-300 mb-2">8</div>
            <div className="text-sm text-green-200">Secure Settings</div>
            <div className="w-full h-2 bg-green-500/30 rounded-full mt-3">
              <div className="w-4/5 h-2 bg-green-400 rounded-full"></div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 backdrop-blur-sm rounded-2xl p-6 text-center border border-yellow-400/30">
            <div className="text-3xl font-bold text-yellow-300 mb-2">1</div>
            <div className="text-sm text-yellow-200">Warning</div>
            <div className="w-full h-2 bg-yellow-500/30 rounded-full mt-3">
              <div className="w-1/5 h-2 bg-yellow-400 rounded-full"></div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-red-500/20 to-pink-500/20 backdrop-blur-sm rounded-2xl p-6 text-center border border-red-400/30">
            <div className="text-3xl font-bold text-red-300 mb-2">1</div>
            <div className="text-sm text-red-200">Critical Issue</div>
            <div className="w-full h-2 bg-red-500/30 rounded-full mt-3">
              <div className="w-1/5 h-2 bg-red-400 rounded-full"></div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SecurityAdvisor;
