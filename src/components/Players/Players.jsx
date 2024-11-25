import React from 'react'
import { people } from '../../data/people'
import { Link } from 'react-router-dom'
import './Players.css'
import { useState } from 'react'

const Players = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const [selectedGame, setSelectedGame] = useState(null);

    const toggleDropDown = () => {
        setIsDropdownOpen(!isDropdownOpen)
    }

    const handleGameSelect = (game) => {
        setSelectedGame(game == 'All Games' ? null : game)
        setIsDropdownOpen(false)
    }

    const gameOption = ['All Games', 'Valorant', 'Overwatch 2', 'Fortnite', 'PUBG', 'Mobile Legends']

    const dropdownOption = selectedGame ? gameOption.filter((game) => game != selectedGame) : gameOption.filter((game) => game != 'All Games')

    const filteredPeople = selectedGame ? people.filter((player) => player.games.includes(selectedGame)) : people

  return (
    <div className='players'>
        <div className='container'>
            <div className='title-container'>
                <div className='title'>
                    Connect and play together
                </div>
                <div className='relative'>
                    <button className={`gamebtn ${isDropdownOpen ? 'rounded-full' : ''}`} onClick={toggleDropDown}>
                        <span className='gamebtn-text'>
                            {selectedGame || 'All Games'}
                            <img className={`gamebtn-arrow ${isDropdownOpen ? 'rotated' : ''}`} src="downarrow.svg"/>
                        </span>
                    </button>
                    {isDropdownOpen && (
                        <ul className='dropdown-menu'>
                            {dropdownOption.map((game, index) => (
                                <li key={index} className='dropdown-item' onClick={() => handleGameSelect(game)}>
                                    {game}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
            <div className='content'>
                {filteredPeople.map((player) => (
                    <div className='item' key={player.id}>
                        <Link>
                            <div>
                                <img src={player.image}/>
                            </div>
                            <div className='info'>
                                <a className='name text-white'>
                                    {player.name}
                                </a>
                                <div className='rating'>
                                    <img className='star size-5' src='/star.svg'/>
                                    <span className='rating-text text-white'>
                                        {player.rating}
                                    </span>
                                    <span className='rating-game text-white'>
                                        {player.games}
                                    </span>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Players