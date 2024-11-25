import './Navbar.css'
import coin from '../../assets/coin.svg'
import profile from '/Profile.svg'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Profile from '../Profile/Profile'

const Navbar = () => {

    const [isScrolled, setIsScrolled] = useState(false)

    const handleScroll = () =>{
        const offset = window.scrollY
        if(offset > 50){
            setIsScrolled(true)
        }else{
            setIsScrolled(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return(
        <div className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className='container'>
                <Link className='logo'>
                    PartyUp
                </Link>
                <div className='select'>
                    <Link to='/home' className='home-text'>
                        Home
                    </Link>
                    <Link to='/game' className='games-text'>
                        Games
                    </Link>
                    <Link to='/player' className='connect-text'>
                        Connect
                    </Link>
                    <Link to='/shop' className='shop-text'>
                        Shop
                    </Link>
                    <Link className='currency bg-[#7740B9] rounded-3xl font-bold px-8'>
                        <img src={coin} className='coin'/>
                        120
                    </Link>
                    <Link to='/profile'>
                        <img className='profile' src={profile}/>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar