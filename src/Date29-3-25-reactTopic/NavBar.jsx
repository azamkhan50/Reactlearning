import { Link, NavLink, Outlet } from "react-router";
import './header.css'
export default function NavBar() {
    return (
       <div>
         <div className="header">
            <div className="link">
                <NavLink to='/'><h2>Logo</h2></NavLink>
            </div>
            <div>
                <ul>
                    <li> <NavLink className={({isActive})=>isActive?'custom-active link':'link'} to='/'><h1>Home</h1></NavLink></li>
                    <li> <NavLink to='pak/user/about'><h1>About</h1></NavLink></li>
                    <li>  <NavLink to='pak/user/login'><h1>Login</h1></NavLink></li>
                    <li>  <NavLink to='/uni'><h1>University</h1></NavLink></li>
                    <li>  <NavLink to='/users'><h1>Users</h1></NavLink></li>
                    <li>  <NavLink to='/users/list'><h1>List</h1></NavLink></li>


                </ul>



            </div>

        </div>
        <Outlet/>
       </div>
    )
}