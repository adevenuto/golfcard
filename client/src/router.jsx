import { createBrowserRouter, Navigate } from "react-router-dom"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Users from "./pages/Users"
import NotFound from "./pages/NotFound"
import DefaultLayout from "./layouts/DefaultLayout"
import GuestLayout from "./layouts/GuestLayout"
import Dashboard from "./pages/Dashboard"

const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      {
        path: '/',
        element: <Navigate to="/dashboard" />
      },
      {
        path: '/dashboard',
        element: <Dashboard />
      },
      {
        path: '/users',
        element: <Users />
      }
    ]
  },
  {
    path: '/',
    element: <GuestLayout />,
    children: [
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/register',
        element: <Register />
      }
    ]
  },
  {
    path: '*',
    element: <NotFound />
  },
])

export default router