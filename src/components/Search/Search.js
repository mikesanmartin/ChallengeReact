import NavBar from '../NavBar'
import HeroFinder from './HeroFinder'

const Search = () => {
    return(
        <div className='main'>
            <NavBar/>
            <div className='container'>
                <HeroFinder/>
            </div>
        </div>
        
    )
}

export default Search