import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import nav_logo from './assets/nav_logo.png'
import aboutLogo from './assets/a_bout.png';
import forumLogo from './assets/ufc_300.png';

function Navbar({ user, logout }) {
    const location = useLocation();
    const [active, setActive] = useState("nav_menu");
    const [toggleIcon, setToggleIcon] = useState("nav_toggler");
    const [showLogo, setShowLogo] = useState(true);

    useEffect(() => {
        setShowLogo(location.pathname !== '/');
    }, [location]);

    const navToggle = () => {
        setActive(active === "nav_menu" ? 'nav_menu nav_active' : 'nav_menu');
        setToggleIcon(toggleIcon === 'nav_toggler' ? 'nav_toggler toggle' : 'nav_toggler');
    };

    return (
        <nav className="nav">
            {showLogo && (
                <div className="nav_left">
                    <Link to="/" className="nav_logo_link">
                        <img src={nav_logo} alt="nav_pic" className="nav_logo" />
                    </Link>
                </div>
            )}
            <ul className={active}>
            <li className="nav_item">
                    <Link to="/about" className="nav_link">ABOUT</Link>
                </li>
                <li className="nav_item">
                    <Link to="/map" className="nav_link">EVENT MAP</Link>
                </li>
                <li className="nav_item">
                    <Link to="/data" className="nav_link">FIGHTERS</Link>
                </li>
                <li className="nav_item">
                    <Link to="/event" className="nav_linker">
                        <img src={forumLogo} alt="Forum" className="nav_link_forum" />
                    </Link>
                </li>
                {user ?
                    <li className="nav_item">
                        <Link to="/" className="nav_link" style={{ fontSize: "20px" }} onClick={logout}>Log-Out</Link>
                    </li> :
                    <li className="nav_item">
                        <Link to="/login" className="nav_link">LOG-IN</Link>
                    </li>
                }
            </ul>
            <div onClick={navToggle} className={toggleIcon}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </nav>
    );
}

export default Navbar;
