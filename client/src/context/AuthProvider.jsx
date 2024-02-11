import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext()

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({
        name: 'Anthony',
        email: 'anthonydevenuto@gmail.com'
    })
    const [token, _setToken] = useState(null)

    const setToken = (token) => {
        _setToken(token)
        if(token) {
            localStorage.setItem('ACCESS_TOKEN', token)
        } else {
            localStorage.removeItem('ACCESS_TOKEN')
        }
    }

    useEffect(() => {
      if(localStorage.ACCESS_TOKEN) _setToken(localStorage.ACCESS_TOKEN)
    }, [])
    
    
    return (
        <AppContext.Provider value={{
            user,
            token,
            setToken,
            setUser
        }} >
            { children }
        </AppContext.Provider>
    )
}

export const useAuthContext = () => useContext(AppContext)