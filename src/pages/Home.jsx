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
                setError(null)
            }
            catch(err) {
                console.log(err)
                setError("Failed to load movies...")
            }
            finally {
                setLoading(false)
            }
        }

        loadMovies()

    } , [])

    const handleSubmit = (e) => {
        e.preventDefault()



        setSearchQuery("")
    }

    return (
        <>
            <div className="home">
                <form onSubmit={(e) => handleSubmit(e)} className="search-form" >
                    <input type="text" placeholder="Search For Movies..." className="search-input" value={searchQuery} onChange={(e) => {setSearchQuery(e.target.value)}} />
                    <button type="submit" className="search-button">Search</button>
                </form>

                {error && <div className="error-message">{error}</div>}

                {loading ? <div className="loading" >Loading...</div> : 
                    <div className="movie-grid">
                        {movies.map((x) => {
                            return <MovieCard movie={x} key={x.id} />
                        })}
                    </div>
                }

            </div>
        </>
    )
}