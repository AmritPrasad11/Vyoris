import express from 'express';
import cors from 'cors';
import { config } from './config/env';
import healthRouter from './routes/health.router';

const app = express();

// Middleware
app.use(cors({ origin: config.corsOrigin }));
app.use(express.json());

// Routes
app.use('/health', healthRouter);
app.use(`/api/${config.apiVersion}`, healthRouter);

// Global 404 handler
app.use((_req, res) => {
  res.status(404).json({
    success: false,
    error: {
      code: 'NOT_FOUND',
      message: 'The requested API route does not exist.',
    },
    timestamp: new Date().toISOString(),
  });
});

// Start Server
if (require.main === module) {
  app.listen(config.port, () => {
    console.log(
      `[Vyoris API] Server running on port ${config.port} (${config.nodeEnv})`
    );
  });
}

export default app;
