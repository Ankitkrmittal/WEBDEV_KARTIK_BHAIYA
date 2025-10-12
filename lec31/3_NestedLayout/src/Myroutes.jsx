import React from 'react'

import { NavLink, Routes, Route } from "react-router";

import Acads from './Acads';
import Teams from './Teams';
import Management from './Management';
import Operations from './Operations';
import Contact from './Contact';
const Myroutes = () => {
  return (
    <div>
      
        <Routes>
            <Route path ="/teams" element={<Teams/>}>
             <Route path ="acads" element={<Acads/>}/>
             <Route path="management" element ={<Management/>}></Route>
             <Route path="operation" element={<Operations/>}></Route>
             </Route>
        <Route path = "/contact" element={<Contact/>}></Route>
        
           
        </Routes>
      </div>
   
  )
}

export default Myroutes