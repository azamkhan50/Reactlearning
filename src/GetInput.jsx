import { useState } from "react"

function Getinput() {
    const [val, setval] = useState('')
    const [email, setemail] = useState('')
    const [phone,setphone]=useState('')
    return (
        <div>
            <h1>Get user input and clear these inpute</h1>
            <hr />
            <input type="text" value={val} onChange={(event) => setval(event.target.value)} placeholder="Enter name" />

            <h3>{val}</h3>
            <input type="text" value={email} onChange={(event) => setemail(event.target.value)} placeholder="Enter email" />

            <h3>{email}</h3>
            <input type="text" value={phone} onChange={(event) => setphone(event.target.value)} placeholder="Enter phone" />
            
            <h3>{phone}</h3>
            <button onClick={()=>{
                console.log(val)
                console.log(email)
                console.log(phone)
            }}>submit</button>
            <hr />
            <button onClick={() => {setval("");setemail(""), setphone("")}}>clear</button>
           
        </div>
    )
}

export default Getinput

function clear(){
    return(
        <button onClick={() => {setval("");setemail(""), setphone("")}}>clear</button>
      
    )
}