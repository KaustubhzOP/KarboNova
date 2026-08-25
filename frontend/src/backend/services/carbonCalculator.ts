import { AssessmentInput, AssessmentResult } from '../models';

export class CarbonCalculatorService {
  /**
   * Calculates preliminary emission reduction and carbon readiness based on MSME parameters
   */
  public static calculateOpportunity(input: AssessmentInput): AssessmentResult {
    let reduction = 120; // baseline 120 tCO2e/yr

    if (input.annualElectricitySpend.includes('25,00,000') || input.annualElectricitySpend.includes('Above')) {
      reduction += 80;
    } else if (input.annualElectricitySpend.includes('12,00,000')) {
      reduction += 40;
    }

    if (input.hasSolar === 'Considering' || input.hasSolar === 'Installed') {
      reduction += 60;
    }

    if (input.hasEnergyEfficientMotors.includes('Partial') || input.hasEnergyEfficientMotors === 'Complete') {
      reduction += 40;
    }

    let evidenceCompleteness = 50;
    if (input.electricityBillsAvailable.includes('12 months')) {
      evidenceCompleteness += 30;
    }

    return {
      estimatedReduction: reduction,
      evidenceCompleteness,
      confidence: evidenceCompleteness >= 70 ? 'High' : 'Medium',
      recommendedProjects: [
        'Rooftop Solar PV Installation',
        'IE4 Super-Premium Efficiency Motors Upgrade',
        'Waste Heat Recovery Boiler System'
      ]
    };
  }
}
