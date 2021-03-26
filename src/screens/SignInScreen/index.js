import React from 'react'

import './styles.css'

function SignInScreen() {

  const register = (e) => {
    e.preventDefault()
  }

  const signIn = (e) => {
    e.preventDefault()
  }
  
  return (
    <div className='signUpScreen'>
      <form>
        <h1>Sign In</h1>
        <input placeholder='Email' type='email'></input>
        <input placeholder='Password' type='password'></input>
        <button type='submit' onClick={signIn}>Sign In</button>
        <h4>
          <span className='signUpScreen_grey'>New to Netflix?</span>
          <span className='signUpScreen_link' onClick={register}>Sign Up Now.</span>
        </h4>
      </form>
    </div>
  )
}

export default SignInScreen
