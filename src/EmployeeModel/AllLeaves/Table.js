import React, { Component, useState } from "react"
import "./Table.css";
import axios from "axios";


class Table extends Component{
  constructor(props) {
    super(props)
  
    this.state = {
       emps:[],
       search:'',
       empid:'',
       semps:[],
       isGot:false
    }
  }
 
  handleChange(e) {
    this.setState(e);
  }
  
componentDidMount() {
      let id= sessionStorage.getItem("empid")
      if(id==null){
        alert("Please Login First")
       window.location="/"
          }
    let url="https://localhost:44312/api/Leave/LeavebyEmp/"+id;
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

      window.location="/ViewLeave";
    }
    


  render(){
    
  
    return(
      
        <>
        <table id="emp">
        <thead>
              <tr>
                <th>Leave Id</th>
                <th>No of Days</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Leave Type</th>
                <th>Status</th>
                <th>Manager Comments</th>
                <th>Action</th>
              </tr>
              </thead>
              {this.state.emps.map(x=><tr>
                <td>{x.leave_ID}</td>
                <td>{x.number_of_Days}</td>
                <td>{x.start_Date}</td>
                <td>{x.end_Date}</td>
                <td>{x.leave_Type}</td>
                <td>{x.status}</td>
                <td>{x.manager_comments}</td>
                <td><button onClick={()=>this.Check(x.leave_ID,x.employee_Id)}>View </button></td>
              </tr>)}
            </table>
        </>   );
  }
}

export default Table