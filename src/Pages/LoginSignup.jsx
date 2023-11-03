import React from 'react'
import './CSS/LoginSignup.css'

export const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-field">
          <input type='text' placeholder='Your Name'></input>
          <input type='email' placeholder='Email address'></input>
          <input type='password' placeholder='password'></input>
        </div>
        <button>Continue</button>
        <p  className='loginsignup-login'>Already have an account?<span>Login here</span></p>
        <div className='loginsignup-agree'>
          <input type='checkbox' name='' id=''></input>
          <p>By continuing, i agree the terms and condition</p>
        </div>
      </div>
    </div>
  )
}
