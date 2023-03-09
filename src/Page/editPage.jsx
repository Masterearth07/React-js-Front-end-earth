import React from "react";
import { useState, useEffect } from "react";
import { updateApi } from "../api/api";

export const EditPage = ({setOpenUpdatePopup , id}) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  //API for detailuser
  const [userData, setUserData] = useState([]);
    console.log(userData)
    useEffect(() => {
        fetch("http://localhost:7770/personal/detailUser/"+id)
            .then((response) => response.json())
            .then((json) => setUserData(json))
            .catch((error) => console.log(error));
        
    }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    
    <div className='containerLogin'>
      
      <form onSubmit={handleSubmit}>

        <div className="labelforsignup">
            Employee ID is : {id}&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
        </div>
        <div>&emsp;</div>
        <div>
          <label className='labelforsignup'>Email :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
          <input className='inputforinput' type="email" value={email} placeholder={userData.email} onChange={(event) => setEmail(event.target.value) } />
        </div>
        <div>
          <label className='labelforsignup'>Name :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
          <input className='inputforinput' type="text" value={name} placeholder={userData.name} onChange={(event) => setName(event.target.value)} />
        </div>
        <div>
          <label className='labelforsignup'>Role :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
          <input className='inputforinput' type="text" value={role} placeholder={userData.role}  onChange={(event) => setRole(event.target.value)} />
        </div>
        <div>
          <label className='labelforsignup'>Username :&nbsp;</label>
          <input className='inputforinput' type="text" value={username} placeholder={userData.username} onChange={(event) => setUsername(event.target.value)} />
        </div>
        <div>
          <label className='labelforsignup'>Password :&nbsp;&nbsp;</label>
          <input className='inputforinput' type="password" value={password}  onChange={(event) => setPassword(event.target.value)} />
        </div>
        <div>&nbsp;</div>
        
        {/* btn for api update */}
        <button type="submit" onClick={() => {updateApi(email , name , role ,username, password , id , setOpenUpdatePopup)}}>Update</button>
      </form>
    </div>
    
  );
};
