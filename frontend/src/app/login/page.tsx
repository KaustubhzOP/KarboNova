import Link from 'next/link';
import { Leaf, ArrowRight } from 'lucide-react';

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-surface relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#191c1e 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
      
      <div className="z-10 w-full max-w-md p-8 bg-surface-container-lowest rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-outline-variant/30">
        <div className="flex justify-center mb-8">
          <div className="flex items-center gap-2">
            <Leaf className="h-8 w-8 text-secondary" />
            <span className="font-headline-md text-primary font-bold tracking-tight">KarboNova</span>
          </div>
        </div>
        
        <h1 className="text-headline-md font-bold text-primary text-center mb-2">Welcome back</h1>
        <p className="text-body-sm text-on-surface-variant text-center mb-8">Log in to your MSME Carbon Operating System.</p>
        
        <form className="space-y-5">
          <div>
            <label className="block text-label-md text-on-surface-variant mb-1.5" htmlFor="email">BUSINESS EMAIL</label>
            <input 
              type="email" 
              id="email" 
              defaultValue="admin@acmemanufacturing.in"
              className="w-full px-4 py-3 bg-surface-container-low border border-outline-variant/50 rounded-lg text-body-md text-on-surface focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all"
            />
          </div>
          <div>
            <label className="block text-label-md text-on-surface-variant mb-1.5" htmlFor="password">PASSWORD</label>
            <input 
              type="password" 
              id="password" 
              defaultValue="password123"
              className="w-full px-4 py-3 bg-surface-container-low border border-outline-variant/50 rounded-lg text-body-md text-on-surface focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all"
            />
          </div>
          
          <div className="flex items-center justify-between pt-2">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="w-4 h-4 text-secondary border-outline-variant rounded focus:ring-secondary" defaultChecked />
              <span className="text-body-sm text-on-surface-variant">Remember me</span>
            </label>
            <a href="#" className="text-body-sm text-secondary hover:text-secondary-container transition-colors font-medium">Forgot password?</a>
          </div>
          
          <Link href="/" className="flex items-center justify-center w-full py-3.5 mt-6 bg-secondary text-on-secondary rounded-lg font-bold text-body-md hover:bg-[#005049] transition-all shadow-[0_4px_14px_0_rgba(0,106,97,0.2)] hover:shadow-[0_6px_20px_rgba(0,106,97,0.23)] group">
            Sign In
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </form>
        
        <p className="text-center text-body-sm text-on-surface-variant mt-8">
          Don't have an account? <a href="#" className="text-secondary font-medium hover:underline">Sign up your business</a>
        </p>
      </div>
    </div>
  );
}
