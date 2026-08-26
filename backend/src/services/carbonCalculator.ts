import { AssessmentRequest } from '../models/types';

export class CarbonCalculatorService {
  /**
   * Calculates preliminary emission reduction and carbon readiness based on standard GHG & CEA India Grid methodology.
   */
  public static calculate(input: AssessmentRequest) {
    let spendInr = 1850000;
    const spend = input.annualElectricitySpend || '';

    if (spend.includes('5,00,000') && spend.includes('12,00,000')) {
      spendInr = 850000;
    } else if (spend.includes('12,00,000') && spend.includes('25,00,000')) {
      spendInr = 1850000;
    } else if (spend.includes('25,00,000') && spend.includes('50,00,000')) {
      spendInr = 3750000;
    } else if (spend.includes('50,00,000')) {
      spendInr = 6500000;
    }

    const averageTariffPerKwh = 8.0;
    const estimatedKwh = spendInr / averageTariffPerKwh;
    const gridEmissionFactorTonsPerKwh = 0.000716; // CEA India: 0.716 kg CO2e / kWh
    const baselineEmissions = estimatedKwh * gridEmissionFactorTonsPerKwh;

    let solarFraction = input.hasSolar === 'Installed' ? 0.10 : 0.35;
    const solarReduction = baselineEmissions * solarFraction;

    let motorFraction = 0.0;
    if (input.hasEnergyEfficientMotors === 'None' || input.hasEnergyEfficientMotors?.includes('None')) {
      motorFraction = 0.60 * 0.15;
    } else if (input.hasEnergyEfficientMotors?.includes('Partial')) {
      motorFraction = 0.60 * 0.08;
    }
    const motorReduction = baselineEmissions * motorFraction;

    let dgFraction = input.primaryPowerSource?.includes('Diesel Generator') ? 0.05 : 0.0;
    const dgReduction = baselineEmissions * dgFraction;

    const estimatedReduction = Math.round(solarReduction + motorReduction + dgReduction);

    let readiness = 20;
    if (input.electricityBillsAvailable?.includes('12 months')) readiness += 40;
    else if (input.electricityBillsAvailable?.includes('3-6 months')) readiness += 20;

    readiness += (input.hasSolar === 'Installed' || input.hasSolar === 'Considering') ? 20 : 10;
    readiness += 20; // Default document completeness

    return {
      baselineEmissions: Math.round(baselineEmissions),
      estimatedKwh: Math.round(estimatedKwh),
      estimatedReduction,
      solarReduction: Math.round(solarReduction),
      motorReduction: Math.round(motorReduction),
      dgReduction: Math.round(dgReduction),
      carbonReadiness: readiness,
      confidence: readiness >= 70 ? 'High' : readiness >= 45 ? 'Medium' : 'Low',
      recommendedMethodology: 'ACM0002 / AMS-I.D. Grid-connected renewable electricity generation',
      suggestedProjects: [
        'Rooftop Solar PV Installation',
        'IE4 Super-Premium Efficiency Motors Upgrade',
        'Waste Heat Recovery System'
      ]
    };
  }
}
