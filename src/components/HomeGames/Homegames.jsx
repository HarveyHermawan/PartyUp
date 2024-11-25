import React from 'react'
import { games } from '../../data/games'
import './Homegames.css'
import { Link } from 'react-router-dom'

const Homegames = () => {
  return (
    <div className='homegames'>
        <div className='container'>
            <div className='title'>
                Popular Games Right Now!
            </div>
            <div className='content'>
                {games.slice(0, 5).map((game) => (
                    <div className='item' key={game.id}>
                        <Link>
                            <div>
                                <img src={game.image} />
                            </div>
                            <div className='gamename'>{game.name}</div>
                        </Link>
                    </div>
                ))}
            </div>
            <div className='more'>
                <Link to="/game">
                    <u>See More</u>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Homegames