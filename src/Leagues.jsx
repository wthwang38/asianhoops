import React from 'react'
import { useState, useEffect } from "react";

function Leagues() {
  const leagues = [
    {
      "name": "Girl's and Women's",
      "id": 1,
      "desc": "Girls and women interested in playing on a women’s or girls basketball team are invited to attend one of our practice session and workout with the team. We look for those who show the “ENERGY, EFFORT & ENTHUSIASM” to learn the game. Be ready to work hard, learn and you’ll see the improvement...",
    },
    {
      "name": "Boy's teen",
      "id": 2,
      "desc": "Honesty, Hard Work and Discipline – three traits we look for in a basketball player. If you’ve got the desire to work hard, the discipline to play as a team member and the skills to learn, then the NY Rockits Athletes In Action would welcome you to come down to tryout and to become..."
    },
    {
      "name": "Youth",
      "id": 3,
      "desc": "The New York Rockits Athletes In Action Organization conducts a year round Youth Basketball Program serving more than 100 boys and girls who live primarily in the New York/New Jersey Metropolitan area. Since 1990, it has long been recognized for its success and leadership in the field..."
    },
    {
      "name": "Junior Basketball League",
      "id": 4,
      "desc": "The Chinatown Community Junior Basketball League gives kids (Ages 8-13. Grade 3-8 ) the opportunity to discover sports, recreation and themselves. Our league is for beginners or intermediate ballers who want to improve their game. Coaches will focus on teaching the proper fundamentals in performing lay-ups, dribbling, passing and shooting. We will also help foster teamwork and communication..."
    }
  ]

  return (
    <div>
      <div className="bg-white">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-red-600 sm:text-4xl">Leagues</h2>
            <p className="mt-4 text-gray-500">The walnut wood card tray is precision milled to perfectly fit a stack of Focus cards. The powder coated steel divider separates active cards from new ones, or can be used to archive important task lists.</p>

            <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">Origin</dt>
                <dd className="mt-2 text-sm text-gray-500">Designed by Good Goods, Inc.</dd>
              </div>
            </dl>
          </div>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
            <img src="https://nyrockits.org/wp-content/uploads/2021/12/NY_Rockits_Young_Lifes.jpg" alt="Boy's Teen 18u league" className="rounded-lg bg-gray-100"/>
            <img src="https://nyrockits.org/wp-content/uploads/2021/12/JR_Rockits_-Summer_League_Champs.jpeg" alt="Youth (Boy's and Girl's) league" className="rounded-lg bg-gray-100"/>
            <img src="https://nyrockits.org/wp-content/uploads/2021/12/NY_Rockits_Lady_Rockits.jpg" alt="Women's Rockits League" className="rounded-lg bg-gray-100"/>
            <img src="https://nyrockits.org/wp-content/uploads/2021/12/NY_Rockits_JBL_Basketball.jpg" alt="2014 JBL image" className="rounded-lg bg-gray-100"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Leagues

      {/* <div className="container mx-auto px-3 bg-sky-200 text-black">
        {leagues.map(league => {return (
            <tr key={league.id}>
              <td>{league.name}</td>
              <td>{league.desc}</td>
            </tr>
        )})}
      </div> */}