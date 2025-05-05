
import { Link, Route, Routes } from 'react-router'
import AddUsers from './APISectionReact/AddUser'
import GetUsersData from './APISectionReact/GetUsersData'
import EidtUser from './APISectionReact/EditUser'
import UserForm from './APISectionReact/UserForm'
import UserLogin from './APISectionReact/UserLogin'
//  import LazyLoading from './APISectionReact/LazyLoading'
import { lazy, Suspense, useState } from 'react'
import RestApi from './APISectionReact/RestApi'
import ColorProject from './APISectionReact/ProjectColor'
import Home from './Pages/Home'
const LazyLoading= lazy(()=>import('./APISectionReact/LazyLoading'))

function App() {

  const [load, setLoad] = useState(false)
  return (

    <>
    <Home/>

      {/* <NavBar/> */}
      {/* Date 1/4/25 api with route start  */}
      {/* <GetUsersData/> */}

      {/* end */}
     {/* <h1>lazy loading use</h1>
     
      {
        load ?  <Suspense fallback={<h4>loading.....</h4>}><LazyLoading /></Suspense>  : null
      }
      <button onClick={() => setLoad(true)}>  load user</button> */}
     
{/*        
      <ul style={{
        display: 'flex', justifyContent: 'space-around',
        width: '400px;'
      }}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/add">Add user</Link>
        </li>
        <li>
          <Link to="/login">Login user</Link>
        </li>
        <li>
          <Link to="/userlist">UserList</Link>
        </li>
        <li>
          <Link to="/project">Project</Link>
        </li>
      </ul>
      <Routes>
        <Route path='/' element={<GetUsersData />} />
        <Route path='/add' element={<AddUsers />} />
        <Route path="/edit/:id" element={<EidtUser />} />
        <Route path='/login' element={<UserLogin />} />
        <Route path='/userlist' element={ <RestApi/>} />
        <Route path='/project' element={ <ColorProject/>} />
      </Routes> */}

    </>
    // End
    //Start//
    // <div>
    //   <button onClick={setToggle}>Toogle  Heading</button>
    //   <button onClick={()=>setToggle(true)}>show  Heading</button>
    //   <button  onClick={()=>setToggle(false)}>Hide  Heading</button>
    //  {
    //   value? <h2>Custom Hook make</h2>:null
    //  }
    //  <hr />
    //  <button onClick={setdata}>Toogle  Heading</button>
    //   <button onClick={()=>setdata(true)}>show  Heading</button>
    //   <button  onClick={()=>setdata(false)}>Hide  Heading</button>
    //   {
    //     data?<h2>second heading </h2>:null
    //   }
    // </div>


    //End



    //   <div  style={{backgroundColor:'yellow', padding:'10px', width:'100vw',}}>
    //     {/* Date 28/3/25 */}

    // <SubjectContext.Provider value={sub}>
    //   <select value={sub} onChange={(event)=>setSub(event.target.value)} name="" id="">
    //   <option value="">Select subject</option>
    //   <option value="Math">Math</option>
    //   <option value="Urdu">Urdu</option>
    //   <option value="Eng">Eng</option>
    //   </select>
    //   <button onClick={()=>setSub('')}>clear</button>
    // <h1>Context APi</h1>
    // <CollegeComp/>
    // </SubjectContext.Provider>
    //    {/* <subjectContext.Provider >
    //    <h1>Context APi</h1>
    //    <CollegeComp/>
    //    </subjectContext.Provider> */}





    //   </div>
  )
}

export default App
