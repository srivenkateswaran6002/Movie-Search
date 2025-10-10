import { Route, Routes } from 'react-router-dom'
import "./css/App.css"
import Home from './pages/Home'
import Favorites from './pages/Favorites'
import NavBar from './components/NavBar'

function App() {

    return (
        <>
        <main className="main-content">
            <NavBar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/Favourites' element={<Favorites />} />
            </Routes>
        </main>
        
        </>
    )
}

export default App
