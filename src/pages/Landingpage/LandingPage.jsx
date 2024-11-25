 import './LandingPage.css'
 import img from '/landingbanner.svg'
 import Navlandingpage from '../../components/Navlandingpage/Navlandingpage'
 import { Link } from 'react-router-dom'
 
 const Landingpage = () => {
    return(
        <div className="landing">
        <Navlandingpage/>
            <div>
                <div className="container">
                    <div className="leftside">
                        <div className="maintext font-sans font-bold text-white">
                            Connect with<br/>other gamers
                        </div>
                        <div className="secondtext font-sans text-white">
                            game efficiently and strategically by teaming up
                        </div>
                        <Link to="/register">
                        <button className='getstartedbtn  text-white bg-[#7740B9] rounded-3xl'>
                            Get Started
                        </button>
                        </Link>
                    </div>
                    <div className="rightside">
                        <img className='image rounded-2xl' src={img}/>
                    </div>
                </div>
            </div>
        </div>
    )
 }

 export default Landingpage