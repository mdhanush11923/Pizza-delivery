import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { NextUIProvider } from '@nextui-org/react'
import { BrowserRouter } from "react-router-dom";


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename={process.env.NODE_ENV === 'production' ? "/pizza-delivery" : "/"}>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
