import Header from "./Header"
import { Link } from "react-router-dom";
const Error=()=>{
    return(
        <div>
           <Header/>
           <div className="bg-black">
              <h1>Something Went Wrong</h1>
              <p>We're sorry, but the page you are looking for does not exist.</p>
              <p>Please check the URL and try again.</p>
              <Link to={'/Browse'}>Back to Home</Link>
           </div>
        </div>
    )
}

export default Error;