import React from 'react'
import { Navigate, Outlet, Link } from 'react-router-dom'
import { useAuthContext } from '../context/AuthProvider'
import axiosClient from '../axios-client'

export default function DefaultLayout() {
    const {user, token, setToken, setUser} = useAuthContext()
    if(!token) return <Navigate to="/login" />

    

    const logout = (e) => {
        axiosClient.post('/logout')
            .then(res => {
                setToken()
                setUser({})
            })
    }

    return (    

        <div className="flex h-screen">
            {/* <aside className="p-3 transition ease-in bg-indigo-600 duration-5000 delay-3000 w-52 -left-52 sm:left-0">
                <div className="flex flex-col gap-3">
                    <Link className="block p-2 text-white bg-indigo-800 rounded" to="/dashboard">Dashboard</Link>
                </div>
            </aside> */}
            <div className="flex flex-col w-full">
                <header className="flex items-center justify-between w-full h-16 p-3 shadow">
                    <span>{import.meta.env.VITE_APP_NAME}</span>
                    <div className="flex items-center gap-x-4">
                        <span className="">{ user.email }</span>
                        <a 
                          onClick={(e) => logout(e)}
                          className="text-xs text-red-500 cursor-pointer hover:text-red-700"
                        >
                          logout
                        </a>
                    </div>
                </header>
                <main className="flex-1 w-full p-3 mx-auto overflow-auto md:max-w-7xl">
                    <Outlet />
                </main>
            </div>
        </div>

    )
}
