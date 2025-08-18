// /src/components/layout/Navbar.jsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({ isAuthenticated, user, setUser }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        setUser(null);
        navigate('/login');
    };

    const authLinks = (
        <div className="flex items-center space-x-4">
            <span className="text-white">Welcome, {user?.name || 'User'}</span>
            <Link
                to="/dashboard"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
                Dashboard
            </Link>
            <button
                onClick={handleLogout}
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
                Logout
            </button>
        </div>
    );

    const guestLinks = (
        <div className="flex items-center space-x-4">
            <Link
                to="/login"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
                Login
            </Link>
            <Link
                to="/register"
                className="bg-indigo-500 text-white hover:bg-indigo-600 px-3 py-2 rounded-md text-sm font-medium"
            >
                Register
            </Link>
        </div>
    );

    return (
        <nav className="bg-gray-800 fixed top-0 left-0 right-0 z-10">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <Link to="/" className="text-white text-2xl font-bold">
                            TrelloClone
                        </Link>
                    </div>
                    <div>{isAuthenticated ? authLinks : guestLinks}</div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
