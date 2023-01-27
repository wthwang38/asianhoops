import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import Navbar from './Navbar'
import Leagues from './Leagues'


function App() {

  return (
    <div className="App">
      <BrowserRouter >
        <Navbar/>
        <Routes>
          <Route path={'/'} element={<Home/>} />
          <Route path={'/leagues'} element={<Leagues/>} />
          {/* <Route path={'/blog'} element={<Blog/>} /> */}
          {/* <Route path={'/results'} element={<Results/>} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
