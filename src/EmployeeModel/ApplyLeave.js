import React, { Component } from "react";
import "./ApplyLeave.css";
import axios from "axios";
import EmpNavBar from "./EmpNavBar";
export default class ApplyLeave extends Component {

  constructor(props) {
    var today=new Date(),
    date=today.getFullYear()+'-0'+(today.getMonth()+1)+'-'+today.getDate();
  //  date=date.toString();
//  const   ndate=new Date(date);
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

    number_of_days:'',
    start_Date:'',
    end_Date:'',
    leave_Type:"",
    status:"Pending",
    reason:'',
    manager_Comments:'In Progress',
    sick_Leave_bal:'',
    earned_Leave_bal:'',
    maternity_Leave_bal:'',
    applied_ON:date
}
this.Leave=this.Leave.bind(this);
}

validate(){

  const current = new Date();
  const date = `${current.getFullYear()}/${current.getMonth()+1}/${current.getDate()}`;
  var d=new Date(date);
  var start=new Date(this.state.start_Date);
  var end=new Date(this.state.end_Date);
  
  const diff=end-start;
  const diff_days=diff/(1000*3600*24)

  var res=0;
  if(this.state.leave_Type=="Sick"){
    if(this.state.sick_Leave_bal< diff_days){
      alert("Insufficuent leave ballance");
      res=res+1;
    }
  }
  else if(this.state.leave_Type=="Earned"){
    if(this.state.earned_Leave_bal<diff_days){
      alert("Insufficient leave balance");
      res=res+1;
    }

  }
  else{
    if(this.state.maternity_Leave_bal<diff_days){
      alert("insufficient leave balance");
      res=res+1;
    }
  }

  if(res==0){
    return true
  }
  else{
    return false;
  }
}
Leave(){

  const current = new Date();
  const date = `${current.getFullYear()}/${current.getMonth()+1}/${current.getDate()}`;
  var d=new Date(date);
  var start=new Date(this.state.start_Date);
  var end=new Date(this.state.end_Date);
  // if(start<d){
  //   alert("enter correct start date")
  //   window.location="/EmpHome"
  // }
  // if(end<start){
  //   alert("end date cannot be before start date");
  //   window.location="/EmpHome"
  // }

  const diff=end-start;
  const diff_days=diff/(1000*3600*24)
  
this.setState({number_of_days:diff_days})


if(this.validate()){

    let id=sessionStorage.getItem("empid")
    let mgrid=sessionStorage.getItem("mgrid1")
    let url="https://localhost:44312/api/Leave/ApplyLeave";
axios.post(url,{
 employee_Id: id,
number_of_Days:diff_days,
start_Date: this.state.start_Date,
end_Date: this.state.end_Date,
leave_Type: this.state.leave_Type,
status: this.state.status,
reason: this.state.reason,
// applied_ON: this.state.applied_ON,
manager_comments: this.state.manager_Comments,
manager_Id: mgrid
}).then(response=>{
    alert("leave applied for " +diff_days);
    window.location="/allleaves";
}).catch(error=>{
    alert(error);
})
}
}
GetDetails(){
let id= sessionStorage.getItem("empid")
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
        sick_Leave_bal:response.data.sick_Leave_bal,
        earned_Leave_bal:response.data.earned_Leave_bal,
        maternity_Leave_bal:response.data.maternity_Leave_bal,
        // leave_bal:response.data.leave_bal,
        manager_id:response.data.manager_Id,
        imgsrc:response.data.imageSrc

    })
}).catch(error=>{
    console.warn(error);
})

}
componentDidMount(){
// alert(this.state.applied_ON)
let id= sessionStorage.getItem("empid")
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
    const mindate=""+this.state.applied_ON;
    return (
      <>
        <EmpNavBar></EmpNavBar>
        <section class="h-100 h-custom">
          <div class="container py-5 h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
              <div class="col-lg-8 col-xl-6 size">
                <div class="card rounded-3">
                  <img
                    src={require("./Hexaware-logo.jpg")}
                    class="w-100 img"
                    alt="Sample photo"
                  />
                  <div class="card-body p-4 p-md-5 size">
                    <h4 class="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">
                      Sick Leave Balance:{this.state.sick_Leave_bal} <br/>
                      Earned Leave Balance:{this.state.earned_Leave_bal}<br/>
                      Maternity Leave Balance:{this.state.maternity_Leave_bal}<br/>
                    </h4>
                    <div class="px-md-2">
                      <div class="form-outline mb-4">
                        
                        <label class="form-label" for="form3Example1q">
                         <b> Name: {this.state.full_name} </b>
                        </label>
                      </div>

                      <div class="row">
                        <div class="col-md-6 mb-4">
                          <div class="form-outline datepicker">
                            
                            <input
                    type="date"
                    onChange={(e) => this.handleChange({ start_Date: e.target.value })}
                    placeholder="choose date"
                    min={mindate}
                    className="form-control"
                    id="exampleFormControlInput1"

                  />




                            <label for="exampleDatepicker1" class="form-label">
                              Select a start date
                            </label>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-6 mb-4">
                          <div class="form-outline datepicker">
                            
                             <input
                    type="date"
                    onChange={(e) => this.handleChange({ end_Date: e.target.value })}
                    placeholder="choose end date"
                    min={this.state.start_Date}
                    class="form-control"
                    id="exampleFormControlInput1"

                    />
                            <label for="exampleDatepicker1" class="form-label">
                              Select a End date
                            </label>
                          </div>
                        </div>
                      </div>

                      <div class="mb-4">
                      <select onChange={(e)=>this.handleChange({leave_Type:e.target.value})} className="form-control">
                <option value="">Select Leave Type</option>
                <option value="Sick">Sick</option>
                <option value="Earned">Earned</option>
                <option value="Maternity">Maternity</option>
 </select>
                      </div>

                      <div class="row mb-4 pb-2 pb-md-0 mb-md-5">
                        <div class="mb-4">

                  <input
                    type="text"
                    onChange={(e) => this.handleChange({ reason: e.target.value })}
                    placeholder="Enter Reason"
                    class="form-control"

                    />
                    
                          </div>
                      
                      </div>

                      <button onClick={this.Leave} class="btn btn-success btn-lg mb-1">
                        Apply
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
