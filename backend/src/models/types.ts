export interface UserProfile {
  id: string;
  businessName: string;
  regNumber: string;
  industry: string;
  location: string;
  plan: 'Free' | 'Premium';
}

export interface DashboardSummary {
  businessName: string;
  passportId: string;
  estimatedEmissions: number;
  potentialReduction: number;
  carbonReadiness: number;
  activeProjectsCount: number;
  verificationStage: number;
}

export interface ProjectEntity {
  id: string;
  name: string;
  description: string;
  status: 'Documentation' | 'Verification' | 'Completed' | 'Pending Review';
  estimatedReduction: number;
  evidenceDocsCount: string;
  readiness: number;
  lastUpdated: string;
}

export interface EvidenceFile {
  id: string;
  name: string;
  category: string;
  date: string;
  source: string;
  project: string;
  status: string;
  size: string;
}

export interface AssessmentRequest {
  businessName: string;
  state: string;
  industry: string;
  annualElectricitySpend: string;
  primaryPowerSource: string;
  hasSolar: string;
  hasEnergyEfficientMotors: string;
  electricityBillsAvailable: string;
}
