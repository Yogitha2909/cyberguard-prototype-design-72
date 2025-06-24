
import { ArrowLeft, Moon, Sun, Globe, Shield, HelpCircle, MessageSquare, Download } from 'lucide-react';
import { Switch } from '@/components/ui/switch';
import { useApp } from '@/contexts/AppContext';

const Settings = ({ onBack }: { onBack: () => void }) => {
  const { 
    isDarkMode, 
    setIsDarkMode, 
    realtimeProtection, 
    setRealtimeProtection,
    language,
    setLanguage 
  } = useApp();

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-slate-900' : 'bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50'} relative overflow-hidden`}>
      {/* Decorative Elements */}
      <div className="absolute top-16 right-20 w-20 h-20 bg-purple-200/40 rounded-full opacity-40"></div>
      <div className="absolute bottom-32 left-16 w-14 h-14 bg-pink-200/40 rounded-full opacity-45"></div>

      {/* Header */}
      <header className={`relative z-10 ${isDarkMode ? 'bg-slate-800/30' : 'bg-white/30'} backdrop-blur-sm border-b border-white/40`}>
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center space-x-4">
          <button onClick={onBack} className={`p-2 ${isDarkMode ? 'text-slate-300 hover:text-slate-100' : 'text-slate-600 hover:text-slate-800'} transition-colors`}>
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-200/60 to-pink-300/60 rounded-xl flex items-center justify-center">
              <Shield className="w-5 h-5 text-purple-600" />
            </div>
            <h1 className={`text-xl font-bold ${isDarkMode ? 'text-slate-200' : 'text-slate-700'}`}>Settings</h1>
          </div>
        </div>
      </header>

      <main className="relative z-10 max-w-4xl mx-auto px-6 py-8">
        <div className={`${isDarkMode ? 'bg-slate-800/40' : 'bg-white/40'} backdrop-blur-sm rounded-3xl border border-white/50 overflow-hidden shadow-xl`}>
          
          {/* Theme Settings */}
          <div className="p-6 border-b border-white/30">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-200/60 to-pink-300/60 rounded-2xl flex items-center justify-center">
                  {isDarkMode ? <Moon className="w-6 h-6 text-purple-600" /> : <Sun className="w-6 h-6 text-purple-600" />}
                </div>
                <div>
                  <span className={`font-medium ${isDarkMode ? 'text-slate-200' : 'text-slate-700'} text-lg`}>Dark Mode</span>
                  <p className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>Switch between light and dark theme</p>
                </div>
              </div>
              <Switch checked={isDarkMode} onCheckedChange={setIsDarkMode} />
            </div>
          </div>

          {/* Language Settings */}
          <div className="p-6 border-b border-white/30">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-200/60 to-cyan-300/60 rounded-2xl flex items-center justify-center">
                  <Globe className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <span className={`font-medium ${isDarkMode ? 'text-slate-200' : 'text-slate-700'} text-lg`}>Language</span>
                  <p className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>Current: {language}</p>
                </div>
              </div>
              <button className={`px-4 py-2 ${isDarkMode ? 'bg-slate-700 text-slate-200' : 'bg-white/60 text-slate-700'} rounded-lg font-medium`}>
                Change
              </button>
            </div>
          </div>

          {/* Real-time Protection */}
          <div className="p-6 border-b border-white/30">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-200/60 to-emerald-300/60 rounded-2xl flex items-center justify-center">
                  <Shield className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <span className={`font-medium ${isDarkMode ? 'text-slate-200' : 'text-slate-700'} text-lg`}>Real-time Protection</span>
                  <p className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>Monitor threats continuously</p>
                </div>
              </div>
              <Switch checked={realtimeProtection} onCheckedChange={setRealtimeProtection} />
            </div>
          </div>

          {/* Help & Support */}
          <div className="p-6 border-b border-white/30">
            <button className="flex items-center space-x-4 w-full text-left">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-200/60 to-yellow-300/60 rounded-2xl flex items-center justify-center">
                <HelpCircle className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <span className={`font-medium ${isDarkMode ? 'text-slate-200' : 'text-slate-700'} text-lg`}>Help & Support</span>
                <p className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>Get assistance and FAQs</p>
              </div>
            </button>
          </div>

          {/* Feedback */}
          <div className="p-6 border-b border-white/30">
            <button className="flex items-center space-x-4 w-full text-left">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-200/60 to-rose-300/60 rounded-2xl flex items-center justify-center">
                <MessageSquare className="w-6 h-6 text-pink-600" />
              </div>
              <div>
                <span className={`font-medium ${isDarkMode ? 'text-slate-200' : 'text-slate-700'} text-lg`}>Feedback</span>
                <p className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>Share your thoughts with us</p>
              </div>
            </button>
          </div>

          {/* Download Report */}
          <div className="p-6">
            <button className="flex items-center space-x-4 w-full text-left">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-200/60 to-blue-300/60 rounded-2xl flex items-center justify-center">
                <Download className="w-6 h-6 text-indigo-600" />
              </div>
              <div>
                <span className={`font-medium ${isDarkMode ? 'text-slate-200' : 'text-slate-700'} text-lg`}>Download Report</span>
                <p className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>Export security scan results</p>
              </div>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Settings;
