import React from 'react';
import "./Comp1.css";

import {    teal} from '@material-ui/core/colors';
import PersonIcon from '@material-ui/icons/Person';
import LoopIcon from '@material-ui/icons/Loop';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import AccessAlarmOutlinedIcon from '@material-ui/icons/AccessAlarmOutlined';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import LoyaltyOutlinedIcon from '@material-ui/icons/LoyaltyOutlined';
import DateRangeOutlinedIcon from '@material-ui/icons/DateRangeOutlined';
import Graph from './Graph';

function Comp1()  {
  return (
    <div className="comp1-body">
      <div className="comp1-left">
       <div className="analytics">
        <div className="calendar">
         <DateRangeOutlinedIcon fontSize="medium" style={ {color:teal[300]}} />
         <span className="school-txt"> Your school </span> 
        </div>
      
         <div className="new-signups n1">
          <span className="analytics-txt" > New signups</span>
         
         </div>
         <div className="new-signups n2">
          <span className="analytics-txt" > Revenue</span>
          
         </div>
           <div className="new-signups n3">
          <span className="analytics-txt" >Product sales</span>
        
         </div> 
          <div className="new-signups n4">
          <span className="analytics-txt"> Active learners</span>
         
         </div>
        


         <div class="custom-select" >
  <select className="bg-select">
    <option value="0">last 7 days:</option>
    <option value="1">month ago</option>
    <option value="2">year ago</option>
   
  
  </select>
 
  </div>
</div>
<div className="graph">
  <Graph />
</div>

       </div>


       <div className="comp1-right">
          <div className="line-1">
            <PersonIcon  className="icon" fontSize="large" style={ {color:teal[300]}}  />
             <LoopIcon className="icon" fontSize="large" style={ {color:teal[300]}} />
             <LocalMallIcon className="icon"  fontSize="large" style={ {color:teal[300]}}/>
          </div>
          <div className="nums">
          <span className="icon-txt"> All users </span>
            <span className="icon-txt"> Conversions </span>
            <span className="icon-txt"> 30 days sales </span>
            </div>
            <div>
            <span className="icon-txt2"> 1 </span>
            <span className="icon-txt2">  0 <span className="percent">%</span> </span>
            <span className="icon-txt2">  0 </span>
          </div>
          
          <div className="line-2">
            <AccessAlarmOutlinedIcon className="icon" fontSize="large" style={ {color:teal[300]}}  />
             <DescriptionOutlinedIcon className="icon" fontSize="large" style={ {color:teal[300]}} />
             <LoyaltyOutlinedIcon className="icon" fontSize="large" style={ {color:teal[300]}}/>
          </div>
          <div className="nums">
          <span className="icon-txt"> Avg. time </span>
            <span className="icon-txt t2"> Courses  </span>
            <span className="icon-txt"> Course categories </span>
            </div>
            <div>
            <span className="icon-txt3 t1"> 1 <span className="percent">min</span> </span>
            <span className="icon-txt3"> 0 </span>
            <span className="icon-txt3 t3"> 1 </span>
          </div>
          </div>
          
      



    </div>
   
  );
}

export default Comp1;