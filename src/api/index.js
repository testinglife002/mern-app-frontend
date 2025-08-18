// /src/api/index.js
import axios from 'axios';

// Create an Axios instance with the base URL from environment variables
// const API = axios.create({ baseURL: import.meta.env.VITE_API_URL,  withCredentials: true  });
const API = axios.create({
    // baseURL: import.meta.env.VITE_API_BASE_LOCAL.replace(/\/$/, ''),
    baseURL: import.meta.env.VITE_API_BASE.replace(/\/$/, ''),
    withCredentials: true
});

// Use an interceptor to add the auth token to every request
API.interceptors.request.use((req) => {
    const token = localStorage.getItem('token');
    if (token) {
        // req.headers['x-auth-token'] = token;
        req.headers.Authorization = `Bearer ${token}`;
    }
    return req;
});

// Auth routes
export const login = (formData) => API.post('/auth/login', formData);
export const register = (formData) => API.post('/auth/register', formData);
 export const getLoggedInUser = () => API.get('/auth');
 export const gettingLoggedInUser = () => API.get('/auth/me'); // Add this

// Board routes
export const fetchBoards = () => API.get('/boards');
export const fetchBoardById = (id) => API.get(`/boards/${id}`);
export const createBoard = (boardData) => API.post('/boards', boardData);

// List routes
export const createList = (listData) => API.post('/lists', listData);

// Card routes
export const createCard = (cardData) => API.post('/cards', cardData);
export const moveCard = (moveData) => API.put('/cards/move', moveData);

export default API;

