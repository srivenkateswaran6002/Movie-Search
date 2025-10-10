import "../css/MovieCard.css"

const img_url = import.meta.env.VITE_IMG_URL

export default function MovieCard({movie}){

    function favorite(){
        alert("Favorite Button Clicked!")
    }

    return (
        <>
        <div className="movie-card">
            <div className="movie-poster">
                <img src={`${img_url}${movie.poster_path}`} alt={movie.title} />
                <div className="movie-overlay">
                    <button className="favorite-btn" onClick={favorite}>❤️</button>
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