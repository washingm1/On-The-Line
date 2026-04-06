import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { useState } from "react";

export default function Navbar (){ 
    const [open, setOpen] = useState(false);
    return <nav className="nav">
        <Link to="/" className="home-page">On The Line</Link>
                  
        <div className="hamburger" onClick={() => setOpen(!open)}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>

        <ul className={open ? "open": ""}>
          <CustomLink className="navLink" to="/about" onClick={() => setOpen(false)}>About</CustomLink>
            <CustomLink className="navLink" to ="/pricing" onClick={() => setOpen(false)}>Pricing</CustomLink>
          <CustomLink className="navLink" to="/contact" onClick={() => setOpen(false)}>Contact</CustomLink>
        </ul>
    </nav>
}

function CustomLink ({ to ,children, ...props}) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
    return (
    <li className= {isActive ? "active" : ""}>
        <Link to={to} {...props}>
            {children}
            </Link>
        </li> 
    )

}