import { AssessmentRequest } from '../models/types';

export class CarbonCalculatorService {
  public static calculate(input: AssessmentRequest) {
    let reduction = 120; // baseline 120 tCO2e/yr

    if (input.annualElectricitySpend?.includes('25,00,000') || input.annualElectricitySpend?.includes('Above')) {
      reduction += 80;
    } else if (input.annualElectricitySpend?.includes('12,00,000')) {
      reduction += 40;
    }

    if (input.hasSolar === 'Considering' || input.hasSolar === 'Installed') {
      reduction += 60;
    }

    if (input.hasEnergyEfficientMotors?.includes('Partial') || input.hasEnergyEfficientMotors === 'Complete') {
      reduction += 40;
    }

    let readiness = 50;
    if (input.electricityBillsAvailable?.includes('12 months')) {
      readiness += 30;
    }

    return {
      estimatedReduction: reduction,
      carbonReadiness: readiness,
      confidence: readiness >= 70 ? 'High' : 'Medium',
      recommendedMethodology: 'ACM0002 / AMS-I.D. Grid-connected renewable electricity generation',
      suggestedProjects: [
        'Rooftop Solar PV Installation',
        'IE4 Super-Premium Efficiency Motors Upgrade',
        'Waste Heat Recovery System'
      ]
    };
  }
}
