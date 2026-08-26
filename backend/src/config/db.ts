import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/karbonova';

export const pool = new Pool({
  connectionString,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false
});

/**
 * Initializes database schemas and seeds default data if tables are empty.
 */
export async function initDb() {
  const client = await pool.connect();
  try {
    console.log('🐘 Connected to PostgreSQL Database');

    // Create Tables
    await client.query(`
      CREATE TABLE IF NOT EXISTS dashboard_summary (
        id SERIAL PRIMARY KEY,
        business_name VARCHAR(255) NOT NULL,
        passport_id VARCHAR(100) UNIQUE NOT NULL,
        estimated_emissions NUMERIC NOT NULL,
        potential_reduction NUMERIC NOT NULL,
        carbon_readiness INT NOT NULL,
        active_projects_count INT NOT NULL,
        verification_stage INT NOT NULL,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );

      CREATE TABLE IF NOT EXISTS projects (
        id VARCHAR(100) PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        description TEXT,
        status VARCHAR(50) NOT NULL,
        estimated_reduction NUMERIC NOT NULL,
        evidence_docs_count VARCHAR(50) NOT NULL,
        readiness INT NOT NULL,
        last_updated VARCHAR(100),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );

      CREATE TABLE IF NOT EXISTS evidence_documents (
        id VARCHAR(100) PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        category VARCHAR(100) NOT NULL,
        date VARCHAR(100) NOT NULL,
        source VARCHAR(255) NOT NULL,
        project VARCHAR(255) NOT NULL,
        status VARCHAR(50) NOT NULL,
        size VARCHAR(50) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );

      CREATE TABLE IF NOT EXISTS opportunity_assessments (
        id SERIAL PRIMARY KEY,
        business_name VARCHAR(255) NOT NULL,
        state VARCHAR(100) NOT NULL,
        industry VARCHAR(150) NOT NULL,
        annual_electricity_spend VARCHAR(100),
        primary_power_source VARCHAR(100),
        has_solar VARCHAR(50),
        has_energy_efficient_motors VARCHAR(100),
        estimated_kwh NUMERIC,
        baseline_emissions NUMERIC,
        estimated_reduction NUMERIC,
        evidence_completeness INT,
        confidence VARCHAR(50),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);

    // Seed Dashboard Summary if empty
    const summaryRes = await client.query('SELECT COUNT(*) FROM dashboard_summary');
    if (parseInt(summaryRes.rows[0].count, 10) === 0) {
      await client.query(`
        INSERT INTO dashboard_summary 
        (business_name, passport_id, estimated_emissions, potential_reduction, carbon_readiness, active_projects_count, verification_stage)
        VALUES ('Acme Manufacturing', 'KRB-MH-000124', 620, 180, 68, 2, 2);
      `);
      console.log('✅ Seeded initial dashboard_summary data into PostgreSQL');
    }

    // Seed Projects if empty
    const projectsRes = await client.query('SELECT COUNT(*) FROM projects');
    if (parseInt(projectsRes.rows[0].count, 10) === 0) {
      await client.query(`
        INSERT INTO projects (id, name, description, status, estimated_reduction, evidence_docs_count, readiness, last_updated)
        VALUES 
        ('solar-energy-efficiency', 'Solar & Energy Efficiency', 'Rooftop solar PV installation combined with IE4 motor upgrades across primary manufacturing line.', 'Documentation', 180, '8/10', 68, '2 days ago'),
        ('waste-heat-recovery', 'Waste Heat Recovery', 'Implementation of heat exchangers on primary boiler exhaust to pre-heat boiler feedwater.', 'Verification', 245, '12/12', 95, '1 week ago');
      `);
      console.log('✅ Seeded initial projects data into PostgreSQL');
    }

    // Seed Evidence Documents if empty
    const docsRes = await client.query('SELECT COUNT(*) FROM evidence_documents');
    if (parseInt(docsRes.rows[0].count, 10) === 0) {
      await client.query(`
        INSERT INTO evidence_documents (id, name, category, date, source, project, status, size)
        VALUES 
        ('1', 'MSEB_Bill_Oct2023.pdf', 'Electricity', 'Oct 15, 2023', 'MSEB Portal', 'Baseline', 'Verified', '1.2 MB'),
        ('2', 'MSEB_Bill_Nov2023.pdf', 'Electricity', 'Nov 12, 2023', 'MSEB Portal', 'Baseline', 'Verified', '1.1 MB'),
        ('3', 'Solar_Installation_Invoice.pdf', 'Solar', 'Jan 05, 2024', 'Vendor', 'Solar & Energy Efficiency', 'Pending Review', '3.4 MB'),
        ('4', 'Energy_Audit_Report.pdf', 'Equipment', 'Feb 20, 2024', 'Third Party', 'Solar & Energy Efficiency', 'Verified', '5.8 MB');
      `);
      console.log('✅ Seeded initial evidence_documents data into PostgreSQL');
    }

  } catch (error) {
    console.error('❌ PostgreSQL Initialization Error:', error);
  } finally {
    client.release();
  }
}
