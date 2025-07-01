import { Link } from "react-router-dom";
import '../styles/NotFound.css'
function NotFound(){
    return (
        //if we got unidentified link return back to home
        <div className="not-found">
            <h1>404</h1>
            <p>Page Not Found</p>
            <Link to ='/' className="home-link">Go Back to Home</Link>
        </div>
    );
}
export default NotFound;