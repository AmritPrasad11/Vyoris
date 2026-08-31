/**
 * Lead Intelligence & Business Entity Types (Phase 0 Structural Types)
 */

export interface BusinessEntity {
  id: string;
  name: string;
  domain?: string;
  industry?: string;
  size?: string;
  location?: string;
  description?: string;
  createdAt: string;
  updatedAt: string;
}

export interface BusinessOpportunity {
  id: string;
  businessId: string;
  title: string;
  score: number; // 0 to 100 confidence score
  summary: string;
  signals: string[];
}

export interface LeadSearchCriteria {
  naturalQuery: string;
  industry?: string[];
  location?: string;
  companySize?: string[];
}
