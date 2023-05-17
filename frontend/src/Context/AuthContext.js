import axios from "axios"
import { createContext, useState } from "react";
import { baseUrl } from "../Constants/Constants";
import jwt_decode from "jwt-decode"

import { useNavigate } from "react-router-dom";

const AuthContext = createContext()

export default AuthContext;


export const AuthProvider = ({ children }) => {

    

    const [authTokens, setAuthTokens] = useState(()=> localStorage.getItem('authToken') ? JSON.parse(localStorage.getItem('authToken')): null )
    const [User, setUser] = useState(()=>localStorage.getItem('authToken') ? jwt_decode(localStorage.getItem('authToken')): null)

    const navigate = useNavigate()

    let loginUser = (e) => {
        e.preventDefault()
        console.log("loooooooooo")
        const response =
            axios.post(`${baseUrl}token/`,
                JSON.stringify({ 'username': e.target.username.value, 'password': e.target.password.value }),
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            ).then((respone)=>{
               if(respone.status === 200){
                setAuthTokens(respone.data)
                setUser(jwt_decode(respone.data.access))
                localStorage.setItem('authToken',JSON.stringify(respone.data))
                navigate('/')

               }else{
                alert('Somthing went Wrong')
               }
            })

    }


    let logoutUser = () =>{
        setAuthTokens(null)
        setUser(null)
        localStorage.removeItem('authToken')
    }

    let contextData = {
        user : User,

        loginUser: loginUser,

        logoutUser: logoutUser,

        authTokens : authTokens


    }

    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>

    )

} 