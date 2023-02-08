import React from 'react'
import "./Login.scss"

const Login = () => {
  return (
    <div className='loginFormContainer'>
        <div className="header">
            <h1 className="title">ALREADY MEMBERS</h1>
            <p className="help">Need help?</p>
        </div>

        <form>
            <input type="text" placeholder="Name" />
            <input type="text" placeholder='Enter your password' />
            <button className="btn">SIGN IN</button>
        </form>
    </div>
  )
}

export default Login