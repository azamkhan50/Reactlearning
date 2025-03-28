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
import CollegeComp from './Date28-3-25-react/College'
import { SubjectContext } from './Date28-3-25-react/ContextData'

function App() {
  const [sub,setSub]= useState('')
  return (
    <div  style={{backgroundColor:'yellow', padding:'10px', width:'100vw',}}>
      {/* Date 28/3/25 */}

  <SubjectContext.Provider value={sub}>
    <select value={sub} onChange={(event)=>setSub(event.target.value)} name="" id="">
    <option value="">Select subject</option>
    <option value="Math">Math</option>
    <option value="Urdu">Urdu</option>
    <option value="Eng">Eng</option>
    </select>
    <button onClick={()=>setSub('')}>clear</button>
  <h1>Context APi</h1>
  <CollegeComp/>
  </SubjectContext.Provider>
     {/* <subjectContext.Provider >
     <h1>Context APi</h1>
     <CollegeComp/>
     </subjectContext.Provider> */}

    
  


    </div>
  )
}

export default App
