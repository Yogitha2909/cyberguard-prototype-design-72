
import { ArrowLeft, BarChart3, Clock, Wifi, RefreshCw, Search, User, TrendingUp } from 'lucide-react';

const AppStatistics = ({ onBack }: { onBack: () => void }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-16 right-20 w-20 h-20 bg-orange-400 rounded-full opacity-20"></div>
      <div className="absolute bottom-32 left-16 w-14 h-14 bg-cyan-400 rounded-full opacity-25"></div>
      <div className="absolute top-1/3 left-10 text-yellow-400 opacity-30 text-xl">📊</div>

      {/* Header */}
      <header className="relative z-10 bg-white/10 backdrop-blur-sm border-b border-white/20">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center space-x-4">
          <button onClick={onBack} className="p-2 text-white hover:text-cyan-300 transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-blue-600 rounded-xl flex items-center justify-center">
              <BarChart3 className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-xl font-bold text-white">App Statistics</h1>
          </div>
        </div>
      </header>

      <main className="relative z-10 max-w-4xl mx-auto px-6 py-8">
        {/* Hero Section */}
        <div className="text-center mb-8">
          <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-blue-600 rounded-3xl mx-auto mb-4 flex items-center justify-center shadow-2xl">
            <User className="w-12 h-12 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">CyberSecurity</h2>
          <h3 className="text-xl text-cyan-300 mb-4">In The First Place</h3>
        </div>

        {/* Scan Button */}
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl border border-white/20 p-8 mb-8 text-center shadow-2xl">
          <button className="w-full bg-gradient-to-r from-orange-500 to-pink-600 hover:from-orange-600 hover:to-pink-700 text-white py-6 px-8 rounded-3xl font-bold text-xl transition-all transform hover:scale-105 shadow-2xl">
            Scan Now
          </button>
        </div>

        {/* Statistics Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {[
            { title: 'Active Time Stats', icon: Clock, color: 'from-purple-500 to-pink-600', description: 'Monitor app usage patterns' },
            { title: 'Data Usage Stats', icon: Wifi, color: 'from-blue-500 to-cyan-600', description: 'Track network consumption' },
            { title: 'App Update', icon: RefreshCw, color: 'from-green-500 to-emerald-600', description: 'Check for updates' },
            { title: 'App Analysis', icon: Search, color: 'from-orange-500 to-red-600', description: 'Detailed app insights' },
          ].map((option, index) => {
            const IconComponent = option.icon;
            return (
              <button
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 border border-white/20 transition-all duration-300 hover:scale-105 hover:bg-white/20 text-left group shadow-xl"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${option.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-white text-lg mb-2">{option.title}</h3>
                <p className="text-sm text-white/70">{option.description}</p>
                <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mt-3"></div>
              </button>
            );
          })}
        </div>

        {/* Last Scan Info */}
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4 text-center mb-8 shadow-xl">
          <p className="text-white/80">
            <span className="font-medium text-cyan-300">Last Scan:</span> Never
          </p>
        </div>

        {/* Sample Chart */}
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl border border-white/20 p-6 shadow-2xl">
          <h3 className="font-semibold text-white text-xl mb-6 flex items-center space-x-3">
            <TrendingUp className="w-6 h-6 text-cyan-400" />
            <span>App Usage Overview</span>
          </h3>
          
          <div className="space-y-6">
            {[
              { name: 'Social Media', usage: 85, color: 'from-blue-500 to-cyan-500' },
              { name: 'Productivity', usage: 65, color: 'from-green-500 to-emerald-500' },
              { name: 'Entertainment', usage: 45, color: 'from-purple-500 to-pink-500' },
              { name: 'Games', usage: 30, color: 'from-orange-500 to-red-500' },
              { name: 'Utilities', usage: 20, color: 'from-gray-500 to-slate-500' },
            ].map((app, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div className="w-24 text-sm text-white font-medium">{app.name}</div>
                <div className="flex-1 bg-white/20 rounded-full h-4 overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${app.color} transition-all duration-1000 rounded-full shadow-lg`}
                    style={{ width: `${app.usage}%` }}
                  ></div>
                </div>
                <div className="w-12 text-sm text-cyan-300 text-right font-semibold">{app.usage}%</div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default AppStatistics;
