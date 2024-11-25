import { Link } from 'react-router-dom'
import './Navlandingpage.css'

const Navlandingpage = () => {

    return(
        <div className="nav">
            <div className='container'>
                <div className='logo'>
                    PartyUp
                </div>
                <Link to='/login'>
                <button className='loginbtn text-white bg-[#7740B9] rounded-3xl font-medium'>
                    Login
                </button>
                </Link>
            </div>
        </div>
    )
}

export default Navlandingpage