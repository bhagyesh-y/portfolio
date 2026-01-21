import { NavLink } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="nav-container">
                {/* LEFT */}
                <h2 className="logo">Bhagyesh</h2>

                {/* RIGHT */}
                <div className="nav-right">
                    <div className={`nav-links ${open ? "open" : ""}`}>
                        <NavLink to="/" end onClick={() => setOpen(false)}>Home</NavLink>
                        <NavLink to="/projects" onClick={() => setOpen(false)}>Projects</NavLink>
                        <NavLink to="/contact" onClick={() => setOpen(false)}>Contact</NavLink>
                    </div>

                    <button
                        className={`hamburger ${open ? "active" : ""}`}
                        onClick={() => setOpen(!open)}
                        aria-label="Toggle menu"
                    >
                        <span />
                        <span />
                        <span />
                    </button>
                </div>
            </div>
        </nav>

    );
};

export default Navbar;
