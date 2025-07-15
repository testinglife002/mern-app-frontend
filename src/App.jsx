import React from "react";
 import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './components/PrivateRoute';
import AuthPage from './pages/AuthPage';
// import DashboardPage from './pages/DashboardPage'; // Create this page
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
    {
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
    }
    {/*
    <Router>
        <AuthProvider>
            <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
            <Routes>
                <Route path="/auth" element={<AuthPage />} />
                <Route path="/" element={<PrivateRoute />}>
                   
                    <Route path="/dashboard" element={<Dashboard />} />
                   
                </Route>
             
                <Route path="*" element={<Navigate to="/auth" />} />
            </Routes>
        </AuthProvider>
    </Router>
    */}
    </>
  );
}

export default App;
