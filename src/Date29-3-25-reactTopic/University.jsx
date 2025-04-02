import {  Link, NavLink, Outlet } from "react-router";

export default function University() {
    return <div className="college" style={{textAlign:'center'}}>
        <h1> University Page</h1>
        <Link to={"/"}>Go back to Home</Link>
        <br /><br />
        <NavLink className='link'to=''>Student</NavLink>
        <NavLink className='link'to='daper'>Deparment</NavLink>
        <NavLink className='link'to='staff'>Staff</NavLink>
       
        <Outlet></Outlet>

    </div>
}