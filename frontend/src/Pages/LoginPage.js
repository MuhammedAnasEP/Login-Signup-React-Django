import React,{useContext, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import Login from '../Components/Login'
import AuthContext from '../Context/AuthContext'



function LoginPage() {

  const {user} = useContext(AuthContext)
  
  const navigate = useNavigate();

  useEffect(()=>{
    if (user){
      navigate('/')
    }
  },)

  return (
    <div>      
      <Login/>
    </div>
  )
}

export default LoginPage
