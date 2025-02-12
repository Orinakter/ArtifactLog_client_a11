import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import { router } from './Router/router.jsx'
import AuthProvider from './AuthProvider/AuthProvider.jsx'
import { ToastContainer, toast } from 'react-toastify';
import ThemeProvider from './AuthProvider/ThemeProvider.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
   <ThemeProvider>
   <AuthProvider>
   <RouterProvider router={router}></RouterProvider>
   <ToastContainer></ToastContainer>
   </AuthProvider>
   </ThemeProvider>
  </StrictMode>,
)
