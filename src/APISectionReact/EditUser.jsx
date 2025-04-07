import { useEffect } from "react"
import { useState } from "react"
import { useNavigate, useParams, } from "react-router"

function EidtUser() {
    const { id } = useParams();
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [email, setEmail] = useState('')
    const navigate= useNavigate()
    const url = "http://localhost:3000/users/" + id;
    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
       
        let respone = await fetch(url);
        respone = await respone.json();
        console.log(respone);
        setName(respone.name)
        setAge(respone.age)
        setEmail(respone.email)

    }

    // update api call 
    const userUpdate= async()=>{
    let respone = await fetch(url,{
        method:'Put',
        body:JSON.stringify({name, age, email})
    });
     respone = await respone.json();
    console.log(respone);
    if(respone){
        alert('User Update Successfuly');
        navigate('/')
        
    }
    }
    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Edit User Page</h1>
            <input type="text" value={name} onChange={(event)=>setName(event.target.value)} placeholder="Name" name="" id="" />
            <br /><br />
            <input type="text" value={age} 
            onChange={(event)=>setAge(event.target.value)}
            placeholder="age" name="" id="" />
            <br /><br />
            <input type="text" value={email} 
            onChange={(event)=>setEmail(event.target.value)}
            placeholder="Email" name="" id="" />
            <br /><br />
            <button onClick={userUpdate}>EditUser</button>
        </div>
    )
}
export default EidtUser