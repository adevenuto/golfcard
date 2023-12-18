import React from 'react'
import { Navigate, Outlet, Link } from 'react-router-dom'
import { useAppContext } from '../context/contextProvider'

export default function DefaultLayout() {
    const {user, token} = useAppContext()
    if(!token) return <Navigate to="/login" />

    return (    

        <div className="flex h-screen">
            <aside className="hidden p-3 bg-indigo-600 border-r sm:block w-52">
                <div className="flex flex-col gap-3">
                    <Link className="block p-2 text-white bg-indigo-800 rounded" to="/dashboard">Dashboard</Link>
                    <Link className="block p-2 text-white bg-indigo-800 rounded" to="/login">users</Link>
                </div>
            </aside>
            <div className="flex flex-col w-full">
                <header className="flex items-center justify-between w-full h-16 p-3 border shadow">
                    <span>brand</span>
                    <span>adevenuto</span>
                </header>
                <main className="p-3 overflow-auto">
                    <Outlet />
                </main>
            </div>
        </div>

    )
}
