
import { ArrowLeft, BarChart3, Clock, Wifi, RefreshCw, Search } from 'lucide-react';

const AppStatistics = ({ onBack }: { onBack: () => void }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center space-x-4">
          <button onClick={onBack} className="p-2 text-slate-600 hover:text-blue-600 transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="text-xl font-bold text-slate-800">App Statistics</h1>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-8">
        {/* Scan Button */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 mb-8 text-center">
          <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-6 px-8 rounded-2xl font-bold text-xl transition-all transform hover:scale-105 shadow-lg">
            Scan Now
          </button>
        </div>

        {/* Statistics Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {[
            { title: 'Active Time Stats', icon: Clock, color: 'bg-purple-500', description: 'Monitor app usage patterns' },
            { title: 'Data Usage Stats', icon: Wifi, color: 'bg-blue-500', description: 'Track network consumption' },
            { title: 'App Update', icon: RefreshCw, color: 'bg-green-500', description: 'Check for updates' },
            { title: 'App Analysis', icon: Search, color: 'bg-orange-500', description: 'Detailed app insights' },
          ].map((option, index) => {
            const IconComponent = option.icon;
            return (
              <button
                key={index}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg border border-slate-200 transition-all duration-300 hover:scale-105 text-left group"
              >
                <div className={`w-12 h-12 ${option.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-slate-800 mb-2">{option.title}</h3>
                <p className="text-sm text-slate-600">{option.description}</p>
              </button>
            );
          })}
        </div>

        {/* Last Scan Info */}
        <div className="bg-slate-100 rounded-xl p-4 text-center">
          <p className="text-slate-600">
            <span className="font-medium">Last Scan:</span> Never
          </p>
        </div>

        {/* Sample Chart */}
        <div className="mt-8 bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
          <h3 className="font-semibold text-slate-800 mb-4 flex items-center space-x-2">
            <BarChart3 className="w-5 h-5" />
            <span>App Usage Overview</span>
          </h3>
          
          <div className="space-y-4">
            {[
              { name: 'Social Media', usage: 85, color: 'bg-blue-500' },
              { name: 'Productivity', usage: 65, color: 'bg-green-500' },
              { name: 'Entertainment', usage: 45, color: 'bg-purple-500' },
              { name: 'Games', usage: 30, color: 'bg-orange-500' },
              { name: 'Utilities', usage: 20, color: 'bg-gray-500' },
            ].map((app, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div className="w-20 text-sm text-slate-600">{app.name}</div>
                <div className="flex-1 bg-slate-200 rounded-full h-3 overflow-hidden">
                  <div
                    className={`h-full ${app.color} transition-all duration-1000`}
                    style={{ width: `${app.usage}%` }}
                  ></div>
                </div>
                <div className="w-12 text-sm text-slate-600 text-right">{app.usage}%</div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default AppStatistics;
