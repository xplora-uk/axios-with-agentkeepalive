import assert from 'node:assert';
import { describe, it } from 'node:test';

import { createHttpAgent, createHttpsAgent } from '../agents';

describe('agents lib', () => {
  it('should create agent instance for HTTP', async () => {
    const agent = createHttpAgent();
    assert.equal(typeof agent, 'object');
  });

  it('should create agent instance for HTTPS', async () => {
    const agent = createHttpsAgent();
    assert.equal(typeof agent, 'object');
  });
});
