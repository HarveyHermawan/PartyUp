import Homebanner from "../../components/HomeBanner/Homebanner"
import Homegames from "../../components/HomeGames/Homegames"
import Homepeople from "../../components/HomePeople/Homepeople"
import Navbar from "../../components/Navbar/Navbar"
import './home.css'

const Home = () => {
    return(
        <div className="homepage">
        <Navbar/>
        <Homebanner/>
        <Homegames/>
        <Homepeople/>
        </div>
    )
}

export default Home