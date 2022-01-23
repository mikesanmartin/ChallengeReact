import { Formik, Form, Field, ErrorMessage } from 'formik'
import '../../styles/UserLogin.css'
import Button from 'react-bootstrap/Button'
import ValidationSchema from './ValidationSchema'
import UserPost from './UserPost'
import Alert from 'react-bootstrap/Alert'

const validate = (values) => {
    const errors = {}
    if(!values.email){
        errors.email = <Alert variant={'warning'}>Email requerido</Alert>
    }
    if(!values.password){
        errors.password = <Alert variant={'warning'}>Password requerido</Alert>
    }
    return errors
}

const UserLogin = () =>{
    return(
        <Formik initialValues={{email:'', password:''}}
        validate={validate}
        valditationSchema={ValidationSchema}
        onSubmit={UserPost}>
        <Form>
            <Field type="email" name="email" placeholder="Email"/>
            <ErrorMessage name="email"/>
            <br/>
            <Field type="password" name="password" placeholder="Password"/>
            <ErrorMessage name="password"/>
            <br/>
            <Button type="submit">Enviar</Button>
        </Form>
    </Formik>
    )
}

export default UserLogin