import React, { Component } from "react";
import axios from "axios";
import "./EmployeeLogin.css";
import { BrowserRouter, Link, Router, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
export default class EmployeeLogin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      eemail: "",
      epassword: "",
    };
    this.loginuser = this.loginuser.bind(this);
  }
  validate() {
    var res = 0;
    if (this.state.email == "" && this.state.password == "") {
      //alert("pls enter username password");
      this.setState({ eemail: "Enter your email" });
      this.setState({ epassword: "Enter your password" });
      res = res + 1;
      return false;
    } else if (this.state.email.includes("@gmail.com") == false) {
      this.setState({ eemail: "Enter valid emailid" });
      res = res + 1;
    } else if (this.state.password.length < 8) {
      this.setState({ epassword: "Password must be 8 characters" });
      res = res + 1;
    }

    if (res == 0) {
      return true;
    } else {
      return false;
    }
  }
  loginuser() {
    this.setState({
      eusername: "",
      epassword: "",
    });

    // this.submit();
    //this.validate();
    if (this.validate()) {
      axios
        .get(
          "https://localhost:44312/api/Employee/login/" +
            this.state.email +
            "/" +
            this.state.password
        )
        .then((res) => res)
        .then((result) => {
          let r = result.data;
          sessionStorage.setItem("empid", result.data.employee_Id);
          sessionStorage.setItem("mgrid1", result.data.manager_Id);
          sessionStorage.setItem("sick", result.data.sick_Leave_bal);
          sessionStorage.setItem("maternity", result.data.maternity_Leave_bal);
          sessionStorage.setItem("earned", result.data.earned_Leave_bal);

          if (r != null) {
            alert("welcome " + result.data.full_Name);
            window.location = "/empnavbar";
          } else {
            alert("Invalid Credentials");
          }
        })
        .catch((err) => {
          console.log(err);
          alert("Enter valid credentials");
        });
    }
  }
  render() {
    return (
      <>
        <Navbar></Navbar>
        <div className="login">
          <img
            src={require("./Hexaware-logo.jpg")}
            height={"200px"}
            width={"500px"}
          />

          <div className="title1">Employee Login</div>
          <div className="login-form">
            <div className="title">Sign In</div>
            <div className="input-container">
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  required
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  onChange={(e) => this.setState({ email: e.target.value })}
                />
                <p>{this.state.eemail}</p>
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                  Password
                </label>
                <input
                  type="password"
                  required
                  class="form-control"
                  id="exampleInputPassword1"
                  onChange={(e) => this.setState({ password: e.target.value })}
                />
              </div>
              <p style={{ color: "red" }}>{this.state.epassword}</p>
              <button class="btn btn-primary" onClick={this.loginuser}>
                Submit
              </button>
              <Link to={"/enteremail"} class="forgetpass">
                Forgot Password?
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }
}
