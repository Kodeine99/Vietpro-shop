import axios from "axios";

// base URL
axios.defaults.baseURL = 'http://api.vietpro.online/v1';

//configuration
export const getProducts = (config) => {
  return axios.get("/products", config);
}

export const getProduct = (id, config) => {
  return axios.get(`/products/${id}`, config);
}

//Comments
export const getCommentByProductId = (id, config) => {
  return axios.get(`/products/${id}/comments`, config);
}

// post comments len server
export const createCommentByProductId = (id, data, config) => {
  return axios.post(`/products/${id}/comments`, data, config);
}
