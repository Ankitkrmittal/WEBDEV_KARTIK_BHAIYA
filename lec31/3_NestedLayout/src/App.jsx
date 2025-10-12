import React from 'react'

import { NavLink, Routes, Route } from "react-router";
import Teams from "./Teams";
import Contact from "./Contact";
import Acads from "./Acads";
import Management from "./Management";
import Operations from "./Operations";
import Myroutes from './Myroutes'
const App = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
       <NavLink className ="navlink" to ="/teams">Team</NavLink>
       <NavLink className="navlink" to="/contact">Contacts</NavLink>
      
      </div>
      <Myroutes/>
    </div>
  )
}

export default App