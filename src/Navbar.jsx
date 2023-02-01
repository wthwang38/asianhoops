import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <nav className="flex items-center justify-between flex-wrap bg-slate-100 p-6">
        <div className="flex items-center flex-shrink-0 text-red ml-10 mr-10">
          <span className="font-bold text-5xl">Asian Hoops</span>
        </div>
        
        <img className='pl-10 object-cover items-center h-48 w-100' src='src/assets/basketball.png'/>        

        <div className="w-full block flex-grow sm:flex sm:items-center sm:w-auto">
          <div className="text-sm sm:flex-grow">
            {[
              ['Home', '/'],
              ['Leagues', '/leagues'],
              ['Blogs', '/blogs'],
              ['Results', '/results'],
            ].map(([title, url]) => (
              <Link className='block mt-4 ml-4 mr-4 sm:inline-block sm:mt-0 text-xl text-red-600 hover:text-blue' to={url}>{title}</Link>
              ))}
          </div>
          {/* <div>
            <button className="inline-block text-md px-4 py-2 leading-none border rounded text-blue border-black hover:border-transparent hover:text-blue-500 hover:bg-white mt-4 md:mt-0">
              Login
            </button>
          </div> */}
        </div>
      </nav>
    </div>
)
}

export default Navbar