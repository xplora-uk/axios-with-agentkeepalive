import axios from 'axios';
import { IOptionsForAxios, IHttpOptionsForAgent, IHttpsOptionsForAgent } from './types';
import { createHttpAgent, createHttpsAgent, defaultHttpAgentOptions, defaultHttpsAgentOptions } from './agents';

/**
 * Set HTTP/HTTPS agents for axios
 * Note: side-effect on axios.defaults
 * @param httpAgentOptions 
 * @param httpsAgentOptions 
 */
export function makeAgentsForDefaultAxios(
  httpAgentOptions: IHttpOptionsForAgent = defaultHttpAgentOptions,
  httpsAgentOptions: IHttpsOptionsForAgent = defaultHttpsAgentOptions,
) {
  axios.defaults.httpAgent = createHttpAgent(httpAgentOptions);
  axios.defaults.httpsAgent = createHttpsAgent(httpsAgentOptions);
}

export function createAxiosInstance(options: IOptionsForAxios = {}) {
  if (!axios.defaults.httpAgent) axios.defaults.httpAgent = createHttpAgent();
  if (!axios.defaults.httpsAgent) axios.defaults.httpsAgent = createHttpsAgent();
  return axios.create(options);
}
