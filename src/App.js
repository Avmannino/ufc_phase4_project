import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import About from './About'; 
import Map from './Map';
// import Data from './Data';
import './App.css';
import logoImage from './assets/UFC_Logo1.png';

function App() {
  const isRootPath = window.location.pathname === '/';
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/fight_map" element={<Map />} />
          {/* <Route path="/data" element={<Data />} /> */}
        </Routes>
      </div>
      <h1 className='logo'>
      {isRootPath && <img src={logoImage} alt="Logo" className="logo" />}
      </h1>
    </Router>
  );
}

export default App;
