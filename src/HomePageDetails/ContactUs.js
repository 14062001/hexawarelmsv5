import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ContactUs.css";
import Navbar from "../components/Navbar";
export default class ContactUs extends Component {
  render() {
    return (
      <>
            <Navbar/>

      <div className="contactf">
        <div className="input-container">
          <section class="mb-4">
            <h2
              class="h1-responsive font-weight-bold text-center my-4"
              className="h2t"
            >
              Contact us
            </h2>
            <div className="con-form">
              <p class="text-center w-responsive mx-auto mb-5">
                Do you have any questions? Please do not hesitate to contact us
                directly. Our team will come back to you.
              </p>

              <div class="row">
                <div class="col-md-9 mb-md-0 mb-5">
                  <form
                    id="contact-form"
                    name="contact-form"
                    action="mail.php"
                    method="POST"
                  >
                    <div class="row">
                      <div class="col-md-6">
                        <div class="md-form mb-0">
                          <input
                            type="text"
                            id="name"
                            name="name"
                            class="form-control"
                          />
                          <label for="name" className="label">
                            Your name
                          </label>
                        </div>
                      </div>

                      <div class="col-md-6">
                        <div class="md-form mb-0">
                          <input
                            type="text"
                            id="email"
                            name="email"
                            class="form-control"
                          />
                          <label for="email" className="label">
                            Your email
                          </label>
                        </div>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-md-12">
                        <div class="md-form mb-0">
                          <input
                            type="text"
                            id="subject"
                            name="subject"
                            class="form-control"
                          />
                          <label for="subject" className="label">
                            Subject
                          </label>
                        </div>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-md-12">
                        <div class="md-form">
                          <textarea
                            type="text"
                            id="message"
                            name="message"
                            rows="2"
                            class="form-control md-textarea"
                          ></textarea>
                          <label for="message" className="label">
                            Your message
                          </label>
                        </div>
                      </div>
                    </div>
                  </form>

                  <div class="text-center text-md-left">
                    <a
                      class="btn btn-primary btncl"
                      onclick="document.getElementById('contact-form').submit();"
                    >
                      Send
                    </a>
                  </div>
                  <div class="status"></div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      </>
    );
  }
}
