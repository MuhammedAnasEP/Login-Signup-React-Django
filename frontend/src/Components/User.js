

import React, { useContext, useState, useEffect } from 'react'
import AuthContext from '../Context/AuthContext'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Swal from "sweetalert2";




function User() {

    let navigate = useNavigate();


    let [users, setUser] = useState([])

    let { authTokens,user } = useContext(AuthContext)

    useEffect(() => {
        
        getUsers()

    }, [])

    let getUsers = () => {

        axios.get('http://localhost:8000/api/users/', {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((respone) => {
            console.log(respone.data)
            setUser(respone.data)
        })
        
    }
    return (
        

        <div className='flex justify-center w-full  h-96'>
            <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div className="flex flex-col items-center pt-5 justify-center">
                    <div className='flex flex-col items-center justify-center'>
                    <h1>{user.name}</h1>


                        <h1 className='mb-1 text-xl font-medium dark:text-white text-center'>User Details</h1>

                        {
                            users.map((obj) => {
                                if (user.username===obj.username){
                                    return(
                                        <div className='pt-10'>

                                            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white text-center">Name :     {obj.first_name} {obj.last_name}</h5>
                                            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white text-center">Username : {obj.username}</h5>
                                            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white text-center">Email :    {obj.email}</h5>

                                        </div>
                                    )
                                }
                                
                                
                            })
                        }



                    </div>


                </div>
            </div>
        </div>
    )
}

export default User
