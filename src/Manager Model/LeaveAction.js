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

import { Link, useParams } from "react-router-dom";
import "./MyProfile.css";
import axios from "axios";
import ManagerNavBar from "./ManagerNavBar";

function withRouter(Component) {
  function ComponentWithRouter(props) {
    let params = useParams();
    return <Component {...props} params={params} />;
  }
  return ComponentWithRouter;
}

export default class LeaveAction extends Component {
  constructor(props) {
    super(props);

    this.state = {
      empid: "",
      full_name: "",
      email_address: "",
      mobile: "",
      doj: "",
      department: "",
      designation: "",
      leave_bal: "",
      manager_id: "",
      imgsrc: null,
      leave_ID: "",
      number_of_days: "",
      start_Date: "",
      end_Date: "",
      leave_Type: "",
      status: "",
      reason: "",
      manager_Comments: "",
      applied_ON: "",
      Lid: "",
    };

    this.Leave = this.Leave.bind(this);
    this.Approve = this.Approve.bind(this);
    this.Reject = this.Reject.bind(this);
  }
  Approve() {
    //  alert("leave id :"+this.state.leave_ID +"empid:"+this.state.empid +"Manager comment"+this.state.manager_Comments);

    let url =
      "https://localhost:44312/api/Leave/LeaveAction/" + this.state.leave_ID;
    axios
      .put(url, {
        employee_Id: this.state.empid,
        manager_comments: this.state.manager_Comments,
        status: "Approved",
        number_of_Days: this.state.number_of_days,
        start_Date: "2022-09-13",
        end_Date: "2022-09-13",
        leave_Type: this.state.leave_Type,
        reason: "dummy",
        manager_Id: 2,
      })
      .then((response) => {
        alert("leave Approved");
        window.location = "/AllApprovedLeaves";
      })
      .catch((error) => {
        alert(error);
      });
  }
  Reject() {
    let url =
      "https://localhost:44312/api/Leave/LeaveAction/" + this.state.leave_ID;
    axios
      .put(url, {
        employee_Id: this.state.empid,
        manager_comments: this.state.manager_Comments,
        status: "Rejected",
        number_of_Days: this.state.number_of_days,
        start_Date: "2022-09-13",
        end_Date: "2022-09-13",
        leave_Type: this.state.leave_Type,
        reason: "dummy",
        manager_Id: 2,
      })
      .then((response) => {
        alert("leave Rejected");
        window.location = "/AllRejectedLeaves";
      })
      .catch((error) => {
        alert(error);
      });
  }
  Leave() {
    let rid = sessionStorage.getItem("rid");
    let mgrid = sessionStorage.getItem("mgrid");

    let url = "https://localhost:44312/api/Leave/GetLeaveByID/" + rid;
    axios
      .get(url)
      .then((res) => res)
      .then((response) => {
        this.setState({
          leave_ID: response.data.leave_ID,
          number_of_days: response.data.number_of_Days,
          start_Date: response.data.start_Date,
          end_Date: response.data.end_Date,
          leave_Type: response.data.leave_Type,
          status: response.data.status,
          reason: response.data.reason,
          applied_ON: response.data.applied_ON,
          manager_Comments: response.data.manager_comments,
          number_of_days: response.data.number_of_Days,
        });
      })
      .catch((error) => {
        console.warn(error);
      });
    sessionStorage.removeItem("rid");
  }
  GetDetails() {
    let reid = sessionStorage.getItem("reid");
    let url = "https://localhost:44312/api/Employee/GetByID/" + reid;
    axios
      .get(url)
      .then((res) => res)
      .then((response) => {
        this.setState({
          empid: response.data.employee_Id,
          email_address: response.data.email_Address,
          full_name: response.data.full_Name,
          mobile: response.data.mobile_Number,
          doj: response.data.doj,
          department: response.data.department,
          designation: response.data.designation,
          leave_bal: response.data.leave_bal,
          manager_id: response.data.manager_Id,
          imgsrc: response.data.imageSrc,
        });
      })
      .catch((error) => {
        console.warn(error);
      });

    sessionStorage.removeItem("reid");
  }
  componentDidMount() {
    // alert(this.state.applied_ON)
    let id = sessionStorage.getItem("mgrid");
    if (id == null) {
      alert("Please Login First");
      window.location = "/";
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
        <ManagerNavBar />

        <div className="user">
          <div className="userContainer">
            <div className="userShow"></div>{" "}
            <div className="userUpdate">
              <span className="userUpdateTitle">Leave Action</span>
              <div className="userUpdateLeft">
                <div className="userUpdateItem">
                  <label>
                    <big>
                      <b>Number_of_Days : {this.state.number_of_days}</b>
                    </big>
                  </label>
                  <label>
                    <big>
                      <b>Start Date : {this.state.start_Date}</b>
                    </big>
                  </label>
                  <label>
                    <big>
                      <b>End Date : {this.state.end_Date}</b>
                    </big>
                  </label>
                  <label>
                    <big>
                      <b>Leave Type : {this.state.leave_Type}</b>
                    </big>
                  </label>
                  <label>
                    <big>
                      <b>Status : {this.state.status}</b>
                    </big>
                  </label>
                  <label>
                    <big>
                      <b>Manager Comments :</b>
                    </big>
                  </label>
                  <input
                    type="text"
                    onChange={(e) =>
                      this.handleChange({ manager_Comments: e.target.value })
                    }
                    className="form-control"
                    placeholder="Enter Coments"
                  />
                </div>
                <div className="userUpdateItem"></div>
                <div className="userUpdateItem"></div>
                {/* <div className="userUpdateItem">
                      <label>Leave Type</label>
                      <input
                        type="text"
                        onChange={(e) => this.handleChange({leave_Type: e.target.value })}
                        placeholder="Enter Leave Type"
                        className="userUpdateInput"
                      />
                    </div> */}
                <div className="userUpdateItem"></div>
              </div>
              <div className="userUpdateRight">
                <div className="userUpdateUpload">
                  <label htmlFor="file"></label>
                  <input type="file" id="file" />
                </div>
                <button onClick={this.Approve} className="userUpdateButton">
                  Approve
                </button>
                <br />
                <button onClick={this.Reject} className="userUpdateButton">
                  Reject
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
