import React, { useState,useContext,useEffect } from "react";
import AuthContext from "../Context/AuthContext";
import axios from "axios";
import { baseUrl } from "../Constants/Constants";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";




function Signup() {
  const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const navigate = useNavigate()

    const {user} = useContext(AuthContext)
  
    

    useEffect(()=>{
        if (user){
        navigate('/')
        }
    },)
  
    const handleSubmit = (e) => {


        e.preventDefault()
          const body = JSON.stringify({
            username,
            email,
            password,
            firstname,
            lastname
          });
          if (username.length === 0 ){
            Swal.fire({
              position: 'center',
              icon: 'warning',
              title: 'Invalid Data',
              showConfirmButton: false,
              timer: 1500
            })
          }
          else{
          e.preventDefault();
          axios
            .post(`${baseUrl}signup/`, body, {
              headers: { "Content-Type": "application/json" },
            })
            .then((response) => {
              console.log(response.status)
              if (response.status === 200) {
                navigate("/login");
              } else {
                Swal.fire({
                  position: "center",
                  icon: "warning",
                  title: response.data.error,
                  showConfirmButton: false,
                  timer: 1500,
                });
              }
            })
            .catch((err) => {
              Swal.fire({
                position: "center",
                icon: "warning",
                title: err.data.error,
                showConfirmButton: false,
                timer: 1500,
              });
            });
        };}
  return (
    <div>

      <section className="bg-cover w-full  mx-auto text-center flex flex-col justify-center items-center">

        <div className="bg-black p-10 bg-opacity-25">
          <form onSubmit={handleSubmit} className=" w-full max-w-lg">
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-900 text-lg font-bold mb-2" htmlFor="grid-first-name">
                  First Name
                </label>
                <input name="firstname" value={firstname}
                  onChange={(e) => {
                    setFirstname(e.target.value);
                  }} className="appearance-none block w-full bg-gray-200 text-gray-900 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label className="block uppercase tracking-wide text-gray-900 text-lg font-bold mb-2" htmlFor="grid-last-name">
                  Last Name
                </label>
                <input name="lastname" value={lastname}
                  onChange={(e) => {
                    setLastname(e.target.value);
                  }} className="appearance-none block w-full bg-gray-200 text-gray-900 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-900 text-lg font-bold mb-2" htmlFor="grid-username">
                  Username
                </label>
                <input name="username" value={username} onChange={(e) => {
                  setUsername(e.target.value);
                }} className="appearance-none block w-full bg-gray-200 text-gray-900 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-username" type="text" placeholder="Jane" />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-900 text-lg font-bold mb-2" htmlFor="grid-email">
                  Email
                </label>
                <input name="email" value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }} className="appearance-none block w-full bg-gray-200 text-gray-900 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-email" type="text" placeholder="Jane@example.com" />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-900 text-lg font-bold mb-2" htmlFor="grid-password">
                  Password
                </label>
                <input name="password" value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }} className="appearance-none block w-full bg-gray-200 text-gray-900 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="Make it as long and as crazy as you'd like" />

              </div>
            </div>
            <button className="bg-[#6ce7ae] w-[150px] rounded-md font-bold text-xl py-3 text-black hover:bg-white hover:scale-110">Signup</button>
          </form>
        </div>
      </section>
    </div>
  )
}

export default Signup