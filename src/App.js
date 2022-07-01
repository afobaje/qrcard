import React from "react";
import "./App.css";
import Layout from "./Components/Layout/Layout";
import Header from "./Components/Header/Header";
import Intro from "./Components/Content/Intro";
import Card from "./Components/Content/Card";



function App() {
  return (
    <Layout>
    <div className="App">
      <Header/>
      <Intro/>
      <Card/>
    </div>
    </Layout>
  );
}

export default App;
