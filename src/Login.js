import React, { useState } from 'react';
import { useOutletContext } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { Link, useLocation } from 'react-router-dom';
import './Login.css'

export default function Login() {
    const { attemptLogin, user } = useOutletContext();

    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const handleChangeUsername = (e) => setName(e.target.value);
    const handleChangePassword = (e) => setPassword(e.target.value);
    function handleSubmit(e) {
        e.preventDefault();
        console.log(name + " " + password)
        attemptLogin({ name: name, password_hash: password });
    }
    return (
        <div
            className="form-div"
            style={{ paddingTop: "100px" }}
        >
            <div className='logged-not'>
                {user ? <p><strong>Logged In As: {user.name}</strong></p> : <p><strong>Log In:</strong></p>}
            </div>
            <form
                className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
                onSubmit={handleSubmit}
            >
                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="username"
                    >Username: </label>
                    <input
                        className="login-input"
                        type="text"
                        onChange={handleChangeUsername}
                        value={name}
                        placeholder=""
                    />
                </div>
                <div className="mb-6">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="password"
                    >Password: </label>
                    <input
                        className='p-input'
                        type="password"
                        onChange={handleChangePassword}
                        value={password}
                        placeholder=""
                    />

                </div>

                <div className="flex items-center justify-between">
                    <button
                        className="login-btn"
                        type="button"
                        onClick={handleSubmit}
                    >
                        Log In
                    </button>
                    <Link to="/signup"><button className="sign-btn">Sign Up</button></Link>
                </div>
            </form>
        </div>
    );
}