import { Link } from "react-router-dom";
import ErrorBoundary from "./ErrorBoundary";
const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>CtrlSchool of Engineering</h1>
            <div className="links">
                <Link to="/" style={{
                    color:"black",
                    backgroundColor: "#f7efe9",
            
                }}>Home</Link>
                <Link to="/about" style={{
                    color: "white",
                    backgroundColor: "black"
                }}>About</Link>
                <Link to="/contact" style={{
                    color: "white",
                    backgroundColor: "black"
                }}>Contact</Link>
                <Link to="/dashboard" style={{
                    color: "white",
                    backgroundColor: "black"
                }}>Dashboard</Link>
                <ErrorBoundary>
                <Link to="/login" style={{
                    color:"white",
                    backgroundColor: "black",
                }}>Log In</Link>
                </ErrorBoundary>
            </div>

        </nav>
     );
}
 
export default Navbar;