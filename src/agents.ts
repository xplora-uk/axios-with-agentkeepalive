import Agent from 'agentkeepalive';
import { IHttpOptionsForAgent, IHttpsOptionsForAgent } from './types';

/**
 * Keep sockets around in a pool to be used by other requests in the future.
 */
const keepAlive = true;

/**
 * When using the keepAlive option, specifies the initial delay for TCP Keep-Alive packets.
 * Ignored when the keepAlive option is false or undefined.
 * Only relevant if keepAlive is set to true.
 */
const keepAliveMsecs = 1000;

/**
 * Sets the free socket to timeout after freeSocketTimeout milliseconds of inactivity on the free socket.
 * The default server-side timeout is 5000 milliseconds, to avoid ECONNRESET exceptions,
 * we set the default value to 4000 milliseconds.
 * Only relevant if keepAlive is set to true.
 */
const freeSocketTimeout = 4000;

/**
 * Sets the working socket to timeout after timeout milliseconds of inactivity on the working socket.
 * Default is freeSocketTimeout * 2 so long as that value is greater than or equal to 8 seconds,
 * otherwise the default is 8 seconds.
 */
const timeout = 60000; // 1 minute

/**
 * Maximum number of sockets (per host) to leave open in a free state.
 * Only relevant if keepAlive is set to true.
 */
const maxFreeSockets = 256;

export const defaultHttpAgentOptions: IHttpOptionsForAgent = {
  freeSocketTimeout,
  keepAlive,
  keepAliveMsecs,
  maxFreeSockets,
  timeout,
};

export const defaultHttpsAgentOptions: IHttpsOptionsForAgent = {
  freeSocketTimeout,
  keepAlive,
  keepAliveMsecs,
  maxFreeSockets,
  timeout,
};

export function createHttpAgent(options: IHttpOptionsForAgent = defaultHttpAgentOptions) {
  return new Agent(options);
}

export function createHttpsAgent(options: IHttpsOptionsForAgent = defaultHttpsAgentOptions) {
  return new Agent.HttpsAgent(options);
}
