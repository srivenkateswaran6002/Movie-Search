import { Link } from "react-router-dom"
import "../css/NavBar.css"

export default function NavBar() {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/" >Movie Find</Link>
            </div>
            <div className="navbar-links">
                <Link to="/" className="nav-links">Home</Link>
                <Link to="/Favorites" className="nav-links">Favorites</Link>
            </div>
        </nav>
    )
}