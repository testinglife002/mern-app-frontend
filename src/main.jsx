import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import 'swiper/css';
import 'swiper/css/scrollbar';

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';

import axios from "axios";

axios.defaults.baseURL = import.meta.env.VITE_API_BASE;
axios.defaults.withCredentials = true;  // ✅ send cookies with requests


/*
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
*/


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
        <App />
    </BrowserRouter>
  </StrictMode>
)


