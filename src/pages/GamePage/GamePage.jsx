import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import './GamePage.css'
import Games from '../../components/Games/Games'

const GamePage = () => {
  return (
    <div className='gamepage'>
        <Navbar/>
        <Games/>
    </div>
  )
}

export default GamePage