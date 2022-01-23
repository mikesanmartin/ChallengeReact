import { Formik, Form, Field, ErrorMessage } from 'formik'
import { HeroURL } from '../../features/URL'
import { useState } from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button'
import { validate } from './Validate'
import '../../styles/HeroCard.css'
import { useDispatch } from 'react-redux'
import { addHero } from '../../features/actions'

const HeroFinder = () => {
    const [hero, setHero] = useState([])

    const dispatch = useDispatch()

    const handleAddHero = (data) => {
        dispatch(addHero(data));
    };

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
                        <Button type='button' variant='outline-dark' onClick={() => handleAddHero(data)}>Agregar a equipo</Button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default HeroFinder