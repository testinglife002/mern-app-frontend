import React, { useState } from "react";
import { Link } from 'react-router-dom'; 
import toast, { Toaster } from 'react-hot-toast';
import axios from "axios";
import api from "../api";

export default function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const baseURL = import.meta.env.VITE_API_BASE.replace(/\/$/, '');  
  
    const handleSubmit = async (e) => {
        e.preventDefault();
        const { name, email, password } = form;
        const baseURL = import.meta.env.VITE_API_BASE.replace(/\/$/, '');
        
        try {
            const res = await axios.post(`${baseURL}/auth/register`, {
            name,
            email,
            password
            }, {
            withCredentials: true
            });

            console.log("Registered:", res.data);
        } catch (err) {
            console.error("Register error:", err.response?.data || err.message);
        }
    }

  return (


    <div>
        <Toaster position={'bottom-center'} 
            reverseOrder={false}
            toastOptions={
                {
                    style: {
                        fontSize: '15px'
                    }
                }
            }
        />


    <div className="container-fluid mb-4" >
      <div className="container" >
        <div className="col-12 text-center mt-5">
          <div className="text-center py-2">
            "Sign-Up"
          </div>
        </div>
        <div className="row h-100 justify-content-center align-items-center" >
        <div className="col-10 col-md-8 col-lg-6">
          <form className="row" onSubmit={handleSubmit} >
            
            <div className="col-12 py-3">
              <input
                type="text"
                className="form-control input-text-box"
                placeholder="User Name"
                name="name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </div>
            


            <div className="col-12 py-3">
              <input
                type="email"
                className="form-control input-text-box"
                placeholder="Email"
                name="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })} 
              />
            </div>
            


            <div className="col-12 py-3">
              <input
                type="password"
                className="form-control input-text-box"
                placeholder="Password"
                name="password"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
              />
            </div>
            
            

            <div className="col-12 py-3 text-center">
           
                <button
                  className="btn btn-primary"
                  type="submit"
                >
                  "Sign-up"
                </button>
                              
            </div>

          </form>
          <div>
            <div className="text-center justify-content-center mt-2 pt-2">
              <p className="small fw-bold mt-2 pt-1 mb-0">
                Don't have an account ?&nbsp;
                <span
                  className="link-danger"
                  style={{ textDecoration: "none", cursor: "pointer" }} >
                  <Link to="/register" className="link-primary" >
                    Sign Up
                  </Link>
                </span>
              </p>
            </div>
            <div className="text-center justify-content-center mt-2 pt-2">
              <p className="small fw-bold mt-2 pt-1 mb-0">
                Already have an account ?&nbsp;
                <span
                  className="link-danger"
                  style={{ textDecoration: "none", cursor: "pointer" }} >
                <Link to="/login" className="link-success" >
                  Sign In
                </Link>
                  
                </span>
              </p>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
    </div>
  );
}
