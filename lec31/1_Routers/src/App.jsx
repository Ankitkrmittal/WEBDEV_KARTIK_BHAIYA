import React from 'react'
import { Routes, Route, Link, NavLink, useNavigate } from "react-router";
import Contact from "./Contact";
import Home from "./Home";
const App = () => {
  const navigate = useNavigate();
  function navigateHomeRender(){
    navigate('/home');
  }
  function navigateContactRender(){
    navigate('contact');
  }
  return (
    <div>
     <Routes>
      <Route path='/home' element={<Home/>}></Route>
       <Route path ='/contact' element={<contact/>}></Route>
     </Routes>
     <button onClick={navigateHomeRender}>Home</button>
     <button onClick={navigateContactRender}>contact</button>
    </div>
  )
}

export default App