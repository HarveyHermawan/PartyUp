import React from 'react'
import banner from '../../assets/homebanner.svg'
import './Homebanner.css'

const Homebanner = () => {
  return (
    <div className='homebanner'>
        <img src={banner} className='image'/>
        <div className='text'>
            Find Your Next Gamer Buddy Never Play Solo Again
        </div>
    </div>
  )
}

export default Homebanner