import { Link } from "react-router-dom";

import "../styles/Navbar.module.css";

export default function Navbar() {
    return (
        <nav>
            <Link to="/" className="btn-green">Home</Link>
            <Link to="/journal" className="btn-green">Journal</Link>
            <Link to="/party" className="btn-green">Party</Link>
            {/* <Link to="/about" className="btn-green">About</Link> */}
        </nav>
    );
}
