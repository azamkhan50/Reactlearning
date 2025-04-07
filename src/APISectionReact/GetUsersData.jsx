import { useEffect, useState } from "react";
import './Apicss.css'
import { useNavigate } from "react-router";

function GetUsersData() {
    const [userData, setUserData] = useState([]);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const url = "http://localhost:3000/users";

    useEffect(() => {
        setLoading(true)
        getUsersData();
    }, [])


    async function getUsersData() {

        let response = await fetch(url);
        response = await response.json()
        setUserData(response)
        setLoading(false)

    }
    console.log(userData);

    const userDelete = async (id) => {
        console.log(id);

        let response = await fetch(url + "/" + id, {
            method: "delete"
        })
        response = await response.json();
        if (response) {

            alert('user Delete successfuly')
            getUsersData()
        }

    }
    const userEdit = async (id) => {
        console.log(id);
        navigate("/edit/" + id)

    }

    return (
        <div>
            <h1>Make Routes and add user and show ui </h1>
            <ul className="user-list user-head">
                <li>Name</li>
                <li>Age</li>
                <li>Email</li>
                <li>Action</li>
            </ul>
            {
                !loading ?
                    userData && userData.map((user, index) => (
                        <div key={index} style={{ width: '1000px', margin: '10px' }}>

                            <ul className="user-list">
                                <li><img style={{ width: '50px' }} src={user.image} alt="" /></li>
                                <li>{user.name}</li>
                                <li>{user.age}</li>
                                <li>{user.email}</li>

                                <li><button onClick={() => userDelete(user.id)}>Delete</button></li>

                                <li><button onClick={() => userEdit(user.id)}>Edit</button></li>

                                {/* <li>{user.address.coordinates.lat}</li> */}

                            </ul>
                        </div>

                    )) : <img style={{ width: '100px' }} src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Loading_2.gif" alt="" />
            }
        </div>
    )
}

// function GetUsersData() {
//     const [userData, setUserData] = useState([])
//     useEffect(() => {
//         getUsersData();
//     }, [])

//     async function getUsersData() {
//         const url = "https://dummyjson.com/users";
//         let response = await fetch(url);
//         response = await response.json()
//         setUserData(response.users)

//     }
//        console.log(userData);




//     return (
//         <div>
//             <h1>Get Users Data</h1>
//             {

//                 userData && userData.map((user, index) => (
//                     <div style={{width:'1500px', margin:'10px'}}>
//                         <ul className="user-list user-head" >
//                         <li>Image</li>
//                             <li>First Name</li>
//                             <li>Last Name</li>
//                             <li>Age</li>
//                             <li>City</li>
//                         </ul>
//                         <ul className="user-list">
//                         <li><img style={{width:'50px'}} src={user.image} alt="" /></li>
//                             <li>{user.firstName}</li>
//                             <li>{user.lastName}</li>
//                             <li>{user.age}</li>
//                             <li>{user.address.city}</li>
//                             {/* <li>{user.address.coordinates.lat}</li> */}

//                         </ul>
//                     </div>

//                 ))
//             }
//         </div>
//     )
// }

export default GetUsersData