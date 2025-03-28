import { useState } from "react"

function DrivedStateComp(){
    const[users,setUsers]=useState([])
    const [user,setUser]=useState('')
    const handleAddUser=()=>{

        setUsers([...users,user])
        console.log(setUsers)
    }
     const total= users.length;
    const last= users[users.length-1];
    const unique=[...new Set(users) ].length
    return(
        <div>
            <h2>Work Drive state </h2>
            <h4>Total user:{total}</h4>
            <h4>Last user:{last}</h4>
            <h4>Uniquue total user:{unique}</h4>
            <input type="text" onChange={(event)=>setUser(event.target.value)} placeholder="add new user"/>
            <br />
            <br />
            <button onClick={handleAddUser}>add</button>

            {
                users.map((items,index)=>(
<h1 key={items}>{items}</h1>
                )

                )

                }
            
        
        </div>
        
    )
}
export default DrivedStateComp