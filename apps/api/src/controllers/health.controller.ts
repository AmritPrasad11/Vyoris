import { Request, Response } from 'express';
import { ApiResponse, SystemStatusResponse } from '@vyoris/types';

export const getHealth = (_req: Request, res: Response): void => {
  const response: ApiResponse<{ status: string }> = {
    success: true,
    data: { status: 'healthy' },
    timestamp: new Date().toISOString(),
  };
  res.status(200).json(response);
};

export const getStatus = (_req: Request, res: Response): void => {
  const statusData: SystemStatusResponse = {
    status: 'online',
    version: '0.1.0',
    environment: process.env.NODE_ENV || 'development',
    services: {
      api: 'healthy',
      database: 'not_configured (Phase 0)',
      cache: 'not_configured (Phase 0)',
      llmProvider: 'abstraction_ready (Phase 0)',
    },
  };

  const response: ApiResponse<SystemStatusResponse> = {
    success: true,
    data: statusData,
    timestamp: new Date().toISOString(),
  };
  res.status(200).json(response);
};
