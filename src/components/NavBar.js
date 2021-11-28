import  { Link }  from 'react-router-dom'
import  Navbar  from 'react-bootstrap/Navbar'
import '../styles/NavBar.css'

const NavBar = () => {
    return(
            <Navbar>
                <ul>
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link to="/search">Buscador</Link>
                    </li>
                </ul>
            </Navbar>
    )
}

export default NavBar