import React from 'react';
import "./Comp3.css";
import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined';

function  Comp3() 
{
  return (
    <div className="comp3-body">
      <div className="comp3-upper">
      <DashboardOutlinedIcon className="icon-dashbo"/>
      <span className="howtosell"> How to sell courses blog </span>
      <button className="seeall-btn">see all</button> 
      </div>

      <div className="comp3-lower">
      <ul>
        <div className="para1">
  <li className="ele1"><p className="para">Blended Learning: What it is, 
    why it Matters and How to apply</p>   </li>  
    <span className="day-ago"> 7 days ago </span>
    </div>
    <div className="para1">
  <li className="ele1"><p className="para">Join the Course Sales Bootcamp [Free Live Workshops]</p>   </li>  
    <span className="day-ago"> 12 days ago </span>
    </div>
    <div className="para1">
  <li className="ele1"><p className="para">Blended Learning: What it is, 
    why it Matters and How to apply</p>   </li>  
    <span className="day-ago"> 20 days ago </span>
    </div>
    <div className="para1">
  <li className="ele1"><p className="para">Blended Learning: What it is, 
    why it Matters and How to apply</p>   </li>  
    <span className="day-ago"> 22 days ago </span>
    </div>
    <div className="para1">
  <li className="ele1"><p className="para">Blended Learning: What it is, 
    why it Matters and How to apply</p>   </li>  
    <span className="day-ago"> 23 days ago </span>
    </div>
</ul> 

      </div>

      
    </div>
  )
}
export default Comp3;