import { CarbonSummary, Project, EvidenceDocument } from '../models';

export class DashboardController {
  public static async getSummary(): Promise<CarbonSummary> {
    return {
      businessName: "Acme Manufacturing",
      passportId: "KRB-MH-000124",
      estimatedEmissions: 620,
      potentialReduction: 180,
      carbonReadiness: 68,
      activeProjectsCount: 2,
      verificationStage: 2
    };
  }

  public static async getProjects(): Promise<Project[]> {
    return [
      {
        id: "solar-energy-efficiency",
        name: "Solar & Energy Efficiency",
        description: "Rooftop solar PV installation combined with IE4 motor upgrades across primary manufacturing line.",
        status: "Documentation",
        estimatedReduction: 180,
        evidenceDocsCount: "8/10",
        readiness: 68,
        lastUpdated: "2 days ago"
      },
      {
        id: "waste-heat-recovery",
        name: "Waste Heat Recovery",
        description: "Implementation of heat exchangers on primary boiler exhaust to pre-heat boiler feedwater.",
        status: "Verification",
        estimatedReduction: 245,
        evidenceDocsCount: "12/12",
        readiness: 95,
        lastUpdated: "1 week ago"
      }
    ];
  }

  public static async getEvidenceList(): Promise<EvidenceDocument[]> {
    return [
      { id: '1', name: 'MSEB_Bill_Oct2023.pdf', category: 'Electricity', date: 'Oct 15, 2023', source: 'MSEB Portal', project: 'Baseline', status: 'Verified', size: '1.2 MB' },
      { id: '2', name: 'MSEB_Bill_Nov2023.pdf', category: 'Electricity', date: 'Nov 12, 2023', source: 'MSEB Portal', project: 'Baseline', status: 'Verified', size: '1.1 MB' },
      { id: '3', name: 'Solar_Installation_Invoice.pdf', category: 'Solar', date: 'Jan 05, 2024', source: 'Vendor', project: 'Solar & Energy Efficiency', status: 'Pending Review', size: '3.4 MB' },
      { id: '4', name: 'Energy_Audit_Report.pdf', category: 'Equipment', date: 'Feb 20, 2024', source: 'Third Party', project: 'Solar & Energy Efficiency', status: 'Verified', size: '5.8 MB' },
    ];
  }
}
