// /src/components/auth/Login.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import axios from "axios";
import * as api from '../../api/index.js';

const Login = ({ setUser }) => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const navigate = useNavigate();

    const { email, password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });


    /*
    const onSubmit = async e => {
        e.preventDefault();
        console.log(formData);
        try {
            const { data } = await api.login({ email, password });
            // Save token
            // localStorage.setItem('token', data.token);
            // const res = await login(formData);
            localStorage.setItem('token', data.token);
            setUser(data.user);
            // navigate('/dashboard');
            toast.success('Login successful!');
            navigate('/dashboard');
        } catch (error) {
            console.error(error);
            alert('Invalid credentials');
            toast.error(error.response?.data?.msg || 'Login failed.');
        }
    };
    */

    const onSubmit = async (e) => {
        e.preventDefault();
        const baseURL = import.meta.env.VITE_API_BASE_LOCAL.replace(/\/$/, '');
        try {
            const res = await axios.post(`${baseURL}/auth/login`, {
                    email,
                    password
                }, {
                withCredentials: true
            });
            console.log("LoggedIn:", res.data);
             localStorage.setItem('token', res.data.token);
            setUser(res.data.user);
            toast.success('Login successful!');
            navigate('/dashboard');
            // navigate("/");
        } catch (err) {
            console.error("Login error:", err.response?.data || err.message);
            alert("Invalid credentials");
        }
    };

    return (
        <div className="flex items-center justify-center h-[calc(100vh-80px)]">
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
                <h1 className="text-2xl font-bold text-center text-gray-800">Sign In to Your Account</h1>
                <form className="space-y-6" onSubmit={onSubmit}>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email Address</label>
                        <input type="email" name="email" value={email} onChange={onChange} required className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Password</label>
                        <input type="password" name="password" value={password} onChange={onChange} required className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md" />
                    </div>
                    <button type="submit" className="w-full py-2 text-white bg-indigo-600 rounded-md">Login</button>
                </form>
                <p className="text-sm text-center text-gray-600">
                    Don't have an account? <Link to="/register" className="font-medium text-indigo-600 hover:text-indigo-500">Sign up</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;

















/*
import React, { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { Link } from 'react-router-dom';

const Login = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const { login } = useAuth();

    const { email, password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        console.log(formData);
        login({ email, password });
    };

    return (
        <div className="flex items-center justify-center h-[calc(100vh-80px)]">
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
                <h1 className="text-2xl font-bold text-center text-gray-800">Sign In to Your Account</h1>
                <form className="space-y-6" onSubmit={onSubmit}>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email Address</label>
                        <input type="email" name="email" value={email} onChange={onChange} required className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"/>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Password</label>
                        <input type="password" name="password" value={password} onChange={onChange} required className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"/>
                    </div>
                    <button type="submit" className="w-full py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Login</button>
                </form>
                 <p className="text-sm text-center text-gray-600">
                    Don't have an account? <Link to="/register" className="font-medium text-indigo-600 hover:text-indigo-500">Sign up</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
*/

