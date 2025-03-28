import { Fragment, useRef, useState } from 'react'
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
import College from './College'
import CounterEffect from './CounterEffect'
import InLineCssCompeontes from './Inlinecss'
import InternalCss from './InternalCss'
import UserProifle from './UserProfile'
import StyledComp from './StyledCompent'
import BoostrapCompent from './BoostrapReact'
import UnControllerCompent from './UncontrolleComp'

import ForwardRefComp from './FowardRef'
import UseFromStatus from './UseFormstatus'
import UseTransctionHook from './UseTransactionHook'
import DrivedStateComp from './DrivedState'
import AddUser from './Date28-3-25-react/AddUser'
import DisplayUser from './Date28-3-25-react/DisplayUser'
import UpdateingObejct from './Date28-3-25-react/UpdatingObjInState'
import UpdatingArray from './Date28-3-25-react/UpdatingArrayState'
import LoginComponent from './Date28-3-25-react/UseActionState'
import UserIdHook from './Date28-3-25-react/UserIdHook'
import FragmentComp from './Date28-3-25-react/fragment'






function App() {
  // const inputRef=useRef(null)
  // const h1Ref=useRef(null)

  // const handelTextRef=()=>{
  //   console.log(inputRef)
  //   inputRef.current.focus();
  //   inputRef.current.style.color='red';
  //   inputRef.current.placeholder="enter any";
  //   inputRef.current.value='53453'

  // }
  // const inputref=useRef(null);

  // const handelInputRef=()=>{
  //   console.log(inputref)
  //   inputref.current.focus();
  //   inputref.current.style.color='red';
  //   inputref.current.placeholder="enter any";
  //   inputref.current.value='53453'

  // }

  // date 28-3-25 start 
  const [user, setAdduser] = useState('')


  // end



  return (



    <div >
      {/* Date 28/3/25 */}


      <FragmentComp />

      {/* <Fragment/> */}
      {/* <UserIdHook/>
           <UserIdHook/>
           <UserIdHook/> */}
      {/* // <LoginComponent/> */}
      {/* <UpdatingArray/> */}
      {/* <UpdateingObejct/>
           <AddUser setAdduser={setAdduser}/>
           <DisplayUser user={user}/> */}
      {/* Date 27/3/25 */}
      {/* <DrivedStateComp/> */}
      {/* <UseTransctionHook/> */}
      {/* <UseFromStatus/> */}
      {/* <ForwardRefComp ref={inputref}/>
      <button onClick={handelInputRef}>Clik</button> */}
      {/* <UnControllerCompent display={display} name='ali'data={getData}/>
      <UnControllerCompent display={display} name='azam'data={getData}/> */}
      {/* <h2>work UseRef</h2>
        <button onClick={togglebtn}>Toggle</button>
    // <input  ref={inputRef}type="text" placeholder='Enter name' />
    <button onClick={handelTextRef}>Clik</button>
    <h1 ref={h1Ref}>Hello world </h1>
    <button onClick={h1Handler}>click me to change text color</button> */}


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


