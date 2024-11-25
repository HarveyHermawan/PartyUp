import React from 'react'
import './PlayerPage.css'
import Navbar from '../../components/Navbar/Navbar'
import Players from '../../components/Players/Players'

const Playerpage = () => {
  return (
    <div className='playerpage'>
        <Navbar/>
        <Players/>
    </div>
  )
}

export default Playerpage