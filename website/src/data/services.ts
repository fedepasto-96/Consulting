import {
  BatteryWarning,
  FileCheck2,
  Gauge,
  ShieldCheck,
  type LucideIcon,
} from 'lucide-react';

export type ServiceTier = 'primary' | 'secondary';

export interface Service {
  id: string;
  eyebrow: string;
  name: string;
  tagline: string;
  description: string;
  deliverables: string[];
  standards: string[];
  icon: LucideIcon;
  tier: ServiceTier;
}

/**
 * Service catalog — single source of truth for the Services section.
 * Copy is grounded in the firm's methodology docs (docs/methodology/*,
 * docs/standards/regulations-and-standards.md). Primary lines lead; the
 * regulatory line is positioned as a growing, secondary capability.
 */
export const services: Service[] = [
  {
    id: 'system-safety',
    eyebrow: 'System safety',
    name: 'System Safety Engineering',
    tagline: 'Show your platform is acceptably safe — by design.',
    description:
      'Structured safety analysis across the whole UAS — airframe, propulsion, power, avionics, flight control and software. We identify failure conditions, classify their severity, and trace safety objectives back into design and verification.',
    deliverables: [
      'Functional Hazard Assessment (FHA)',
      'FMEA / FMECA',
      'Fault Tree Analysis (FTA)',
      'Bowtie barrier analysis',
      'Safety case & argument',
    ],
    standards: ['SAE ARP4761', 'ARP4754A', 'IEC 60812', 'IEC 61025'],
    icon: ShieldCheck,
    tier: 'primary',
  },
  {
    id: 'battery-safety',
    eyebrow: 'Battery & energy',
    name: 'Battery & Energy System Safety',
    tagline: 'De-risk the highest-energy part of the aircraft.',
    description:
      'Focused analysis of Li-ion / LiPo packs and their management — thermal runaway and propagation, BMS safety functions, charging and handling, abuse and failure modes, and the test evidence needed to back it up.',
    deliverables: [
      'Battery hazard analysis',
      'Pack & BMS FMEA',
      'Thermal-runaway & propagation review',
      'Charging & handling safety',
      'Test & qualification guidance',
    ],
    standards: ['UN 38.3', 'IEC 62133', 'IEC 60812'],
    icon: BatteryWarning,
    tier: 'primary',
  },
  {
    id: 'risk-assessment',
    eyebrow: 'Risk assessment',
    name: 'Project & Operational Risk',
    tagline: 'Repeatable, auditable control of engineering risk.',
    description:
      'An ISO 31000 risk process applied to drone programs — or to any engineering project or operation. We scope the context, build the hazard log, rate and prioritise, define mitigations, and justify residual risk to ALARP.',
    deliverables: [
      'Risk register & hazard log',
      '5×5 risk rating',
      'Mitigation & control plan',
      'ALARP justification',
      'Risk assessment report',
    ],
    standards: ['ISO 31000', 'IEC 31010', 'ISO 12100'],
    icon: Gauge,
    tier: 'primary',
  },
  {
    id: 'regulatory',
    eyebrow: 'Also available · expanding',
    name: 'Regulatory & Operational Approval',
    tagline: 'Support to get Specific-category operations approved.',
    description:
      'When you need to fly, we help build the operational risk case: ConOps, SORA (GRC → ARC → SAIL → OSOs), and the authorization or waiver dossier — a capability we are actively expanding.',
    deliverables: [
      'Concept of Operations (ConOps)',
      'SORA assessment',
      'OSO compliance matrix',
      'Authorization / waiver dossier',
      'Pre-submission review',
    ],
    standards: ['EASA 2019/947', 'JARUS SORA', 'FAA Part 107'],
    icon: FileCheck2,
    tier: 'secondary',
  },
];
