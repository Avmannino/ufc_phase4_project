import React, { useState } from 'react';
import { useOutletContext } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import './Login.css'

export default function Signup(){
    const { attemptSignup } = useOutletContext();
    const [name,setName]=useState("")
    const [password,setPassword]=useState("")
    const handleChangeName = (e) => setName(e.target.value);
    const handleChangePassword = (e) => setPassword(e.target.value);
    function handleSubmit(e) {
        e.preventDefault();
        attemptSignup({ name: name, password: password });
    }
    return(
        <div
        className="form-div"
        style={{ paddingTop: "100px" }}
    >
        <p className='sign-text'>Sign Up Here:</p>
        <form
            className=""
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
                    onChange={handleChangeName}
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
                    Sign Up
                </button>
            </div>
        </form>
    </div>
);
}