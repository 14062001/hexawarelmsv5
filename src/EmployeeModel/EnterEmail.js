import "./EnterEmail.css";
import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import axios from "axios";

const EnterEmail = () => {
  var max = 10000;
  var min = 99999;
  var res = Math.floor(Math.random() * (max - min + 1)) + min;
  const msg = "your otp is " + res + ", valid for 5 min";
  const form = useRef();
  const [email, setEmail] = useState("");
  const [eotp, setOtp] = useState("");
  const name = "User";
  const subject = "LMS HEXA";

  const sendEmail = (e) => {
    e.preventDefault();
    // alert(email)

    axios
      .get("https://localhost:44312/api/Employee/GetByEmail/" + email)
      .then((res) => res)
      .then((result) => {
        let r = result.data;
        sessionStorage.setItem("employee_id", result.data.employee_Id);

        if (r != null) {
          alert("account found");
          emailjs
            .sendForm(
              "service_864xkci",
              "template_dd7vupc",
              form.current,
              "Du94QdqS3eYRm7br5"
            )
            .then(
              (result) => {
                console.log(result.text);
                sessionStorage.setItem("otp", res);
                // alert("please check your email and enter otp")
                const notp = prompt("enter your Otp Sent on email");
                // alert(notp);
                var now = new Date().getTime();
                var setupTime = sessionStorage.getItem("satupTime");
                if (setupTime == null) {
                  sessionStorage.setItem("setupTime", now);
                } else {
                  if (now - setupTime > 300) {
                    sessionStorage.removeItem("otp");
                    sessionStorage.setItem("setupTime", now);
                  }
                }

                const potp = sessionStorage.getItem("otp");
                //  alert("session"+potp+"eotp"+eotp);
                if (notp == potp) {
                  window.location = "/empforgotpassword";
                } else {
                  alert("you entered wrong otp");
                }
              },
              (error) => {
                console.log(error.text);
              }
            );
        } else {
          alert("Invalid email");
        }
      })
      .catch((err) => {
        console.log(err);
        alert("Enter valid email");
      });
  };
  const CheckOtp = () => {
    var now = new Date().getTime();
    var setupTime = sessionStorage.getItem("satupTime");
    if (setupTime == null) {
      sessionStorage.setItem("setupTime", now);
    } else {
      if (now - setupTime > 300) {
        sessionStorage.removeItem("otp");
        sessionStorage.setItem("setupTime", now);
      }
    }
    const potp = sessionStorage.getItem("otp");
    //  alert("session"+potp+"eotp"+eotp);
    if (eotp == potp) {
      window.location = "/empforgotpassword";
    } else {
      alert("you entered wrong otp");
    }
  };

  return (
    <>
      <div className="email">
        <div className="loginf">
          <form ref={form} onSubmit={sendEmail} class="form-inline">
            <div class="form-group mb-2">
              <input type="hidden" defaultValue={subject} name="subject" />
              <input type="hidden" defaultValue={name} name="name" />
              <input type="hidden" defaultValue={msg} name="message" />

              <label for="staticEmail2" class="sr-only">
                Enter Email as
              </label>
              <input
                type="text"
                readonly
                class="form-control-plaintext"
                id="staticEmail2"
                value="email@example.com"
              />
            </div>
            <div class="form-group mx-sm-3 mb-2">
              <label for="inputPassword2" class="sr-only">
                Email
              </label>
              <input
                type="email"
                name="email"
                class="form-control"
                id="inputPassword2"
                onChange={(e) => setEmail(e.target.value)}
                placeholder=""
              />
            </div>
            <input type="submit" value="send" class="btn btn-primary mb-2" />
            Confirm identity
          </form>
        </div>
      </div>
    </>
  );
};

export default EnterEmail;
