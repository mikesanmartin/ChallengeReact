import { useState } from 'react'
import AddToTeam from '../Search/AddToTeam'

const HeroTeam = () => {
    const [team, setTeam] = useState()
    const info = AddToTeam.data
    console.log(info)

    return(
        <div className='container'>
        </div>
    )
}

export default HeroTeam