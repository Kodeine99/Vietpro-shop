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

// post comments to server
export const createCommentByProductId = (id, data, config) => {
  return axios.post(`/products/${id}/comments`, data, config);
}

//category
export const getCategories = (config) => {
  return axios.get("/categories", config);
}
export const getCategory = (id, config) => {
  return axios.get(`/categories/${id}`, config);
}

// order-Customer
export const order = (data, config) => {
  return axios.post("/order", data, config);
}
