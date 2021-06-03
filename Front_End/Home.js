import React from "react";
//import styled from "styled-components";
//import ReactDOM from "react-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../src/styles/navbarStyling.css";
import Home2 from "./Home2";
import Footer from "./Footer";

//const HomeCSS = styled.div`
//  font-size: 20px;
//`;

const Home = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light nav">
        <a class="navbar-brand" href="#">
          V-Market
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">
                Home <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Contact Us
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link " href="#">
                About Us
              </a>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
              Logout
            </button>
          </form>
        </div>
      </nav>
      <div className="page">
        <Home2 />
      </div>
      <div className="page">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
