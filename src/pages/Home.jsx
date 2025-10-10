import { useState } from "react"
import MovieCard from "../components/MovieCard"
import "../css/Home.css"


export default function Home() {

    const [searchQuery, setSearchQuery] = useState("")

    const movies = [
        { id: 1, title: "The Diddy", release_date: "0001" },
        { id: 2, title: "The Diddy Party", release_date: "0002" },
        { id: 3, title: "The Diddy Strikes Again", release_date: "0003" }
    ]

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