import React from "react";
import Home from "./Pages/Home";
import LoginPage from "./Pages/LoginPage";
import Profile from "./Pages/Profile";
import SignupPage from "./Pages/SignupPage";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import NavBar from "./Components/NavBar";
import {AuthProvider} from "./Context/AuthContext"

function App() {
  return (
    <div>
      <BrowserRouter>
        <AuthProvider>
          
        <NavBar/>
        <Routes>
          <Route Component={Home} path='/' exact></Route>
          <Route Component={LoginPage} path='/login' exact></Route>
          <Route Component={SignupPage} path='/signup' exact></Route>
          <Route Component={Profile} path='/profile' exact></Route>
          
        </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
