import React from 'react';
import {    teal} from '@material-ui/core/colors';
import TimelineIcon from '@material-ui/icons/Timeline';
import VpnKeyIcon from '@material-ui/icons/VpnKey';


import "./Comp4.css";
 function Comp4  ()  {
  return (
   
    <div className="comp4-body">
      
     <div className="comp4-upper">
  
     <TimelineIcon className="profile-icon" fontSize="small" style={ {color:teal[300]}}  />
     <span className="newuser-txt"> Event Log </span>
     <button className="seeall-btn">see all</button> 
     </div>

     <div className="comp4-lower">
         
   <VpnKeyIcon  className="profile-box" fontSize="small" />
  <span className="event-hubx">  hubx </span><br>
  </br>
 
     <span className="duration"> 22 minutes</span>

     </div>
     <span className="logged-in"> Logged in</span>
     <br>
     </br>
     <span className="more-info"> more info</span>

    

    </div>
   
    

  )
}
export default Comp4;