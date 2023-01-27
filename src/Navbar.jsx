import React from 'react'
import { Link } from 'react-router-dom'
import { Routes, Route, useNavigate } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/leagues"}>Leagues</Link> 
        </li>
        <li>
          <Link to={"/blog"}>Blog</Link>
        </li>
        <li>
          <Link to={"/results"}>Results</Link> 
        </li>
      </ul>
    </div>
)
}

export default Navbar