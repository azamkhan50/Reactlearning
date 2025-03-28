import { useState } from "react"

function UpdateingObejct() {
    const [data, setData] = useState({
        name: 'Azam',
        age: 23,
        address: {
            city: 'lhr',
            country: 'pak',
        }
    })
    const handelName = (val) => {
        data.name = val;
        setData({ ...data })
        console.log(val)

    }
    const handelAge = (val) => {
        data.age = val;
        setData({ ...data })
        console.log(val)

    }
    const handelCity = (city) => {
        data.city = city;
        setData({ ...data, address: { ...data.address, city } })
        console.log(city)

    }
    const handelCountry = (val) => {
        data.country = val;
        setData({ ...data, address: { ...data.address,val } })
        console.log(val);
        

    }

    return (
        <div>
            <h2>Updation Obejct in state</h2>
            <input onChange={(event) => handelName(event.target.value)} type="text" placeholder="Enter Name" />
            <br /><br />
            <input onChange={(event) => handelAge(event.target.value)} type="text" placeholder="Enter Age" />
            <br /><br />
            <input onChange={(event) => handelCity(event.target.value)} type="text" placeholder="Enter City"/>
            <br /><br />
            <input onChange={(event) => handelCountry(event.target.value)} type="text" placeholder="Enter Country"  />

            <h4>Name : {data.name}</h4>
            <h4>age : {data.age}</h4>
            <h4>City : {data.address.city}</h4>
            <h4>Couuntry : {data.address.country}</h4>
        </div>
    )
}
export default UpdateingObejct