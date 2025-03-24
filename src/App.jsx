import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//import userlogin componet
import Login, { Profile, Setting, UserKey } from './userComponents'
import Name from './taskComponents'
import Count from './Count'
import Counter from './Count'
import UserToggle from './Toggleshow'
import Multipcond from './MultipCondtion'
import User from './User'
import CollegeName from './CollegeName'
import UpdateName from './NameChange'



// first components 
//
// use jsx syntax extesnion js you js file to write html code help jsx
function App() {
  const [display, setdispaly]=useState(true)
  const userName = 'azam';
  let x = 8;
  let y = 8;
  let userimg = 'https://i.imgur.com/lICfvbD.jpg';
  // this is map data
  const userdata1 = {
    name: 'ali',
    age: 23,
    email: 'ali@gmail.com'

  }
  const userdata2 = {
    name: 'azam',
    age: 27,
    email: 'azam@gmail.com'

  }
  const userdata3 = {
    name: 'khan',
    age: 26,
    email: 'khan@gmail.com'

  }

  // this is array data
  const userarr = ['ali', 78, 'testgamil.com']
  // use var value 
  // array function
  // const fruite=(name)=>{
  //   alert(name)

  // }
  // use state to change ui data valauue
  const [fruitname, newfruit] = useState('apple')

  const change = () => {
    newfruit('banan')
  }
  //array
  let collegename=['fuusat','khi','uob','ku']
  //stat
  const [username, setusername]=useState('ali')
  return (
   

    <div>
      {/* to check if usrname is empyt not show
     {username &&  <UpdateName name={username}/>} */}
     <UpdateName name={username}/>
      <button onClick={()=>{setusername('asif')}}>Update name</button>
      <h1>Show array College Name</h1>
      <CollegeName name={collegename[0]}/>
      <CollegeName name={collegename[1]}/>
      <CollegeName name={collegename[2]}/>
    <h1>This is use props reactjs  </h1>
      {/* <User name="azam" age={23} email='test@gmail.com' /> */}
     {User && <User data={userdata1} />}
      <User data={userdata2} />
      <User data={userdata2} />
      
       {/* <Multipcond/>
       <button onClick={()=>{setdispaly(!display)}}>Toggle</button>
     <h3>{display?'khan':null}</h3>

     {
      display?<UserToggle/>:null
     }
    

      <Counter/>

    
      <h1>{fruitname}</h1>
      <button onClick={change}>change name</button>
      <br />
      <br /> */}
      
      {/* <button onClick={done}>submit</button>

      <button onClick={() => fruite('apple')}>apple</button>

      <button onClick={() => fruite('banna')}>banna</button>
      <h3>{userName ? userName : 'user not found'}</h3>
      <h3>{userdata.name}</h3>
      <h3>{userdata.age}</h3>
      <h3>{userdata.email}</h3>
      <h3>{userarr[2]}</h3>
      <input type="text" value={userName} id={userName} />
      <h2>{sum(4, 5)}</h2>
      <h1>{operation(4, 5, "+")}</h1>
      <h1>{operation(4, 5, "-")}</h1>
      <h1>{operation(4, 5, "*")}</h1>
      <h1>{operation(4, 5, "")}</h1> */}


      {/* <Name/> */}

      {/* <img src={userimg} alt="ali" /> */}
      {/* <h3>{50+50}</h3>
<h5>{x*y}</h5>

<button onClick={()=>alert('Hello')}>Click me</button>
     <Login/> 
     <Profile/>
     <Setting/> */}
      {/* <h4>{UserKey}</h4> */}
      {/* <h1>Frist Compenets </h1>
    <Fruit></Fruit>
    <Color/>
    <Sum></Sum> */}

    </div>
  )
}

// react function call need function defition
function done() {
  return alert('Login successfuly')
}
function operation(a, b, op) {
  if (op == "+") {
    return a + b
  } else if (op == "-") {
    return a - b
  } else if (op == "*") {
    return a * b
  } else {
    return 0
  }
}

function sum(a, b) {
  return a + b
}
// array function
const fruite = (name) => {
  alert(name)

}
// function Fruit(){
//   return(
//     <h2>This is apple</h2>
//   );
// }
// function Color(){
//   return(
//     <h2>I like Green color</h2>
//   );
// }
// function Sum(){
//   return(
//     <h2>The sum of two Number is :{sum()}</h2>
//   );
// }
// function sum(){
//   return 10+30


// }
export default App
// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//     <h1>hello world</h1>
//     <h2>first project</h2>
//       {/* <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p> */}
//     </>
//   )
// }


