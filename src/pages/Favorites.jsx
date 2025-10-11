import { useContext, useState } from "react";
import "../css/Favorites.css";
import { MovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";

export default function Favorites() {
    const { fav, setFav } = useContext(MovieContext)
    const [isFavEmpty, setFavEmpty] = useState(fav.length === 0)
    return (
        <>
            {isFavEmpty ? (
                <div className="favorites">
                    <h2>Your Favorites</h2>
                    <div className="favorites-empty">
                        <h2>No Favorites Yet</h2>
                        <p>Add some movies to your favorites to see them here!</p>
                    </div>
                </div>
            ) : (
                <div className="movie-grid">
                    {fav.map((x) => {
                        return <MovieCard movie={x} key={x.id} />
                    })}
                </div>
            )}
        </>
    )
}
