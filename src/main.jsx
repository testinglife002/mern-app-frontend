import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import 'swiper/css';
import 'swiper/css/scrollbar';

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';


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


