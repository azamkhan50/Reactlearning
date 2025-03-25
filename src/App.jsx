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
import NewUser from './Defaultuser'
import Wrapper from './Wrapper'
import Getinput from './GetInput'
import UserFromController from './FromController'
import Skills from './Skills'
import RadioDropDown from './RadioDropDownComp'
import ArrayLoppCompt from './ArrayLoop'
import Userdata from './UserData'
import TaskColck from './ClockTask'







function App() {
  const userData = [
    {
        id: 1,
        name: 'ali',
        email: 'ali@gmail.com'
    },
    {
        id: 2,
        name: 'khan',
        email: 'khan@gmail.com'
    },
    {
        id: 3,
        name: 'azam',
        email: 'azam@gmail.com'
    },
    {
        id: 4,
        name: 'kazim',
        email: 'kazim@gmail.com'
    },
    {
        id: 5,
        name: 'alyail',
        email: 'alyail@gmail.com'
    },
    {
        id: 6,
        name: 'usman',
        email: 'usman@gmail.com'
    },
    {
        id: 7,
        name: 'hamza',
        email: 'hamza@gmail.com'
    },
    {
        id: 8,
        name: 'bilal',
        email: 'bilal@gmail.com'
    },
    {
        id: 9,
        name: 'farhan',
        email: 'farhan@gmail.com'
    },
    {
        id: 10,
        name: 'zain',
        email: 'zain@gmail.com'
    },
    {
        id: 11,
        name: 'rehman',
        email: 'rehman@gmail.com'
    },
    {
        id: 12,
        name: 'hassan',
        email: 'hassan@gmail.com'
    },
    {
        id: 13,
        name: 'jawad',
        email: 'jawad@gmail.com'
    },
    {
        id: 14,
        name: 'tariq',
        email: 'tariq@gmail.com'
    },
    {
        id: 15,
        name: 'danish',
        email: 'danish@gmail.com'
    }
];
const [color, setcolor]=useState('yellow')
  return (
   


    <div>
      <h2>Use props clock task1 to change color selct change color color</h2>
        <select onChange={(event)=>{setcolor(event.target.value)}} defaultChecked='yellow'>
                <option value="yellow">Yellow</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
            </select>
      <TaskColck color={color}/>
      <h2>Rescuued code</h2>
{
userData.map((user)=>(
<div key={user.id}>
<Userdata  data={user}/>
</div>
))

  
}
   
<ArrayLoppCompt></ArrayLoppCompt>

      <RadioDropDown/>
      <br /><br /><br />
    <h1>React js Checkbox work</h1>
    <Skills/>

      {/* <UserFromController/> */}

{/* <Getinput/> */}
{/* <Wrapper color='blue' margin='20px' border='2px solid blue'><h2>Hello world</h2></Wrapper>
<Wrapper><h2>User Login</h2></Wrapper>
<Wrapper><h2>Admin Login</h2>
<h2 style={{color:'blue'}}> Login</h2>
</Wrapper>
<Wrapper><h2 style={{color:'yellow'}}> Login</h2></Wrapper>

      <h1> To work default props </h1>
    <NewUser name= 'azam'/>
    <NewUser name= 'khan'/>
    <NewUser />
    <NewUser /> */}

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


