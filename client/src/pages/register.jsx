import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import axiosClient from '../axios-client';
import { useAppContext } from '../context/contextProvider';

export default function Register() {
    const first_name = useRef()
    const last_name = useRef()
    const email = useRef()
    const password = useRef()
    const password_confirmation = useRef()
    const [errors, setErrors] = useState({
        first_name:null, 
        last_name:null, 
        email:null,
        password:null,
        message:null
    })

    const { setUser, setToken } = useAppContext()

    const onSubmit = (e) => {
        e.preventDefault();
        const payload = {
            first_name: first_name.current.value,
            last_name: last_name.current.value,
            email: email.current.value,
            password: password.current.value,
            password_confirmation: password_confirmation.current.value
        }
        
        axiosClient.post('/register', payload)
            .then(({ data }) => {
                setToken(data.token)
                setUser(data.user)
            }).catch((err) => {
                const response = err.response
                if (response && response.status === 422) setErrors(response.data.errors)
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
                            Create an account
                        </h1>
                        <form onSubmit={onSubmit} className="space-y-4 md:space-y-6">
                            <div>
                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
                                <input 
                                    onChange={() => {
                                        if(errors.first_name) setErrors((prev) => ({...prev, first_name: null}))
                                    }}
                                    ref={first_name} 
                                    type="text" 
                                    name="name" 
                                    id="name" 
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" 
                                />
                                <span className='text-xs text-red-500'>{ errors && errors.first_name}</span>
                            </div>
                            <div>
                                <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last name</label>
                                <input 
                                    onChange={() => {
                                        if(errors.last_name) setErrors((prev) => ({...prev, last_name: null}))
                                    }}
                                    ref={last_name} 
                                    type="text" 
                                    name="last_name" 
                                    id="last_name" 
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Doe"  
                                />
                                <span className='text-xs text-red-500'>{ errors && errors.last_name}</span>
                            </div>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                                <input 
                                    onChange={() => {
                                        if(errors.email) setErrors((prev) => ({...prev, email: null}))
                                    }}
                                    ref={email} 
                                    type="email" 
                                    name="email" 
                                    id="email" 
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="jdoe@company.com"  
                                />
                                <span className='text-xs text-red-500'>{ errors && errors.email}</span>
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input 
                                    onChange={() => {
                                        if(errors.password) setErrors((prev) => ({...prev, password: null}))
                                    }}
                                    ref={password} 
                                    type="password" 
                                    name="password" 
                                    id="password" 
                                    placeholder="••••••••" 
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                />
                                <span className='text-xs text-red-500'>{ errors && errors.password}</span>
                            </div>
                            <div>
                                <label htmlFor="password_confirmation" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password Confirm</label>
                                <input 
                                    ref={password_confirmation} 
                                    type="password" 
                                    name="password_confirmation" 
                                    id="password_confirmation" 
                                    placeholder="••••••••" 
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                />
                            </div>
                            <button type="submit" className="w-full text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800">Create an account</button>
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Already have an account? <Link to="/login" className="font-medium text-indigo-600 hover:underline dark:text-indigo-500">Log in</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}