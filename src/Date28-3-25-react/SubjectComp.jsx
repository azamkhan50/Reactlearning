import { useContext } from "react"
import { SubjectContext } from "./ContextData"

export default function SubjectComp(){
    const subject=useContext(SubjectContext)
    return(
        <div style={{backgroundColor:'red', padding:'10px'}}>
            <h3>Subject Compenents </h3>
            <h5>Subject is : {subject}</h5>
        </div>
    )
}