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
import College from './College'







function App() {
  const collegedata = [
    {
        name: 'ku',
        city: 'gilgit',
        website: 'www.ku.com',
        student: [
            {
                name: 'ali',
                stdemail: 'ali@gmail.com',
                address: 'khi'
            },
            {
                name: 'khan',
                stdemail: 'khan@gmail.com',
                address: 'skd'
            },
            {
                name: 'raj',
                stdemail: 'raj@gmail.com',
                address: 'lhr'
            }
        ]
    },
    {
        name: 'pu',
        city: 'lahore',
        website: 'www.pu.com',
        student: [
            {
                name: 'hassan',
                stdemail: 'hassan@gmail.com',
                address: 'isb'
            },
            {
                name: 'usman',
                stdemail: 'usman@gmail.com',
                address: 'pwr'
            },
            {
                name: 'zain',
                stdemail: 'zain@gmail.com',
                address: 'lhr'
            }
        ]
    },
    {
        name: 'qu',
        city: 'quetta',
        website: 'www.qu.com',
        student: [
            {
                name: 'danish',
                stdemail: 'danish@gmail.com',
                address: 'qta'
            },
            {
                name: 'jawad',
                stdemail: 'jawad@gmail.com',
                address: 'rwp'
            },
            {
                name: 'ahmed',
                stdemail: 'ahmed@gmail.com',
                address: 'hyd'
            }
        ]
    },
    {
        name: 'iu',
        city: 'islamabad',
        website: 'www.iu.com',
        student: [
            {
                name: 'farhan',
                stdemail: 'farhan@gmail.com',
                address: 'isb'
            },
            {
                name: 'bilal',
                stdemail: 'bilal@gmail.com',
                address: 'fsd'
            },
            {
                name: 'rehman',
                stdemail: 'rehman@gmail.com',
                address: 'skd'
            }
        ]
    }
];

  return (



    <div>

      <h2>Nessted Array</h2>
      {
        collegedata.map((data,index)=>(
          <div key={index}>
           
           <College data={data}/>
           
          </div>
          
        ))
      }
      {/* <h2>Use props clock task1 to change color selct change color color</h2>
      <select onChange={(event) => { setcolor(event.target.value) }} defaultChecked='yellow'>
        <option value="yellow">Yellow</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
      </select>
      <TaskColck color={color} />
      <h2>Rescuued code</h2>
      {
        userData.map((user) => (
          <div key={user.id}>
            <Userdata data={user} />
          </div>
        ))


      }

      <ArrayLoppCompt></ArrayLoppCompt>

      <RadioDropDown />
      <br /><br /><br />
      <h1>React js Checkbox work</h1>
      <Skills /> */}

     

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


