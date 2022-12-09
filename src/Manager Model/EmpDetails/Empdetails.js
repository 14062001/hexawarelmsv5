import React, { Component } from 'react'
import ManagerNavBar from '../ManagerNavBar'
import "./Empdetails.css";
import axios from 'axios';
const data1 = [
    { empid: 1, fullname: "Manasvi S", email: "manasvi@gmail.com", mobno: "987654321", dept: "ATM", desig: "ASE", photo: "./Girl.jpg"},
    { empid: 2, fullname: "Shivani T", email: "shivani@gmail.com", mobno: "987654321", dept: "ATM", desig: "ASE", photo: "./Girl.jpg"},
    { empid: 3, fullname: "Yogesh Z", email: "yogesh@gmail.com", mobno: "987654321", dept: "ATM", desig: "ASE", photo: "./Girl.jpg"},
  ]

export default class Empdetails extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       emps:[],
       search:'',
       empid:'',
       semps:[],
       isGot:false
    }
  //   this.Search=this.Search.bind(this);
  }
 
  handleChange(e) {
    this.setState(e);
  }
  
componentDidMount() {
      let id= sessionStorage.getItem("empid")
      let mgrid=sessionStorage.getItem("mgrid")
      if(mgrid==null){
        alert("Please Login First")
       window.location="/Manager"
          }
          let url="https://localhost:44312/api/Employee/GetAllEmp/"+mgrid ;
          axios.get(url).then(res=>res).then(response=>{
          this.setState({
               emps:response.data
          })
      }).catch(error=>{
          console.warn(error);
      })
    }

    Check(demo,demo1){
      sessionStorage.setItem("rid",demo)
      sessionStorage.setItem("reid",demo1)

      window.location="/ViewEmp";
    }

 


  render() {
    return (<>
    <ManagerNavBar/>
    
      <div className='heading'>
        <h1>Your All Employee Details are</h1>
      </div>
      <div>
        <table id='tab'>
        <thead>
          <tr>
            <th>Employee_Id</th>
            <th>Full_Name</th>
            <th>Email_Address"</th>
            <th>Mobile_Number</th>
            <th>Department</th>
            <th>Designation</th>
            <th>photo</th>

            <th>Action</th>
          </tr>
          </thead>
          {this.state.emps.map(x=><tr>
            <td>{x.employee_Id}</td>
            <td>{x.full_Name}</td>
            <td>{x.email_Address}</td>
            <td>{x.mobile_Number}</td>
            <td>{x.department}</td>
            <td>{x.designation}</td>
            <td><img src= {x.imageSrc} width="250" height="170"/></td>

            <td><button onClick={()=>this.Check(x.leave_ID,x.employee_Id)}>View </button></td>
          </tr>)}
      
        </table>
      </div>
      </>
    )
  }
}
