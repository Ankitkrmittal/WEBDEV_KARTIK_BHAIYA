import React from 'react'
import{Routes, Route,NavLink}from 'react-router'
import Contact from './Contact'
import Home from './Home'
const App = () => {
  return (
    <div>
      <NavLink className="navlink" to='/home'>
      Home </NavLink>
      <NavLink className="navlink" to='contact'>
        contact
      </NavLink>
      <Routes >
       <Route path ="/home" element={<Home/>}></Route>
       <Route path="/contact" element={<Contact/>}></Route>

      </Routes>
    </div>
  )
}

export default App