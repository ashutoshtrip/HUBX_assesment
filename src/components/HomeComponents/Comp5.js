import React from 'react';
import {    teal} from '@material-ui/core/colors';

import HourglassEmptyIcon from '@material-ui/icons/HourglassEmpty';
import PersonIcon from '@material-ui/icons/Person';
import AccountBoxOutlinedIcon from '@material-ui/icons/AccountBoxOutlined';

import "./Comp5.css";
 function Comp5  ()  {
  return (
   <>
    <div className="comp5-body">
      
     <div className="comp5-upper">
     <span className="newuser-txt5"> Trial period </span>
     <HourglassEmptyIcon className="profile-icon5" fontSize="large" style={ {color:teal[300]}}  />
  
   
     </div>

     <div className="comp5-lower">
    
      <span className="day-left-num ">30  <br></br>  <span className="day-left"> DAYS LEFT</span>
 </span> 
 
    </div>
    <button className="upgrade-btn"> Upgrade now! >> </button>


    <div className="comp6-body">
      
      <div className="comp6-upper">
   
      <PersonIcon  className="profile-icon" fontSize="small" style={ {color:teal[300]}}  />
      <span className="newuser-txt"> Online Users (1) </span>
    
      </div>
 
      <div className="comp6-lower">
        <div className="hubx6">
    <AccountBoxOutlinedIcon  className="profile-box" fontSize="large" />
 
   <span className="profile-name6">  hubx </span>
   </div>
   <button className="contact-btn"> contact </button>
 
      </div>
      
     </div>
     
    </div>
   
</>
   

  )
}
export default Comp5;