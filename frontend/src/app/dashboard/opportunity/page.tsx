'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { 
  Building2, 
  Zap, 
  Settings, 
  FileCheck, 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft, 
  AlertTriangle, 
  TrendingDown, 
  Info,
  RotateCcw,
  PlusCircle
} from 'lucide-react';

export default function OpportunityAssessmentPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    businessName: 'Acme Manufacturing',
    state: 'Maharashtra',
    industry: 'Manufacturing & Engineering',
    annualElectricitySpend: '₹12,00,000 - ₹25,00,000',
    primaryPowerSource: 'Grid + Diesel Generator',
    hasSolar: 'Considering',
    hasEnergyEfficientMotors: 'Partial (Some IE3/IE4 motors)',
    wasteHeatRecovery: 'No',
    electricityBillsAvailable: 'Yes (Last 12 months)',
    equipmentInvoicesAvailable: 'Partial',
  });

  const steps = [
    { num: 1, title: 'Business Profile', icon: Building2 },
    { num: 2, title: 'Energy Profile', icon: Zap },
    { num: 3, title: 'Current Activities', icon: Settings },
    { num: 4, title: 'Evidence Availability', icon: FileCheck },
    { num: 5, title: 'Assessment Result', icon: CheckCircle2 },
  ];

  const handleNext = () => {
    if (currentStep < 5) setCurrentStep(currentStep + 1);
  };

  const handlePrev = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  return (
    <div className="space-y-8 pb-12 max-w-4xl mx-auto">
      <div>
        <h1 className="text-display-md font-bold text-primary">Carbon Opportunity Assessment</h1>
        <p className="text-body-lg text-on-surface-variant mt-2">Evaluate your facility's decarbonization potential and carbon readiness.</p>
      </div>

      {/* Stepper Progress */}
      <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/30 shadow-sm">
        <div className="flex justify-between items-center relative">
          <div className="absolute top-5 left-8 right-8 h-0.5 bg-surface-container-high z-0"></div>
          <div 
            className="absolute top-5 left-8 h-0.5 bg-secondary z-0 transition-all duration-300"
            style={{ width: `${((currentStep - 1) / 4) * 85}%` }}
          ></div>

          {steps.map((step) => {
            const Icon = step.icon;
            const isCompleted = currentStep > step.num;
            const isCurrent = currentStep === step.num;

            return (
              <div key={step.num} className="flex flex-col items-center gap-2 relative z-10">
                <button 
                  onClick={() => setCurrentStep(step.num)}
                  className={`w-10 h-10 rounded-full flex items-center justify-center border-2 font-bold text-body-md transition-all cursor-pointer ${
                    isCompleted ? 'bg-secondary text-on-secondary border-secondary' :
                    isCurrent ? 'bg-surface-container-lowest text-secondary border-secondary ring-4 ring-secondary/15' :
                    'bg-surface-container-lowest text-outline-variant border-surface-container-high'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                </button>
                <span className={`text-label-md hidden sm:block ${isCurrent ? 'text-primary font-bold' : 'text-on-surface-variant'}`}>
                  {step.title}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Step Content Card */}
      <div className="bg-surface-container-lowest rounded-2xl border border-outline-variant/30 shadow-sm p-8">
        {currentStep === 1 && (
          <div className="space-y-6">
            <h2 className="text-headline-md font-bold text-primary">Step 1: Business Profile</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-label-md text-on-surface-variant mb-2">BUSINESS NAME</label>
                <input 
                  type="text" 
                  value={formData.businessName}
                  onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                  className="w-full px-4 py-2.5 bg-surface-container-low border border-outline-variant/50 rounded-lg text-body-sm text-on-surface focus:outline-none focus:border-secondary" 
                />
              </div>
              <div>
                <label className="block text-label-md text-on-surface-variant mb-2">STATE / LOCATION</label>
                <select 
                  value={formData.state}
                  onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                  className="w-full px-4 py-2.5 bg-surface-container-low border border-outline-variant/50 rounded-lg text-body-sm text-on-surface focus:outline-none focus:border-secondary"
                >
                  <option>Maharashtra</option>
                  <option>Gujarat</option>
                  <option>Tamil Nadu</option>
                  <option>Karnataka</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="block text-label-md text-on-surface-variant mb-2">PRIMARY INDUSTRY SECTOR</label>
                <select 
                  value={formData.industry}
                  onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                  className="w-full px-4 py-2.5 bg-surface-container-low border border-outline-variant/50 rounded-lg text-body-sm text-on-surface focus:outline-none focus:border-secondary"
                >
                  <option>Manufacturing & Engineering</option>
                  <option>Textiles & Apparel</option>
                  <option>Auto Components</option>
                  <option>Chemicals & Plastics</option>
                </select>
              </div>
            </div>
          </div>
        )}

        {currentStep === 2 && (
          <div className="space-y-6">
            <h2 className="text-headline-md font-bold text-primary">Step 2: Energy Profile</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-label-md text-on-surface-variant mb-2">ESTIMATED ANNUAL ELECTRICITY SPEND</label>
                <select 
                  value={formData.annualElectricitySpend}
                  onChange={(e) => setFormData({ ...formData, annualElectricitySpend: e.target.value })}
                  className="w-full px-4 py-2.5 bg-surface-container-low border border-outline-variant/50 rounded-lg text-body-sm text-on-surface focus:outline-none focus:border-secondary"
                >
                  <option>₹5,00,000 - ₹12,00,000</option>
                  <option>₹12,00,000 - ₹25,00,000</option>
                  <option>₹25,00,000 - ₹50,00,000</option>
                  <option>Above ₹50,00,000</option>
                </select>
              </div>
              <div>
                <label className="block text-label-md text-on-surface-variant mb-2">PRIMARY POWER SOURCE</label>
                <select 
                  value={formData.primaryPowerSource}
                  onChange={(e) => setFormData({ ...formData, primaryPowerSource: e.target.value })}
                  className="w-full px-4 py-2.5 bg-surface-container-low border border-outline-variant/50 rounded-lg text-body-sm text-on-surface focus:outline-none focus:border-secondary"
                >
                  <option>Grid Power Only</option>
                  <option>Grid + Diesel Generator</option>
                  <option>Grid + Existing Solar</option>
                </select>
              </div>
            </div>
          </div>
        )}

        {currentStep === 3 && (
          <div className="space-y-6">
            <h2 className="text-headline-md font-bold text-primary">Step 3: Current Decarbonization Activities</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-label-md text-on-surface-variant mb-2">ROOFTOP SOLAR PV STATUS</label>
                <div className="grid grid-cols-3 gap-4">
                  {['Installed', 'Considering', 'Not Feasible'].map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => setFormData({ ...formData, hasSolar: option })}
                      className={`p-3 rounded-lg border text-body-sm font-bold transition-all ${
                        formData.hasSolar === option 
                          ? 'border-secondary bg-secondary/10 text-secondary' 
                          : 'border-outline-variant/50 hover:border-outline-variant text-primary'
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-label-md text-on-surface-variant mb-2">HIGH EFFICIENCY MOTORS (IE3/IE4)</label>
                <div className="grid grid-cols-3 gap-4">
                  {['Complete', 'Partial', 'None'].map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => setFormData({ ...formData, hasEnergyEfficientMotors: option })}
                      className={`p-3 rounded-lg border text-body-sm font-bold transition-all ${
                        formData.hasEnergyEfficientMotors === option || (option === 'Partial' && formData.hasEnergyEfficientMotors.startsWith('Partial'))
                          ? 'border-secondary bg-secondary/10 text-secondary' 
                          : 'border-outline-variant/50 hover:border-outline-variant text-primary'
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {currentStep === 4 && (
          <div className="space-y-6">
            <h2 className="text-headline-md font-bold text-primary">Step 4: Evidence Availability</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-label-md text-on-surface-variant mb-2">ELECTRICITY BILL RECORDS (PAST 12 MONTHS)</label>
                <div className="grid grid-cols-2 gap-4">
                  {['Yes (Last 12 months)', 'Partial (3-6 months)'].map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => setFormData({ ...formData, electricityBillsAvailable: option })}
                      className={`p-3 rounded-lg border text-body-sm font-bold transition-all ${
                        formData.electricityBillsAvailable === option 
                          ? 'border-secondary bg-secondary/10 text-secondary' 
                          : 'border-outline-variant/50 hover:border-outline-variant text-primary'
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {currentStep === 5 && (
          <div className="space-y-6">
            <div className="text-center pb-6 border-b border-outline-variant/20">
              <div className="w-16 h-16 bg-secondary/10 text-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h2 className="text-headline-lg font-bold text-primary">Carbon Opportunity Result</h2>
              <p className="text-body-md text-on-surface-variant mt-1">Based on your facility parameters in {formData.state}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-surface-container-low p-6 rounded-xl border border-outline-variant/20 text-center">
                <div className="text-label-md text-on-surface-variant uppercase tracking-wider mb-1">Estimated Annual Reduction</div>
                <div className="text-display-md font-bold text-secondary flex items-center justify-center gap-1">
                  <TrendingDown className="w-7 h-7" /> 180 <span className="text-body-md font-normal text-on-surface-variant">tCO₂e/yr</span>
                </div>
              </div>
              <div className="bg-surface-container-low p-6 rounded-xl border border-outline-variant/20 text-center">
                <div className="text-label-md text-on-surface-variant uppercase tracking-wider mb-1">Evidence Completeness</div>
                <div className="text-display-md font-bold text-primary">60%</div>
              </div>
              <div className="bg-surface-container-low p-6 rounded-xl border border-outline-variant/20 text-center">
                <div className="text-label-md text-on-surface-variant uppercase tracking-wider mb-1">Assessment Confidence</div>
                <div className="text-display-md font-bold text-primary">High</div>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="bg-primary/5 p-4 rounded-lg flex items-start gap-3 border border-primary/10">
              <Info className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <p className="text-xs text-primary leading-relaxed">
                <strong>Disclaimer:</strong> This assessment provides preliminary estimates based on benchmark methodologies. It does not guarantee third-party verification or carbon credit issuance.
              </p>
            </div>
          </div>
        )}

        {/* Wizard Controls */}
        <div className="flex justify-between items-center pt-8 mt-8 border-t border-outline-variant/20">
          <button 
            onClick={handlePrev}
            disabled={currentStep === 1}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-lg font-bold text-body-sm border transition-colors ${
              currentStep === 1 
                ? 'opacity-40 border-outline-variant text-outline cursor-not-allowed' 
                : 'border-outline-variant text-primary hover:bg-surface-container'
            }`}
          >
            <ArrowLeft className="w-4 h-4" /> Previous
          </button>

          {currentStep < 5 ? (
            <button 
              onClick={handleNext}
              className="flex items-center gap-2 px-6 py-2.5 bg-secondary text-on-secondary rounded-lg font-bold text-body-sm hover:bg-[#005049] transition-all shadow-sm"
            >
              Continue <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <div className="flex gap-3">
              <button 
                onClick={() => setCurrentStep(1)}
                className="flex items-center gap-2 px-4 py-2.5 border border-outline-variant text-primary rounded-lg font-bold text-body-sm hover:bg-surface-container"
              >
                <RotateCcw className="w-4 h-4" /> Restart Check
              </button>
              <button 
                onClick={() => router.push('/dashboard/projects/solar-energy-efficiency')}
                className="flex items-center gap-2 px-6 py-2.5 bg-secondary text-on-secondary rounded-lg font-bold text-body-sm hover:bg-[#005049] transition-all shadow-sm"
              >
                Create Project Workspace <PlusCircle className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
