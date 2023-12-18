import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useAppContext } from '../context/contextProvider'

export default function DefaultLayout() {
    const {user, token} = useAppContext()

    console.log(!token)

    if(!token) {
        return <Navigate to="/login" />
    } 
    return (
        <div>
            <Outlet />
        </div>
    )
}
