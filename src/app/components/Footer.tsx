import React from 'react'


export default function Footer() {
  return (
    <footer className="border-top footer text-muted py-3" style={{ background:'white' }}>
      <div className="container" style={{ color:'white', textDecoration:'none', paddingTop:'20px' }}>
        <a href="https://emmani.vercel.app/" target="_blank" rel="noopener noreferrer" style={{ color:'purple', textDecoration:'none' }}>
          &copy; Dewey Mastery
        </a>
      </div>
    </footer>
  )
}