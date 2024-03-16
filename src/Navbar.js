import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Navbar.css';
import ufcLogo from './assets/UFC_Logo1.png'; 

function Navbar() {
    const [active, setActive] = useState("nav_menu");
    const [toggleIcon, setToggleIcon] = useState("nav_toggler");

    const navToggle = () => {
        setActive(active === "nav_menu" ? 'nav_menu nav_active' : 'nav_menu');

        // Toggle Icon
        setToggleIcon(toggleIcon === 'nav_toggler' ? 'nav_toggler toggle' : 'nav_toggler');
    };

    return (
        <nav className="nav">
            <Link to="/" className="nav_brand" style={{ backgroundImage: `url(${ufcLogo})` }}></Link>

            <ul className={active}>
                <li className="nav_item"><Link to="/" className="nav_link">HOME</Link></li>
                <li className="nav_item"><Link to="/about" className="nav_link">ABOUT</Link></li>
                <li className="nav_item"><Link to="/fight_map" className="nav_link">FIGHTS📍</Link></li>
                <li className="nav_item"><Link to="/data" className="nav_link">DATA</Link></li>
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
