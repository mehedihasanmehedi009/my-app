 import { useState } from "react"

export default function  Count() {
  
  const [count ,setCount] = useState(0)
    const  stles = {
    border:"1px solid red ",
    padding:"20px"
    }
     return(
      <>
      <div style={stles}>
          <h1> Count:{count}</h1>
        <button onClick={()=> setCount(count +1)} >Click Now </button>
        <button onClick={()=>setCount(count +4)}>click 2</button>
        <button onClick={()=>setCount(count +6)}>click 3</button>
      </div>
      </>
     )
 }