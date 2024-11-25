import React from 'react'
import { people } from '../../data/people'
import './Homepeople.css'
import { Link } from 'react-router-dom'

const Homepeople = () => {
  return (
    <div className='people'>
        <div className='container'>
            <div className='title'>
                Connect And Play With Gamers Like You!
            </div>
            <div className='content'>
                {people.slice(0, 5).map((people) => (
                    <div className='item' key={people.id}>
                        <Link>
                            <div>
                                <img src={people.image}/>
                            </div>
                            <div className='info'>
                                <a className='name text-white'>
                                    {people.name}
                                </a>
                                <div className='rating'>
                                    <img className='star size-5' src='/star.svg'/>
                                    <span className='text text-white '>
                                    {people.rating}
                                    </span>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
            <div className='more'>
                <Link>
                    <u>See More</u>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Homepeople