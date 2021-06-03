import React from "react";
//import styled from "styled-components";
//import ReactDOM from "react-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../src/styles/navbarStyling.css";
import "./footer.css";

//const HomeCSS = styled.div`
//  font-size: 20px;
//`;

const Home2 = () => {
  return (
    <div className="footer">
      <ul className="contacts">
        <h1>Contacts</h1>
        <li>mrnadeem114@gmail.com</li>
        <li>
          <h7>www.facebook.com/NadeemKhan.114</h7>
        </li>
        <li>
          <h7>www.instagram.com/nadeem.114</h7>
        </li>
        <li>
          <h7>www.twitter.com/iNadeemkh</h7>
        </li>
      </ul>
      <ul className="information">
        <h1>Information</h1>
        <li>
          <h7>About Us</h7>
        </li>
        <li>
          <h7>Contact info</h7>
        </li>
        <li>
          <h7>Google</h7>
        </li>
      </ul>
      <ul className="follow_Us">
        <h1>Follow Us</h1>
        <li>
          <h7>Facebook</h7>
        </li>
        <li>
          <h7>Twitter</h7>
        </li>
        <li>
          <h7>Instagram</h7>
        </li>
      </ul>
    </div>
  );
};

export default Home2;
