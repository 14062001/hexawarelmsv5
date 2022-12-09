import React, { Component } from "react";
import "./EmpEditProfile.css";
import EmpNavBar from "./EmpNavBar";
import axios from "axios";
export default class EmpEditProfile extends Component {
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
      imgsrc:null,
      sick_Leave_bal:'',
      earned_Leave_bal:'',
      maternity_Leave_bal:''
}
this.editprofile=this.editprofile.bind(this);
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
              manager_id:response.data.manager_Id,
              imgsrc:response.data.imageSrc,
              sick_Leave_bal:response.data.sick_Leave_bal,
              earned_Leave_bal:response.data.earned_Leave_bal,
              maternity_Leave_bal:response.data.maternity_Leave_bal

          })
         

      }).catch(error=>{
          console.warn(error);
      })

      

    }
  editprofile() {

    let id= sessionStorage.getItem("empid")
    let url="https://localhost:44312/api/Employee/update/"+id;

    axios.put(url,{
        password:"demo",
        full_Name:this.state.full_name,
        email_Address: this.state.email_address,
        mobile_Number: this.state.mobile,
        doj: "2022-09-14",
        department: this.state.department,
        designation: this.state.designation,
        manager_Id: 0
        }).then(response=>{
            alert("Profile updated");
            window.location="/emphome";
        }).catch(error=>{
            alert(error);
        })
      
  }
  handleChange(e) {
    this.setState(e);
  }


  render() {
    return (
      <>
        <EmpNavBar></EmpNavBar>
        <div class="container rounded bg-white mt-5 mb-5">
          <div class="row">
            <div class="col-md-3 border-right">
              <div class="d-flex flex-column align-items-center text-center p-3 py-5">
                <img
                  class="rounded-circle mt-5"
                  width="150px"
                  src={this.state.imgsrc}
                />
                <span class="font-weight-bold">{this.state.full_name}</span>
              </div>
            </div>
            <div class="col-md-5 border-right edit">
              <div class="p-3 py-5">
                <div class="d-flex justify-content-between align-items-center mb-3">
                  <h4 class="text-right">Profile Settings</h4>
                </div>
                <div class="row mt-3">
                  <div class="col-md-12">
                    <label class="labels">Name</label>
                    <input
                      type="text"
                      class="form-control"
                      value={this.state.full_name}
                      onChange={(e) => this.handleChange({full_name: e.target.value })}

                      placeholder="first name"
                    />
                    <br></br>
                  </div>
                </div>
                <div class="row mt-3">
                  <div class="col-md-12">
                    <label class="labels">Mobile Number</label>
                    <input
                      type="number"
                      class="form-control"
                      placeholder="enter phone number"
                      onChange={(e) => this.handleChange({mobile: e.target.value })}

                      value={this.state.mobile}
                    />
                    <br></br>
                  </div>
                  <div class="col-md-12">
                    <label class="labels">Email</label>
                    <input
                      type="email"
                      class="form-control"
                      onChange={(e) => this.handleChange({email_Address: e.target.value })}

                      value={this.state.email_address}
                    />
                    <br></br>
                  </div>

                  <div class="col-md-12">
                    <label class="labels">Department</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="enter Department"
                      onChange={(e) => this.handleChange({department: e.target.value })}

                      value={this.state.department}
                    />
                    <br></br>
                  </div>
                  <div class="col-md-12">
                    <label class="labels">Designation</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="education"
                      onChange={(e) => this.handleChange({designation: e.target.value })}

                      value={this.state.designation}
                    />
                    <br></br>
                  </div>
                </div>
                
                <div class="mt-5 text-center">
                  <button onClick={this.editprofile} class="btn btn-primary profile-button" type="button">
                    Save Profile
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
