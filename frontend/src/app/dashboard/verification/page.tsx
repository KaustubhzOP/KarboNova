import { ShieldCheck, Info, FileText, Settings, Workflow, Network, Factory, CheckCircle2, FileSearch } from 'lucide-react';

export default function VerificationPage() {
  return (
    <div className="space-y-8 pb-12 max-w-5xl mx-auto">
      <div>
        <h1 className="text-headline-lg sm:text-display-md font-bold text-primary flex items-center gap-3">
          <ShieldCheck className="h-8 w-8 sm:h-10 sm:w-10 text-secondary shrink-0" />
          Verification Pathway
        </h1>
        <p className="text-body-md sm:text-body-lg text-on-surface-variant mt-2 max-w-3xl">
          Understand how KarboNova prepares your data for rigorous, independent environmental verification.
        </p>
      </div>

      <div className="bg-surface-container-lowest rounded-2xl shadow-sm border border-outline-variant/30 overflow-hidden">
        <div className="bg-primary px-6 sm:px-8 py-6 flex flex-col sm:flex-row items-start gap-4">
          <Info className="w-6 h-6 text-secondary shrink-0 mt-1" />
          <div>
            <h3 className="text-headline-sm font-bold text-on-primary">Regulatory Credibility</h3>
            <p className="text-body-sm text-primary-fixed-dim mt-2 leading-relaxed">
              Karbonova does not perform independent validation or verification, nor do we guarantee the issuance of carbon credits. Our platform serves as an operational system that prepares, structures, and coordinates the evidence required for appropriate external validation, verification, and registration processes by accredited third parties.
            </p>
          </div>
        </div>

        <div className="p-6 sm:p-12">
          <h2 className="text-headline-sm sm:text-headline-md font-bold text-primary text-center mb-12 sm:mb-16">The Carbon Value Workflow</h2>
          
          <div className="relative">
            {/* Connecting Line (Hidden on Mobile) */}
            <div className="absolute top-1/2 left-8 right-8 h-1 bg-surface-container-high -translate-y-1/2 hidden md:block z-0"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 relative z-10">
              {/* Step 1 */}
              <div className="bg-surface-container-lowest border-2 border-primary/20 rounded-xl p-6 relative group hover:border-secondary transition-colors shadow-sm">
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold text-headline-sm shadow-md group-hover:bg-secondary transition-colors">
                  1
                </div>
                <div className="text-center mt-6 mb-6">
                  <h3 className="text-headline-sm font-bold text-primary">KarboNova Platform</h3>
                  <div className="text-label-md text-on-surface-variant uppercase tracking-wider mt-1">Data & Preparation</div>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Factory className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    <span className="text-body-sm text-primary font-medium">Data Collection & Structuring</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FileText className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    <span className="text-body-sm text-primary font-medium">Evidence Organization</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Settings className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    <span className="text-body-sm text-primary font-medium">Project Documentation Prep</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Workflow className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    <span className="text-body-sm text-primary font-medium">Workflow Coordination</span>
                  </li>
                </ul>
              </div>

              {/* Step 2 */}
              <div className="bg-surface-container-low border border-outline-variant/30 rounded-xl p-6 relative opacity-80 hover:opacity-100 transition-opacity border-dashed">
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-surface-container-high text-on-surface-variant flex items-center justify-center font-bold text-headline-sm border border-outline-variant/50">
                  2
                </div>
                <div className="text-center mt-6 mb-6">
                  <h3 className="text-headline-sm font-bold text-primary">Accredited Verification</h3>
                  <div className="text-label-md text-on-surface-variant uppercase tracking-wider mt-1">Independent Audit</div>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <FileSearch className="w-5 h-5 text-outline shrink-0 mt-0.5" />
                    <span className="text-body-sm text-on-surface-variant font-medium">Independent Validation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ShieldCheck className="w-5 h-5 text-outline shrink-0 mt-0.5" />
                    <span className="text-body-sm text-on-surface-variant font-medium">Methodology Verification</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-outline shrink-0 mt-0.5" />
                    <span className="text-body-sm text-on-surface-variant font-medium">Site Audits & Confirmation</span>
                  </li>
                </ul>
              </div>

              {/* Step 3 */}
              <div className="bg-surface-container-low border border-outline-variant/30 rounded-xl p-6 relative opacity-80 hover:opacity-100 transition-opacity border-dashed">
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-surface-container-high text-on-surface-variant flex items-center justify-center font-bold text-headline-sm border border-outline-variant/50">
                  3
                </div>
                <div className="text-center mt-6 mb-6">
                  <h3 className="text-headline-sm font-bold text-primary">Registry & Market</h3>
                  <div className="text-label-md text-on-surface-variant uppercase tracking-wider mt-1">Issuance Process</div>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Network className="w-5 h-5 text-outline shrink-0 mt-0.5" />
                    <span className="text-body-sm text-on-surface-variant font-medium">Applicable Registry Process</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ShieldCheck className="w-5 h-5 text-outline shrink-0 mt-0.5" />
                    <span className="text-body-sm text-on-surface-variant font-medium">Asset Issuance</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
