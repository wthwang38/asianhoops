import React from 'react'
import { Link } from 'react-router-dom'
import { Routes, Route, useNavigate } from 'react-router-dom'

function Navbar() {
  return (
    <div>

      <nav className="flex items-center justify-between flex-wrap bg-green-300 p-6">
        <img className='object-cover h-48 w-100' src='src/assets/basketball.png'/>
        
        <div className="flex items-center flex-shrink-0 text-red mr-6">
          <span className="font-bold text-lg">Asian Hoops</span>
        </div>

        <div className="w-full block flex-grow sm:flex sm:items-center sm:w-auto">
          <div className="text-sm sm:flex-grow">
            {[
              ['Home', '/'],
              ['Leagues', '/leagues'],
              ['Blogs', '/blogs'],
              ['Results', '/results'],
            ].map(([title, url]) => (
              <Link className='block mt-4 sm:inline-block sm:mt-0 text-blue-600 hover:text-white mr-4' to={url}>{title}</Link>
              ))}
          </div>

          <div>
            <button className="inline-block text-sm px-4 py-2 leading-none border rounded text-blue border-white hover:border-transparent hover:text-blue-500 hover:bg-white mt-4 md:mt-0">
              Login
            </button>
          </div>
        </div>
      </nav>
    </div>
)
}

export default Navbar