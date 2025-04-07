import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router";

function AddUsers(){
    const[name, setName]=useState('')
    const[age, setAge]=useState('')
    const[email, setEmail]=useState('')
    const navigate= useNavigate()
    
    const creatUser= async()=>{
        const url="http://localhost:3000/users";
        let response= await fetch(url,{
            method:"Post",
            body:JSON.stringify({name, age, email})
        });
        response= await response.json();
        if(response){
            alert('new user add successfuly')
        }
        navigate('/')
        
    }
    return(
        <div>
            <h1>Add users page</h1>
            <input type="text"
            onChange={(event)=>setName(event.target.value)}
            placeholder=" enter name" name="" id="" />
            <br />
            <br />
            <input type="text"
              onChange={(event)=>setAge(event.target.value)}
            placeholder=" enter Age" name="" id="" />
            <br />
            <br />
            <input type="text"
              onChange={(event)=>setEmail(event.target.value)}
            placeholder=" enter Email" name="" id="" />
            <br />
            <br />
            <button onClick={creatUser}>Add user</button>
        </div>
    )
}
export default AddUsers;