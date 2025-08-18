// /src/components/auth/PrivateRoute.jsx
// /src/components/auth/PrivateRoute.jsx
// src/components/auth/PrivateRoute.jsx
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import Spinner from '../layout/Spinner.jsx';

const PrivateRoute = ({ isAuthenticated, loading }) => {
    if (loading) return <Spinner />;
    return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;


