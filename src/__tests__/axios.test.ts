import axios from 'axios';
import assert from 'node:assert';
import { describe, it } from 'node:test';

import { createAxiosInstance, makeAgentsForDefaultAxios } from '../axios';

describe('axios lib', () => {
  it('should update default agents of axios', async () => {
    makeAgentsForDefaultAxios();
    assert.equal(typeof axios, 'function');
    assert.notEqual(axios.defaults.httpAgent, null);
    assert.notEqual(axios.defaults.httpsAgent, null);
    const res = await axios.get('http://example.com');
    assert.equal(typeof res.data, 'string');
  });

  it('should create axios instance for baseURL with HTTP', async () => {
    const client = createAxiosInstance({ baseURL: 'http://example.com' });
    assert.equal(typeof client, 'function');
    assert.notEqual(client.defaults.httpAgent, null);
    assert.notEqual(client.defaults.httpsAgent, null);
    const res = await client.get('/');
    assert.equal(typeof res.data, 'string');
  });

  it('should create axios instance for baseURL with HTTPS', async () => {
    const client = createAxiosInstance({ baseURL: 'https://example.com' });
    assert.equal(typeof client, 'function');
    assert.notEqual(client.defaults.httpAgent, null);
    assert.notEqual(client.defaults.httpsAgent, null);
    const res = await client.get('/');
    assert.equal(typeof res.data, 'string');
  });


});
