import React from 'react'

export const Results = () => {

let currentYear = 2022;
let searchYear;
let divison;

  return (
    <div>
      <header>{currentYear} Results</header>
        <div>Content</div>
        <div>CONTENT</div>
      <div>
        <div id="sidebar" className="side bar mt-4 w-100 fixed">
          <div className="border-b-2 pb-lg">
            <h2 className="font-bold">By Tournaments</h2>
            <p>Summer Nights</p>
            <p>3-3 Plays</p>
          </div>
          <div className="pt-sm"></div>
          <h2 className="font-bold">By Year</h2>
          <p>2023</p>
          <p>2022</p>
          <p>2021</p>
          <div>x</div>
          </div>

        </div>
    
    </div>
    
  )
}

export default Results