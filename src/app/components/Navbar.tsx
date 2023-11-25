import React from 'react'
import Link from 'next/link'


export default function Navbar() {
  return (
    <header>
        <nav className="navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow">
            <div className="container-fluid">
                <Link href="/" className="navbar-brand" style={{ fontWeight:'100' }}>Dewey Mastery &#10030;</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target=".navbar-collapse" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>
        </nav>
    </header>
  )
}