'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { 
  Leaf, 
  ArrowRight, 
  Mail, 
  Lock, 
  Eye, 
  EyeOff, 
  Sparkles, 
  Building2, 
  CheckCircle2, 
  Briefcase,
  ShieldCheck
} from 'lucide-react';

export default function LoginPage() {
  const router = useRouter();
  const [role, setRole] = useState<'admin' | 'auditor' | 'bank'>('admin');
  const [email, setEmail] = useState('admin@acmemanufacturing.in');
  const [password, setPassword] = useState('password123');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleRoleChange = (selectedRole: 'admin' | 'auditor' | 'bank') => {
    setRole(selectedRole);
    if (selectedRole === 'admin') {
      setEmail('admin@acmemanufacturing.in');
      setPassword('password123');
    } else if (selectedRole === 'auditor') {
      setEmail('verifier@carbonaudit.org');
      setPassword('auditorPass2026');
    } else {
      setEmail('greenfinance@sidbi.in');
      setPassword('greenBank2026');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setErrorMsg('Please enter both email and password.');
      return;
    }

    setErrorMsg(null);
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      router.push('/dashboard');
    }, 600);
  };

  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center p-4 sm:p-6 md:p-10 bg-[#080e1a] text-slate-100 font-sans antialiased relative overflow-x-hidden">
      
      {/* Glow Effects */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] sm:w-[650px] sm:h-[650px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-teal-500/10 rounded-full blur-[100px] pointer-events-none"></div>

      {/* Main Responsive Wrapper */}
      <div className="relative z-10 w-full max-w-md mx-auto my-auto">
        
        {/* Brand Header */}
        <div className="flex flex-col items-center text-center mb-6 sm:mb-8">
          <Link href="/" className="inline-flex items-center gap-3 mb-3 group">
            <div className="w-11 h-11 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center shadow-lg shadow-emerald-500/10 group-hover:scale-105 transition-transform">
              <Leaf className="w-6 h-6 text-emerald-400" />
            </div>
            <div className="text-left">
              <span className="text-xl sm:text-2xl font-bold text-white tracking-tight block">KarboNova</span>
              <span className="text-[10px] sm:text-xs text-emerald-400 font-semibold tracking-wider block uppercase">MSME Carbon Operating System</span>
            </div>
          </Link>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/70 border border-emerald-500/30 text-[11px] sm:text-xs text-emerald-300 font-medium shadow-inner">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span>India CEA Grid Compliant • 0.716 kg CO₂e/kWh</span>
          </div>
        </div>

        {/* Card Body */}
        <div className="bg-slate-900/90 backdrop-blur-xl border border-slate-800/90 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-black/80">
          
          <div className="mb-6 text-left">
            <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Sign in to your account
            </h1>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Select your role and enter credentials to access your carbon dashboard.
            </p>
          </div>

          {/* Role Selection Tabs */}
          <div className="mb-5 space-y-2">
            <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
              Operating Role
            </label>
            <div className="grid grid-cols-3 gap-1.5 p-1 bg-slate-950 border border-slate-800 rounded-2xl">
              <button
                type="button"
                onClick={() => handleRoleChange('admin')}
                className={`flex flex-col items-center justify-center py-2 px-1 rounded-xl text-[11px] sm:text-xs font-bold transition-all cursor-pointer ${
                  role === 'admin' 
                    ? 'bg-emerald-600 text-white shadow-md shadow-emerald-950/60' 
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/40'
                }`}
              >
                <Building2 className="w-3.5 h-3.5 mb-1 shrink-0" />
                <span className="truncate w-full text-center">Admin</span>
              </button>

              <button
                type="button"
                onClick={() => handleRoleChange('auditor')}
                className={`flex flex-col items-center justify-center py-2 px-1 rounded-xl text-[11px] sm:text-xs font-bold transition-all cursor-pointer ${
                  role === 'auditor' 
                    ? 'bg-emerald-600 text-white shadow-md shadow-emerald-950/60' 
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/40'
                }`}
              >
                <CheckCircle2 className="w-3.5 h-3.5 mb-1 shrink-0" />
                <span className="truncate w-full text-center">Auditor</span>
              </button>

              <button
                type="button"
                onClick={() => handleRoleChange('bank')}
                className={`flex flex-col items-center justify-center py-2 px-1 rounded-xl text-[11px] sm:text-xs font-bold transition-all cursor-pointer ${
                  role === 'bank' 
                    ? 'bg-emerald-600 text-white shadow-md shadow-emerald-950/60' 
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/40'
                }`}
              >
                <Briefcase className="w-3.5 h-3.5 mb-1 shrink-0" />
                <span className="truncate w-full text-center">Bank</span>
              </button>
            </div>
          </div>

          {/* Auto-fill Helper Button */}
          <button
            type="button"
            onClick={() => handleRoleChange(role)}
            className="w-full mb-5 flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-emerald-950/70 border border-emerald-500/30 text-emerald-400 text-xs font-semibold hover:bg-emerald-900/50 transition-colors cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 shrink-0" />
            <span className="truncate">Auto-fill {role === 'admin' ? 'Facility Admin' : role === 'auditor' ? 'Verifier' : 'SIDBI Bank'} Demo Credentials</span>
          </button>

          {/* Error Banner */}
          {errorMsg && (
            <div className="mb-4 p-3 rounded-xl bg-rose-950/60 border border-rose-800 text-rose-300 text-xs font-medium">
              {errorMsg}
            </div>
          )}

          {/* Authentication Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            
            <div className="space-y-1.5">
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider" htmlFor="email">
                Business Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none" />
                <input 
                  type="email" 
                  id="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@company.com"
                  required
                  className="w-full pl-10 pr-4 py-2.5 sm:py-3 bg-slate-950 border border-slate-700/80 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <div className="flex justify-between items-center">
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider" htmlFor="password">
                  Password
                </label>
                <a href="#" className="text-xs text-emerald-400 hover:underline font-medium">
                  Forgot password?
                </a>
              </div>
              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none" />
                <input 
                  type={showPassword ? 'text' : 'password'} 
                  id="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  className="w-full pl-10 pr-10 py-2.5 sm:py-3 bg-slate-950 border border-slate-700/80 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white transition-colors"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between pt-1">
              <label className="flex items-center gap-2 cursor-pointer select-none">
                <input 
                  type="checkbox" 
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 rounded bg-slate-950 border-slate-700 text-emerald-500 focus:ring-emerald-500" 
                />
                <span className="text-xs text-slate-300">Remember this device</span>
              </label>
            </div>

            <button 
              type="submit"
              disabled={isLoading}
              className="w-full flex items-center justify-center gap-2 py-3 sm:py-3.5 px-4 bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white rounded-xl font-bold text-sm transition-all shadow-lg shadow-emerald-950/50 active:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed group cursor-pointer"
            >
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Signing in...</span>
                </div>
              ) : (
                <>
                  <span>Sign In to Dashboard</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </form>

        </div>

        {/* Footer Link */}
        <p className="text-center text-xs text-slate-400 mt-6">
          Don't have an MSME account?{' '}
          <Link href="/dashboard/opportunity" className="text-emerald-400 font-bold hover:underline">
            Run Free Opportunity Assessment
          </Link>
        </p>

      </div>
    </div>
  );
}
