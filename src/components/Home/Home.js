import NavBar from '../NavBar'
import HeroTeam from './HeroTeam'

const Home = () => {
    return(
        <div className='main'>
            <NavBar/>
            <div className='container'>
                <h3>Mi equipo</h3>
                <HeroTeam/>
            </div>
        </div>
    )
}

export default Home