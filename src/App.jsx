import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import Navbar from './Navbar'
import Leagues from './Leagues'
import Results from './Results'
import Blogs from './Blogs'
import Footer from './Footer'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path={'/'} element={<Home/>} />
          <Route path={'/leagues'} element={<Leagues/>} />
          <Route path={'/blogs'} element={<Blogs/>} />
          <Route path={'/results'} element={<Results/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
