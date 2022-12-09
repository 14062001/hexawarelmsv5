import React, { Component } from "react";
import {
  FaApplePay,
  FaDeskpro,
  FaLocationArrow,
  FaMobile,
  FaPhone,
  FaRProject,
  FaTable,
  FaTeamspeak,
  FaUser,
  FaUserTimes,
  FaVoicemail,
} from "react-icons/fa";
import "./EmployeeProfile.css";
import { AiOutlineHome } from "react-icons/ai";
import { BrowserRouter, Link, Router, Route } from "react-router-dom";
import EmpNavBar from "./EmpNavBar";
import axios from "axios";
export default class EmployeeProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      emps: [],
      empid: "",
      full_name: "",
      email_address: "",
      mobile: "",
      doj: "",
      department: "",
      designation: "",
      leave_bal: "",
      manager_id: "",
      imgsrc: null,
      sick_Leave_bal: "",
      earned_Leave_bal: "",
      maternity_Leave_bal: "",
    };
    this.editprofile = this.editprofile.bind(this);
  }
  componentDidMount() {
    let id = sessionStorage.getItem("empid");
    if (id == null) {
      alert("Please Login First");
      window.location = "/";
    }
    let url = "https://localhost:44312/api/Employee/GetByID/" + id;
    axios
      .get(url)
      .then((res) => res)
      .then((response) => {
        this.setState({
          empid: response.data.employee_Id,
          email_address: response.data.email_Address,
          full_name: response.data.full_Name,
          mobile: response.data.mobile_Number,
          doj: response.data.doj,
          department: response.data.department,
          designation: response.data.designation,
          leave_bal: response.data.leave_bal,
          manager_id: response.data.manager_Id,
          imgsrc: response.data.imageSrc,
          sick_Leave_bal: response.data.sick_Leave_bal,
          earned_Leave_bal: response.data.earned_Leave_bal,
          maternity_Leave_bal: response.data.maternity_Leave_bal,
        });
        sessionStorage.setItem("sick", response.data.sick_Leave_bal);
        sessionStorage.setItem("maternity", response.data.maternity_Leave_bal);
        sessionStorage.setItem("earned", response.data.earned_Leave_bal);
      })
      .catch((error) => {
        console.warn(error);
      });
  }
  editprofile() {
    window.location = "/empeditprofile";
  }
  render() {
    return (
      <>
        <EmpNavBar></EmpNavBar>
        <div class="container emp-profile">
          <form method="post">
            <div class="row">
              <div class="col-md-4">
                <div class="profile-img">
                  <img src={this.state.imgsrc} alt="" />

                  <div class="file btn btn-lg btn-primary">
                    {this.state.full_name}
                    <input type="file" name="file" />
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="profile-head">
                  <h1 class="forh1">
                    <u>My Profile</u>
                  </h1>
                  <h5>{this.state.full_name}</h5>

                  <ul class="nav nav-tabs" id="myTab" role="tablist">
                    <li class="nav-item">
                      <a
                        class="nav-link active"
                        id="home-tab"
                        data-toggle="tab"
                        href="#home"
                        role="tab"
                        aria-controls="home"
                        aria-selected="true"
                      >
                        About
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-md-2">
                <a href="/empeditprofile" class="profile-edit-btn">
                  Edit Profile
                </a>
              </div>
            </div>
            <div class="row">
              <div class="col-md-4">
                <div class="profile-work">
                  <p>Contact Details</p>
                  <FaUser className="sidebarIcon" />
                  <a href=""> +91 {this.state.mobile}</a>
                  <br />
                  <FaUserTimes className="sidebarIcon" />
                  <a href=""> {this.state.doj}</a>
                  <br />
                  <FaLocationArrow className="sidebarIcon" />
                  <a href=""> India|Chennai</a>
                </div>
              </div>
              <div class="col-md-8">
                <div class="tab-content profile-tab" id="myTabContent">
                  <div
                    class="tab-pane fade show active"
                    id="home"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                  >
                    <div class="row">
                      <div class="col-md-6">
                        <label>Name</label>
                      </div>
                      <div class="col-md-6">
                        <p>{this.state.full_name}</p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <label>Email</label>
                      </div>
                      <div class="col-md-6">
                        <p>{this.state.email_address}</p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <label>Department</label>
                      </div>
                      <div class="col-md-6">
                        <p>{this.state.department}</p>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-md-6">
                        <label>Designation</label>
                      </div>
                      <div class="col-md-6">
                        <p>{this.state.designation}</p>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-md-6">
                        <label>Manager Id</label>
                      </div>
                      <div class="col-md-6">
                        <p>{this.state.manager_id}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </>
    );
  }
}
