import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
//Page
import {SignupPage} from './signupPage';
//Component
import Background from "../component/backgound";
import {PopUpPage} from '../component/PopupPage';
//api
import { loginapi } from "../api/api";



export const LoginPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  //use for popup
  const [openPopup, setOpenPopup] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <Background>
    <div className='login-container'>
      
      <form onSubmit={handleSubmit}>
      <h1>Login</h1>
      <div>&nbsp;</div>
        <div>
          <label>Username:&nbsp;</label>
          <input type="username" value={username} onChange={(event) => setUsername(event.target.value)} />
        </div>
        <div>&nbsp;</div>
        <div>
          <label>Password:&nbsp;&nbsp;</label>
          <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
        </div>
        <div>&nbsp;</div>
        <div className='rowforbtn'>
        <button type="submit" onClick={() => {setOpenPopup(true)}}>register</button>

        <button type="submit" onClick={() => { loginapi(username, password , navigate)}}>Login</button> 
        </div>

      </form>

      <PopUpPage
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
        title="Signup">
        <SignupPage setOpenPopup={setOpenPopup} />
      </PopUpPage>

    </div>

    </Background>
  );
  
};
