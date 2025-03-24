import { useState } from "react"
// conter compments
const Counter =()=>{
    const [count, setCount]=useState(0)
    const [rcount, rsetcount]= useState(10)
    return(
        <div>
            <h1>Counter :{count}</h1>
            <button onClick={()=>setCount(count+1)}>Uupdate value</button>
            <br />
            <h1>R Counter: {rcount}</h1>
            <button onClick={()=>rsetcount(rcount-1)}>Rcounter</button>
        </div>
    )
}

export default Counter