import axios from "axios";

// const baseURL = import.meta.env.VITE_API_BASE.replace(/\/$/, '');
const api = axios.create({
  // baseURL: import.meta.env.VITE_API_BASE || "http://localhost:5000/api",
  baseURL: import.meta.env.VITE_API_BASE,
  withCredentials: true,
});


export default api;
