import { useState } from "react"

function UpdatingArray() {

    const [data, setData] = useState([
        'ali', 'khan', 'raja',
    ])

    const handelLastName = (name) => {
        console.log(data);

        data[data.length - 1] = name;
        setData([...data])

    }
    // array of object
    const [newdata, setNewdata] = useState([
        { name: 'ali', age: 33 },
        { name: 'raj', age: 34 },
        { name: 'kahn', age: 22 },

    ])
    const handelAge = (age) => {
        newdata[newdata.length-1].age=age;
        console.log(newdata);
        setNewdata([...newdata])

    }

    return (
        <div>
            <h2>Updating Array state</h2>
            <input type="text"  onChange={(e) => handelLastName(e.target.value)} name="" id="" />
            {
                data.map((item, index) => (
                    <h4 key={index}>{item}</h4>

                ))
            }
            <hr />
            <input type="text" onChange={(e) => handelAge(e.target.value)} placeholder="update age" />
            {
                newdata.map((item, index) => (
                    <h4 key={index}>{item.name},{item.age}</h4>

                ))
            }
        </div>

    )
}
export default UpdatingArray