import './Signup.css'
import { Link } from 'react-router-dom'

import {createUserWithEmailAndPassword} from 'firebase/auth'
import {useNavigate} from 'react-router-dom'
import {auth} from '../Firebase'
import React, { useState } from 'react'

const Signup = () => {
  let [SiEmail , setSiEmail]=useState('')
  let [SiPass , setSiPass]=useState('')
  let [Warn,setWarn]=useState(0);

  let Navigator=useNavigate();

  let HandleSignUp=(Event)=>
  {
    createUserWithEmailAndPassword(auth , SiEmail , SiPass)
    .then(()=>
    {
      Navigator('/')
    })
    .catch((Error)=>
    {
      setWarn(1);
    })
  }
  return (
    <div className='Signup'>
        <div className="Form">
            <form action="" onSubmit={(E)=>{HandleSignUp(); E.preventDefault()}}>
                <label htmlFor="Email">Enter Your Email</label>
                <input required={true} id='Email' type="email" value={SiEmail} onChange={(E)=>{setSiEmail(E.target.value) ;setWarn(0)}}/>
                <label htmlFor="Pass">Enter Your Password</label>
                <input required={true} id='Pass' type="password" value={SiPass} onChange={(E)=>{setSiPass(E.target.value);setWarn(0)}}/>

                {Warn===1?<span className='text-danger'>May Be Password Short or Email Wrong</span>:<span></span> }

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