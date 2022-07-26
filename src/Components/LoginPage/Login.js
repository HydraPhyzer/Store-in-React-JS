import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth} from '../Firebase'
import { useNavigate } from 'react-router-dom'
import './Login.css'


const Login = () => {
  let [LoEmail, setLoEmail] = useState('')
  let [LoPass, setLoPass] = useState('')
  let [Warns, setWarns] = useState(0);


  let Navigator = useNavigate();

  let HandleSignIn = () => {
    signInWithEmailAndPassword(auth, LoEmail, LoPass)
      .then(() => {
        Navigator('/')
      })
      .catch((Error) => {
        setWarns(1);
      })
  }

  return (
    <div className='Login'>
      <div className="Form">
        <form action="" onSubmit={(E) => { HandleSignIn(); E.preventDefault() }}>
          <label htmlFor="Email">Enter Your Email</label>
          <input id='Email' type="email" value={LoEmail} onChange={(E) => { setLoEmail(E.target.value); setWarns(0) }} />
          <label htmlFor="Pass">Enter Your Password</label>
          <input id='Pass' type="password" value={LoPass} onChange={(E) => { setLoPass(E.target.value); setWarns(0) }} />
          {Warns === 1 ? <span className='text-danger'>May Be Password Short or Email Wrong</span> : <span></span>}

          <button className='Btn LoginBtn'>Login</button>

          <p>Don't Have An Account , Then <Link to="/signup" style={{ color: "orange" }}>Signup</Link></p>

        </form>

        <Link to="/">
          <button className='Btn w-100'>Back to Home-Page</button>
        </Link>
      </div>
    </div>
  )
}

export default Login