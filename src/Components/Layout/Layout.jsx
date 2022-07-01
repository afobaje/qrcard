import React from "react";
import Footer from "../Footer/Footer";
import "../Layout/css/Layoutmin.css";
import Nav from "./Nav/Nav";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Nav />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
