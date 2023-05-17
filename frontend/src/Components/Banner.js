import React,{useContext} from "react";
import { Link } from "react-router-dom";

import AuthContext from "../Context/AuthContext";

function Banner(){
    const {user,logoutUser} = useContext(AuthContext)
    return(
        <div className="text-white">
            <div className="max-2w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center ">
                <p className="text-[#00df9a]">GROW WITH PRACTICE</p>

                {user ?<button onClick={logoutUser} className="bg-[#6ce7ae] w-[200px] rounded-md font-medium my-7 mx-auto py-3 text-black" ><Link to='/'>Log Out</Link></button> : <button className="bg-[#6ce7ae] w-[200px] rounded-md font-medium my-7 mx-auto py-3 text-black" ><Link to='/login'>Login</Link></button>}
            </div>
        </div>
    )
}

export default Banner