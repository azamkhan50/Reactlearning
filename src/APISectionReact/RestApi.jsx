import { Suspense, use } from "react";

const fetchData=()=>fetch("https://dummyjson.com/users").then((response)=>response.json());

const userResource= fetchData();

function RestApi(){
    return(
        <div>
            <h2>  Use APi to   Call Rest API </h2>
           <Suspense fallback={<p>Loading....</p>}>
             <UserData data={userResource}/>
             
           </Suspense>

        </div>
    )
}
export default RestApi

const UserData=({data})=>{
   
    const userData= use(data);
    console.log(userData.users);
    
return(
    <div style={{margin:'10px'}}>
    <h1>This is User Detials</h1>
    <table style={{ width: "100%", borderCollapse: "collapse", border: "1px solid black" }}>
        <thead style={{ fontWeight: "bold", backgroundColor: "#f2f2f2" }}>
            <tr>
                <th style={{ border: "1px solid black", padding: "8px" }}>First Name</th>
                <th style={{ border: "1px solid black", padding: "8px" }}>Last Name</th>
                <th style={{ border: "1px solid black", padding: "8px" }}>Email</th>
            </tr>
        </thead>
        <tbody>
            {userData?.users?.map((user, index) => (
                <tr key={index} style={{ borderBottom: "1px solid black" }}>
                    <td style={{ border: "1px solid black", padding: "8px" }}>{user.firstName}</td>
                    <td style={{ border: "1px solid black", padding: "8px" }}>{user.lastName}</td>
                    <td style={{ border: "1px solid black", padding: "8px" }}>{user.email}</td>
                </tr>
            ))}
        </tbody>
    </table>
</div>
)
}