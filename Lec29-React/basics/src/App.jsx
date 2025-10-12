import React, { useState } from 'react'

export const App = () => {
    const[inp,setInp] = useState("");
    function inputHandler(ev){
        console.log(ev);
        setInp(ev);
    }
    function showInp(){
        console.log(inp);
    }

  return (
    <div>
        <input value ={inp} onChange={inputHandler} type="text" placeholder='enter name' />
        <button onClick={showInp}>show input</button>
    </div>
  )
}
export default App;