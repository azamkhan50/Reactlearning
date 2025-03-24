function User({data}){
   // {name, age, email, }
   
    return(
        <div>
            <hr />
           
        
           {/* <h4>user name: {name}</h4>
           <h4>user age: {age}</h4>
           <h4>user email: {email}</h4> */}
           <h2>Get data through object </h2>
           <h4>user email: {data.email}</h4>
           <h4>user email: {data.name}</h4>
           <h4>user email: {data.age}</h4>

        </div>
    )
}

export default User