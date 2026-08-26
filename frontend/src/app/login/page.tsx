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
  Globe2
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
    }, 900);
  };

  return (
    <div className="min-h-screen w-full flex bg-[#0f1715] text-on-surface overflow-hidden select-none font-sans">
      {/* LEFT PANEL - Hero Graphic & Trust Indicators */}
      <div className="hidden lg:flex lg:w-1/2 relative flex-col justify-between p-12 overflow-hidden border-r border-outline-variant/10 bg-gradient-to-br from-[#06241e] via-[#09332a] to-[#041915]">
        {/* Glowing Background Orbs */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-secondary/20 rounded-full blur-3xl pointer-events-none animate-pulse"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#006a61]/30 rounded-full blur-3xl pointer-events-none"></div>

        {/* Brand Header */}
        <div className="relative z-10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-secondary/20 border border-secondary/30 flex items-center justify-center shadow-lg shadow-secondary/10">
              <Leaf className="w-6 h-6 text-secondary" />
            </div>
            <div>
              <span className="text-title-lg font-bold text-white tracking-tight block">KarboNova</span>
              <span className="text-[10px] text-secondary font-semibold uppercase tracking-wider block">MSME Operating System</span>
            </div>
          </div>
          
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-container-lowest/10 border border-white/10 backdrop-blur-md text-xs text-emerald-300 font-medium">
            <ShieldCheck className="w-3.5 h-3.5 text-secondary" />
            GHG Scope 1-3 Compliant
          </div>
        </div>

        {/* Center Hero Card & Graphic */}
        <div className="relative z-10 my-auto py-8">
          <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black/40 backdrop-blur-md p-2 group hover:border-secondary/40 transition-all duration-500">
            <div className="relative h-64 sm:h-72 w-full rounded-xl overflow-hidden">
              <Image 
                src="/images/login_hero.png" 
                alt="KarboNova Dashboard Visual"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              
              {/* Floating Badge */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-surface-container-lowest/80 backdrop-blur-md border border-white/15 flex items-center justify-between">
                <div>
                  <div className="text-xs text-on-surface-variant font-medium">Acme Manufacturing • Passport #KRB-MH-000124</div>
                  <div className="text-body-md font-bold text-white flex items-center gap-2 mt-0.5">
                    180 tCO₂e Saved <span className="text-xs text-secondary font-bold bg-secondary/10 px-2 py-0.5 rounded-md border border-secondary/20">68% Carbon Readiness</span>
                  </div>
                </div>
                <Award className="w-6 h-6 text-secondary shrink-0" />
              </div>
            </div>
          </div>

          <div className="mt-8 space-y-3">
            <h2 className="text-headline-md font-extrabold text-white tracking-tight leading-tight">
              Empowering Indian MSMEs with Automated Carbon Accounting
            </h2>
            <p className="text-body-md text-emerald-100/70 max-w-lg">
              Calculate scope emissions with India CEA grid factors (0.716 kg CO₂e/kWh), manage compliance evidence, and unlock green financing.
            </p>
          </div>
        </div>

        {/* Footer Metrics */}
        <div className="relative z-10 pt-6 border-t border-white/10 grid grid-cols-3 gap-4 text-left">
          <div>
            <div className="text-headline-xs font-extrabold text-white">500+</div>
            <div className="text-xs text-emerald-200/60 font-medium">MSMEs Onboarded</div>
          </div>
          <div>
            <div className="text-headline-xs font-extrabold text-secondary">42,000t</div>
            <div className="text-xs text-emerald-200/60 font-medium">CO₂e Quantified</div>
          </div>
          <div>
            <div className="text-headline-xs font-extrabold text-white">100%</div>
            <div className="text-xs text-emerald-200/60 font-medium">CEA & GHG Verifiable</div>
          </div>
        </div>
      </div>

      {/* RIGHT PANEL - Authentication Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12 bg-[#0d1412]">
        <div className="w-full max-w-md space-y-8">
          
          {/* Mobile Header Logo */}
          <div className="flex lg:hidden items-center justify-center gap-2 mb-6">
            <Leaf className="w-7 h-7 text-secondary" />
            <span className="text-title-lg font-bold text-white">KarboNova</span>
          </div>

          {/* Form Title & Subtitle */}
          <div className="text-left space-y-2">
            <h1 className="text-headline-sm sm:text-headline-md font-bold text-white tracking-tight">
              Sign in to KarboNova
            </h1>
            <p className="text-body-sm text-on-surface-variant">
              Access your MSME Carbon Passport, evidence vault, and opportunity engine.
            </p>
          </div>

          {/* Role Selection Tabs */}
          <div className="space-y-2">
            <label className="text-label-sm font-bold text-on-surface-variant uppercase tracking-wider block">
              Select Operating Role
            </label>
            <div className="grid grid-cols-3 gap-2 p-1.5 bg-[#141f1c] rounded-xl border border-outline-variant/20">
              <button
                type="button"
                onClick={() => handleRoleChange('admin')}
                className={`flex flex-col items-center justify-center py-2.5 px-2 rounded-lg text-xs font-bold transition-all ${
                  role === 'admin' 
                    ? 'bg-secondary text-on-secondary shadow-md' 
                    : 'text-on-surface-variant hover:text-white hover:bg-white/5'
                }`}
              >
                <Building2 className="w-4 h-4 mb-1" />
                Facility Admin
              </button>
              
              <button
                type="button"
                onClick={() => handleRoleChange('auditor')}
                className={`flex flex-col items-center justify-center py-2.5 px-2 rounded-lg text-xs font-bold transition-all ${
                  role === 'auditor' 
                    ? 'bg-secondary text-on-secondary shadow-md' 
                    : 'text-on-surface-variant hover:text-white hover:bg-white/5'
                }`}
              >
                <CheckCircle2 className="w-4 h-4 mb-1" />
                Green Auditor
              </button>

              <button
                type="button"
                onClick={() => handleRoleChange('bank')}
                className={`flex flex-col items-center justify-center py-2.5 px-2 rounded-lg text-xs font-bold transition-all ${
                  role === 'bank' 
                    ? 'bg-secondary text-on-secondary shadow-md' 
                    : 'text-on-surface-variant hover:text-white hover:bg-white/5'
                }`}
              >
                <Briefcase className="w-4 h-4 mb-1" />
                Bank / Financier
              </button>
            </div>
          </div>

          {/* Auto-fill Quick Button */}
          <button
            type="button"
            onClick={() => handleRoleChange(role)}
            className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-secondary/10 border border-secondary/20 text-secondary text-xs font-bold hover:bg-secondary/20 transition-all cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-secondary" />
            Auto-fill {role === 'admin' ? 'Acme Manufacturing Admin' : role === 'auditor' ? 'Certified Verifier' : 'SIDBI Green Bank'} Credentials
          </button>

          {/* Error Message Alert */}
          {errorMsg && (
            <div className="p-3.5 rounded-lg bg-error/10 border border-error/30 text-error text-xs font-medium animate-in fade-in">
              {errorMsg}
            </div>
          )}

          {/* Authentication Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-label-md text-on-surface-variant mb-1.5 font-semibold" htmlFor="email">
                BUSINESS EMAIL ADDRESS
              </label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-on-surface-variant/60" />
                <input 
                  type="email" 
                  id="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@company.com"
                  required
                  className="w-full pl-11 pr-4 py-3 bg-[#15221e] border border-outline-variant/30 rounded-xl text-body-md text-white placeholder-on-surface-variant/40 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all"
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-1.5">
                <label className="block text-label-md text-on-surface-variant font-semibold" htmlFor="password">
                  PASSWORD
                </label>
                <a href="#" className="text-xs text-secondary font-semibold hover:underline">
                  Forgot password?
                </a>
              </div>
              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-on-surface-variant/60" />
                <input 
                  type={showPassword ? 'text' : 'password'} 
                  id="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  className="w-full pl-11 pr-11 py-3 bg-[#15221e] border border-outline-variant/30 rounded-xl text-body-md text-white placeholder-on-surface-variant/40 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-on-surface-variant/60 hover:text-white transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between pt-1">
              <label className="flex items-center gap-2 cursor-pointer">
                <input 
                  type="checkbox" 
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 rounded bg-[#15221e] border-outline-variant text-secondary focus:ring-secondary" 
                />
                <span className="text-body-sm text-on-surface-variant">Remember this device</span>
              </label>
            </div>

            <button 
              type="submit"
              disabled={isLoading}
              className="w-full flex items-center justify-center gap-2 py-3.5 px-4 bg-secondary text-on-secondary rounded-xl font-bold text-body-md hover:bg-[#005049] active:scale-[0.99] transition-all shadow-lg shadow-secondary/20 disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer group"
            >
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-on-secondary border-t-transparent rounded-full animate-spin"></div>
                  <span>Authenticating...</span>
                </div>
              ) : (
                <>
                  <span>Sign in to Dashboard</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </form>

          {/* Social / SSO Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-outline-variant/20"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-[#0d1412] px-3 text-on-surface-variant font-medium">Or continue with</span>
            </div>
          </div>

          {/* Single Sign On Button */}
          <button 
            type="button"
            onClick={() => {
              setIsLoading(true);
              setTimeout(() => router.push('/dashboard'), 600);
            }}
            className="w-full flex items-center justify-center gap-3 py-3 px-4 bg-[#141f1c] hover:bg-[#1a2925] border border-outline-variant/30 rounded-xl text-body-sm font-semibold text-white transition-all cursor-pointer"
          >
            <Globe2 className="w-4 h-4 text-emerald-400" />
            <span>Sign in with Enterprise SSO</span>
          </button>

          {/* Footer Signup Link */}
          <p className="text-center text-body-sm text-on-surface-variant pt-4">
            Don't have an MSME Account?{' '}
            <Link href="/dashboard/opportunity" className="text-secondary font-bold hover:underline">
              Run Free Opportunity Assessment
            </Link>
          </p>

        </div>
      </div>
    </div>
  );
}
