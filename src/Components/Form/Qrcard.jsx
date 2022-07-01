import React, { useContext, useState, useEffect } from "react";
import { myContext } from "../Router/Router";
import Layout from "../Layout/Layout";
import '../Form/css/Qrcard.css'
import '../Form/css/Qrcardmin.css'

const Qrcard = () => {
  let [qr, setQr] = useState("");
  let { card } = useContext(myContext);
  let { fname, lname,phone, occupation, twitter,email, linkedin } = card;
  console.log(fname, lname);

  useEffect(() => {
    fetch(
      `https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=${fname}&surname=${lname}&occupation=${occupation}&phone=${phone}&email=${email}&linkedin=${linkedin}`
    ).then((res) => {
      console.log("my url encoded qr comp", res.url);
      setQr(res.url);
    });
  }, []);

  return (
    <Layout>
      <h1 className="congrat">Hooray! Qr card successfully created</h1>
      <section className="qr">
        <article className="timz">
          <h2>Your Details are:</h2>
        </article>
        <article className="result">
          
          <img src={qr} alt="" />
          <ul className="gbese">
            <li>{fname} {' '}{lname}</li>
            
            <li>{phone}</li>
            <li>{occupation}</li>
            <li>{twitter}</li>
            <li>{linkedin}</li>
            <li>{email}</li>
          </ul>
        </article>
      </section>
    </Layout>
  );
};

export default Qrcard;
