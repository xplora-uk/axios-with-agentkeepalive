const { createAxiosInstance } = require('../lib');

main();

async function main() {
  const httpClient = createAxiosInstance({ baseURL: 'http://example.com' });
  const res1 = await httpClient.get('/');
  console.log('response', res1.data);
  
  const httpsClient = createAxiosInstance({ baseURL: 'https://example.com' });
  const res2 = await httpsClient.get('/');
  console.log('response', res2.data);
}
