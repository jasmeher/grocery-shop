import React from "react";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import "./About.css";
// import MetaData from "../MetaData";

const About = () => {
  const visitInstagram = () => {
    window.location = "https://instagram.com/khamkar_pradip25";
  };
  document.title = "About Us";
  return (
    <>
      <Header />

      <div className="about-section-container">
        <h1 className="Heading">
          About <span>Us</span>
        </h1>
        {/* <MetaData title={'About Us'} /> */}
        <div className="about-section-box">
          <div>
            <div>
              <h1>GROCERY SHOPPING APP</h1>
              <br />
              <p>Grocery Store App where user can buy groceries</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
