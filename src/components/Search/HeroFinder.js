import { Formik, Form, Field, ErrorMessage } from 'formik'
import { useState } from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'
import '../../styles/HeroCard.css'
import AddToTeam from './AddToTeam'

const AccessToken = '10226325963000903'
const HeroURL = `https://superheroapi.com/api/${AccessToken}/` 

const validate = (values) => {
    const errors = {}
    if(!values.search){
        errors.search = <Alert variant={'warning'}>Por favor ingrese un nombre</Alert>
    }
    return errors
}

// function Add(data){
//     console.log(data)
// }

const HeroFinder = () => {
    const [hero, setHero] = useState([])

    return(
        <div className='container'>
            <div>
                <h3>Buscador de superhéroes</h3>
                <Formik initialValues={{search:''}} 
                validate={validate}
                onSubmit={async values => {
                    const getHero = await axios( HeroURL+ `search/${values.search}` )

                    if(getHero.data.response === 'error'){
                        alert('Heroe no encontrado, por favor, vuelva a intentarlo')
                    }else{
                        const data = await getHero.data.results
                        setHero(data)
                    }
                }}>
                <Form>
                    <Field type='text' name='search' placeholder='Llame a su heroe'/>
                    <ErrorMessage name='search'/>
                    <Button type='submit'>Busqueda</Button>
                </Form>
                </Formik>
            </div>
            <div className='HeroCard'>
                {hero.map(data => 
                    <div className='Hero' key={data.id}>
                        <h5>{data.name}</h5>
                        <img src={data.image.url} alt='error'/>
                        <Button type='button' variant='outline-dark' onClick={(props) => AddToTeam(data)}>Agregar a equipo</Button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default HeroFinder