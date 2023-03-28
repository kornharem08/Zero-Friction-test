import axios, { AxiosInstance } from "axios";

const apiClient: AxiosInstance = axios.create({
  baseURL: "https://dummyjson.com",
  headers: {
    "Content-Type": "application/json",
  },
});



apiClient.interceptors.request.use((config) => {
  return config;
});

apiClient.interceptors.response.use(res => {
  return res
}, async err => {
  return Promise.reject(err.response)
})
export default apiClient;
