import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ManagerNavBar from "./ManagerNavBar";
import "./EnterEmail.css";
export default class AddEmployee extends Component {
  constructor(props) {
    super(props);
    //   const defaultImageSrc = bg

    this.state = {
      Password: "",
      Full_Name: "",
      Email_Address: "",
      Mobile_Number: "",
      Doj: "",
      Department: "",
      Designation: "",
      Leave_bal: "",
      Manager_Id: 0,
      imageName: "",
      imageSrc: null,
      imageFile: null,
      NameError: "",
      EmailError: "",
      PasswordError: "",
      MobileError: "",
      DesignationError: "",
      DepartmentError: "",
      Valistatus: false,
    };
    this.submit = this.submit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleImage = this.handleImage.bind(this);
  }
  validate() {
    var res = 0;
    if (this.state.Email_Address == "" && this.state.Password == "") {
      //alert("pls enter username password");
      this.setState({ EmailError: "Enter your email" });
      this.setState({ PasswordError: "Enter your password" });
      res = res + 1;
    }
    if (this.state.Email_Address.includes("@gmail.com") == false) {
      this.setState({ EmailError: "Enter valid emailid" });
      res = res + 1;
    }
    //  if (this.state.password.length < 8) {
    //   this.setState({ PasswordError: "Password must be 8 characters" });
    //   res=res+1;
    // }

    if (this.state.Department == "") {
      this.setState({ DepartmentError: "Department cannot be blank" });
    }
    if (this.state.Full_Name == "") {
      this.setState({ NameError: "Name cannot be empty" });
    }

    if (res == 0) {
      return true;
    } else {
      return false;
    }
  }
  submit() {
    this.setState({
      NameError: "",
      PasswordError: "",
      DesignationError: "",
      DepartmentError: "",
      EmailError: "",
    });
    //  alert(` i am ${this.state.Full_Name} and my email is ${this.state.Email_Address} , i am from ${this.state.Department} , designation ${this.state.Designation}, doj ${this.state.Doj} , Mobile ${this.state.Mobile_Number} , manager id ${this.state.Manager_Id} `)
    if (this.validate()) {
      const sick = 11;
      const earned = 11;
      const maternity = 11;
      let url = "https://localhost:44312/api/Employee/addEmp";
      const mgrid = sessionStorage.getItem("mgrid");

      const formData = new FormData();
      formData.append("password", this.state.Password);
      formData.append("full_Name", this.state.Full_Name);
      formData.append("email_Address", this.state.Email_Address);
      formData.append("mobile_Number", this.state.Mobile_Number);
      formData.append("doj", this.state.Doj);
      formData.append("department", this.state.Department);
      formData.append("designation", this.state.Designation);
      formData.append("leave_bal", this.state.Leave_bal);
      formData.append("manager_Id", mgrid);
      formData.append("imageName", this.state.imageName);
      formData.append("imageFile", this.state.imageFile);
      formData.append("sick_Leave_bal", sick);
      formData.append("earned_Leave_bal", earned);
      formData.append("maternity_Leave_bal", maternity);

      axios
        .post(url, formData)
        .then((response) => {
          let r = response.data;
          // alert(r)
          if (r != null) {
            alert("data inserted");
            window.location = "/emps";
          } else {
            alert("not inserted");
          }
        })
        .catch((error) => {
          alert(error.response.data);
        });
    }
  }
  handleChange(e) {
    this.setState(e);
  }
  handleImage(e) {
    if (e.target.files && e.target.files[0]) {
      let imageFile = e.target.files[0];
      const reader = new FileReader();
      reader.onload = (x) => {
        this.setState({ imageFile: imageFile, imageSrc: x.target.result });
      };
      reader.readAsDataURL(imageFile);
    } else {
      this.setState({ imageFile: null, imageSrc: null });
    }
  }

  render() {
    return (
      <>
        <ManagerNavBar />

        <div className="fplace">
          <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 g-4">
            <Card>
              <Card.Body>
                <div bg="blue">
                  <div className="heading">
                    {" "}
                    <h2>EMPLOYEE Register</h2>
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      name="full_Name"
                      onChange={(e) =>
                        this.handleChange({ Full_Name: e.target.value })
                      }
                      className="form-control"
                      placeholder="full_Name"
                    />
                    <p>{this.state.NameError}</p>
                    {/* <label>{this.state.NameError}</label> */}
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      name="Email"
                      onChange={(e) =>
                        this.handleChange({ Email_Address: e.target.value })
                      }
                      className="form-control"
                      placeholder="Enter Email"
                    />
                    <p>{this.state.EmailError}</p>
                  </div>
                  <div className="form-group">
                    <input
                      type="date"
                      name="doj"
                      onChange={(e) =>
                        this.handleChange({ Doj: e.target.value })
                      }
                      className="form-control"
                      placeholder="Enter DOJ"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="number"
                      name="mobile"
                      onChange={(e) =>
                        this.handleChange({ Mobile_Number: e.target.value })
                      }
                      className="form-control"
                      placeholder="Enter Mobile no"
                    />
                    <p>{this.state.MobileError}</p>
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      name="pass"
                      onChange={(e) =>
                        this.handleChange({ Password: e.target.value })
                      }
                      className="form-control"
                      placeholder="Enter Password"
                    />
                    <p>{this.state.PasswordError}</p>
                  </div>
                  <div className="form-group">
                    <label></label>
                    <select
                      onChange={(e) =>
                        this.handleChange({ Department: e.target.value })
                      }
                      className="form-control"
                    >
                      <option value="">Select Dept</option>
                      <option value="ATM">ATM</option>
                      <option value="IMS">IMS</option>
                      <option value="ES">ES</option>
                    </select>
                    <p>{this.state.DepartmentError}</p>
                  </div>
                  <div className="form-group">
                    <label></label>
                    <select
                      onChange={(e) =>
                        this.handleChange({ Designation: e.target.value })
                      }
                      className="form-control"
                    >
                      <option value="">Select Designation</option>
                      <option value="ASE">ASE</option>
                      <option value="SE">SE</option>
                      <option value="PM">pm</option>
                    </select>
                  </div>
                  {/* <div className="form-group">
             <label></label>
                <input type="number" name="leave_bal" onChange={(e) => this.handleChange({ Leave_bal: e.target.value })} className="form-control" placeholder="Enter Leave balance" />
                <p style={{color:"red"}}>{this.state.PasswordError}</p>
         </div> */}
                  {/* <div className="form-group">
             <label></label>
                <input type="number" name="mgrid" onChange={(e) => this.handleChange({ Manager_Id: e.target.value })} className="form-control" placeholder="Enter Manager id" />
                <p style={{color:"red"}}>{this.state.PasswordError}</p>
         </div>
         */}
                  <br />
                  <input
                    type="file"
                    accept="image/*"
                    className="form-control"
                    onChange={this.handleImage}
                    id="image-uploader"
                  />
                  <br />
                  <button
                    onClick={this.submit}
                    className="btn btn-outline-info"
                  >
                    Register
                  </button>{" "}
                  <br /> <br />
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
      </>
    );
  }
}
