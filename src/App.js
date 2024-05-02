import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Outlet, useNavigate } from 'react-router-dom'; // Correctly import useNavigate
import Navbar from './Navbar';

import './App.css';
import logoImage from './assets/UFC_Logo1.png';

function App() {
  const [navActive, setNavActive] = useState(false);
  const navigate = useNavigate(); // Correct usage of useNavigate

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`/check_session`).then((res) => {
      if (res.ok) {
        res.json().then((user) => setUser(user));
      }
    });
  }, []);

  function attemptLogin(userInfo) {
    fetch(`/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accepts: "application/json",
      },
      body: JSON.stringify(userInfo),
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      throw res;
    })
    .then((data) => {
      setUser(data);
      navigate("/");
    })
    .catch((e) => {
      alert('incorrect username or password')
      console.log(e);
    });
  }

  function logout() {
    fetch(`/logout`, { method: "DELETE" }).then((res) => {
      if (res.ok) {
        setUser(null);
      }
    });
  }

  const isRootPath = window.location.pathname === '/';

  return (
    <>
      <div className="app">
        <Navbar active={navActive} toggleNav={toggleNav} user={user} logout={logout} />
        <Outlet context={{ user, attemptLogin, logout }}/>
      </div>
      <h1 className='logo'>
        {isRootPath && <img src={logoImage} alt="Logo" className="logo" />}
      </h1>
    </>
  );
}

export default App;
