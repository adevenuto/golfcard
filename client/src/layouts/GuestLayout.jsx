import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { useAuthContext } from '../context/AuthProvider'

export default function GuestLayout() {
    const { token } = useAuthContext()
    if(token) return <Navigate to="/" />
    
    return <Outlet />
}
