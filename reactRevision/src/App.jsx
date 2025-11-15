import React, { useState } from 'react'
import Child from './Child.jsx'
const App = () => {
  const[name,setname] = useState('');
  return (
    <div>
    <Child name={name} setname={setname}>
    
    </Child>
    <p>running parent component  {name}</p>
    </div>
  )
}

export default App