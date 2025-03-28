import { useState, useTransition } from "react"

function UseTransctionHook() {
    //use statethrough
    const [pending, setpending] = useState(false);

    const handlePending = async () => {
        setpending(true)

        await new Promise(res => setTimeout(res, 2000));
        setpending(false)

    }
    // use usetransction hook 
    const [newpending, newpendingstart] = useTransition()

    const handeluseTrnhook = async () => {
        newpendingstart(async () => {
            console.log('usetranction hook')
            await new Promise(res => setTimeout(res, 2000));
        })




    }

    return (
        <div>
            <h1>Work use usetranscation hook </h1>
            <button disabled={newpending} onClick={handeluseTrnhook}>click me use tranictionhook</button>
            
            <br />
            <br />
            {
                newpending ?
                    <img style={{ width: '100px' }} src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Loading_2.gif" alt="" /> :
                    null
            }
            <br /><br />

           
            <button disabled={pending} onClick={handlePending}>click me simple state</button>
            <br />
            <br />
            

        </div>
    )
}
export default UseTransctionHook