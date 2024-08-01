import React from 'react'
import { Routes, Route, HashRouter } from 'react-router-dom'

// import pages
import Home from '../components/Pages/Home'
import AboutMe from '../components/Pages/AboutMe'

const Links = () => {
  return (
    <div>
      <Routes>
        <Route exact path='/' element={<Home/>}></Route>
        <Route path='/aboutMe' element={<AboutMe/>}></Route>
      </Routes>
    </div>
  )
}

export default Links
