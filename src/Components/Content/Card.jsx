import React from "react";
import "../Content/css/Card.css";
import '../Content/css/Cardmin.css'
import qre from "../assets/threed_mockup (5).png";

const Card = () => {
  return (
    <article className="card">
      <div className="cardone">
        <h3>
          Maximize your business card models, fit all your details into one
          QR code
        </h3>
      </div>
      <figure className="cardtwo">
        <img src={qre} alt="" />
      </figure>
    </article>
  );
};

export default Card;
