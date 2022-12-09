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
import { BrowserRouter, Link, Router, Route } from "react-router-dom";
import axios from "axios";
import ManagerNavBar from "./ManagerNavBar";
export default class MyProfile extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      emps:[],
      mempid:'',
      full_name:'',
      efull_name:'',
      emobile:'',
      imgsrc:'',
      email_address:'',
      mobile:''
      }
  }

  getEmp(){
    let id= sessionStorage.getItem("empid")
    if(id==null){
    alert("Please Login First")
   window.location="/"
      }
  let url="https://localhost:44312/api/Employee/GetByID/"+id;
    axios.get(url).then(res=>res).then(response=>{
        this.setState({
            efull_name:response.data.full_Name,
            emobile:response.data.mobile_Number,

            imgsrc:response.data.imageSrc

        })

    }).catch(error=>{
        console.warn(error);
    })


  }
  componentDidMount() {
    // this.getEmp();
      let id= sessionStorage.getItem("mgrid")
      if(id==null){
        alert("Please Login First")
       window.location="/"
          }
    let url="https://localhost:44312/api/Manager/GetByID/"+id;
      axios.get(url).then(res=>res).then(response=>{
          this.setState({
              mempid:response.data.manager_Id,
              email_address:response.data.email_Address,
              full_name:response.data.full_Name,
              mobile:response.data.mobile_Number
               
          })
      }).catch(error=>{
          console.warn(error);
      })
    }
    


  render() {
    return (
      <>
        <ManagerNavBar/>
        <div class="container emp-profile">
          <form method="post">
            <div class="row">
              <div class="col-md-4">
                <div class="profile-img">
                  <img
  src="https://bootstrapious.com/i/snippets/sn-v-nav/avatar.png"
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
                    <u>My Details</u>
                  </h1>

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
              <div class="col-md-2"></div>
            </div>
            <div class="row">
              <div class="col-md-4">
                <div class="profile-work">
                  <p>Contact Details</p>
                  <FaUser className="sidebarIcon" />
                  <a href=""> +91 {this.state.mobile}</a>
                
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
                        <label>Contact No</label>
                      </div>
                      <div class="col-md-6">
                        <p>{this.state.mobile}</p>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-md-6">
                        <label>Manager Id</label>
                      </div>
                      <div class="col-md-6">
                        <p>{this.state.mempid}</p>
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
