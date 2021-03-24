import React, { useState } from 'react'

import './styles.css'
import SignInScreen from '../SignInScreen/index'

function LoginScreen() {
  
  const [signIn, setSignIn] = useState(false)

  return (
    <div className='loginScreen'>
      <div className='login_background'>
        <img className='login_logo' src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png' alt='' />      
      </div>
      <button onClick={() => setSignIn(true)} className='login_button'>Sign In</button>
      <div className='login_gradient' />

      <div className='login_body'>
        {signIn ? (
          <SignInScreen />
        ): (
          <>
          <h1>Unlimited films, TV programs and more.</h1>
          <h2>Watch anywhere. Cancel at anytime</h2>
          <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
  
          <div className='login_input'>
            <form>
              <input type='email' placeholder='Email Address'/>
              <button onClick={() => setSignIn(true)} className='login_Startbutton'>GET STARTED</button>
            </form>
          </div>
          </>
        )}        
      </div>
    </div>
  )
}

export default LoginScreen
