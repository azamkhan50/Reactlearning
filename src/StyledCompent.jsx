
import styled from "styled-components"
function StyledComp(){
    //first 
    const Heading=styled.h1`
    color:green;
    margin:10px;
    padding:20px;
    border:1px solid green;
    boderRadius:5px;
    width:600px;
     `
     //second
     const NewHeading=styled.h1({
        color:'red',
        border:'1px solid blue',
        borderRadius:'5px'
     })

     const CustomButton=styled.button({
        color:'green',
        margin:'5px',
        padding:'10px',
         width:'120px',
        // height:'50px',
        border:'2px solid blue'
     })

    return(
        <div>
          <h1>Use Stleyd compne first Install npm then use</h1>  
          <Heading>Hello World</Heading>
          <Heading>Hello World</Heading>
          <Heading>Hello World</Heading>
          <NewHeading>React js</NewHeading>
          <CustomButton>Login</CustomButton>
          <CustomButton>Signup</CustomButton>
          <CustomButton>Logout</CustomButton>
        </div>
    )
}
export default StyledComp