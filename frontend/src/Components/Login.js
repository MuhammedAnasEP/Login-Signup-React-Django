import React,{useContext} from "react";
import AuthContext from "../Context/AuthContext";

function Login() {

    const {loginUser} = useContext(AuthContext)
    
    
    return (
        <div>
            
            <section  className="bg-cover w-full h-screen mx-auto text-center flex flex-col justify-center items-center">
                
                <div className="bg-black p-10 bg-opacity-25">
                <form  onSubmit={loginUser} className=" w-full max-w-lg">
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3 mb-6 md:mb-0">
                    <label className="block tracking-wide text-gray-900 text-xl font-bold mb-2" htmlFor="grid-first-name">
                        UserName
                    </label>
                    <input name="username" className="appearance-none block w-full bg-gray-200 text-gray-900 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                    <label className="block tracking-wide text-gray-900 text-xl font-bold mb-2" htmlFor="grid-password">
                        Password
                    </label>
                    <input name="password" className="appearance-none block w-full bg-gray-200 text-gray-900 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="******************" />
                    </div>
                </div>
                <button className="bg-[#6ce7ae] w-[150px] rounded-md font-bold text-xl py-3 text-black hover:bg-white hover:scale-105">Login</button>
                </form>
                </div>
            </section>
        </div>
    )
}

export default Login