import React from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";
import "./NavBarElements.css";

const Navbar = () => {
  return (
    <>
      <Nav className="justify-content-end">
        <NavMenu>
          <div className="logo">
            <img
              src={require("./output-onlineimagetools.png")}
              width="130px"
              height="140px"
              alt="logo"
              align="right"
            />
          </div>
          <NavLink to="/aboutus" activeStyle>
            About Us
          </NavLink>
          <NavLink to="/contact" activeStyle>
            Contact Us
          </NavLink>
          <div class="dropdown">
            <button class="dropbtn">
              Sign In
              <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content">
              <NavLink to="/emplogin" ctiveStyle>
                Employee
              </NavLink>
              <NavLink to="/managerlogin" ctiveStyle>
                Manager
              </NavLink>
            </div>
          </div>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
