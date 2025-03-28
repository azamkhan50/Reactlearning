import { useActionState } from "react";

function LoginComponent() {
    
    const handelSubmit = async(perives, formData) => {
        let name = formData.get('name');
        let password = formData.get('password')
        let age=formData.get('age')
        await new Promise((res)=>setTimeout(res,3000))
       // console.log('handelsuubmited called ',name,password);
        if(name&&password&&age){
            return{message:'Data suubmitted',name,password,age}
        }else{
            return{
                error:'Data not submit please enter proper data',name,password,age
            }
        }
        

    }
    const [data, action, pending] = useActionState(handelSubmit, undefined)
    console.log(data)
    return (
        <div>
            <h2>
                Use UseActionState hook
            </h2>
            <form action={action}>
                <input defaultValue={data?.name} type="text" name="name" placeholder="Enter name" />
                <br /><br />
                <input defaultValue={data?.age}type="text" name="age" placeholder="Enter age" />
                <br /><br />
                <input defaultValue={data?.password}type="password" name="password" placeholder="Enter password" />
                <br /><br />
                <button disabled={pending}>Submit</button>
                <br />
               
            </form>
            {
                    data?.error && <span style={{color:'red'}}>{data?.error}</span>
                }
                 {
                    data?.message && <span style={{color:'green'}}>{data?.message}</span>
                }
                <h3>Name:{data?.name}</h3>
                <h3>Age:{data?.age}</h3>
                <h3>password:{data?.password}</h3>

        </div>
    )
}
export default LoginComponent;