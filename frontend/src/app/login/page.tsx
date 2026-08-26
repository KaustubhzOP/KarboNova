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
  Building2, 
  ShieldCheck
} from 'lucide-react';

export default function LoginPage() {
  const router = useRouter();
  const [role, setRole] = useState<'msme' | 'auditor' | 'bank'>('msme');
  const [email, setEmail] = useState('admin@acmemanufacturing.in');
  const [password, setPassword] = useState('password123');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

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
    <div 
      className="min-h-screen w-full flex flex-col justify-center items-center p-4 sm:p-6 md:p-10 bg-slate-50 text-slate-800 font-sans antialiased relative overflow-x-hidden"
      style={{ boxSizing: 'border-box' }}
    >
      {/* Light Theme Background Ambient Radial Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-400/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-400/10 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Main Responsive Box */}
      <div 
        className="relative z-10 w-full max-w-[440px] mx-auto my-auto"
        style={{ width: '100%', maxWidth: '440px', boxSizing: 'border-box' }}
      >
        {/* Brand Header */}
        <div className="flex flex-col items-center text-center mb-6 sm:mb-8 w-full">
          <Link href="/" className="inline-flex items-center gap-3 mb-3 group">
            <div className="w-11 h-11 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shadow-lg shadow-emerald-600/20 group-hover:scale-105 transition-transform shrink-0">
              <Leaf className="w-6 h-6" />
            </div>
            <div className="text-left">
              <span className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight block">KarboNova</span>
              <span className="text-[10px] sm:text-xs text-emerald-700 font-bold tracking-wider block uppercase">MSME Carbon Operating System</span>
            </div>
          </Link>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-xs text-emerald-800 font-semibold shadow-xs max-w-full">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            <span className="whitespace-nowrap">India CEA Grid Compliant • 0.716 kg CO₂e/kWh</span>
          </div>
        </div>

        {/* Form Card (Light Theme) */}
        <div 
          className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-8 shadow-xl shadow-slate-200/60 w-full"
          style={{ width: '100%', boxSizing: 'border-box' }}
        >
          <div className="mb-6 text-left w-full">
            <h1 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight leading-snug">
              Sign in to your account
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-1 leading-relaxed">
              Enter your business credentials to access your carbon dashboard.
            </p>
          </div>

          {/* Operating Role Badge */}
          <div className="mb-6 p-3.5 rounded-2xl bg-slate-50 border border-slate-200 flex items-center gap-3 w-full">
            <div className="w-9 h-9 rounded-xl bg-emerald-100 border border-emerald-200 text-emerald-700 flex items-center justify-center shrink-0">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 block">Facility Access</span>
              <span className="text-xs font-bold text-slate-900 block">MSME Enterprise Portal</span>
            </div>
          </div>

          {/* Error Banner */}
          {errorMsg && (
            <div className="mb-4 p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-semibold w-full">
              {errorMsg}
            </div>
          )}

          {/* Authentication Form */}
          <form onSubmit={handleSubmit} className="space-y-4 w-full">
            <div className="space-y-1.5 w-full">
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider" htmlFor="email">
                Business Email
              </label>
              <div className="relative w-full">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                <input 
                  type="email" 
                  id="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@company.com"
                  required
                  className="w-full pl-10 pr-4 py-2.5 sm:py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-500/20 transition-all font-medium"
                  style={{ width: '100%' }}
                />
              </div>
            </div>

            <div className="space-y-1.5 w-full">
              <div className="flex justify-between items-center w-full">
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider" htmlFor="password">
                  Password
                </label>
                <a href="#" className="text-xs text-emerald-600 hover:text-emerald-700 hover:underline font-semibold">
                  Forgot password?
                </a>
              </div>
              <div className="relative w-full">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                <input 
                  type={showPassword ? 'text' : 'password'} 
                  id="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  className="w-full pl-10 pr-10 py-2.5 sm:py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-500/20 transition-all font-medium"
                  style={{ width: '100%' }}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 transition-colors"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between pt-1 w-full">
              <label className="flex items-center gap-2 cursor-pointer select-none">
                <input 
                  type="checkbox" 
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 rounded bg-slate-100 border-slate-300 text-emerald-600 focus:ring-emerald-500 cursor-pointer" 
                />
                <span className="text-xs text-slate-600 font-medium">Remember this device</span>
              </label>
            </div>

            <button 
              type="submit"
              disabled={isLoading}
              className="w-full flex items-center justify-center gap-2 py-3 sm:py-3.5 px-4 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white rounded-xl font-bold text-sm transition-all shadow-md shadow-emerald-600/20 active:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed group cursor-pointer"
              style={{ width: '100%' }}
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
        <p className="text-center text-xs text-slate-500 mt-6 w-full font-medium">
          Don't have an MSME account?{' '}
          <Link href="/dashboard/opportunity" className="text-emerald-700 font-bold hover:underline">
            Run Free Opportunity Assessment
          </Link>
        </p>

      </div>
    </div>
  );
}
