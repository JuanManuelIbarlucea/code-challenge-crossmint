import axios, { AxiosRequestTransformer } from 'axios';

export const candidateId = '16a8a14b-f8d4-4fbd-8d4f-78885a85823d';
export const axiosInstance = axios.create({
  baseURL: 'https://challenge.crossmint.io/api',
  transformRequest: [
    (data) => {
      return { ...data, candidateId };
    },
    ...(axios.defaults.transformRequest as AxiosRequestTransformer[]),
  ],
});
