import React from 'react';
import Card from './Card';

export const Results = () => {

let currentYear = 2022;
let searchYear;
let divison;
let scoreboard2 = [
  {
    "id": 1,
    "name": "RAGING DEMONZ",
    "won": 2,
    "loss": 3
  },
  {
    "id": 2,
    "name": "NY FLIGHTZ",
    "won": 2,
    "loss": 3
  },
  {
    "id": 3,
    "name": "COLUMBUS PARK",
    "won": 1,
    "loss": 4
  },
  {
    "id": 4,
    "name": "ROCKITS ALUMNI",
    "won": 4,
    "loss": 1
  }
]
  
  const teamData = scoreboard2.map((team)=>{
    return (<Card key={team.id} teamName={team.name} teamWin={team.won} teamLoss={team.loss} />)
  })
  return (
    <div>
      <header className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{currentYear} Results</header>
      <div>
      <div className="flex">
        <div id="sidebar" className="side bar h-screen sticky top-10">
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
          <div className="lg:pl-[19.5rem] ml-20">
            <div className="flex flex-row">
                  <div className="basis-1/2 border-solid border-2">Name</div>
                  <div className="basis-1/2 border-solid border-2">Won</div >
                  <div className="basis-1/2 border-solid border-2">Loss</div>
            </div>
              <div className="">{teamData}</div>
            </div>

          </div>
      </div>

      </div>

    
  )
}

export default Results