import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import { useAuthContext } from '../context/AuthProvider';
import axiosClient from '../axios-client';

export default function Login() {
    const email = useRef()
    const password = useRef()
    const [errors, setErrors] = useState({email:null, password:null, message:null})

    const { setUser, setToken } = useAuthContext()

    const onSubmit = (e) => {
        e.preventDefault()
        const payload = {
            email: email.current.value,
            password: password.current.value
        }

        axiosClient.post('/login', payload)
            .then(({ data }) => {
                setToken(data.token)
                setUser(data.user)
                setErrors({email:null, password:null, message:null})
            }).catch((err) => {
                const response = err.response
                if (response && response.status === 422) setErrors(response.data.errors)
                if (response && response.status === 400) setErrors((...prev) => ({
                    ...prev,
                    message: response.data.message
                }))
            })
    }
    
    return (
        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center h-screen px-6 py-8 mx-auto lg:py-0">
                {/* <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                    <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" />
                    Flowbite    
                </a> */}
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Log in to your account
                        </h1>
                        <form onSubmit={onSubmit} className="space-y-4 md:space-y-6">
                            <span className='text-xs text-red-500'>{ errors && errors.message}</span>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                                <input 
                                    onChange={() => {
                                        if(errors.email||errors.message) setErrors((prev) => ({...prev, email: null, message: null}))
                                    }}
                                    ref={email} 
                                    type="email" 
                                    name="email" 
                                    id="email" 
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" 
                                    required
                                />
                                <span className='text-xs text-red-500'>{ errors && errors.email}</span>
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input 
                                    onChange={() => {
                                        if(errors.password||errors.message) setErrors((prev) => ({...prev, password: null, message: null}))
                                    }}
                                    ref={password} 
                                    type="password" 
                                    name="password" 
                                    id="password" 
                                    placeholder="••••••••" 
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    required
                                />
                                <span className='text-xs text-red-500'>{ errors && errors.password}</span>
                            </div>
                            <div className="flex">
                                <a href="#" className="ml-auto text-sm font-medium text-indigo-600 hover:underline dark:text-indigo-500">Forgot password?</a>
                            </div>
                            <button type="submit" className="w-full text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800">Sign in</button>
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Don’t have an account yet? <Link to="/register" className="font-medium text-indigo-600 hover:underline dark:text-indigo-500">Sign up</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
