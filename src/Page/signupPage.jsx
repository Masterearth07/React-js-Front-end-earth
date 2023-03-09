import React from "react";
import { useState, useEffect } from "react";
//api
import { registerApi } from "../api/api";

export const SignupPage = ({setOpenPopup}) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div className='containerLogin'>
      <form onSubmit={handleSubmit}>
        <div>
          <label className='labelforsignup'>Email :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
          <input className='inputforinput' type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
        </div>
        <div>
          <label className='labelforsignup'>Name :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
          <input className='inputforinput' type="text" value={name} onChange={(event) => setName(event.target.value)} />
        </div>
        <div>
          <label className='labelforsignup'>Role :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
          <input className='inputforinput' type="text" value={role} onChange={(event) => setRole(event.target.value)} />
        </div>
        <div>
          <label className='labelforsignup'>Username :&nbsp;</label>
          <input className='inputforinput' type="text" value={username} onChange={(event) => setUsername(event.target.value)} />
        </div>
        <div>
          <label className='labelforsignup'>Password :&nbsp;&nbsp;</label>
          <input className='inputforinput' type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
        </div>
        <div>&nbsp;</div>
        <button type="submit" onClick={() => {registerApi(email , name , role ,username, password , setOpenPopup) }}>register</button>
        
      </form>
      
    </div>
    
  );
};
