import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="bg-background text-on-surface antialiased font-body-md overflow-x-hidden min-h-screen flex flex-col">
      {/* TopAppBar */}
      <header className="flex justify-between items-center h-16 px-6 lg:px-12 sticky top-0 z-40 bg-surface/80 backdrop-blur-md border-b border-outline-variant/30 transition-all duration-200">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>eco</span>
          <span className="font-headline-sm text-headline-sm font-bold text-primary">KarboNova</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a className="text-on-surface-variant hover:text-secondary transition-colors text-body-md" href="#features">Features</a>
          <a className="text-on-surface-variant hover:text-secondary transition-colors text-body-md" href="#solutions">Solutions</a>
          <a className="text-on-surface-variant hover:text-secondary transition-colors text-body-md" href="#resources">Resources</a>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/login" className="hidden md:flex items-center justify-center px-4 py-2 border border-primary-container text-primary-container rounded font-label-md text-label-md hover:bg-surface-container-high transition-colors">
            Sign In
          </Link>
          <Link href="/dashboard" className="flex items-center justify-center px-4 py-2 bg-secondary text-on-secondary rounded font-label-md text-label-md hover:bg-secondary-container hover:text-on-secondary-container transition-colors shadow-sm">
            Get Started
          </Link>
        </div>
      </header>

      {/* Main Content Canvas */}
      <main className="w-full flex-1">
        {/* Hero Section */}
        <section className="relative pt-20 pb-16 px-6 lg:px-20 bg-surface min-h-[85vh] flex flex-col justify-center items-center overflow-hidden border-b border-outline-variant/20">
          <div className="max-w-[1000px] mx-auto text-center z-10 relative">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-surface-container-high rounded-full mb-6 border border-outline-variant/50">
              <span className="w-2 h-2 rounded-full bg-secondary"></span>
              <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Climate-Tech OS for Indian MSMEs</span>
            </div>
            <h1 className="font-display-lg text-display-lg text-primary mb-6 leading-tight">
              Turn your sustainability efforts into <br className="hidden md:block"/>
              <span className="text-secondary relative whitespace-nowrap">
                measurable environmental value.
              </span>
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl mx-auto mb-10">
              KarboNova helps MSMEs measure carbon impact, organize evidence, identify potential carbon projects, and navigate the complex carbon-market ecosystem with enterprise-grade precision.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/dashboard/opportunity" className="w-full sm:w-auto px-8 py-4 bg-secondary text-on-secondary rounded-lg font-body-md font-bold hover:bg-[#005049] transition-all shadow-[0_4px_14px_0_rgba(0,106,97,0.2)] hover:shadow-[0_6px_20px_rgba(0,106,97,0.23)] flex items-center justify-center gap-2">
                Check My Carbon Opportunity
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/dashboard" className="w-full sm:w-auto px-8 py-4 border border-outline-variant bg-surface text-primary rounded-lg font-body-md font-bold hover:bg-surface-container-high transition-colors flex items-center justify-center gap-2">
                Explore KarboNova
              </Link>
            </div>
          </div>
        </section>

        {/* Value Proposition / Bento Grid Section */}
        <section id="features" className="py-20 px-6 lg:px-20 bg-surface relative z-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-display-md text-display-md text-primary mb-4">A definitive pathway from data to value.</h2>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">
                We transform fragmented operational data into structured evidence, ready for the rigorous demands of environmental verification.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Benefit 1: Measure */}
              <div className="bg-surface-container-lowest border border-outline-variant/50 rounded-xl p-8 hover:shadow-md transition-all duration-300 flex flex-col group h-full">
                <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center mb-6 group-hover:bg-secondary/10 transition-colors">
                  <span className="material-symbols-outlined text-primary group-hover:text-secondary transition-colors text-[28px]">analytics</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-primary mb-3">1. Measure</h3>
                <p className="font-body-md text-body-md text-on-surface-variant flex-grow">
                  Understand your operational carbon footprint with precision. Input utility data, manufacturing inputs, and logistics records to establish a robust environmental baseline.
                </p>
              </div>
              {/* Benefit 2: Prepare */}
              <div className="bg-surface-container-lowest border border-outline-variant/50 rounded-xl p-8 hover:shadow-md transition-all duration-300 flex flex-col group h-full md:-translate-y-4">
                <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center mb-6 group-hover:bg-secondary/10 transition-colors">
                  <span className="material-symbols-outlined text-primary group-hover:text-secondary transition-colors text-[28px]">folder_shared</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-primary mb-3">2. Prepare</h3>
                <p className="font-body-md text-body-md text-on-surface-variant flex-grow">
                  Organize evidence and project documentation in a secure vault. Structure raw data into compliance-ready formats expected by global verification bodies.
                </p>
              </div>
              {/* Benefit 3: Connect */}
              <div className="bg-surface-container-lowest border border-outline-variant/50 rounded-xl p-8 hover:shadow-md transition-all duration-300 flex flex-col group h-full">
                <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center mb-6 group-hover:bg-secondary/10 transition-colors">
                  <span className="material-symbols-outlined text-primary group-hover:text-secondary transition-colors text-[28px]">account_tree</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-primary mb-3">3. Connect</h3>
                <p className="font-body-md text-body-md text-on-surface-variant flex-grow">
                  Move eligible projects toward the appropriate verification and market pathways. Identify opportunities within the broader carbon ecosystem seamlessly.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer Minimal */}
      <footer className="bg-surface-container-low border-t border-outline-variant/50 py-6 px-6 lg:px-12 mt-auto">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-on-surface-variant text-sm">eco</span>
            <span className="font-label-md text-label-md text-on-surface-variant">© 2024 KarboNova. All rights reserved.</span>
          </div>
          <div className="flex gap-6">
            <a className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors" href="#">Privacy</a>
            <a className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors" href="#">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
