import React, { Component } from "react";
import axios from "axios";

export default class ForgotPassword extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       npass:'',
       repass:''
    }
    this.Change=this.Change.bind(this);
  }
  validate(){
    if(this.state.npass!=this.state.repass){
      return false;
    }
    return true;
  }
  Change(){
     // alert(this.state.npass)
      let id= sessionStorage.getItem("employee_id")
      if(id==null){
          window.location="/"
      }
      if(this.validate()){
        alert(id)
      let url="https://localhost:44312/api/Employee/updatePass/"+id;

      axios.put(url,{
          password:this.state.npass,
          full_Name: "dummy",
          email_Address: "user@example.com",
          mobile_Number: 0,
          doj: "2022-09-14",
          department: "string",
          designation: "string",
          leave_bal: 0,
          manager_Id: 0
          }).then(response=>{
              alert("Password Changed");
              window.location="/";
          }).catch(error=>{
              alert(error);
          })
      
  
        }

  }
  handleChange(e) {
      this.setState(e);
    }
 
  render() {
    return (
      <div className="login">
        <img
          src={require("./Hexaware-logo.jpg")}
          height={"200px"}
          width={"500px"}
        />
        <div className="login-form">
          <div>
            <div className="input-container">
              <div class="mb-3">
                <div class="card-header">
                  <h3 class="mb-0">Forgot Password</h3>
                </div>
                <div class="card-body">
                  <div class="form" role="form" >
                    <div class="form-group">
                      <label>New Password</label>
                      <input
                        type="password"
                        class="form-control"
                        onChange={(e) => this.handleChange({ npass: e.target.value })}

                        id="inputPasswordNew"
                        required=""
                      />
                      <span class="form-text small text-muted">
                        The password must be 8-20 characters, and must{" "}
                        <em>not</em> contain spaces.
                      </span>
                    </div>
                    <div class="form-group">
                      <label>Verify</label>
                      <input
                        type="password"
                        class="form-control"
                        onChange={(e) => this.handleChange({ repass: e.target.value })}

                        id="inputPasswordNewVerify"
                        required=""
                      />
                      <span class="form-text small text-muted">
                        To confirm, type the new password again.
                      </span>
                    </div>
                    <div class="form-group">
                      <button
                        class="btn btn-success btn-lg float-right"
                        onClick={this.Change}
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
