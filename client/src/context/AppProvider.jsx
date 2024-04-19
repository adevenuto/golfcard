import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();

const initialData = {
    favoriteCourses: [],
    selectedCourse: null,
}

export const AppProvider = ({ children }) => {
    const [appData, setAppData] = useState(initialData);

    function setSelectedCourse(course = null) {
        if(!course) {
            return setAppData(null);
        }
        setAppData(prev => ({
            ...prev,
            selectedCourse: course
            })
        );
    }
    
    return (
        <AppContext.Provider value={{
          appData,
          setSelectedCourse
        }} >
            { children }
        </AppContext.Provider>
    )
}

export const useAppContext = () => useContext(AppContext);