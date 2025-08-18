// /src/components/auth/Register.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import * as api from '../../api';

const Register = () => {
    const [formData, setFormData] = useState({ name: '', email: '', password: '' });
    const navigate = useNavigate();

    const { name, email, password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        try {
            await api.register({ name, email, password });
            toast.success('Registration successful!');
            navigate('/login');
        } catch (error) {
            console.error(error);
            toast.error(error.response?.data?.msg || 'Registration failed.');
        }
    };

    return (
        <div className="flex items-center justify-center h-[calc(100vh-80px)]">
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
                <h1 className="text-2xl font-bold text-center text-gray-800">Create Your Account</h1>
                <form className="space-y-6" onSubmit={onSubmit}>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Name</label>
                        <input type="text" name="name" value={name} onChange={onChange} required className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email Address</label>
                        <input type="email" name="email" value={email} onChange={onChange} required className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Password</label>
                        <input type="password" name="password" value={password} onChange={onChange} required minLength="6" className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md" />
                    </div>
                    <button type="submit" className="w-full py-2 text-white bg-indigo-600 rounded-md">Register</button>
                </form>
                <p className="text-sm text-center text-gray-600">
                    Already have an account? <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500">Sign in</Link>
                </p>
            </div>
        </div>
    );
};

export default Register;






/*
import React, { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { Link } from 'react-router-dom';

const Register = () => {
    const [formData, setFormData] = useState({ name: '', email: '', password: '' });
    const { register } = useAuth();

    const { name, email, password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        register({ name, email, password });
    };

    return (
        <div className="flex items-center justify-center h-[calc(100vh-80px)]">
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
                <h1 className="text-2xl font-bold text-center text-gray-800">Create Your Account</h1>
                <form className="space-y-6" onSubmit={onSubmit}>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Name</label>
                        <input type="text" name="name" value={name} onChange={onChange} required className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"/>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email Address</label>
                        <input type="email" name="email" value={email} onChange={onChange} required className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"/>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Password</label>
                        <input type="password" name="password" value={password} onChange={onChange} required minLength="6" className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"/>
                    </div>
                    <button type="submit" className="w-full py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Register</button>
                </form>
                 <p className="text-sm text-center text-gray-600">
                    Already have an account? <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500">Sign in</Link>
                </p>
            </div>
        </div>
    );
};

export default Register;
*/

