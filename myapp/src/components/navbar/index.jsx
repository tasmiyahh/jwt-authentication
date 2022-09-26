
import React, { useContext } from "react"
import { GlobalContext } from "../../context"
import {Link} from "react-router-dom"
import "./index.css"


const NavBar= () =>{

  
   let {state , dispath}= useContext(GlobalContext);
    return(
      <>
      <nav className='nav'>
        <div className="userName">{state?.user?.firstName} {state?.user?.lastName}

        </div>
      
      
        <ul>
          
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/signup">Signup</Link></li>
          <li>
            <Link to="/profile">profile</Link>
          </li>
        </ul>
      </nav>
      </>
    )
  }

  export default NavBar;