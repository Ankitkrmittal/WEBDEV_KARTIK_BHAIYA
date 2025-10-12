///rafce

//import React, { useState } from "react";


// const App = ()=>{
//     let x =1;
//     x++;
//     console.log("running app component");
//     const[cnt,setCnt] = useState(1);
//     function countHandler() {
//         // cnt++;
//         console.log("X", x);
//         // setCnt(cnt+1);
//         // setCnt((prev) => {
//         //   return prev + 1;
//         // });
//         setCnt((prev) => prev + 1);
//         console.log("Counter ", cnt);
//       }
//     return(
//         <div>
//         count :{cnt}
//         <button onClick={countHandler}>update count</button>
//         </div>
//     )
// }
import React, { useState } from 'react'

const App = () => {
    let count =0;
    console.log("running app componenet")
    const[cnt,setCnt] = useState(1);
    
    function countHandler() {
        count++;
        
        setCnt(cnt+1);
        console.log("cnt",cnt)
        console.log(count);
    }
  return (
    <div>
        count:{count}
      <button onClick={countHandler}>update count</button>
    </div>
  )
}

export default App


