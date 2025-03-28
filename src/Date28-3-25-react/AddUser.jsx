function AddUser({setAdduser}){
    return(
        <div>
            <h1>Work Lifitng state up reactjs</h1>
            <h4>Components A</h4>
             <input onChange={(event)=>setAdduser(event.target.value)} type="text" placeholder="Enter user name"/>
             <hr />
        </div>
    )
}
export default AddUser