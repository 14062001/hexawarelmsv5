import React, { Component } from "react"
import "./Aboutus.css"
import data from "./Aboutus-Api"
import Table from "./PendingTable"
import Card from "./Cards"
import "./About.css";
import axios from "axios"
import ManagerNavBar from "../ManagerNavBar"
import PendingTable from "./PendingTable"
import ApprovedTable from "./ApprovedTable"
import ManagerTopbar from "../../components/ManagerTopbar"

class MyAllApprovedLeaves extends Component{

  constructor(props) {
    super(props)
  
    this.state = {
      emps:[],
      empid:'',
      sick_Leave_bal:'',
      earned_Leave_bal:'',
      maternity_Leave_bal:''
}
  }
  componentDidMount() {
      let id= sessionStorage.getItem("mgrid")
      if(id==null){
      alert("Please Login First")
     window.location="/"
        }
    
    }

render(){
  return (
    <>
<ManagerNavBar/>
<br/><br/>
      <ApprovedTable/>
    </>
    );
  }
}

export default MyAllApprovedLeaves