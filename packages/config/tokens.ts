/**
 * Vyoris AI Design System Tokens
 *
 * Hierarchy Baseline:
 * - Primary (60%): Stark Crisp White (#FFFFFF) - Main backgrounds, cards, whitespace.
 * - Secondary (30%): Dark Charcoal (#0F172A) - Primary typography, headings, dark surfaces.
 * - Accent (10%): Energetic Orange (#F97316) - CTAs, active states, highlights.
 */

export const VyorisColors = {
  primary: {
    DEFAULT: '#FFFFFF',
    hover: '#F8FAFC',
    border: '#E2E8F0',
    subtle: '#F1F5F9',
  },
  secondary: {
    DEFAULT: '#0F172A',
    hover: '#1E293B',
    muted: '#475569',
    subtle: '#64748B',
  },
  accent: {
    DEFAULT: '#F97316',
    hover: '#EA580C',
    light: '#FFEDD5',
    subtle: '#FFF7ED',
  },
} as const;

export const VyorisDesignSystem = {
  appName: 'Vyoris AI',
  tagline: 'AI-Powered Lead Intelligence Platform',
  colors: VyorisColors,
} as const;
