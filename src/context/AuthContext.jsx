// context/AuthContext.jsx
// import React, { createContext, useState, useEffect, useContext, useCallback } from 'react';

import React, { createContext, useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import toast from 'react-hot-toast';
// import * as api from '../api';
import * as api from '../api/index.js';


const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(localStorage.getItem('token'));
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    
    const loadUser = useCallback(async () => {
        if (token) {
            const decodedToken = jwtDecode(token);
            // Check if token is expired
            if (decodedToken.exp * 1000 < Date.now()) {
                localStorage.removeItem('token');
                setToken(null);
                setUser(null);
            } else {
                try {
                    const res = await api.getLoggedInUser();
                    setUser(res.data);
                } catch (error) {
                    // Handle case where token is valid but user not found in DB
                    localStorage.removeItem('token');
                    setToken(null);
                    setUser(null);
                    console.error('Failed to fetch user', error);
                }
            }
        }
        setLoading(false);
    }, [token]);
    
   

    useEffect(() => {
        loadUser();
    }, [loadUser]);
    

    const login = async (formData) => {
        try {
            const { data } = await api.login(formData);  // ✅ Correct call
            localStorage.setItem('token', data.token);
            setToken(data.token);
            const res = await api.getLoggedInUser();
            setUser(res.data);
            toast.success('Login Successful!');
            navigate('/dashboard');
        } catch (error) {
            console.error(error);
            toast.error(error.response?.data?.msg || 'Login Failed');
        }
    };


    const register = async (formData) => {
        try {
            const { data } = await api.register(formData);
            // localStorage.setItem('token', data.token);
            // setToken(data.token);
            // const res = await api.getLoggedInUser();
            // setUser(res.data);
            toast.success('Registration Successful!');
            // navigate('/dashboard');
            navigate('/login');
        } catch (error) {
            console.error(error);
            toast.error(error.response?.data?.msg || 'Registration Failed');
        }
    };

    const logout = () => {
        localStorage.removeItem('token');
        setUser(null);
        setToken(null);
        toast.success('Logged out successfully.');
        navigate('/login');
    };

    return (
        <AuthContext.Provider value={{ user, token, login, register, logout, loading, isAuthenticated: !!user }}>
            {!loading && children}
        </AuthContext.Provider>
    );
};

export default AuthContext;




/*
import React, { createContext, useState, useEffect, useContext } from 'react';
import API from '../api/api'; 
// import { toast } from 'react-toastify'; // If using react-toastify

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const userInfo = localStorage.getItem('userInfo');
        if (userInfo) {
            setUser(JSON.parse(userInfo));
        }
        setLoading(false);
    }, []);

    const login = async (email, password) => {
        try {
            const { data } = await API.post('/auth/login', { email, password });
            localStorage.setItem('userInfo', JSON.stringify(data));
            setUser(data);
            // toast.success('Logged in successfully!');
            return true;
        } catch (error) {
            console.log(error);
            // toast.error(error.response?.data?.message || 'Login failed');
            return false;
        }
    };

    const register = async (name, email, password) => {
        try {
            const { data } = await API.post('/auth/register', { name, email, password });
            localStorage.setItem('userInfo', JSON.stringify(data));
            setUser(data);
            // toast.success('Registration successful! You are now logged in.');
            return true;
        } catch (error) {
            console.log(error);
            // toast.error(error.response?.data?.message || 'Registration failed');
            return false;
        }
    };

    const logout = () => {
        localStorage.removeItem('userInfo');
        setUser(null);
        // toast.info('Logged out.');
    };

    return (
        <AuthContext.Provider value={{ user, loading, login, register, logout }}>
            {!loading && children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
*/

