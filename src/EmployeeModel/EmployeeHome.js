import React, { Component } from "react";
import { BrowserRouter, Link, Router, Route } from "react-router-dom";
import EmpNavBar from "./EmpNavBar";
export default class EmployeeHome extends Component {
  render() {
    return (
      <>
        <EmpNavBar></EmpNavBar>
      </>
    );
  }
}
