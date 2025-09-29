import React from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
// Reusable image component with hover effect
const HoverImage = ({ src, alt, className }) => {
  return (
    <motion.img
      src={src}
      alt={alt}
      whileHover={{ scale: 1.02 }}  // subtle zoom
      transition={{ duration: 0.3 }}
    />
  );
};

const About = () => {
  return (

    <>
      <div className="div-about">
        <Navbar />
        <div className="container-fluid mt-1">
          <h1 className="about-heading">About Us</h1>
        </div>
      </div>


      <div className="row">

        <div className="col-sm-6">
          <HoverImage
            src="about.png"
            alt="About"
            className="" // add your own classes here if needed
          />
        </div>
        <div className="col-sm-6">
          <h5 className="about-head"> ABOUT OUR GYM</h5>
          <h1 className="heading1 mb-35">
            SAFE BODY BUILDING PROPER <br /> SOLUTIONS THAT SAVES OUR <br />{" "}
            VALUABLE TIME!
          </h1>
          <p className="para1">
            Brook presents your services with flexible, convenient and cdpose
            layouts.
            <br />
            You can select your favorite layouts & elements for cular ts with
            unlimited
            <br />
            customization possibilities. Pixel-perfect replication of the
            designers is
            <br />
            intended.
          </p>
          <p className="para2">
            Brook presents your services with flexible, convefnient and chient{" "}
            <br /> anipurpose layouts. You can select your favorite layouts.
          </p>

        </div>
      </div>

      <div className="row">
        <div className="col-sm-6">
          <div className="about-img1">
            <HoverImage src="/images/gallery1.png" alt="" />
          </div>
        </div>
        <div className="col-sm-6">
          <div className="row">
            <div className="col-sm-6 about-img2">
              <HoverImage src="/images/gallery2.png" alt="" />
              <div className="about-img3">
                <HoverImage src="/images/gallery3.png" alt="" />
              </div>
            </div>

            <div className="col-sm-6 about-img4">
              <HoverImage src="/images/gallery4.png" alt="" />
              <div className="about-img5">
                <HoverImage src="/images/gallery5.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-sm-6 about-img6">
          <HoverImage src="/images/about2.png" alt="" />
        </div>
        <div className="col-sm-6">
          <h5 className="hero-section">CLIENT FEEDBACK</h5>
          <h1 className="hero-heading">
            WHAT OUR CLIENT THINK
            <br /> ABOUT YOUR GYM
          </h1>
          <p className="para3">
            Brook presents your services with flexible, convenient and cdpose
            <br /> layouts.You can select your favorite layouts & elements for
            cular ts with <br />
            unlimited customization possibilities. Pixel-perfect replication of
            the <br />
            designers is intended.
          </p>
          <h5 className="hero-caption">JOHN SMITH</h5>
          <h6 className="hero-caption2">Gym Trainer</h6>
        </div>
      </div>

      <div className="row">
        <div className="section-title">
          <h5>OUR TEAM MEMBERS</h5>
          <h1>
            OUR MOST EXPERIENCED <br /> TRAINERS
          </h1>
        </div>
      </div>

      <div className="row">
        <div className="col-sm-4 team-img1">
          <HoverImage src="/images/team1.png" alt="Team1" />
          <div className="team-info">
            <p>Creative Director</p>
            <h5>John Sunsev</h5>
          </div>
        </div>
        <div className="col-sm-4 team-img2">
          <HoverImage src="/images/team2.png" alt="Team2" />
          <div className="team-info">
            <p>Creative Director</p>
            <h5>John Sunsev</h5>
          </div>
        </div>
        <div className="col-sm-4 team-img3">
          <HoverImage src="/images/team3.png" alt="Team3" />
          <div className="team-info">
            <p>Creative Director</p>
            <h5>John Sunsev</h5>
          </div>
        </div>
      </div>


    </>
  );
};

export default About;
