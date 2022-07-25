import './Signup.css'
import { Link } from 'react-router-dom'

import React from 'react'

const Signup = () => {
  return (
    <div className='Signup'>
        <div className="Form">
            <form action="">
                <label htmlFor="Email">Enter Your Email</label>
                <input id='Email' type="text" />
                <label htmlFor="Pass">Enter Your Password</label>
                <input id='Pass' type="password" />

                <button className='Btn SignupBtn'>Signup</button>

                <p>Already Have An Account , Then <Link to="/login" style={{color:"orange"}}>Login</Link></p>

            </form>

            <Link to="/">
              <button className='Btn w-100'>Back to Home-Page</button>
            </Link>
        </div>
    </div>
  )
}

export default Signup