import React from 'react';

import {    teal} from '@material-ui/core/colors';

import AddIcon from '@material-ui/icons/Add';
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import "./Navbar.css";
import HelpIcon from '@material-ui/icons/Help';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
function Navbar(){


  return (
    <div className="navbar-body">
      
    <div className="dashboard-txt">
      <span> Dashboard </span>
    </div>
    <div className="text-option">
    <div className="create-course">
    <AddIcon fontSize="small" />
    <span className="nav-txt"> Create course </span>
    </div>
    <div className="Preview-home">
      <VisibilityOutlinedIcon fontSize="small" />
      <span className="nav-txt">Preview home page</span> 
    </div>
    <div className="Preview-after">
      <VisibilityOutlinedIcon fontSize="small" />
      <span className="nav-txt">Preview after login page</span> 
    </div>

    <div className="Preview home page">
      <PowerSettingsNewIcon fontSize="small" />
      <span className="nav-txt">Preview home page</span> 
    </div>
    </div>
    <div className="help">
     <HelpIcon className="help-icon" style={{color: teal[300]}} />
     <span className="nav-txt"> Help </span>
    </div>
    </div>
  );
}
export default Navbar;