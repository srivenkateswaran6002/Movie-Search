import { createContext, useState } from "react";

export const MovieContext = createContext()

export const MovieProvider = ({ children }) => {
    const [url , setUrl ] = useState({anime : "" , other : ""})
    const [fav , setFav] = useState({})
    return (
        <MovieContext.Provider value={{url , setUrl , fav , setFav}} >
            { children }
        </MovieContext.Provider>
    )
}