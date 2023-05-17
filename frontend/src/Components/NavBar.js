import React,{useState,useContext} from "react";
import {AiOutlineClose,AiOutlineMenu} from 'react-icons/ai'
import { Link } from "react-router-dom";
import AuthContext from "../Context/AuthContext";


function NavBar(){ 
    const {user} = useContext(AuthContext)
    const [Nav,setNav] = useState(true)

    const handleNav =()=>{
        setNav(!Nav)
    }

    return(
        <div className='flex justify-between items-center h-24 max-w-[1240px] px-4 mx-auto text-white'>
            <h1 className="w-full text-3xl font-bold text-[#00df9a]"><Link to='/'>Home</Link></h1>
            <ul className="hidden md:flex">
                <li className="p-4"><Link to='/'>Home</Link></li>
                {user ? null :<li className="p-4"><Link to='/login'>Login</Link></li>}
                {user ? null :<li className="p-4"><Link to='/signup'>Signup</Link></li>}
                {user ? <li className="p-4"><Link to='/profile'>Profile</Link></li>:null}
                <li className="p-4">Contact</li>
            </ul>
            <div onClick={handleNav} className="block md:hidden">
                {!Nav ? <AiOutlineClose size={20}></AiOutlineClose> : <AiOutlineMenu size={20}/>}
            </div>
            <div className={!Nav ? "fixed left-0 top-0 w-[50%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 md:hidden":'fixed left-[-100%] ease-out-in duration-500'}>
                <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">Home</h1>
                <ul className="uppercase p-4">
                    <li className="p-4 border-b border-b-gray-600">Login</li>
                    <li className="p-4 border-b border-b-gray-600">Signup</li>
                    <li className="p-4 border-b border-b-gray-600">About</li>
                    <li className="p-4 ">Contact</li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar