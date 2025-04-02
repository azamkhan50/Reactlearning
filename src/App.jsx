
import { BrowserRouter, Link, Navigate, Route, Routes } from 'react-router'
import HomePage from './Date29-3-25-reactTopic/HomePage'
import AboutPage from './Date29-3-25-reactTopic/AboutPage'
import NavBar from './Date29-3-25-reactTopic/NavBar'
import LoginPage from './Date29-3-25-reactTopic/LoginPage'
import PageNotFound from './Date29-3-25-reactTopic/PageNotFound'
import University from './Date29-3-25-reactTopic/University'
import Student from './Date29-3-25-reactTopic/Student'
import Daperment from './Date29-3-25-reactTopic/Daperment'
import Staff from './Date29-3-25-reactTopic/Staff'
import UsersPage from './Date29-3-25-reactTopic/Users'
import UsersDetailsPage from './Date29-3-25-reactTopic/UserDetails'

function App() {
  // const [sub,setSub]= useState('')
  // const [value,setToggle]=useToggle(true);
  // const [data,setdata]=useToggle(true);
  // console.log(value);

  return (
    // 29-3-25 reacttopic use router start
    //   <BrowserRouter>
    //   <>
    //     <Link to="/">Home</Link>
    //     <Link to="/about">About</Link>
    //     <h2>Router</h2>
    //     <Routes>
    //       <Route path="/" element={<HomePage />} />
    //       <Route path="/about" element={<AboutPage />} />
    //     </Routes>
    //   </>
    // </BrowserRouter>
    <>
      {/* <NavBar/> */}


      <Routes>
        <Route element={<NavBar />}>
          <Route path='/' element={<HomePage />} />
          {/* use prefix  */}
          <Route path='pak'>
            <Route path='/pak/user'>
            <Route path='/pak/user/about' element={<AboutPage />} />
            <Route path='/pak/user/login' element={<LoginPage />} />
            </Route>
          
          </Route>
         {/* use ? option ? id/name?  */}
          <Route path='/users/list?' element={<UsersPage />} />
          <Route path='/users/:id/:name?' element={<UsersDetailsPage  />} />

        </Route>


        <Route path='/uni' element={<University />} >
          <Route index element={<Student />} />
          <Route path='daper' element={<Daperment />} />
          <Route path='staff' element={<Staff />} />
        </Route>
        <Route path='/*' element={<PageNotFound />} />
        {/* to redirect to any page you want * */}
        {/* <Route path='/*' element={<Navigate to={'/'}/>} /> */}
      </Routes>
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
