import { Route, Routes } from 'react-router-dom'
import "./css/App.css"
import Home from './pages/Home'
import Favorites from './pages/Favorites'
import NavBar from './components/NavBar'
import SetUrl from './pages/SetUrl'
import PageNotFound from './pages/PageNotFound'

function App() {

    return (
        <>
        <main className="main-content">
            <NavBar />
            <Routes>
                <Route path='*' element={<PageNotFound />} />
                <Route path='/' element={<Home />} />
                <Route path='/Favorites' element={<Favorites />} />
                <Route path='/SetUrl' element={<SetUrl />} />
            </Routes>
        </main>
        
        </>
    )
}

export default App
