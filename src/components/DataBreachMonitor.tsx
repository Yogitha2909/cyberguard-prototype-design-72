
import { ArrowLeft, Shield, AlertTriangle, CheckCircle, Clock, Moon, Sun } from 'lucide-react';
import { useApp } from '@/contexts/AppContext';

const breachData = [
  { service: 'Social Media Platform', date: '2024-01-15', severity: 'High', affected: '2.3M users', status: 'Active' },
  { service: 'Online Retailer', date: '2024-01-08', severity: 'Medium', affected: '850K users', status: 'Resolved' },
  { service: 'Email Service', date: '2023-12-22', severity: 'Low', affected: '12K users', status: 'Resolved' },
];

const DataBreachMonitor = ({ onBack }: { onBack: () => void }) => {
  const { isDarkMode, setIsDarkMode } = useApp();

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-slate-900' : 'bg-gradient-to-br from-slate-50 to-blue-50'}`}>
      {/* Header */}
      <header className={`${isDarkMode ? 'bg-slate-800' : 'bg-white'} shadow-sm border-b ${isDarkMode ? 'border-slate-700' : 'border-slate-200'}`}>
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button onClick={onBack} className={`p-2 ${isDarkMode ? 'text-slate-400 hover:text-slate-200' : 'text-slate-600 hover:text-blue-600'} transition-colors`}>
              <ArrowLeft className="w-5 h-5" />
            </button>
            <h1 className={`text-xl font-bold ${isDarkMode ? 'text-slate-200' : 'text-slate-800'}`}>Data Breach Monitor</h1>
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

      <main className="max-w-4xl mx-auto px-6 py-8">
        {/* Status Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className={`${isDarkMode ? 'bg-slate-800' : 'bg-white'} rounded-xl p-6 shadow-sm border ${isDarkMode ? 'border-slate-700' : 'border-slate-200'} text-center`}>
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <AlertTriangle className="w-6 h-6 text-red-600" />
            </div>
            <div className="text-2xl font-bold text-red-600">1</div>
            <div className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>Active Breaches</div>
          </div>
          
          <div className={`${isDarkMode ? 'bg-slate-800' : 'bg-white'} rounded-xl p-6 shadow-sm border ${isDarkMode ? 'border-slate-700' : 'border-slate-200'} text-center`}>
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <CheckCircle className="w-6 h-6 text-green-600" />
            </div>
            <div className="text-2xl font-bold text-green-600">2</div>
            <div className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>Resolved</div>
          </div>
          
          <div className={`${isDarkMode ? 'bg-slate-800' : 'bg-white'} rounded-xl p-6 shadow-sm border ${isDarkMode ? 'border-slate-700' : 'border-slate-200'} text-center`}>
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Shield className="w-6 h-6 text-blue-600" />
            </div>
            <div className="text-2xl font-bold text-blue-600">95%</div>
            <div className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>Protection Score</div>
          </div>
        </div>

        {/* Recent Breaches */}
        <div className={`${isDarkMode ? 'bg-slate-800' : 'bg-white'} rounded-2xl shadow-sm border ${isDarkMode ? 'border-slate-700' : 'border-slate-200'} overflow-hidden`}>
          <div className={`p-6 border-b ${isDarkMode ? 'border-slate-700' : 'border-slate-200'}`}>
            <h3 className={`font-semibold ${isDarkMode ? 'text-slate-200' : 'text-slate-800'}`}>Recent Data Breaches</h3>
            <p className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-600'} mt-1`}>Monitor potential security incidents affecting your data</p>
          </div>
          
          {breachData.map((breach, index) => (
            <div key={index} className={`p-4 border-b ${isDarkMode ? 'border-slate-700' : 'border-slate-100'} last:border-b-0`}>
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h4 className={`font-medium ${isDarkMode ? 'text-slate-200' : 'text-slate-800'}`}>{breach.service}</h4>
                    <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                      breach.status === 'Active' ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'
                    }`}>
                      {breach.status}
                    </div>
                  </div>
                  
                  <div className={`flex items-center space-x-4 text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{breach.date}</span>
                    </div>
                    <span>•</span>
                    <span>{breach.affected} affected</span>
                  </div>
                </div>
                
                <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                  breach.severity === 'High' ? 'bg-red-100 text-red-800' :
                  breach.severity === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-blue-100 text-blue-800'
                }`}>
                  {breach.severity} Severity
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="mt-6 grid grid-cols-2 gap-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-xl font-medium transition-colors duration-300">
            Check My Accounts
          </button>
          <button className={`${isDarkMode ? 'bg-slate-700 hover:bg-slate-600 text-slate-200' : 'bg-white hover:bg-slate-50 text-slate-800'} py-3 px-6 rounded-xl font-medium border ${isDarkMode ? 'border-slate-600' : 'border-slate-200'} transition-colors duration-300`}>
            View All Breaches
          </button>
        </div>
      </main>
    </div>
  );
};

export default DataBreachMonitor;
