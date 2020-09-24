import axios from "axios";

export const api = axios.create({
  baseURL: process.env.REACT_APP_API_URI,
});

//Setando Token em Header Default
// api.defaults.headers.common["Authorization"] = `Bearer TOKEN_AQUI`;

// api.interceptors.response.use(
//   (response) => {
//     return response.data;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

export function get(url: string, data: object = {}): any {
  return api.get(url, data);
}

export function post(url: string, data: object = {}, config: object = {}) {
  return api.post(url, data, config);
}

export function put(
  url: string,
  id: number,
  data: object = {},
  config: object = {}
) {
  return api.put(`${url}/${id}`, data, config);
}

export function del(url: string, id: number, data: object = {}) {
  return api.delete(`${url}/${id}`, data);
}

const API = {
  get: get,
  post: post,
  put: put,
  del: del,
};

export default API;
