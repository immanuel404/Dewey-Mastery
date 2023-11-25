"use client"
import React from 'react'


export default function Logout() {
    
  const handleLogout = ()  => {
    document.cookie = "LoggedIn=";
    alert("You are now logged out!");
  }

  return (
    <div>
        <button type="button" id="logout" onClick={handleLogout} className="btn btn-light btn-sm">Logout</button>
    </div>
  )
}