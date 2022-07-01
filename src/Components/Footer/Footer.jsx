import React from "react";
import "../Footer/css/Footer.css";
import "../Footer/css/Footermin.css";
const Footer = () => {
  return (
    <footer className="amod">
      <div className="footone">
        <h2><a href="#">Afobaje</a></h2>
      </div>
      <div className="footTwo">
        <h2>About Us</h2>
        <ul>
            <li>Our vision</li>
        </ul>
      </div>
      <div className="footThree">
        <h2>Social Media handles</h2>
        <ul>
            <li><a href="https://github.com/afobaje">Github</a></li>
            <li><a href="https://linkedin.com/in/ikukoyi-david">LinkedIn</a></li>
            <li><a href="https://twitter.com/davidblaqq">Twitter</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
