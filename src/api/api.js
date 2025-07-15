import axios from 'axios';

const API = axios.create({
    baseURL: '/api', // This will be proxied to http://localhost:5000/api
    headers: {
        'Content-Type': 'application/json',
    },
});

// Add a request interceptor to include token
API.interceptors.request.use((req) => {
    if (localStorage.getItem('userInfo')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('userInfo')).token}`;
    }
    return req;
});

export default API;