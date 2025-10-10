const url = import.meta.env.VITE_BASE_URL
const key = import.meta.env.VITE_API_KEY

export const getPopularMovies = async () => {
    const response = await fetch(`${url}/movies/popular?api_key=${key}`)
    const data = await response.json()
    // console.log(data)
    return data.results
}

export const searchMovies = async (query) => {
    const response = await fetch(`${url}/search/movie?api_key=${key}&query=${encodeURIComponent(query)}`)
    const data = await response.json()
    // console.log(data)
    return data.results
}