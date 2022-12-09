import React, { Component } from "react";
import { BrowserRouter, Link, Router, Route } from "react-router-dom";
import EmpNavBar from "../EmployeeModel/EmpNavBar";
import ManagerNavBar from "./ManagerNavBar";
export default class ManagerHome extends Component {
  render() {
    return (
      <>
<ManagerNavBar/>
     </>
    );
  }
}
