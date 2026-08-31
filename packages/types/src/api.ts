/**
 * API Standard Response Wrappers
 */

export interface ApiResponse<T = unknown> {
  success: boolean;
  message?: string;
  data?: T;
  error?: ApiError;
  timestamp: string;
}

export interface ApiError {
  code: string;
  message: string;
  details?: Record<string, unknown>;
}

export interface SystemStatusResponse {
  status: 'online' | 'degraded' | 'maintenance';
  version: string;
  environment: string;
  services: {
    api: string;
    database: string;
    cache: string;
    llmProvider: string;
  };
}
