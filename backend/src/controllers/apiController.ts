import { Request, Response } from 'express';
import { CarbonCalculatorService } from '../services/carbonCalculator';
import { pool } from '../config/db';

export class ApiController {
  public static async getDashboardSummary(req: Request, res: Response) {
    try {
      const result = await pool.query('SELECT * FROM dashboard_summary ORDER BY id DESC LIMIT 1');
      if (result.rows.length > 0) {
        const row = result.rows[0];
        return res.json({
          businessName: row.business_name,
          passportId: row.passport_id,
          estimatedEmissions: Number(row.estimated_emissions),
          potentialReduction: Number(row.potential_reduction),
          carbonReadiness: Number(row.carbon_readiness),
          activeProjectsCount: Number(row.active_projects_count),
          verificationStage: Number(row.verification_stage)
        });
      }
    } catch (err) {
      console.error('PostgreSQL query error (getDashboardSummary):', err);
    }

    // Fallback response
    return res.json({
      businessName: "Acme Manufacturing",
      passportId: "KRB-MH-000124",
      estimatedEmissions: 620,
      potentialReduction: 180,
      carbonReadiness: 68,
      activeProjectsCount: 2,
      verificationStage: 2
    });
  }

  public static async getProjects(req: Request, res: Response) {
    try {
      const result = await pool.query('SELECT * FROM projects ORDER BY created_at ASC');
      if (result.rows.length > 0) {
        const projects = result.rows.map(row => ({
          id: row.id,
          name: row.name,
          description: row.description,
          status: row.status,
          estimatedReduction: Number(row.estimated_reduction),
          evidenceDocsCount: row.evidence_docs_count,
          readiness: Number(row.readiness),
          lastUpdated: row.last_updated
        }));
        return res.json(projects);
      }
    } catch (err) {
      console.error('PostgreSQL query error (getProjects):', err);
    }

    return res.json([
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
    ]);
  }

  public static async getEvidence(req: Request, res: Response) {
    try {
      const result = await pool.query('SELECT * FROM evidence_documents ORDER BY created_at ASC');
      if (result.rows.length > 0) {
        const docs = result.rows.map(row => ({
          id: row.id,
          name: row.name,
          category: row.category,
          date: row.date,
          source: row.source,
          project: row.project,
          status: row.status,
          size: row.size
        }));
        return res.json(docs);
      }
    } catch (err) {
      console.error('PostgreSQL query error (getEvidence):', err);
    }

    return res.json([
      { id: '1', name: 'MSEB_Bill_Oct2023.pdf', category: 'Electricity', date: 'Oct 15, 2023', source: 'MSEB Portal', project: 'Baseline', status: 'Verified', size: '1.2 MB' },
      { id: '2', name: 'MSEB_Bill_Nov2023.pdf', category: 'Electricity', date: 'Nov 12, 2023', source: 'MSEB Portal', project: 'Baseline', status: 'Verified', size: '1.1 MB' },
      { id: '3', name: 'Solar_Installation_Invoice.pdf', category: 'Solar', date: 'Jan 05, 2024', source: 'Vendor', project: 'Solar & Energy Efficiency', status: 'Pending Review', size: '3.4 MB' },
      { id: '4', name: 'Energy_Audit_Report.pdf', category: 'Equipment', date: 'Feb 20, 2024', source: 'Third Party', project: 'Solar & Energy Efficiency', status: 'Verified', size: '5.8 MB' },
    ]);
  }

  public static async calculateOpportunity(req: Request, res: Response) {
    const result = CarbonCalculatorService.calculate(req.body);
    
    // Asynchronously log/store assessment in PostgreSQL
    try {
      await pool.query(`
        INSERT INTO opportunity_assessments 
        (business_name, state, industry, annual_electricity_spend, primary_power_source, has_solar, has_energy_efficient_motors, estimated_kwh, baseline_emissions, estimated_reduction, evidence_completeness, confidence)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)
      `, [
        req.body.businessName || 'Acme Manufacturing',
        req.body.state || 'Maharashtra',
        req.body.industry || 'Manufacturing',
        req.body.annualElectricitySpend || '',
        req.body.primaryPowerSource || '',
        req.body.hasSolar || '',
        req.body.hasEnergyEfficientMotors || '',
        result.estimatedKwh,
        result.baselineEmissions,
        result.estimatedReduction,
        result.carbonReadiness,
        result.confidence
      ]);
    } catch (err) {
      console.error('PostgreSQL save assessment error:', err);
    }

    return res.json(result);
  }
}
