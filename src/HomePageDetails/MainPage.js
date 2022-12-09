import React, { Component } from "react";
import Navbar from "../components/Navbar";
import "./MainPage.css";

export default class MainPage extends Component {
  render() {
    return (
      <>
      <div>
        <Navbar/>
        <section className="home" id="home">
          <div className="max-width">
            <div className="home-content"></div>
          </div>
        </section>
      </div>
      </>
    );
  }
}
