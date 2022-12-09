import React, { useState } from "react";
import "./App.css";
import ChatBot from "react-simple-chatbot";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./HomePageDetails/MainPage";
import ContactUs from "./HomePageDetails/ContactUs";
import EmployeeLogin from "./EmployeeModel/EmployeeLogin";
import ManagerLogin from "./Manager Model/ManagerLogin";
import EmpNavBar from "./EmployeeModel/EmpNavBar";
import EmployeeProfile from "./EmployeeModel/EmployeeProfile";
import EmployeeHome from "./EmployeeModel/EmployeeHome";
import ManagerDetails from "./EmployeeModel/ManagerDetails";
import EmpEditProfile from "./EmployeeModel/EmpEditProfile";
import ChangePasswordEmp from "./EmployeeModel/ChangePasswordEmp";
import ForgotPassword from "./EmployeeModel/ForgotPassword";
import AllLeaves from "./EmployeeModel/AllLeaves/MyAllLeaves";
import ViewLeave from "./EmployeeModel/ViewLeave";
import EnterEmail from "./EmployeeModel/EnterEmail";
import ApplyLeave from "./EmployeeModel/ApplyLeave";
import ManagerNavBar from "./Manager Model/ManagerNavBar";
import ManagerHome from "./Manager Model/ManagerHome";
import MyProfile from "./Manager Model/MyProfile";
import MyAllPendingLeaves from "./Manager Model/AllLeaves/MyAllPendingLeaves";
import MyAllApprovedLeaves from "./Manager Model/AllLeaves/MyAllApprovedLeaves";
import MyAllRejectedLeaves from "./Manager Model/AllLeaves/MyAllRejectedLeaves";
import ManagerChangePass from "./Manager Model/ManagerChangePass";
import ViewLeaveManager from "./Manager Model/ViewLeaveManager";
import EnterEmailManager from "./Manager Model/EnterEmailManager";
import ManagerForgotPassword from "./Manager Model/ManagerForgotPassword";
import Empdetails from "./Manager Model/EmpDetails/Empdetails";
import ViewEmp from "./Manager Model/ViewEmp";
import AddEmployee from "./Manager Model/AddEmployee";
import LeaveAction from "./Manager Model/LeaveAction";

function App() {
  let [showChat, setShowChat] = useState(false);
  const startChat = () => {
    setShowChat(true);
  };
  const hideChat = () => {
    setShowChat(false);
  };
  const steps = [
    {
      id: "Greet",

      message: "Hello, Welcome to Hexaware!",

      trigger: "Done",
    },

    {
      id: "Done",

      message: "Please enter your name!",

      trigger: "waiting1",
    },

    {
      id: "waiting1",

      user: true,

      trigger: "Name",
    },

    {
      id: "Name",

      message:
        "Hi {previousValue}, Do you have any questions reagarding your leaves?",

      trigger: "issues",
    },

    {
      id: "issues",

      options: [
        {
          value: "Yes",

          label: "Yes",

          trigger: "Yes",
        },

        { value: "No", label: "No", trigger: "No" },
      ],
    },

    {
      id: "Yes",

      message:
        "Thanks for letting your issue, Our team will resolve your issue ASAP",

      end: true,
    },

    {
      id: "No",

      message: "Ok. Thanks!",

      end: true,
    },
  ];
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />

          <Route path="/contact" element={<ContactUs />} />
          <Route path="/emplogin" element={<EmployeeLogin />} />
          <Route path="/managerlogin" element={<ManagerLogin />} />
          <Route path="/empnavbar" element={<EmpNavBar></EmpNavBar>} />
          <Route path="/emphome" element={<EmployeeHome></EmployeeHome>} />
          <Route path="/AllLeaves" element={<AllLeaves />} />
          <Route path="/ViewLeave" element={<ViewLeave />} />
          <Route path="/ApplyLeave" element={<ApplyLeave />} />

          <Route
            path="/empprofile"
            element={<EmployeeProfile></EmployeeProfile>}
          />
          <Route
            path="/empeditprofile"
            element={<EmpEditProfile></EmpEditProfile>}
          />
          <Route
            path="/empforgotpassword"
            element={<ForgotPassword></ForgotPassword>}
          />
          <Route
            path="/changepassword"
            element={<ChangePasswordEmp></ChangePasswordEmp>}
          />

          <Route path="/enteremail" element={<EnterEmail />} />

          <Route
            path="/managerdetails"
            element={<ManagerDetails></ManagerDetails>}
          />

          <Route path="/managernavbar" element={<ManagerNavBar />} />
          <Route path="/managerhome" element={<ManagerHome />} />
          <Route path="/AllPendingLeaves" element={<MyAllPendingLeaves />} />
          <Route path="/AllApprovedLeaves" element={<MyAllApprovedLeaves />} />
          <Route path="/AllRejectedLeaves" element={<MyAllRejectedLeaves />} />
          <Route path="/ViewLeaveManager" element={<ViewLeaveManager />} />
          <Route path="/enteremailmanager" element={<EnterEmailManager />} />
          <Route path="/emps" element={<Empdetails />} />
          <Route path="/ViewEmp" element={<ViewEmp />} />
          <Route path="/AddEmp" element={<AddEmployee />} />
          <Route path="/LeaveAction" element={<LeaveAction />} />
          <Route
            path="/managerforgotpassword"
            element={<ManagerForgotPassword />}
          />

          <Route
            path="/managerchangepassword"
            element={<ManagerChangePass />}
          />

          <Route path="/managerprofile" element={<MyProfile />} />
        </Routes>
      </Router>
      <div className="bot">
        <div style={{ display: showChat ? "" : "none" }}>
          <ChatBot
            steps={steps}
            height="700px"
            width="700px"
            align="center"
          ></ChatBot>
        </div>
        {/* <div> {showChat ? <SimpleForm></SimpleForm> : null} </div> */}
        <div>
          {!showChat ? (
            <button className="btn" onClick={() => startChat()}>
              click to chat...{" "}
            </button>
          ) : (
            <button className="btn" onClick={() => hideChat()}>
              click to hide...{" "}
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
