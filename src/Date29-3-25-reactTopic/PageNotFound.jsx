import { Link } from "react-router";
export default function PageNotFound(){
    return<>
    <div>
        <Link to={'/'}  >Go to Home page</Link>
    </div>
    <h1>Page Not Found</h1>
    <img  width ='60%'src="https://img.freepik.com/free-vector/page-found-concept-illustration_114360-1869.jpg" alt="" />
    </>
}