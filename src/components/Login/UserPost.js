import axios from 'axios'
import UserRedirect from './UserRedirect'

const LoginURL = `http://challenge-react.alkemy.org/`

const UserPost = (values) => {
    let email = values.email
    let password = values.password
    
    axios.post( LoginURL, {email, password})
    .then(function(response){
        if(response.status === 200){
            // console.log(response)
            GetToken(response.data)
        }
    })
    .catch(function (error){
        if (error.response){
            // console.log('ha ocurrido un error')    
            alert('El Email ingresado y/o password son incorrectos, por favor, intente nuevamente.')
        }
    }) 
}

const GetToken = (response) => {
    let token = response.token
    let SaveToken = localStorage.setItem('UserToken', token)

    if (!SaveToken){
        return(
            // console.log('Get Token ejecutado')
            UserRedirect('/home')
        )
    }
}

export default UserPost