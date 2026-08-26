export interface User {
  id: string;
  name: string;
  email: string;
  businessName: string;
  regNumber: string;
  industry: string;
  plan: 'Free' | 'Premium';
}

export interface CarbonSummary {
  businessName: string;
  passportId: string;
  estimatedEmissions: number; // tCO2e/yr
  potentialReduction: number; // tCO2e/yr
  carbonReadiness: number; // percentage
  activeProjectsCount: number;
  verificationStage: number;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  status: 'Documentation' | 'Verification' | 'Completed' | 'Pending Review';
  estimatedReduction: number; // tCO2e/yr
  evidenceDocsCount: string;
  readiness: number; // percentage
  lastUpdated: string;
}

export interface EvidenceDocument {
  id: string;
  name: string;
  category: 'Electricity' | 'Fuel' | 'Solar' | 'Equipment' | 'Waste' | 'Invoices' | 'Meters' | 'Production';
  date: string;
  source: string;
  project: string;
  status: 'Verified' | 'Pending Review';
  size: string;
  fileData?: string;
  fileType?: string;
}

export interface AssessmentInput {
  businessName: string;
  state: string;
  industry: string;
  annualElectricitySpend: string;
  primaryPowerSource: string;
  hasSolar: string;
  hasEnergyEfficientMotors: string;
  electricityBillsAvailable: string;
  equipmentInvoicesAvailable?: string;
}

export interface AssessmentResult {
  baselineEmissions: number;
  estimatedKwh: number;
  estimatedReduction: number;
  solarReduction: number;
  motorReduction: number;
  dgReduction: number;
  evidenceCompleteness: number;
  confidence: 'High' | 'Medium' | 'Low';
  recommendedProjects: string[];
}
