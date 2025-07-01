import { Link } from "react-router-dom";
import '../styles/Header.css';;
function Header(){
    return (
        <header className="header">
            <h1 className="logo">ShoppyGlobe</h1>
            <nav className="nav-links">
                <Link to = "/">Home</Link>
                <Link to = "/cart">Cart</Link>
            </nav>
        </header>
    )
}
export default Header;