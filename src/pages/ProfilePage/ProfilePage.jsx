import React from 'react'
import './Profile.css'
import Navbar from '../../components/Navbar/Navbar'
import Banner from '../../components/Profile/Banner'
import Profile from '../../components/Profile/Profile'

const ProfilePage = () => {
  return (
    <div className='profilepage'>
      <Navbar/>
      <Profile/>
      </div>
  )
}

export default ProfilePage