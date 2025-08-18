import React, { useState } from "react";
import axios from "axios";
import api from "../api";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  // const baseURL = import.meta.env.VITE_API_BASE.replace(/\/$/, '');  
  const handleSubmit = async (e) => {
    e.preventDefault();
    // const baseURL = import.meta.env.VITE_API_BASE_LOCAL.replace(/\/$/, '');
    const baseURL = import.meta.env.VITE_API_BASE.replace(/\/$/, '');
    try {
      const res = await axios.post(`${baseURL}/auth/login`, {
        email: form.email,
        password: form.password
        }, {
        withCredentials: true
      });
       console.log("LoggedIn:", res.data);
      navigate("/");
    } catch (err) {
        console.error("Login error:", err.response?.data || err.message);
      alert("Invalid credentials");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" placeholder="Email" onChange={(e) => setForm({ ...form, email: e.target.value })} />
      <input type="password" placeholder="Password" onChange={(e) => setForm({ ...form, password: e.target.value })} />
      <button type="submit">Login</button>
    </form>
  );
}
