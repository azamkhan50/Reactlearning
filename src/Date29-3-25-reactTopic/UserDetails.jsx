import { Link, useParams } from "react-router"

export default function UsersDetailsPage(){
    const paraData=useParams();
    return<>
    <h1> Users Details  Page</h1>
    <h3> user id is: {paraData.id}</h3>
    <h3> user name is: {paraData.name}</h3>
    
    <Link to={'/users'}> Back</Link>
 
    </>
}