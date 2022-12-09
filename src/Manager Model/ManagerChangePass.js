import React, { Component } from "react";
import axios from "axios";
import ManagerNavBar from "./ManagerNavBar";

export default class ManagerChangePass extends Component {
  constructor(props) {
    var today=new Date(),
    date=today.getFullYear()+'/'+(today.getMonth()+1)+'/'+today.getDate();
    date=date.toString();
  super(props)
  this.state = {
    mempid:'',
    full_name:'',
    email_address:'',
    mobile:'',
    manager_id:'',
    applied_ON:date,
    pass:'',
    cpass:'',
    npass:'',
    repass:''
}
this.Change=this.Change.bind(this);
}
validate(){
  var res=0;
  if(this.state.cpass!=this.state.pass){
    alert("Enter valid current password");
    res=res+1;
   }
   if(this.state.npass!=this.state.repass){
    alert("New password and Confirm password is not same!")
    res=res+1;
   }
   if(res==0){
    return true
   }
   else{
    return false
   }
}
Change(){
   // alert(this.state.npass)
  if(this.validate()){
    let id= sessionStorage.getItem("mgrid")
    let url="https://localhost:44312/api/Manager/updatePass/"+id;

    axios.put(url,{
        password:this.state.npass,
        full_Name: "dummy",
        email_Address: "user@example.com",
        mobile_Number: 0
       
        }).then(response=>{
            alert("Password Changed");
            window.location="/managerhome";
        }).catch(error=>{
            alert(error);
        })
      }



}

GetDetails(){
let id= sessionStorage.getItem("mgrid")
let url="https://localhost:44312/api/Manager/GetByID/"+id;
      axios.get(url).then(res=>res).then(response=>{
          this.setState({
              mempid:response.data.manager_Id,
              email_address:response.data.email_Address,
              full_name:response.data.full_Name,
              mobile:response.data.mobile_Number,
              pass:response.data.password
        })
}).catch(error=>{
    console.warn(error);
})

}
componentDidMount(){
// alert(this.state.applied_ON)
let id= sessionStorage.getItem("mgrid")
if(id==null){
    alert("Please Login First")
    window.location="/"
            }
this.GetDetails();
}

handleChange(e) {
    this.setState(e);
  }
render() {
    return (
      <>
      <ManagerNavBar/>
      <div className="bg">
        <div className="login">
          <img
            src={require("./Hexaware-logo.jpg")}
            height={"200px"}
            width={"500px"}
          />
          <div className="login-form">
              <div className="input-container">
                <div class="mb-3">
                  <div class="card-header">
                    <h3 class="mb-0">Change Password</h3>
                  </div>
                  <div class="card-body">
                    <div class="form" role="form" autocomplete="off">
                      <div class="form-group">
                        <label for="inputPasswordOld">Current Password</label>
                        <input
                          type="password"
                          class="form-control"
                          id="inputPasswordOld"
                          onChange={(e) => this.handleChange({cpass: e.target.value })}

                          required=""
                        />
                      </div>
                      <div class="form-group">
                        <label for="inputPasswordNew">New Password</label>
                        <input
                          type="password"
                          class="form-control"
                          id="inputPasswordNew"
                          onChange={(e) => this.handleChange({npass: e.target.value })}

                          required=""
                        />
                        <span class="form-text small text-muted">
                          The password must be 8-20 characters
                        </span>
                      </div>
                      <div class="form-group">
                        <label for="inputPasswordNewVerify">Confirm Password</label>
                        <input
                          type="password"
                          class="form-control"
                          id="inputPasswordNewVerify"
                          onChange={(e) => this.handleChange({repass: e.target.value })}

                          required=""
                        />
                        <span class="form-text small text-muted">
                          To confirm, type the new password again.
                        </span>
                      </div>
                      <button class="btn btn-primary" onClick={this.Change}>
                        Save
                      </button>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
      </>
    );
  }
}
