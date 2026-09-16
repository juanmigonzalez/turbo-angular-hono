import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import { app } from '../src/app.js';

describe('Hono application', () => {
  it('reports its health without starting a server', async () => {
    const response = await app.request('/health');

    assert.equal(response.status, 200);
    assert.deepEqual(await response.json(), { status: 'ok' });
  });

  it('applies security headers', async () => {
    const response = await app.request('/');

    assert.equal(response.status, 200);
    assert.equal(response.headers.get('x-content-type-options'), 'nosniff');
  });
});
