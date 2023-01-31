import React from 'react'
import { useState, useEffect } from "react";

function Leagues() {
  const leagues = [
    {
      "name": "Girl's and Women's",
      "id": 1,
      "desc": "Girls and women interested in playing on a women’s or girls basketball team are invited to attend one of our practice session and workout with the team. We look for those who show the “ENERGY, EFFORT & ENTHUSIASM” to learn the game. Be ready to work hard, learn and you’ll see the improvement...",
      "image": "https://nyrockits.org/wp-content/uploads/2021/12/NY_Rockits_Lady_Rockits.jpg"
    },
    {
      "name": "Boy's teen",
      "id": 2,
      "desc": "Honesty, Hard Work and Discipline – three traits we look for in a basketball player. If you’ve got the desire to work hard, the discipline to play as a team member and the skills to learn, then the NY Rockits Athletes In Action would welcome you to come down to tryout and to become...",
      "image": "https://nyrockits.org/wp-content/uploads/2021/12/NY_Rockits_Young_Lifes.jpg"
    },
    {
      "name": "Youth",
      "id": 3,
      "desc": "The New York Rockits Athletes In Action Organization conducts a year round Youth Basketball Program serving more than 100 boys and girls who live primarily in the New York/New Jersey Metropolitan area. Since 1990, it has long been recognized for its success and leadership in the field...",
      "image": "https://nyrockits.org/wp-content/uploads/2021/12/JR_Rockits_-Summer_League_Champs.jpeg"
    },
    {
      "name": "Junior Basketball League",
      "id": 4,
      "desc": "The Chinatown Community Junior Basketball League gives kids (Ages 8-13. Grade 3-8 ) the opportunity to discover sports, recreation and themselves. Our league is for beginners or intermediate ballers who want to improve their game. Coaches will focus on teaching the proper fundamentals in performing lay-ups, dribbling, passing and shooting. We will also help foster teamwork and communication...",
      "image": "https://nyrockits.org/wp-content/uploads/2021/12/NY_Rockits_JBL_Basketball.jpg"
    }
  ]

  const execDownload = () => {
     // file object
     // new Blob(["src/assets/physeval.pdf"], {type: 'pdf'});
     fetch('src/assets/physeval.pdf').then(response => {
       response.blob().then(blob => {
         // anchor link
          const file = window.URL.createObjectURL(blob) 
          const element = document.createElement("a");
          element.href = file
          element.download = "physEval" + Date.now() + ".pdf";
          element.click()
          console.log('hellodo')
        })
      })
  }

  


  return (
    <>
      <div className="btnDiv">
        <button id="downloadBtn" value="download" onClick={() => execDownload()}>Physical Evaluation</button>
      </div>
      <div className="bg-slate-300 mx-auto pb-10 grid max-w-2xl grid-cols-2 items-center gap-y-8 gap-x-8 py-32 px-0 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
      {leagues.map(league => {
        return (
          <div key={league.id} className="rounded-lg bg-orange-400 gap-4 mx-1 my-3 gsm:gap-6 lg:gap-8 shadow hover:shadow-lg hover:shadow-blue-600">
            <div className="rounded-lg font-bold tracking-tight sm:text-4xl">
              <dl className="m-2 text-red-600 bg-slate-100 rounded-lg text-3xl">{league.name}
                <img src={league.image} alt={league.id} className="rounded-lg"/>
                <dt className="rounded-lg bg-slate-50 opacity-75 text-gray-600 text-base">{league.desc}</dt>
              </dl>
            </div>
          </div>
        )
      })}
      </div>
    </>
  )
}

export default Leagues