import { AssessmentInput, AssessmentResult } from '../models';

export class CarbonCalculatorService {
  /**
   * Calculates preliminary emission reduction and carbon readiness based on standard GHG & CEA India Grid methodology.
   * 
   * Methodology:
   * 1. Estimated kWh = Spend / Tariff Rate (Average ₹8.00/kWh)
   * 2. Baseline Emissions (tCO2e/yr) = kWh * Grid Emission Factor (0.716 kg CO2/kWh = 0.000716 tCO2e/kWh)
   * 3. Rooftop Solar Potential = 35% grid displacement for non-solar / considering, 10% expansion for installed
   * 4. Energy Efficient Motors (IE3/IE4) = 15% efficiency savings on 60% motor load = 9% of baseline for 'None', 4.8% for 'Partial'
   * 5. Diesel Generator Displacement = 5% efficiency & heat recovery savings for 'Grid + Diesel Generator'
   */
  public static calculateOpportunity(input: AssessmentInput): AssessmentResult {
    // 1. Determine annual electricity spend midpoint (in INR)
    let spendInr = 1850000; // default ₹18,50,000 (midpoint of 12L - 25L)
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

    // 2. Average industrial electricity tariff rate in India
    const averageTariffPerKwh = 8.0; // ₹8 / kWh
    const estimatedKwh = spendInr / averageTariffPerKwh;

    // 3. Central Electricity Authority (CEA) India baseline grid emission factor
    const gridEmissionFactorTonsPerKwh = 0.000716; // 0.716 kg CO2e/kWh = 0.000716 tCO2e/kWh
    const baselineEmissions = estimatedKwh * gridEmissionFactorTonsPerKwh;

    // 4. Calculate Intervention Savings
    // A. Solar PV potential
    let solarFraction = 0.35; // 35% potential reduction if considering or not yet installed
    if (input.hasSolar === 'Installed') {
      solarFraction = 0.10; // 10% incremental expansion potential
    }
    const solarReduction = baselineEmissions * solarFraction;

    // B. High Efficiency Motor retrofit savings (Motors = ~60% of plant power load, IE3/IE4 saves ~15%)
    let motorFraction = 0.0;
    if (input.hasEnergyEfficientMotors === 'None' || input.hasEnergyEfficientMotors?.includes('None')) {
      motorFraction = 0.60 * 0.15; // 9.0% overall baseline saving
    } else if (input.hasEnergyEfficientMotors?.includes('Partial')) {
      motorFraction = 0.60 * 0.08; // 4.8% overall baseline saving
    }
    const motorReduction = baselineEmissions * motorFraction;

    // C. Diesel Generator & Energy Management savings
    let dgFraction = 0.0;
    if (input.primaryPowerSource?.includes('Diesel Generator')) {
      dgFraction = 0.05; // 5% baseline saving by reducing DG runtime & heat recovery
    }
    const dgReduction = baselineEmissions * dgFraction;

    const estimatedReduction = Math.round(solarReduction + motorReduction + dgReduction);

    // 5. Evidence Completeness (%) & Confidence Calculation
    let evidenceCompleteness = 20; // Base baseline score
    if (input.electricityBillsAvailable?.includes('12 months')) {
      evidenceCompleteness += 40;
    } else if (input.electricityBillsAvailable?.includes('3-6 months')) {
      evidenceCompleteness += 20;
    }

    if (input.equipmentInvoicesAvailable?.includes('Yes') || input.equipmentInvoicesAvailable?.includes('Partial')) {
      evidenceCompleteness += 20;
    } else {
      evidenceCompleteness += 10;
    }

    if (input.hasSolar === 'Installed' || input.hasSolar === 'Considering') {
      evidenceCompleteness += 10;
    }

    const confidence: 'High' | 'Medium' | 'Low' = 
      evidenceCompleteness >= 70 ? 'High' : evidenceCompleteness >= 45 ? 'Medium' : 'Low';

    const recommendedProjects: string[] = [];
    if (solarReduction > 0) recommendedProjects.push('Rooftop Solar PV Installation (Grid-Interactive)');
    if (motorReduction > 0) recommendedProjects.push('IE4 Super-Premium Efficiency Motors Upgrade');
    if (dgReduction > 0) recommendedProjects.push('DG Fuel Optimization & Waste Heat Recovery');

    return {
      baselineEmissions: Math.round(baselineEmissions),
      estimatedKwh: Math.round(estimatedKwh),
      estimatedReduction,
      solarReduction: Math.round(solarReduction),
      motorReduction: Math.round(motorReduction),
      dgReduction: Math.round(dgReduction),
      evidenceCompleteness,
      confidence,
      recommendedProjects
    };
  }
}
