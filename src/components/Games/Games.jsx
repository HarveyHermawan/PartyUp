import React from 'react'
import { games } from '../../data/games'
import { Link } from 'react-router-dom'
import './Games.css'

const Games = () => {
  return (
    <div className='games'>
        <div className='container'>
            <div className='title'>
                Games
            </div>
            <div className='content'>
                {games.map((game) => (
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
        </div>
    </div>
  )
}

export default Games