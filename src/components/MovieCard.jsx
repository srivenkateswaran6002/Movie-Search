import { useState, useEffect, useContext } from "react"
import "../css/MovieCard.css"
import { MovieContext } from "../contexts/MovieContext"

const img_url = import.meta.env.VITE_IMG_URL

export default function MovieCard({ movie }) {
    const [star, setStar] = useState("⭐")
    const [isAnime, setIsAnime] = useState(false)
    const { url } = useContext(MovieContext)
    const {fav , setFav} = useContext(MovieContext)

    useEffect(() => {
        const title = movie.title?.toLowerCase() || "";
        const original = movie.original_title?.toLowerCase() || "";
        const genres = movie.genre_ids || [];

        if (
            genres.includes(16) || 
            genres.includes(10751) || // Family
            title.includes("anime") ||
            original.includes("anime")
        ) {
            setIsAnime(true);
        } else {
            setIsAnime(false);
        }
    }, [movie]);



    function favorite() {
        setStar(prev => prev === "⭐" ? "🌟" : "⭐")

        if (fav.some(m => m.id === movie.id)) setFav(prevFav => prevFav.filter(m => m.id !== movie.id))
        else setFav(prevFav => [...prevFav, movie])

    }

    return (
        <>
            <div className="movie-card">
                <div className="movie-poster" onClick={(e) => { isAnime ? window.open(`${url.anime}${movie.title}`) : window.open(`${url.other}${movie.title}`) }}>
                    <img src={`${img_url}${movie.poster_path}`} alt={movie.title} />
                    <div className="movie-overlay">
                        <button className="favorite-btn" onClick={(e) => { e.stopPropagation(); favorite() }}>{star}</button>
                    </div>
                </div>
                <div className="movie-info">
                    <h3>{movie.title}</h3>
                    <p>{movie.release_date}</p>
                </div>
            </div>
        </>
    )
}


// alternate : 🌟 , ⭐