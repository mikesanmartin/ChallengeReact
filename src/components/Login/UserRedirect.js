import { useNavigate } from 'react-router-dom'

function UserRedirect(){
    let UserToken = localStorage.getItem('UserToken')
    let navigate = useNavigate()

    if(UserToken != null){
        return navigate('/home')
    }

}

export default UserRedirect