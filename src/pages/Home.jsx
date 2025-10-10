import { useEffect, useState } from "react"
import MovieCard from "../components/MovieCard"
import "../css/Home.css"
import { getPopularMovies } from "../services/api"


export default function Home() {

    const [searchQuery, setSearchQuery] = useState("")
    const [movies, setMovies] = useState([])
    const [error , setError] = useState(null)
    const [loading , setLoading] = useState(true)


    useEffect( () => {

        const loadMovies = async () => {
            try {
                const popularMovies = await getPopularMovies()
                setMovies(popularMovies)
            }
            catch(err) {
                console.log(err)
                setError(err)
            }
            finally {
                setLoading(false)
            }
        }
        
        loadMovies()

    } , [])

    function handleSubmit(e) {
        e.preventDefault()
        alert(`Searched : ${searchQuery}`)
        setSearchQuery("")
    }

    return (
        <>
            <div className="home">
                <form onSubmit={(e) => handleSubmit(e)} className="search-form" >
                    <input type="text" placeholder="Search For Movies..." className="search-input" value={searchQuery} onChange={(e) => {setSearchQuery(e.target.value)}} />
                    <button type="submit" className="search-button">Search</button>
                </form>

                <div className="movie-grid">
                    {movies.map((x) => {
                        return <MovieCard movie={x} key={x.id} />
                    })}
                </div>

            </div>
        </>
    )
}