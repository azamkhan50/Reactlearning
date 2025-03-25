import { useState } from "react"

function RadioDropDown(){
    const [gender, setgender]= useState('female')
    const[city, setcity]=useState('skardu')
    return(
        <div>
            <h1>To work radio button and dropdown use reactjs</h1>
            <h4>selected gender: {gender}</h4>
            <input onChange={(event)=>{setgender(event.target.value)}} type="radio" name="gender" id="male" value={"male"} checked={gender=='male'} />
            <label htmlFor="male">Male</label>
            <input onChange={(event)=>{setgender(event.target.value)}} type="radio" name="gender" id="female" value={"female"} checked={gender=='female'} />
            <label htmlFor="female">Female</label>
            <br /><br /><br /><br />
            <h2>select your city:</h2>
            <select onChange={(event)=>{setcity(event.target.value)}} defaultValue={'skardu'}>
                <option value="lahore">Lahore</option>
                <option value="karachi">Karachi</option>
                <option value="pindi">Pindi</option>
                <option value="skardu">Skardu</option>
            </select>
            <h4>My city name is :{city}</h4>
        </div>
    )
}

export default RadioDropDown