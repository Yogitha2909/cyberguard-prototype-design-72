import { ArrowLeft, AlertTriangle, Settings } from 'lucide-react';

const adwareApps = [
  { name: 'Photo Editor Pro', icon: '📷', adServices: 'AdMob, Facebook Ads', risk: 'Medium' },
  { name: 'Free Game Hub', icon: '🎮', adServices: 'Unity Ads, Vungle', risk: 'High' },
  { name: 'Weather Widget', icon: '🌤️', adServices: 'Google Ads', risk: 'Low' },
  { name: 'File Manager+', icon: '📁', adServices: 'InMobi, Chartboost', risk: 'Medium' },
  { name: 'Music Player', icon: '🎵', adServices: 'AdColony', risk: 'Low' },
];

const AdwareScanner = ({ onBack }: { onBack: () => void }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center space-x-4">
          <button onClick={onBack} className="p-2 text-slate-600 hover:text-blue-600 transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="text-xl font-bold text-slate-800">Ad Services (Adware)</h1>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-8">
        {/* Summary */}
        <div className="bg-orange-50 border border-orange-200 rounded-xl p-4 mb-6 flex items-center space-x-3">
          <AlertTriangle className="w-6 h-6 text-orange-600" />
          <div>
            <h3 className="font-medium text-orange-800">Ad-Supported Apps Detected</h3>
            <p className="text-sm text-orange-700">{adwareApps.length} apps contain advertising services</p>
          </div>
        </div>

        {/* Apps List */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          {adwareApps.map((app, index) => (
            <div key={index} className="flex items-center justify-between p-4 border-b border-slate-100 last:border-b-0">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-2xl">
                  {app.icon}
                </div>
                <div>
                  <h3 className="font-medium text-slate-800">{app.name}</h3>
                  <p className="text-sm text-slate-600">Ad Services: {app.adServices}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                  app.risk === 'High' ? 'bg-red-100 text-red-800' :
                  app.risk === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-green-100 text-green-800'
                }`}>
                  {app.risk} Risk
                </div>
                <button className="p-2 text-slate-400 hover:text-slate-600 transition-colors">
                  <Settings className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Risk Distribution */}
        <div className="mt-6 grid grid-cols-3 gap-4">
          <div className="bg-red-50 rounded-xl p-4 text-center">
            <div className="text-2xl font-bold text-red-600">1</div>
            <div className="text-sm text-red-800">High Risk</div>
          </div>
          <div className="bg-yellow-50 rounded-xl p-4 text-center">
            <div className="text-2xl font-bold text-yellow-600">2</div>
            <div className="text-sm text-yellow-800">Medium Risk</div>
          </div>
          <div className="bg-green-50 rounded-xl p-4 text-center">
            <div className="text-2xl font-bold text-green-600">2</div>
            <div className="text-sm text-green-800">Low Risk</div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdwareScanner;
