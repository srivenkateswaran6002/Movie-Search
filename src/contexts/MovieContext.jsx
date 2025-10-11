import { createContext, useState, useEffect } from "react"

export const MovieContext = createContext()

export const MovieProvider = ({ children }) => {

    const [url, setUrl] = useState(() => {
        const savedUrl = localStorage.getItem("movie_url")
        return savedUrl ? JSON.parse(savedUrl) : { anime: "" , other: "" }
    })


    const [fav, setFav] = useState(() => {
        const savedFav = localStorage.getItem("movie_fav")
        return savedFav ? JSON.parse(savedFav) : []
    })


    useEffect(() => {
        localStorage.setItem("movie_url", JSON.stringify(url))
    }, [url])


    useEffect(() => {
        localStorage.setItem("movie_fav", JSON.stringify(fav))
    }, [fav])

    return (
        <MovieContext.Provider value={{url , setUrl , fav , setFav}} >
            { children }
        </MovieContext.Provider>
    )
}
