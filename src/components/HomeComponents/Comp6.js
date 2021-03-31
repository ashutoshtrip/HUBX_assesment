import React from 'react';
import {    teal} from '@material-ui/core/colors';
import PersonIcon from '@material-ui/icons/Person';
import AccountBoxOutlinedIcon from '@material-ui/icons/AccountBoxOutlined';


import "./Comp6.css";
 function Comp6  ()  {
  return (
  
   
    <div className="comp6-body">
      
     <div className="comp6-upper">
  
     <PersonIcon  className="profile-icon" fontSize="small" style={ {color:teal[300]}}  />
     <span className="newuser-txt"> New Users (1) </span>
   
     </div>

     <div className="comp6-lower">
       <div className="hubx6">
   <AccountBoxOutlinedIcon  className="profile-box" fontSize="large" />

  <span className="profile-name6">  hubx </span>
  </div>
  <button className="contact-btn"> contact </button>

     </div>
     
    </div>
    
    

  )
}
export default Comp6;