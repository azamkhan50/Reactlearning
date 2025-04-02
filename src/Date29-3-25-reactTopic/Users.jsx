import { Link } from "react-router"

function UsersPage(){
    const userData=[
        {
            id:1,
            name:'ali'

        },
        {
            id:2,
            name:'khan'

        },
        {
            id:3,
            name:'raja'

        },
        {
            id:4,
            name:'kashif'

        },
    ]
    return(
        <div style={{margin:'20px'}}>
        <h2>Users List  page </h2>
        {
            userData.map((item)=>(
                <Link to={'/users/'+item.id }> <h4>{ item.name}</h4></Link>
               
            )
               
            )
        }
        <hr />
        <h2>Users List  page with name </h2>
        {
            userData.map((item)=>(
                <Link to={'/users/'+item.id+'/'+item.name }> <h4>{ item.name}</h4></Link>
               
            )
               
            )
        }
        </div>
    )
}

export default UsersPage