import { useState } from "react"
import "../css/MovieCard.css"

const img_url = import.meta.env.VITE_IMG_URL
const anime_id = 16

export default function MovieCard({movie}){
    const [star , setStar] = useState("⭐")
    const [isAnime , setIsAnime] = useState(false)
    // use context - url
    if (movie.genre_ids.includes(anime_id)) {
        setIsAnime(true)
    }

    function favorite(){
        if (star == "⭐") {
            setStar("🌟")
        }
        else {
            setStar("⭐")
        }
    }

    return (
        <>
        <div className="movie-card">
            <div className="movie-poster" onClick={() => {isAnime ? window.open("anime-url") : window.open("other-url")}}>
                <img src={`${img_url}${movie.poster_path}`} alt={movie.title} />
                <div className="movie-overlay">
                    <button className="favorite-btn" onClick={favorite}>{star}</button>
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