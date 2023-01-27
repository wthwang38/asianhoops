import React from 'react'
import { Link } from 'react-router-dom'
import { Routes, Route, useNavigate } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <ul>
        {/* <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes> */}
        {/* <Link to={"/results"}>Results</Link> */}
        {/* <Link to={"/blog"}>Blog</Link> */}
        <Link to={"/leagues"}>Leagues</Link> 
      </ul>
    </div>
)
}

export default Navbar