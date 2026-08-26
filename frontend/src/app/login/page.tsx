'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { 
  Leaf, 
  ArrowRight, 
  Mail, 
  Lock, 
  Eye, 
  EyeOff, 
  ShieldCheck, 
  Sparkles, 
  Building2, 
  CheckCircle2, 
  Briefcase, 
  Award,
  Globe2,
  Check
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
    }, 700);
  };

  return (
    <div className="min-h-screen w-full flex flex-col lg:flex-row bg-[#080d1a] text-slate-100 font-sans antialiased">
      
      {/* LEFT PANEL - Brand & Visual Hero (Visible on Desktop) */}
      <div className="lg:w-1/2 min-h-[400px] lg:min-h-screen relative flex flex-col justify-between p-8 sm:p-12 bg-gradient-to-br from-[#061e19] via-[#0b2b24] to-[#051119] border-b lg:border-b-0 lg:border-r border-slate-800/80 overflow-hidden">
        
        {/* Glow Effects */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-teal-500/15 rounded-full blur-3xl pointer-events-none"></div>

        {/* Brand Header */}
        <div className="relative z-10 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center shadow-lg shadow-emerald-500/10 group-hover:scale-105 transition-transform">
              <Leaf className="w-6 h-6 text-emerald-400" />
            </div>
            <div>
              <span className="text-xl font-bold text-white tracking-tight block">KarboNova</span>
              <span className="text-xs text-emerald-400 font-semibold tracking-wide block">MSME CARBON PLATFORM</span>
            </div>
          </Link>
          
          <div className="hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-xs text-emerald-300 font-medium shadow-inner">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            GHG Scope 1-3 Verified
          </div>
        </div>

        {/* Center Visual Banner */}
        <div className="relative z-10 my-auto py-8 max-w-xl mx-auto w-full">
          <div className="relative rounded-2xl overflow-hidden border border-emerald-500/20 shadow-2xl bg-slate-950/60 backdrop-blur-md p-2">
            <div className="relative h-56 sm:h-64 w-full rounded-xl overflow-hidden">
              <Image 
                src="/images/login_hero.png" 
                alt="KarboNova Dashboard Visual"
                fill
                className="object-cover opacity-90 hover:scale-105 transition-transform duration-700"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
              
              {/* Badge overlay */}
              <div className="absolute bottom-3 left-3 right-3 p-3.5 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-700/80 flex items-center justify-between shadow-lg">
                <div>
                  <div className="text-xs text-slate-400 font-medium">Acme Manufacturing • Passport #KRB-MH-000124</div>
                  <div className="text-sm font-bold text-white flex items-center gap-2 mt-0.5">
                    180 tCO₂e Saved <span className="text-xs font-semibold text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-500/30">68% Carbon Readiness</span>
                  </div>
                </div>
                <Award className="w-5 h-5 text-emerald-400 shrink-0" />
              </div>
            </div>
          </div>

          <div className="mt-8 space-y-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug">
              Automated Scope Emissions Accounting for Indian MSMEs
            </h2>
            <p className="text-sm sm:text-base text-slate-300/80 leading-relaxed">
              Calculate facility carbon footprints using India CEA grid standards (0.716 kg CO₂e/kWh), manage evidence documents, and access green finance.
            </p>
          </div>
        </div>

        {/* Bottom Trust Highlights */}
        <div className="relative z-10 pt-6 border-t border-slate-800/80 grid grid-cols-3 gap-4 text-left">
          <div>
            <div className="text-xl sm:text-2xl font-bold text-white">500+</div>
            <div className="text-xs text-slate-400 font-medium">MSMEs Active</div>
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-bold text-emerald-400">42,000t</div>
            <div className="text-xs text-slate-400 font-medium">CO₂e Tracked</div>
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-bold text-white">100%</div>
            <div className="text-xs text-slate-400 font-medium">CEA Verifiable</div>
          </div>
        </div>
      </div>

      {/* RIGHT PANEL - Clean High-Contrast Auth Form */}
      <div className="lg:w-1/2 flex items-center justify-center p-6 sm:p-12 md:p-16 bg-[#0a0f1d]">
        <div className="w-full max-w-md mx-auto space-y-7">
          
          {/* Header Title */}
          <div className="space-y-2">
            <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-tight">
              Sign in to KarboNova
            </h1>
            <p className="text-sm text-slate-400 leading-relaxed">
              Access your MSME Carbon Passport, evidence vault, and calculation engine.
            </p>
          </div>

          {/* Role Selector Tabs */}
          <div className="space-y-2">
            <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider block">
              Operating Role
            </label>
            <div className="grid grid-cols-3 gap-2 p-1.5 bg-slate-900/90 rounded-xl border border-slate-800">
              <button
                type="button"
                onClick={() => handleRoleChange('admin')}
                className={`flex flex-col items-center justify-center py-2.5 px-2 rounded-lg text-xs font-bold transition-all ${
                  role === 'admin' 
                    ? 'bg-emerald-600 text-white shadow-md shadow-emerald-900/30' 
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                <Building2 className="w-4 h-4 mb-1" />
                <span>Facility Admin</span>
              </button>
              
              <button
                type="button"
                onClick={() => handleRoleChange('auditor')}
                className={`flex flex-col items-center justify-center py-2.5 px-2 rounded-lg text-xs font-bold transition-all ${
                  role === 'auditor' 
                    ? 'bg-emerald-600 text-white shadow-md shadow-emerald-900/30' 
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                <CheckCircle2 className="w-4 h-4 mb-1" />
                <span>Green Auditor</span>
              </button>

              <button
                type="button"
                onClick={() => handleRoleChange('bank')}
                className={`flex flex-col items-center justify-center py-2.5 px-2 rounded-lg text-xs font-bold transition-all ${
                  role === 'bank' 
                    ? 'bg-emerald-600 text-white shadow-md shadow-emerald-900/30' 
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                <Briefcase className="w-4 h-4 mb-1" />
                <span>Bank / Financier</span>
              </button>
            </div>
          </div>

          {/* Quick Auto-fill Banner */}
          <button
            type="button"
            onClick={() => handleRoleChange(role)}
            className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs font-semibold hover:bg-emerald-900/40 transition-colors"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Auto-fill demo credentials for {role === 'admin' ? 'Facility Admin' : role === 'auditor' ? 'Certified Verifier' : 'Bank Financier'}</span>
          </button>

          {/* Error Message */}
          {errorMsg && (
            <div className="p-3.5 rounded-lg bg-rose-950/60 border border-rose-800 text-rose-300 text-xs font-medium">
              {errorMsg}
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1.5">
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider" htmlFor="email">
                Business Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                <input 
                  type="email" 
                  id="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@company.com"
                  required
                  className="w-full pl-10 pr-4 py-3 bg-slate-900 border border-slate-700/80 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors"
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
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                <input 
                  type={showPassword ? 'text' : 'password'} 
                  id="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  className="w-full pl-10 pr-10 py-3 bg-slate-900 border border-slate-700/80 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors"
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
                  className="w-4 h-4 rounded bg-slate-900 border-slate-700 text-emerald-500 focus:ring-emerald-500" 
                />
                <span className="text-xs text-slate-300">Remember this device</span>
              </label>
            </div>

            <button 
              type="submit"
              disabled={isLoading}
              className="w-full flex items-center justify-center gap-2 py-3.5 px-4 bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white rounded-xl font-bold text-sm transition-all shadow-lg shadow-emerald-950/40 disabled:opacity-70 disabled:cursor-not-allowed group cursor-pointer"
            >
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Signing in...</span>
                </div>
              ) : (
                <>
                  <span>Sign in to Dashboard</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </form>

          {/* SSO Divider */}
          <div className="relative my-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-800"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-[#0a0f1d] px-3 text-slate-500 font-medium">Or continue with</span>
            </div>
          </div>

          {/* SSO Button */}
          <button 
            type="button"
            onClick={() => {
              setIsLoading(true);
              setTimeout(() => router.push('/dashboard'), 500);
            }}
            className="w-full flex items-center justify-center gap-2.5 py-3 px-4 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-xl text-xs font-semibold text-slate-200 transition-colors cursor-pointer"
          >
            <Globe2 className="w-4 h-4 text-emerald-400" />
            <span>Sign in with Enterprise SSO</span>
          </button>

          {/* Footer Signup */}
          <p className="text-center text-xs text-slate-400 pt-2">
            Don't have an MSME account?{' '}
            <Link href="/dashboard/opportunity" className="text-emerald-400 font-semibold hover:underline">
              Run Free Assessment
            </Link>
          </p>

        </div>
      </div>
    </div>
  );
}
