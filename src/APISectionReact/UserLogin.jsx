import { useActionState } from "react";

function UserLogin(){
    const handleLogin=(perData, formData)=>{
       let name= formData.get('name')
       let password=formData.get('password')
        console.log(name, password);
        let regex=/^[A-Z0-9]+$/i;

        if( !name || name.length>5){
            return{error:'pls enter name not empty or  less then 5 charact',name,password}
        }else if(!regex.test(password)){
         return{error:'passowd coantin only charate or number ',name,password}
        }else{
            return{message:'Login done' ,name,password}
        }
        
    }
    const[data,action,pedding]= useActionState(handleLogin)
    console.log(data);
    
    return(
        <div style={{textAlign: 'center'}}>
            <h1>user action login useactionState </h1>
            {
               data?.message && <span style={{color:'green'}}>{data?.message}</span>
            }
            {
                 data?.error && <span style={{color:'red'}}>{data?.error}</span>
            }
            <form action={action}>
            <input defaultValue={data?.name} type="text"name="name" placeholder="Enter name" />
            <br /><br />
            <input defaultValue={data?.password} type="text" name="password" placeholder="Enter password" />
            <br /><br />
            <button  >login</button>
    

            </form>
        </div>
    )
}
export default UserLogin;