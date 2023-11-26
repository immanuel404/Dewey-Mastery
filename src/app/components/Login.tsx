"use client"
import React from 'react'
import { useState } from "react"
import '../assets/styles/_modal.css'
import axios from 'axios';


export default function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async ()  => {
        // const data = { username, password };
        
        // axios.post('http://localhost/12DeweyMastery/login.php', data)
        // .then(res => {
        //     if (res.data.includes("Login Success!")) {
        //         alert("Login Success! Welcome "+ username+ "!");
        //         var output = res.data.split('=');
        //         document.cookie = `LoggedIn=${output[1]}`;
        //         setUsername(""); 
        //         setPassword("");
        //     } else {
        //         alert(res.data);
        //     }
        // });
    }

  return (
    <div>
        <button type="button" className="btn btn-light btn-sm" data-bs-toggle="modal" data-bs-target="#addLogin">Login</button>

        {/* Modal > Login */}
        <div id="addLogin" className="modal fade" tabIndex={-1} data-bs-keyboard="false" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
            <div className="modal-header">
                <h1 className="modal-title fs-5" id="staticBackdropLabel">USER LOGIN</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                <form id="formLogin" method="post" action="/Home/Login">
                    <div className="mb-3">
                        <p>Username:</p>
                        <input id="txtUsername" type="text" onChange={(e)=>setUsername(e.target.value)} value={username} placeholder="Your username" required className="form-control" />
                    </div>
                    <div className="mb-3">
                        <p>Password:</p>
                        <input id="txtPassword" type="password" onChange={(e)=>setPassword(e.target.value)} value={password} placeholder="Your password" required className="form-control" />
                    </div>
                </form>
            </div>
            
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn btn-success" onClick={handleSubmit} id="btnLogin">Login</button>
            </div>
            </div>
        </div>
        </div>
    </div>
    
  )
}