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
export default class ViewLeave extends Component {
  
    constructor(props) {
        super(props)
   
         this.state = {
           empid:'',
           full_name:'',
           email_address:'',
           mobile:'',
           doj:'',
           department:'',
           designation:'',
           leave_bal:'',
           manager_id:'',
           imgsrc:null,
           leave_ID:'',
           number_of_days:'',
           start_Date:'',
           end_Date:'',
           leave_Type:"",
           status:"",
           reason:'',
           manager_Comments:'',
           applied_ON:'',
           Lid:''
   }
   
   this.Leave=this.Leave.bind(this);
       }
       Leave(){
           let rid=sessionStorage.getItem("rid")
           let mgrid=sessionStorage.getItem("mgrid1")
           if(this.state.leave_bal<this.state.number_of_days){
             alert("Insufficient Leave Balance");
             window.location="/EmpHome";
           }
           let url="https://localhost:44312/api/Leave/GetLeaveByID/"+rid;
           axios.get(url).then(res=>res).then(response=>{
               this.setState({
                   leave_ID:response.data.leave_ID,
                   number_of_days:response.data.number_of_Days,
                   start_Date:response.data.start_Date,
                   end_Date:response.data.end_Date,
                   leave_Type:response.data.leave_Type,
                   status:response.data.status,
                   reason:response.data.reason,
                   applied_ON:response.data.applied_ON,
                   manager_Comments:response.data.manager_comments,
       
               })
           }).catch(error=>{
               console.warn(error);
           })
       sessionStorage.removeItem("rid")
   
       }
   GetDetails(){
       let reid= sessionStorage.getItem("reid")
       let url="https://localhost:44312/api/Employee/GetByID/"+reid;
       axios.get(url).then(res=>res).then(response=>{
           this.setState({
               empid:response.data.employee_Id,
               email_address:response.data.email_Address,
               full_name:response.data.full_Name,
               mobile:response.data.mobile_Number,
               doj:response.data.doj,
               department:response.data.department,
               designation:response.data.designation,
               manager_id:response.data.manager_Id,
               imgsrc:response.data.imageSrc
   
           })
       }).catch(error=>{
           console.warn(error);
       })
   
       sessionStorage.removeItem("reid")
   
   }
    componentDidMount(){
       // alert(this.state.applied_ON)
       let id= sessionStorage.getItem("empid")
       if(id==null){
           alert("Please Login First")
           window.location="/"
                   }
       this.GetDetails();
       this.Leave();
       }
   
       handleChange(e) {
           this.setState(e);
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
                  <img
                    src={this.state.imgsrc}
                    alt=""
                  />

                  <div class="file btn btn-lg btn-primary">
                    {this.state.full_name}
                    <input type="file" name="file" />
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="profile-head">
                  <h1 class="forh1">
                    <u>My Leave Details</u>
                  </h1>


                </div>
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
                        <label>Number of Days</label>
                      </div>
                      <div class="col-md-6">
                        <p>{this.state.number_of_days}</p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <label>Start Date</label>
                      </div>
                      <div class="col-md-6">
                        <p>{this.state.start_Date}</p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <label>End Date</label>
                      </div>
                      <div class="col-md-6">
                        <p>{this.state.end_Date}</p>
                      </div>
                    </div>


                    <div class="row">
                      <div class="col-md-6">
                        <label>Leave leave_Type</label>
                      </div>
                      <div class="col-md-6">
                        <p>{this.state.leave_Type}</p>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-md-6">
                        <label>Status</label>
                      </div>
                      <div class="col-md-6">
                        <p>{this.state.status}</p>
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
