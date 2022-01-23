import Alert from 'react-bootstrap/Alert'

export const validate = (values) => {
    const errors = {}
    if(!values.search){
        errors.search = <Alert variant={'warning'}>Por favor ingrese un nombre</Alert>
    }
    return errors
}
