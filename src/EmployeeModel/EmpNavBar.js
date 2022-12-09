import React, { Component } from "react";
import { BrowserRouter, Link, Router, Route } from "react-router-dom";
import "./EmpNavBar.css";
import {
  FaApplePay,
  FaDeskpro,
  FaFolder,
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
import { AiOutlineHome } from "react-icons/ai";
import axios from "axios";
import EmpTopbar from "../components/EmpTopbar";

export default class EmpNavBar extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      emps:[],
      empid:'',
      full_name:'',
      email_address:'',
      mobile:'',
      doj:'',
      department:'',
      designation:'',
      leave_bal:'',
      manager_id:'',
      imgsrc:null
}
this.Logout=this.Logout.bind(this);
  }
  Logout(){
    sessionStorage.clear();
    window.location="/"
  }
  componentDidMount() {
      let id= sessionStorage.getItem("empid")
      if(id==null){
      alert("Please Login First")
     window.location="/"
        }
    let url="https://localhost:44312/api/Employee/GetByID/"+id;
      axios.get(url).then(res=>res).then(response=>{
          this.setState({
              empid:response.data.employee_Id,
              email_address:response.data.email_Address,
              full_name:response.data.full_Name,
              mobile:response.data.mobile_Number,
              doj:response.data.doj,
              department:response.data.department,
              designation:response.data.designation,
              leave_bal:response.data.leave_bal,
              manager_id:response.data.manager_Id,
              imgsrc:response.data.imageSrc

          })

      }).catch(error=>{
          console.warn(error);
      })
    }
 


  render() {
    return (
      <>
      <EmpTopbar/>
        <div class="vertical-nav bg-white" id="sidebar">
          <div class="py-4 px-3 mb-4 bg-light">
            <div class="media d-flex align-items-center">
              <img
                src={this.state.imgsrc}
                alt="..."
                width="115"
                class="mr-3 rounded-circle img-thumbnail shadow-sm"
              />
              <div class="media-body">
                <h4 class="m-0">{this.state.full_name}</h4>
                <p class="font-weight-light text-muted mb-0">{this.state.designation}</p>
              </div>
            </div>
          </div>

          <ul class="nav flex-column bg-white mb-0">
            <li class="nav-item">
              <Link
                to={"/emphome"}
                class="nav-link text-dark font-italic bg-light"
              >
                <AiOutlineHome></AiOutlineHome>
                <i class="fa fa-th-large mr-3 text-primary fa-fw"></i>
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link to={"/empprofile"} class="nav-link text-dark font-italic">
                <FaUser></FaUser>
                <i class="fa fa-address-card mr-3 text-primary fa-fw"></i>
                My Profile
              </Link>
            </li>
            <li class="nav-item">
              <Link
                to={"/managerdetails"}
                class="nav-link text-dark font-italic"
              >
                <FaUser></FaUser>
                <i class="fa fa-cubes mr-3 text-primary fa-fw"></i>
                My Manager
              </Link>
            </li>
            <li class="nav-item">
            <Link
                to={"/AllLeaves"}
                class="nav-link text-dark font-italic"
              >
              <i class="fa fa-picture-o mr-3 text-primary fa-fw"></i>
                <FaTable></FaTable>
                My All Leaves
              </Link>
            </li>
            <li class="nav-item">
            <Link
                to={"/ApplyLeave"}
                class="nav-link text-dark font-italic"
              >                <i class="fa fa-picture-o mr-3 text-primary fa-fw"></i>
                <FaFolder></FaFolder>
                Apply Leave
              </Link>
            </li>
            <li class="nav-item">
            <Link
                to={"/changepassword"}
                class="nav-link text-dark font-italic"
              >
          <i class="fa fa-picture-o mr-3 text-primary fa-fw"></i>
          <FaUser/>
                Change Password
              </Link>
            </li>
            <li class="nav-item btnli">
              <button onClick={this.Logout} class="nav-link text-dark font-italic bts">
                <i class="fa fa-picture-o mr-3 text-primary fa-fw"></i>
                Log Out
              </button>
            </li>
          </ul>
        </div>
      </>
    );
  }
}
