import React from 'react'
import { Navigate, Outlet, Link } from 'react-router-dom'
import { useAppContext } from '../context/contextProvider'

export default function DefaultLayout() {
    const {user, token} = useAppContext()
    if(!token) return <Navigate to="/login" />

    const logout = (e) => {
        // e.preventDefault()
        console.log(e)
    }

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
                    <div className="flex items-center gap-x-4">
                        <span className="">{ user.email }</span>
                        <a className="text-xs text-red-500 cursor-pointer hover:text-red-700" onClick={(e) => logout(e)}>logout</a>
                    </div>
                </header>
                <main className="p-3 overflow-auto">
                    <Outlet />
                </main>
            </div>
        </div>

    )
}
