import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { secureHeaders } from 'hono/secure-headers';

export function createApp() {
  const app = new Hono();

  app.use('*', secureHeaders());
  app.use(
    '*',
    cors({
      origin: process.env.CORS_ORIGIN || 'http://localhost:4200',
      allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
      allowHeaders: ['Content-Type', 'Authorization'],
      exposeHeaders: ['Content-Length'],
      maxAge: 600,
      credentials: true,
    })
  );

  app.get('/', (c) =>
    c.json({
      message: 'Welcome to Hono backend',
      version: '1.0.0',
    })
  );

  app.get('/health', (c) => c.json({ status: 'ok' }));

  return app;
}

export const app = createApp();
