---
name: KarboNova
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#45474c'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#75777d'
  outline-variant: '#c5c6cd'
  surface-tint: '#545f73'
  primary: '#091426'
  on-primary: '#ffffff'
  primary-container: '#1e293b'
  on-primary-container: '#8590a6'
  inverse-primary: '#bcc7de'
  secondary: '#006a61'
  on-secondary: '#ffffff'
  secondary-container: '#86f2e4'
  on-secondary-container: '#006f66'
  tertiary: '#041528'
  on-tertiary: '#ffffff'
  tertiary-container: '#1a2a3e'
  on-tertiary-container: '#8191a9'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d8e3fb'
  primary-fixed-dim: '#bcc7de'
  on-primary-fixed: '#111c2d'
  on-primary-fixed-variant: '#3c475a'
  secondary-fixed: '#89f5e7'
  secondary-fixed-dim: '#6bd8cb'
  on-secondary-fixed: '#00201d'
  on-secondary-fixed-variant: '#005049'
  tertiary-fixed: '#d3e4fe'
  tertiary-fixed-dim: '#b7c8e1'
  on-tertiary-fixed: '#0b1c30'
  on-tertiary-fixed-variant: '#38485d'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  display-lg:
    fontFamily: Hanken Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-md:
    fontFamily: Hanken Grotesk
    fontSize: 36px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Hanken Grotesk
    fontSize: 30px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  headline-sm:
    fontFamily: Hanken Grotesk
    fontSize: 20px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 48px
  xxl: 80px
  sidebar-width: 260px
  max-content-width: 1440px
---

## Brand & Style

This design system establishes a **Premium Climate-Tech Operating System** aesthetic. It is engineered to bridge the gap between rigorous enterprise data and the approachable needs of MSME (Micro, Small, and Medium Enterprise) owners in the Indian market. The visual narrative moves away from traditional "eco-green" clichés, instead favoring a high-precision, data-driven "B2B Tech" feel.

The style is characterized by **Refined Minimalism with Industrial Precision**. It utilizes the sharp, contemporary geometry of Hanken Grotesk to signal authority and technological advancement, paired with the warmth of Plus Jakarta Sans to ensure long-form data remains legible and inviting. The interface relies on structural integrity, clear information hierarchy, and a restrained use of color to highlight critical environmental insights.

## Colors

The palette is anchored by a deep, professional Slate (`#1E293B`), providing a stable foundation that evokes the "Operating System" persona. This primary tone is used for core structural elements, navigation, and primary headings to command authority.

- **Primary Accents:** We use a restrained Emerald Teal (`#0D9488`) for key calls-to-action and environmental growth metrics. This choice signals sustainability without leaning into the saturated greens common in consumer products.
- **Surface Strategy:** Backgrounds utilize a sequence of cool grays (`#F8FAFC` to `#F1F5F9`) to differentiate sidebars from main content areas, creating a tiered dashboard experience.
- **Functional Colors:** Status indicators follow strict industry standards to ensure immediate cognitive recognition of compliance states (Verified, Pending, High Risk).

## Typography

Typography is the primary vehicle for KarboNova’s data-heavy narrative. 

- **Hanken Grotesk (Headlines):** Selected for its sharp, high-tech character. Use Semi-bold and Bold weights to establish a clear structural skeleton for reports and dashboards. 
- **Plus Jakarta Sans (Body & UI):** Used for all interactive elements, table data, and descriptions. Its slightly wider apertures and friendly geometry reduce "data fatigue" for MSME users managing complex carbon footprint inputs.
- **The Scale:** A rigorous 1.25x (Major Third) scale ensures that hierarchy is unmistakable even in dense table views. Display sizes are reserved for high-level carbon metric summaries.

## Layout & Spacing

The layout follows a **Fixed-Fluid Hybrid** model. A persistent sidebar at 260px provides global navigation, while the main content area utilizes a 12-column grid system designed for high information density.

- **Gutters & Margins:** Standard 24px gutters provide enough air for complex data tables and charts to remain legible.
- **Rhythm:** An 8px linear scale (with 4px increments for tight UI components) governs all padding and margin decisions. 
- **Responsive Behavior:** 
    - **Desktop (1200px+):** Full 12-column grid.
    - **Tablet (768px - 1199px):** Sidebar collapses to icons; 8-column grid for content.
    - **Mobile (<768px):** Single column flow; sidebar becomes a bottom-sheet or hamburger drawer.

## Elevation & Depth

To maintain the "Operating System" feel, depth is conveyed through **Tonal Layering and Low-Contrast Outlines** rather than aggressive shadows.

1.  **Level 0 (Surface):** The global background (`#F8FAFC`).
2.  **Level 1 (Cards/Containers):** Pure white (`#FFFFFF`) with a subtle 1px border (`#E2E8F0`). No shadow or a very faint, 4% opacity neutral drop shadow.
3.  **Level 2 (Active Elements/Modals):** A soft, diffused 12% opacity shadow with an 8px blur to indicate focus or floating actions.
4.  **Sidebars:** Differentiated by a subtle grey fill (`#F1F5F9`) and a vertical border, rather than elevation.

This flat-depth approach ensures the UI feels "fast" and professional, avoiding the toy-like appearance of heavy skeuomorphism.

## Shapes

The design system uses a **Balanced Roundedness (Level 2)**. 

- **Components (Buttons, Inputs, Small Cards):** 0.5rem (8px) corner radius. This provides a modern, approachable feel that isn't overly "bubbly" or clinical.
- **Large Containers (Charts, Dashboards):** 1rem (16px) for major dashboard cards to create a distinct, modular look.
- **Badges/Chips:** Full pill-shape for status labels to differentiate them from interactive button elements.

## Components

### Buttons & Actions
- **Primary:** Filled `#0D9488` with white text. 8px corner radius.
- **Secondary:** Outlined `#1E293B` with 1px border. 
- **Tertiary:** Ghost style, no background until hover.

### Data Management
- **Tables:** Use a "Zephyr" row style (alternate row shading). Text is `body-sm` for maximum density. Row headers use `Plus Jakarta Sans Bold`.
- **Input Fields:** 1px border (`#CBD5E1`), transitions to 2px Primary Slate on focus. Labels use `label-md` for clear field identification.

### Status & Feedback
- **Badges:** Low-saturation backgrounds with high-saturation text (e.g., Success: Light Mint bg, Dark Emerald text).
- **Steppers:** Horizontal timelines for "Carbon Readiness" lifecycles. Completed steps use the Teal accent; active steps use a Primary Slate outline.

### Sidebar & Navigation
- **Active State:** A subtle left-edge vertical bar (3px) in Teal and a background tint of `#F1F5F9`.
- **Icons:** 20px Stroke-based icons (1.5px weight) for a clean, technical appearance.

### Special Components
- **Metric Cards:** Large `headline-lg` numbers for KPIs (e.g., Total CO2e) paired with a small sparkline trend chart.
- **Verified Badge:** A specific architectural icon-set to denote verified climate data, ensuring trust for B2B stakeholders.