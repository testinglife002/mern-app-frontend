import React, { useEffect, useState } from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Register from "./pages/Register";
// import Login from "./pages/Login";
// import Dashboard from "./pages/Dashboard";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { getLoggedInUser } from './api/index.js'; // Your API call

import Navbar from './components/layout/Navbar.jsx';
import Landing from './pages/Landing.jsx';
import Register from './components/auth/Register.jsx';
import Login from './components/auth/Login.jsx';
import Dashboard from './pages/Dashboard.jsx';
// import BoardPage from './pages/BoardPage.jsx';
import PrivateRoute from './components/auth/PrivateRoute.jsx';
import { AuthProvider } from './context/AuthContext.jsx';
import MainDashboard from "./pages/MainDashboard.jsx";
import Spinner from "./components/layout/Spinner.jsx";
import BoardPage from "./pages/BoardPage.jsx";
import AppUI from "./pages/AppUI.jsx";
import TrelloApp from "./pages/TrelloApp.jsx";
import NewAppUI from "./pages/NewAppUI.jsx";
import ThemeApp from "./pages/ThemeApp.jsx";
import MUITrelloApp from "./pages/MUITrelloApp.jsx";
import MUIApp from "./pages/MUIApp.jsx";

function App() {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  /*
  useEffect(() => {
    const fetchUser = async () => {
      try {
        // const res = await api.getLoggedInUser(); // uses GET /auth
        const res = await getLoggedInUser(); 
        setUser(res.data.user);  // ⬅️ fix this line, might be set incorrectly
      } catch (err) {
        console.error("User fetch failed:", err);
        console.error("Not authenticated:", err.response?.data?.msg || err.message);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, []);
  */

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await getLoggedInUser(); // uses GET /auth
        setUser(res.data.user);
      } catch (err) {
        console.error("Not authenticated:", err.response?.data?.msg || err.message);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  

  const isAuthenticated = !!user;

  return (
    <>
    {/*
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
    */}
    {
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{ duration: 3500 }}
      />
      {<Navbar isAuthenticated={isAuthenticated} user={user} setUser={setUser} />}
      <main className="pt-16">
      {loading ? (
        <Spinner />
      ) : (
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Landing />} />
          <Route path="/app-ui" element={<AppUI />} />
          <Route path="/new-app-ui" element={<NewAppUI />} />
          <Route path="/theme-app-ui" element={<ThemeApp />} />
          <Route path="/mui-app-ui" element={<MUIApp />} />
          <Route path="/trello-app" element={<TrelloApp />} />
          <Route path="/  " element={<MUITrelloApp />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login setUser={setUser} />} />

          {/* Protected Routes */}
          <Route element={<PrivateRoute isAuthenticated={isAuthenticated} loading={loading} />}>
            <Route path="/dashboard" element={<MainDashboard user={user} />} />
            { <Route path="/board/:id" element={<BoardPage />} /> }
          </Route>
        </Routes>
        )}
      </main>
    </>
    }
    </>
  );
}

export default App;
