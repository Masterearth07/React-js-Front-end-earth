import React from "react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
//page
import { EditPage } from "./editPage";
import { InformationPage } from "./infoPage";
//component
import Background from "../component/backgound";
import {PopUpPage} from '../component/PopupPage';
//api
import { deleteByIdApi } from "../api/api";



export const FirstPage = () => {
  const navigate = useNavigate();

  //get data for ID
  const location = useLocation();
  const user = location.state && location.state.user;

  //for Popup UpdatePage
  const [openUpdatePopup, setOpenUpdatePopup] = useState(false);
  //for Popup InfoPage
  const [openInfoPopup, setOpenInfoPopup] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  //Check comfrim before delete api
   function getConfirmation() {
    var retVal = window.confirm("Do you want to continue ?");
    if( retVal == true ) {
        deleteByIdApi(user , navigate);
    } else {
       return false;
    }
 }

  return (
    <Background>
    <div className='login-container'>
          <form onSubmit={handleSubmit}>
          <h1>Welcome</h1>
          <h2 className="header2">Employee ID : {user} </h2>
          <div>&nbsp;</div>

          <div className='rowforbtnFirstPage'>
            <button className="buttonDanger" type="submit" onClick={() => {navigate('/')}}>Logout</button> 
            <button className="buttonDanger" type="submit" onClick={() => {getConfirmation()}}>Delete</button>
            <button type="submit" onClick={() => {setOpenUpdatePopup(true)}}>Edit</button> 
          </div>

          <div>&nbsp;</div>

            <button type="submit" onClick={() => {setOpenInfoPopup(true)}}>info employee</button> 
          </form>

          
          <PopUpPage
            openPopup={openUpdatePopup}
            setOpenPopup={setOpenUpdatePopup}
            title="Edit">
            <EditPage setOpenUpdatePopup={setOpenUpdatePopup} id={user}/>
          </PopUpPage>

          <PopUpPage
            openPopup={openInfoPopup}
            setOpenPopup={setOpenInfoPopup}
            title="Infomation Employee">
            <InformationPage setOpenInfoPopup={setOpenInfoPopup}/>
          </PopUpPage>

    </div>
    </Background>
    
    
  );
};
