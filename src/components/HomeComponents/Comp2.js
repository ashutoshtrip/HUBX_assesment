import React from 'react';
import {    teal} from '@material-ui/core/colors';
import PersonIcon from '@material-ui/icons/Person';
import AccountBoxOutlinedIcon from '@material-ui/icons/AccountBoxOutlined';


import "./Comp2.css";
 function Comp2  ()  {
  return (
    
   
    <div className="comp2-body">
      
     <div className="comp2-upper">
  
     <PersonIcon  className="profile-icon" fontSize="small" style={ {color:teal[300]}}  />
     <span className="newuser-txt"> New Users </span>
     <button className="seeall-btn">see all</button> 
     </div>

     <div className="comp2-lower">
         
   <AccountBoxOutlinedIcon  className="profile-box" fontSize="large" />
  <span className="profile-name">  hubx </span><br>
  </br>
 

     </div>
     <span className="duration"> 24 minutes</span>
    </div>
    
    

  )
}
export default Comp2;