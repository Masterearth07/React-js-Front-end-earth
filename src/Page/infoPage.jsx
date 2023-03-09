import React from "react";
import { useState, useEffect } from "react";

export const InformationPage = ({setOpenInfoPopup}) => {
 
  const [role, setRole] = useState('');
  
  const [userData, setUserData] = useState([]);
    console.log(userData)

  //for put btn to Search to api +role(String)
  const handleSubmit = (event) => {
  event.preventDefault();
  fetch("http://localhost:7770/personal/getpersonal/" + role)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Error retrieving data");
      }
    })
    .then((json) => setUserData(json))
    .catch((error) => console.log(error));
};

    
  return (
    
    <div className='containerLogin'>
      
      <form onSubmit={handleSubmit}>

        <div>&emsp;</div>
        <div>
          <label className='labelforsignup'>Role :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
          <input className='inputforinput' type="text" value={role} placeholder={userData.role}  onChange={(event) => setRole(event.target.value)} />
        </div>
       
            {userData.map(info =>(
                
                <div>
                    Name is : {info.name}&nbsp;&nbsp;
                    Role is : {info.role}&nbsp;&nbsp;
                </div>
            ))}
        
        <div>&nbsp;</div>

        <button type="submit" onClick={() => {}}>Search</button>
      </form>
    </div>
  );
};
