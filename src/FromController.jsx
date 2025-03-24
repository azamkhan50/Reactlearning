
import { useState } from "react"
function UserFromController() {
    const [val, setval] = useState('')
    const [email, setemail] = useState('')
    const [phone, setphone] = useState('')
    return (
        <div>
            <h1>Signup Form</h1>

            <form action="">

                <input type="text" value={val} onChange={(event) => setval(event.target.value)} placeholder="Enter name" />

               <br /><br />
                <input type="text" value={email} onChange={(event) => setemail(event.target.value)} placeholder="Enter email" />

                <br /><br />
                <input type="text" value={phone} onChange={(event) => setphone(event.target.value)} placeholder="Enter phone" />
                <br /><br />
                <h3>{email}</h3>
                <h3>{val}</h3>
                <h3>{phone}</h3>
                <button onClick={() => {
                    console.log(val)
                    console.log(email)
                    console.log(phone)
                }}>submit</button>
                <br /><br />
                <button onClick={() => {setval("");setemail(""), setphone("")}}>clear</button>

            </form>



        </div>
    )
}
export default UserFromController