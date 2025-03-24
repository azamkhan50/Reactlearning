import { useState } from "react"
// mutkip condtion compnet 
function Multipcond(){
    const [count,setCount]=useState(0)
    return(
     <div>
        <h1>{count}</h1>
        <button onClick={()=>{setCount(count+1)}}>click</button>
        {
            count==0?<h3>Condition meet 0</h3>:
            count==1?<h3>Condition meet 1</h3>:
            count==2?<h3>Condition meet 2</h3>:
            count==3?<h3>Condition meet 3</h3>:
            <h4>other Condition meet</h4>

        }
     </div>
    )
}
export default Multipcond