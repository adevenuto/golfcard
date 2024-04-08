import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './router.jsx'
import { AuthProvider } from './context/AuthProvider.jsx'
import { AppProvider } from './context/AppProvider.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <AuthProvider>
            <AppProvider>
                <RouterProvider router={router} />
            </AppProvider>
        </AuthProvider>
    </React.StrictMode>,
)
