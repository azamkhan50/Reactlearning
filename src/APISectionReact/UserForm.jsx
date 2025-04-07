import { useState } from "react"
import './Apicss.css'
 function UserForm(){
    const [name, setName]=useState('')
    const [errname, setErrName]= useState('')
    const [password, setPassword]=useState('')
    const [errpass, setErrPass]= useState('')

    const handelUserName=(event)=>{
        console.log(event.target.value);
        
        if(event.target.value.legth>5){
            setErrName('pls enter valid name only less 5 character')
            console.log(setErrName);
            
        }else{
            setErrName('')
        }


    }
return(
    <div>
        <h1> User Form use Validation</h1>
         <input className={errname?'err':''} type="text"
         onChange={handelUserName}
         placeholder="name" />
         <span>{errname && errname}</span>
         <br /><br />
         <input type="text" placeholder="password"  />
         <br /><br />
         <button>submit</button>
    </div>
)
}
export default UserForm