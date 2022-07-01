import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Nav/css/Nav.css";
import "../Nav/css/Navmin.css";

const Nav = () => {
  const navigate = useNavigate();
  
  return (
    <nav className="navel">
      <div className="logo">
        <h2><Link to='/' className="over">DigiCard</Link></h2>
      </div>
      <ul className="links">
       
        <li>
          <Link to='/Forms' className="over mend">Create Card</Link>
        </li>
      </ul>
      
    </nav>
  );
};

export default Nav;
