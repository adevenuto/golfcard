import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext()

export const AppProvider = ({ children }) => {
    const [favoriteCourses, setFavoriteCourses] = useState([])

    // useEffect(() => {
    //   if(localStorage.ACCESS_TOKEN) _setToken(localStorage.ACCESS_TOKEN)
    // }, [])
    
    
    return (
        <AppContext.Provider value={{
          favoriteCourses
        }} >
            { children }
        </AppContext.Provider>
    )
}

export const useAppContext = () => useContext(AppContext)