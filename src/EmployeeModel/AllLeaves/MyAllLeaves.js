import React, { Component } from "react"
import "./Aboutus.css"
import data from "./Aboutus-Api"
import Table from "./Table"
import Card from "./Cards"
import "./About.css";
import axios from "axios"
import EmpNavBar from "../EmpNavBar"

class AllLeaves extends Component{

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
      let id= sessionStorage.getItem("empid")
      if(id==null){
      alert("Please Login First")
     window.location="/"
        }
    let url="https://localhost:44312/api/Employee/GetByID/"+id;
      axios.get(url).then(res=>res).then(response=>{
          this.setState({
              sick_Leave_bal:response.data.sick_Leave_bal,
              earned_Leave_bal:response.data.earned_Leave_bal,
              maternity_Leave_bal:response.data.maternity_Leave_bal,
              
          })

      }).catch(error=>{
          console.warn(error);
      })
    }

render(){
  return (
    <>
    <EmpNavBar/>
      <section className='features top' id='features'>
        <div className='container'>
          <div className='heading'>
            <h1>My All Leaves</h1>
          </div>

          <div className='content grid'>
            {data.map((val, index) => {
              return <Card key={index} image={val.image} title={val.title} desc={val.desc} />
            })}
            
            
            {/*<div className='box btn_shadow'>
              <img src='https://img.icons8.com/glyph-neue/64/000000/polyline.png' alt='' />
              <h2>Personal Portfolio April</h2>
              <p>It uses a dictionary of over 200 Latin words, combined with a handful of model sentence.</p>
              <a href=''>
                <i class='fas fa-arrow-right'></i>
              </a>
            </div>*/}
          </div>
        </div>
      </section>
      <Table></Table>
    </>
    );
  }
}

export default AllLeaves