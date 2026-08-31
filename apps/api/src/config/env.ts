export const config = {
  port: process.env.PORT ? parseInt(process.env.PORT, 10) : 4000,
  nodeEnv: process.env.NODE_ENV || 'development',
  corsOrigin: process.env.CORS_ORIGIN || 'http://localhost:3000',
  apiVersion: 'v1',
};
