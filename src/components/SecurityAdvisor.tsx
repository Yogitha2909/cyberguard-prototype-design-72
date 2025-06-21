
import { ArrowLeft, Shield, Wifi, Lock, Bluetooth, Smartphone, Eye, Key, AlertTriangle, CheckCircle, XCircle } from 'lucide-react';

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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center space-x-4">
          <button onClick={onBack} className="p-2 text-slate-600 hover:text-blue-600 transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="text-xl font-bold text-slate-800">Security Advisor</h1>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-8">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          {securityItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div key={index} className={`flex items-center justify-between p-4 border-b border-slate-100 last:border-b-0 ${item.status === 'danger' ? 'bg-red-50' : ''}`}>
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center">
                    <IconComponent className={`w-5 h-5 ${getStatusColor(item.status)}`} />
                  </div>
                  <span className="font-medium text-slate-800">{item.title}</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <span className={`text-sm font-medium ${getStatusColor(item.status)}`}>
                    {item.enabled ? 'Enabled' : 'Disabled'}
                  </span>
                  {getStatusIcon(item.status, item.enabled)}
                </div>
              </div>
            );
          })}
        </div>

        {/* Summary */}
        <div className="mt-6 grid grid-cols-3 gap-4">
          <div className="bg-green-50 rounded-xl p-4 text-center">
            <div className="text-2xl font-bold text-green-600">8</div>
            <div className="text-sm text-green-800">Secure</div>
          </div>
          <div className="bg-yellow-50 rounded-xl p-4 text-center">
            <div className="text-2xl font-bold text-yellow-600">1</div>
            <div className="text-sm text-yellow-800">Warning</div>
          </div>
          <div className="bg-red-50 rounded-xl p-4 text-center">
            <div className="text-2xl font-bold text-red-600">1</div>
            <div className="text-sm text-red-800">Critical</div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SecurityAdvisor;
