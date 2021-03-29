import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../../features/userSlice'
import { auth } from '../../firebase'
import NavBar from '../HomeScreen/components/NavBar'

import './styles.css'

function ProfileScreen() {
  const user = useSelector(selectUser)

  return (
    <div className='profileScreen'>
      <NavBar/>
      <div className='profile_body'>
        <h1>Edit profile</h1>
        <div className='profile_info'>
          <img src='https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png' alt='Profile' />
          <div className='profile_details'>
            <h2>{user.email}</h2>
            <div className='profile_plans'>
              <h3>Plans</h3>
              <p></p>
              <button
              onClick={() => auth.signOut()}
              className='profile_signOut'
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileScreen
