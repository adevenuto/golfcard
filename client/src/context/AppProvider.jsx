import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext()

export const AppProvider = ({ children }) => {
    const [favoriteCourses, setFavoriteCourses] = useState([
      {
        "id": 7,
        "city_id": "6",
        "state_id": "1",
        "name": "Andalusia Country Club",
        "street": "210 Country Club Dr",
        "state": "AL",
        "postal_code": "36421-4204",
        "layout_data": {
            "teeboxes": [
                {
                    "order": 1,
                    "name": "Blue",
                    "holeCount": 18,
                    "holes": [
                        {
                            "holeNum": "1",
                            "par": "5",
                            "length": "513"
                        },
                        {
                            "holeNum": "2",
                            "par": "4",
                            "length": "346"
                        },
                        {
                            "holeNum": "3",
                            "par": "3",
                            "length": "157"
                        },
                        {
                            "holeNum": "4",
                            "par": "5",
                            "length": "496"
                        },
                        {
                            "holeNum": "5",
                            "par": "3",
                            "length": "160"
                        },
                        {
                            "holeNum": "6",
                            "par": "4",
                            "length": "374"
                        },
                        {
                            "holeNum": "7",
                            "par": "5",
                            "length": "485"
                        },
                        {
                            "holeNum": "8",
                            "par": "4",
                            "length": "373"
                        },
                        {
                            "holeNum": "9",
                            "par": "3",
                            "length": "182"
                        },
                        {
                            "holeNum": "10",
                            "par": "5",
                            "length": "516"
                        },
                        {
                            "holeNum": "11",
                            "par": "4",
                            "length": "380"
                        },
                        {
                            "holeNum": "12",
                            "par": "3",
                            "length": "155"
                        },
                        {
                            "holeNum": "13",
                            "par": "5",
                            "length": "530"
                        },
                        {
                            "holeNum": "14",
                            "par": "4",
                            "length": "394"
                        },
                        {
                            "holeNum": "15",
                            "par": "4",
                            "length": "348"
                        },
                        {
                            "holeNum": "16",
                            "par": "3",
                            "length": "214"
                        },
                        {
                            "holeNum": "17",
                            "par": "4",
                            "length": "347"
                        },
                        {
                            "holeNum": "18",
                            "par": "4",
                            "length": "360"
                        }
                    ]
                },
                {
                    "order": 2,
                    "name": "Gold",
                    "holeCount": 18,
                    "holes": [
                        {
                            "holeNum": "1",
                            "par": "5",
                            "length": "491"
                        },
                        {
                            "holeNum": "2",
                            "par": "4",
                            "length": "338"
                        },
                        {
                            "holeNum": "3",
                            "par": "3",
                            "length": "119"
                        },
                        {
                            "holeNum": "4",
                            "par": "5",
                            "length": "405"
                        },
                        {
                            "holeNum": "5",
                            "par": "3",
                            "length": "144"
                        },
                        {
                            "holeNum": "6",
                            "par": "4",
                            "length": "317"
                        },
                        {
                            "holeNum": "7",
                            "par": "5",
                            "length": "454"
                        },
                        {
                            "holeNum": "8",
                            "par": "4",
                            "length": "324"
                        },
                        {
                            "holeNum": "9",
                            "par": "3",
                            "length": "169"
                        },
                        {
                            "holeNum": "10",
                            "par": "5",
                            "length": "451"
                        },
                        {
                            "holeNum": "11",
                            "par": "4",
                            "length": "365"
                        },
                        {
                            "holeNum": "12",
                            "par": "3",
                            "length": "148"
                        },
                        {
                            "holeNum": "13",
                            "par": "5",
                            "length": "468"
                        },
                        {
                            "holeNum": "14",
                            "par": "4",
                            "length": "360"
                        },
                        {
                            "holeNum": "15",
                            "par": "4",
                            "length": "293"
                        },
                        {
                            "holeNum": "16",
                            "par": "3",
                            "length": "113"
                        },
                        {
                            "holeNum": "17",
                            "par": "4",
                            "length": "297"
                        },
                        {
                            "holeNum": "18",
                            "par": "4",
                            "length": "330"
                        }
                    ]
                },
                {
                    "order": 3,
                    "name": "White",
                    "holeCount": 18,
                    "holes": [
                        {
                            "holeNum": "1",
                            "par": "5",
                            "length": "501"
                        },
                        {
                            "holeNum": "2",
                            "par": "4",
                            "length": "343"
                        },
                        {
                            "holeNum": "3",
                            "par": "3",
                            "length": "147"
                        },
                        {
                            "holeNum": "4",
                            "par": "5",
                            "length": "479"
                        },
                        {
                            "holeNum": "5",
                            "par": "3",
                            "length": "150"
                        },
                        {
                            "holeNum": "6",
                            "par": "4",
                            "length": "370"
                        },
                        {
                            "holeNum": "7",
                            "par": "5",
                            "length": "470"
                        },
                        {
                            "holeNum": "8",
                            "par": "4",
                            "length": "373"
                        },
                        {
                            "holeNum": "9",
                            "par": "3",
                            "length": "173"
                        },
                        {
                            "holeNum": "10",
                            "par": "5",
                            "length": "487"
                        },
                        {
                            "holeNum": "11",
                            "par": "4",
                            "length": "370"
                        },
                        {
                            "holeNum": "12",
                            "par": "3",
                            "length": "154"
                        },
                        {
                            "holeNum": "13",
                            "par": "5",
                            "length": "521"
                        },
                        {
                            "holeNum": "14",
                            "par": "4",
                            "length": "380"
                        },
                        {
                            "holeNum": "15",
                            "par": "4",
                            "length": "344"
                        },
                        {
                            "holeNum": "16",
                            "par": "3",
                            "length": "205"
                        },
                        {
                            "holeNum": "17",
                            "par": "4",
                            "length": "337"
                        },
                        {
                            "holeNum": "18",
                            "par": "4",
                            "length": "347"
                        }
                    ]
                },
                {
                    "order": 4,
                    "name": "Red (L)",
                    "holeCount": 18,
                    "holes": [
                        {
                            "holeNum": "1",
                            "par": "5",
                            "length": "491"
                        },
                        {
                            "holeNum": "2",
                            "par": "4",
                            "length": "338"
                        },
                        {
                            "holeNum": "3",
                            "par": "3",
                            "length": "119"
                        },
                        {
                            "holeNum": "4",
                            "par": "5",
                            "length": "405"
                        },
                        {
                            "holeNum": "5",
                            "par": "3",
                            "length": "144"
                        },
                        {
                            "holeNum": "6",
                            "par": "4",
                            "length": "317"
                        },
                        {
                            "holeNum": "7",
                            "par": "5",
                            "length": "454"
                        },
                        {
                            "holeNum": "8",
                            "par": "4",
                            "length": "324"
                        },
                        {
                            "holeNum": "9",
                            "par": "3",
                            "length": "169"
                        },
                        {
                            "holeNum": "10",
                            "par": "5",
                            "length": "451"
                        },
                        {
                            "holeNum": "11",
                            "par": "4",
                            "length": "365"
                        },
                        {
                            "holeNum": "12",
                            "par": "3",
                            "length": "148"
                        },
                        {
                            "holeNum": "13",
                            "par": "5",
                            "length": "468"
                        },
                        {
                            "holeNum": "14",
                            "par": "4",
                            "length": "360"
                        },
                        {
                            "holeNum": "15",
                            "par": "4",
                            "length": "293"
                        },
                        {
                            "holeNum": "16",
                            "par": "3",
                            "length": "113"
                        },
                        {
                            "holeNum": "17",
                            "par": "4",
                            "length": "297"
                        },
                        {
                            "holeNum": "18",
                            "par": "4",
                            "length": "330"
                        }
                    ]
                }
            ]
        },
        "url": "https://www.golflink.com/golf-courses/al/andalusia/andalusia-country-club",
        "created_at": "2023-03-04T17:45:37.000000Z",
        "updated_at": "2024-03-10T22:03:53.000000Z"
    }
    ])

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