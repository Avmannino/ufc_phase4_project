import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import About from './About'; 
import Map from './Map';
import Data from './Data';
import './App.css';
import logoImage from './assets/UFC_Logo1.png';

function App() {
  const [navActive, setNavActive] = useState(false);

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  const isRootPath = window.location.pathname === '/';

  return (
    <Router>
      <div className="app">
      <Navbar active={navActive} toggleNav={toggleNav} />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/map" element={<Map />} />
          <Route path="/fantasy" element={<Home />} />
          <Route path="/data" element={<Data />} /> 
        </Routes>
      </div>
      <h1 className='logo'>
        {isRootPath && <img src={logoImage} alt="Logo" className="logo" />}
      </h1>
    </Router>
  );
}

export default App;
