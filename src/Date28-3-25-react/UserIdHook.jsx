import { useId } from "react"

function UserIdHook() {
    const user = useId()
    return (
        <div>
            <h2>use useidhook</h2>
            <form action={user + 'name'}>
                <label htmlFor="">Enter Name</label>
                <input type="text" placeholder="name" name={user + 'name'} id="" />
                <label htmlFor="">Enter age</label>
                <input type="text" placeholder="age" name={user + 'age'} id="" />

            </form>
            {
                <h4>userId{user}</h4>
            }
        </div>
    )
}
export default UserIdHook