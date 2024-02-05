import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { useAppContext } from '../context/contextProvider'

export default function GuestLayout() {
    const { token } = useAppContext()
    if(token) return <Navigate to="/" />
    
    return <Outlet />
}
