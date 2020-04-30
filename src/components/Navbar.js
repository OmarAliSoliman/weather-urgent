import React from 'react'

function Navbar() {
  return (
    <div>
      <ul className="nav">
        <li className="nav-item">
          <a className="nav-link active" href="#Home">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#Weather">
            Weather
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
