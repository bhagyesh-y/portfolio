import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    // Lock background scroll when menu is open (mobile UX)
    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "auto";
        return () => (document.body.style.overflow = "auto");
    }, [open]);

    const closeMenu = () => setOpen(false);

    return (
        <nav className="navbar">
            <div className="nav-container">
                {/* LEFT: LOGO */}
                <div className="logo">Bhagyesh</div>

                {/* RIGHT: HAMBURGER */}
                <button
                    className={`hamburger ${open ? "active" : ""}`}
                    onClick={() => setOpen(!open)}
                    aria-label="Toggle navigation menu"
                    aria-expanded={open}
                >
                    <span />
                    <span />
                    <span />
                </button>

                {/* NAV LINKS (desktop + mobile dropdown) */}
                <div className={`nav-links ${open ? "open" : ""}`}>
                    <NavLink to="/" end onClick={closeMenu}>
                        Home
                    </NavLink>
                    <NavLink to="/projects" onClick={closeMenu}>
                        Projects
                    </NavLink>
                    <NavLink to="/contact" onClick={closeMenu}>
                        Contact
                    </NavLink>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
