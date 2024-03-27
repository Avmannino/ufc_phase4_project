import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

import './App.css';
import logoImage from './assets/UFC_Logo1.png';
import { Outlet } from "react-router-dom";
import { useOutletContext } from 'react-router-dom';


function App() {
  const [navActive, setNavActive] = useState(false);

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  /**********************
      Check Session 
      Done whenever the page is reloaded
  ************************/
  useEffect(() => {
    fetch(`/check_session`).then((res) => {
      if (res.ok) {
        res.json().then((user) => setUser(user));
      }
    });
  }, []);

  /**********************
      Authentication
      Functions that will be passed down
  ************************/
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
      // if we log in successfully, we want to store the
      // user object in state
      .then((data) => {
        setUser(data);
        // go to the home page if we log in successfully
        navigate("/");
      })
      .catch((e) => {
        alert('incorrect username or password')
        console.log(e);
      });
  }
  function logout() {
    // for logging out we just set user to null
    fetch(`/logout`, { method: "DELETE" }).then((res) => {
      if (res.ok) {
        setUser(null);
      }
    });
  }
  function attemptSignup(newSignup){
    fetch(`/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accepts: "application/json",
      },
      body: JSON.stringify(newSignup),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw res;
      })
      // if we log in successfully, we want to store the
      // user object in state
      .then((data) => {
        setUser(data);
        // go to the home page if we log in successfully
        
      })
      .catch((e) => {

        e.json().then(data => alert(data.error))
        console.log(e);
      });
  }

  function attemptComment(newComment){
    return new Promise((resolve, reject) => {
    fetch(`/comments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accepts: "application/json",
      },
      body: JSON.stringify(newComment),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw res;
      })
      .then((data) => {
        // setUser(data);
        resolve(data)     
      })
      .catch((e) => {
        e.json().then(data => alert(data.error))
        reject(e)
      });
  })
  }



  const isRootPath = window.location.pathname === '/';

  return (
    <>
      <div className="app">
        <Navbar active={navActive} toggleNav={toggleNav} user={user} logout={logout} />
        <Outlet context={{ user, attemptLogin, logout,attemptSignup,attemptComment }}/>
      </div>
      <h1 className='logo'>
        {isRootPath && <img src={logoImage} alt="Logo" className="logo" />}
      </h1>
    </>
  );
}

export default App;
