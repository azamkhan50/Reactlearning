import { useRef } from "react";

function UnControllerCompent({display,name,data}) {
// use doc to get valuue without state
    const handleForm = (event) => {
        event.preventDefault();
        const user = document.querySelector("#name").value;
        const password = document.querySelector("#password").value;
        console.log(user, password)

    }
    //user ref to get value 
    const userRef = useRef();
    const passwordRef = useRef();

    const handleFormRef = (event) => {
        event.preventDefault();
        const username = userRef.current.value;
        const userpassword = passwordRef.current.value;
        console.log('ref use get name', username)
        console.log('ref use get password', userpassword)

    }
    return (
        <div>

            <button onClick={()=>display(name)}>check name</button>
            <button onClick={()=>data()}>Check data </button>
            <h1>UnControlle Components </h1>
            <form action="" onSubmit={handleForm} >
                <input type="text" id="name" placeholder="Enter name" />
                <br /><br />
                <input type="text" id="password" placeholder="Enter password" />
                <br /><br />
                <button>Submit</button>


            </form>

            <h1>UnControlle Components with useRef </h1>
            <form action="" onSubmit={handleFormRef} >
                <input ref={userRef} type="text" id="name" placeholder="Enter name" />
                <br /><br />
                <input ref={passwordRef} type="text" id="password" placeholder="Enter password" />
                <br /><br />
                <button>Submit</button>


            </form>


        </div>
    )
}
export default UnControllerCompent