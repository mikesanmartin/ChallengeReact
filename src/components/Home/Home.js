import NavBar from '../NavBar'
import { store } from '../../store/store'
import '../../styles/HeroGrid.css'
import { Button, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { removeHero } from '../../features/actions'

const Home = () => {

    const dispatch = useDispatch()
    const Team = useSelector((state) => state);
    // console.log(store.getState())
    console.log(Team)

    return(
        <div className='main'>
            <NavBar/>
            <div className='container'>
                <h3>Mi equipo</h3>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Nombre</th>
                            <th>Inteligencia</th>
                            <th>Fuerza</th>
                            <th>Velocidad</th>
                            <th>Durabilidad</th>
                            <th>Poder</th>
                            <th>Combate</th>
                            <th>Detalles</th>
                            <th>Remover</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Team.map((Team) =>
                            <tr key={Team.id}>
                                <td><img src={Team.image.url} alt='error'/></td>
                                <td>{Team.name}</td>
                                <td>{Team.powerstats.intelligence}</td>
                                <td>{Team.powerstats.strength}</td>
                                <td>{Team.powerstats.speed}</td>
                                <td>{Team.powerstats.durability}</td>
                                <td>{Team.powerstats.power}</td>
                                <td>{Team.powerstats.combat}</td>
                                <td><Button>Ver</Button></td>
                                <td><Button onClick={() => dispatch(removeHero(Team))}>-</Button></td>
                            </tr>
                        )}
                        <tr>
                            <th></th>
                            <th>Total Stats</th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </div>
    )
}

export default Home