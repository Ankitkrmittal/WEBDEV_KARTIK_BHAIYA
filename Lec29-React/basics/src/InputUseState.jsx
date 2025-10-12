import React, { useState } from 'react'

const App = () => {

    const[inp,setInp] = useState("");
    function inputHandler(ev){
        console.log(ev.target.value);
        setInp(ev.target.value);
    }
    function showInput(){
        console.log(inp);
    }
  return (
    <div>
        <input 
        value={inp}
        onChange={inputHandler}
        type='text'
        placeholder='enter name'
        
        />
        <button onClick={showInput}>show input</button>
    </div>
  )
}

export default App