"use client"
import React from 'react'
import { useState } from "react"
import '../assets/styles/_modal.css'
import axios from 'axios';


export default function Signup() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async ()  => {
        // const data = { username, password };
        
        // axios.post('http://localhost/12DeweyMastery/signup.php', data)
        // .then(res => {
        //     alert(res.data);
        //     setUsername(""); setPassword("");
        // });
    }

  return (
    <div>
        <button type="button" className="btn btn-light btn-sm" data-bs-toggle="modal" data-bs-target="#addRegister">Register</button>

        <div id="addRegister" className="modal fade" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="staticBackdropLabel">USER SIGNUP</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form id="formRegister" method="post" action="/Home/Register">
                            <div className="mb-3">
                                <p>Username:</p>
                                <input id="txtUsername2" type="text" onChange={(e)=>setUsername(e.target.value)} value={username} placeholder="Your username" required className="form-control"/>
                            </div>
                            <div className="mb-3">
                                <p>Password:</p>
                                <input id="txtPassword2" type="password" onChange={(e)=>setPassword(e.target.value)} value={password} placeholder="Your password" required className="form-control"/>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-success" onClick={handleSubmit} id="btnRegister">Register</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
  )
}