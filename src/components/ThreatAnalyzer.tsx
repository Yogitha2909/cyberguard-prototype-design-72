
import { ArrowLeft, Shield, AlertTriangle, CheckCircle } from 'lucide-react';
import { useState } from 'react';

const ThreatAnalyzer = ({ onBack }: { onBack: () => void }) => {
  const [isScanning, setIsScanning] = useState(false);
  const [scanComplete, setScanComplete] = useState(false);

  const malignApps = 3;
  const benignApps = 47;
  const totalApps = malignApps + benignApps;

  const malignPercentage = (malignApps / totalApps) * 100;
  const benignPercentage = (benignApps / totalApps) * 100;

  const handleScan = () => {
    setIsScanning(true);
    setTimeout(() => {
      setIsScanning(false);
      setScanComplete(true);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center space-x-4">
          <button onClick={onBack} className="p-2 text-slate-600 hover:text-blue-600 transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="text-xl font-bold text-slate-800">Threat Analyzer</h1>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-8">
        {/* Threat Chart */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 mb-6">
          <div className="text-center">
            <div className="relative w-48 h-48 mx-auto mb-6">
              {/* Outer Ring - Malign Apps */}
              <svg className="w-48 h-48 transform -rotate-90" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  stroke="#fee2e2"
                  strokeWidth="8"
                  fill="none"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  stroke="#ef4444"
                  strokeWidth="8"
                  fill="none"
                  strokeDasharray={`${malignPercentage * 2.51} 251`}
                  className="transition-all duration-1000"
                />
                {/* Inner Ring - Benign Apps */}
                <circle
                  cx="50"
                  cy="50"
                  r="25"
                  stroke="#dcfce7"
                  strokeWidth="8"
                  fill="none"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="25"
                  stroke="#22c55e"
                  strokeWidth="8"
                  fill="none"
                  strokeDasharray={`${benignPercentage * 1.57} 157`}
                  className="transition-all duration-1000"
                />
              </svg>
              
              {/* Center Icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center">
                  <Shield className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                  <span className="text-sm font-medium text-slate-600">Potential Malign Apps</span>
                </div>
                <div className="text-3xl font-bold text-red-600">{malignApps}</div>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium text-slate-600">Potential Benign Apps</span>
                </div>
                <div className="text-3xl font-bold text-green-600">{benignApps}</div>
              </div>
            </div>

            {/* Scan Button */}
            <button
              onClick={handleScan}
              disabled={isScanning}
              className={`w-full py-4 px-6 rounded-xl font-semibold text-white transition-all ${
                isScanning
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800'
              }`}
            >
              {isScanning ? 'Scanning...' : 'Start Scan'}
            </button>
          </div>
        </div>

        {/* Status Banner */}
        <div className="bg-green-50 border border-green-200 rounded-xl p-4 flex items-center space-x-3">
          <CheckCircle className="w-6 h-6 text-green-600" />
          <span className="text-green-800 font-medium">Real-time protection enabled</span>
        </div>

        {/* Threats List */}
        {scanComplete && (
          <div className="mt-6 bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="p-4 border-b border-slate-200 bg-red-50">
              <h3 className="font-semibold text-red-800 flex items-center space-x-2">
                <AlertTriangle className="w-5 h-5" />
                <span>Detected Threats</span>
              </h3>
            </div>
            
            {[
              { name: 'Suspicious APK', risk: 'High', description: 'Unknown source installation detected' },
              { name: 'Ad Network Tracker', risk: 'Medium', description: 'Excessive data collection permissions' },
              { name: 'Background Service', risk: 'Low', description: 'Unusual background activity' },
            ].map((threat, index) => (
              <div key={index} className="p-4 border-b border-slate-100 last:border-b-0">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium text-slate-800">{threat.name}</h4>
                    <p className="text-sm text-slate-600">{threat.description}</p>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                    threat.risk === 'High' ? 'bg-red-100 text-red-800' :
                    threat.risk === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {threat.risk} Risk
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default ThreatAnalyzer;
