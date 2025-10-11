import { createContext } from "react";

export const MovieContext = createContext()

export const MovieProvider = ({ children }) => {
    const [url , setUrl ] = useState({anime : "" , other : ""})
    return (
        <MovieContext.Provider value={{url , setUrl}} >
            { children }
        </MovieContext.Provider>
    )
}