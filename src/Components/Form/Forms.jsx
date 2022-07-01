import React, { useContext, useState } from "react";
import "../Form/css/Form.css";
import "../Form/css/Formmin.css";
import Layout from "../Layout/Layout";
import { useNavigate } from "react-router-dom";
import { myContext } from "../Router/Router";

const Forms = () => {
  let { card,setCard } = useContext(myContext);
  
  let navigate=useNavigate()
  
  let obj = {};
  
  function getData(e) {
   
    e.preventDefault();
    obj = {
      fname: e.target["fname"].value,
      lname: e.target["lname"].value,
      occupation: e.target["occu"].value,
      phone: e.target["phone"].value,
      twitter: e.target["twitter"].value,
      linkedin: e.target["lin"].value,
      email: e.target["mail"].value
    };
    setCard(obj);
    console.log(obj)
    navigate('/Qrcard')
  }

 


  return (
    <Layout>
      <section className="vor">
        <div className="imsd">
          <div className="dam"></div>
        </div>
        <section className="formik">
          <article>
            <p>Hello there! Kindly fill the form to create your qr code</p>
          </article>
          <h2>QR FORM!</h2>
          <form action="" className="ali" onSubmit={(e) => getData(e)}>
            <div className="werp">
              <div className="jahdiel">
                <label htmlFor="fname">First name</label>
                <input type="text" id="fname" />
              </div>
              <div className="jahdiel">
                <label htmlFor="name">Last name</label>
                <input type="text" id="lname" />
              </div>
            </div>

            <div className=" occi">
              <label htmlFor="mail">Email</label>
              <input type="text" id="mail" />
            </div>
            <div className="werp">
              <div className="jahdiel">
                <label htmlFor="Occu">Occupation</label>
                <input type="text" id="occu" />
              </div>
              <div className="jahdiel">
                <label htmlFor="phone">Phone no:</label>
                <input type="text" id="phone" />
              </div>
            </div>
            <div className="werp">
              <div className="jahdiel">
                <label htmlFor="twitter">Twitter</label>
                <input type="text" id="twitter" />
              </div>
              <div className="jahdiel">
                <label htmlFor="lin">LinkedIn</label>
                <input type="text" id="lin" />
              </div>
            </div>
            <button className="dsdi"  >GENERATE QR</button>
          </form>
        </section>
      </section>
    </Layout>
  );
};

export default Forms;
