import React, { Component } from 'react'
// import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import './Topbar.css'

export default class EmpTopbar extends Component {
  render() {
    return (
        <div className="topbar">
        <div className="topbarWrapper">
          <div className="topLeft">
          <span className="logo"><img   src={require("./Output.png")} height="70px" width="120"/>LMS Employee Dashboard</span>
          </div>
          {/* <div className="topRight">
            <div className="topbarIconContainer">
              <span className="topIconBadge">2</span>
            </div>
            <div className="topbarIconContainer">
              <span className="topIconBadge">2</span>
            </div>
            <div className="topbarIconContainer">
            </div>
          </div>*/}
        </div> 
      </div>    )
  }
}
