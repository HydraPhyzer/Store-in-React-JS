import './Login.css'
import { Link } from 'react-router-dom'

import React from 'react'

const Login = () => {
  return (
    <div className='Login'>
        <div className="Form">
            <form action="">
                <label htmlFor="Email">Enter Your Email</label>
                <input id='Email' type="text" />
                <label htmlFor="Pass">Enter Your Password</label>
                <input id='Pass' type="password" />

                <button className='Btn LoginBtn'>Login</button>

                <p>Don;t Have An Account , Then <Link to="/signup" style={{color:"orange"}}>SignUp</Link></p>
            </form>

            <Link to="/">
              <button className='Btn w-100'>Back to Home-Page</button>
            </Link>
        </div>
    </div>
  )
}

export default Login