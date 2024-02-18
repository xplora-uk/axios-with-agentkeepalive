import axios, { AxiosRequestConfig } from 'axios';
import { HttpOptions, HttpsOptions } from 'agentkeepalive';

export type IOptionsForAxios      = AxiosRequestConfig;
export type IHttpOptionsForAgent  = HttpOptions;
export type IHttpsOptionsForAgent = HttpsOptions;
