// import { forwardRef } from "react"

// function ForwardRefComp(props,ref){
//     return(
//         <div>
//             <h3> use FowardRef </h3>
//             <input  ref={ref} type="text" placeholder='Enter name' />
            

//         </div>
//     )
// }
// export default forwardRef(ForwardRefComp)

const ForwardRefComp=(props)=>{
    return(
        <div>
         <h1>react 19 style use </h1>
         <input type="text" name="name" id="name"  ref={props.ref}/>
        </div>
    )
}
export default ForwardRefComp