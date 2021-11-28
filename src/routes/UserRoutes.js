import { Routes, Route, Navigate } from 'react-router-dom'
import UserLogin from '../components/Login/UserLogin'
import Home from '../components/Home/Home'
import Search from '../components/Search/Search'

const UserRoutes = () => {
    return(
        <Routes>
            <Route path='/' element={<Navigate replace to='/login'/>}/>
            <Route path='/login' element={<UserLogin/>}/>
            <Route path='/home' element={<Home/>} />
            <Route path='/search' element={<Search/>}/>
        </Routes>
    )
}

export default UserRoutes