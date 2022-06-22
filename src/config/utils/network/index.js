import axios from 'axios';

const client = axios.create({
  baseURL: process.env.REACT_APP_API_URI,
});

client.defaults.withCredentials = true;

/**
 * react-query 사용 시 기본으로 호출되는 api
 * @param {*} uri
 * @param {*} data
 * @returns
 */
export const defaultQuery = async (uri, data, options = {}) => {
  return await client.post(uri, data, {
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  });
};
