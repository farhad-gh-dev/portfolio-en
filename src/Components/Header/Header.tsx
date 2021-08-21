import React from "react";
import Navbar from "../Navbar/Navbar";
import BrandLogo from "../../Assets/brand-logo.png";
import BackgroundImage from "../../Assets/header-background.jpg";
import { socialMediaLinks } from "../../Data/Links";
import "./header.scss";

const Header: React.FC = () => {
  return (
    <div className="header lg:flex relative w-full h-screen">
      <Navbar />
      <div className="text-area lg:flex-grow flex flex-col justify-between h-full relative z-10">
        <div className="brand-logo">
          <a href="/">
            <img src={BrandLogo} alt="brand" className="h-auto" />
          </a>
          <span className="small-text font-bold uppercase inline-block">
            let's do it
          </span>
        </div>

        <div className="bottom-right-text absolute bottom-0">
          <span className="small-text font-bold uppercase inline-block">
            let's do it let's do it let's do it
          </span>
        </div>

        <div className="social-media-container absolute">
          {socialMediaLinks.map((link) => {
            return (
              <a
                key={link.alt}
                href="/"
                className="social-media-link block mb-6 sm:mb-10 lg:mb-11"
              >
                {<link.icon />}
              </a>
            );
          })}
        </div>

        <div>
          <div className="title">
            <span className="hi custom-primary-font">hi</span>
            <h1>my name is farhad</h1>
          </div>
          <div className="description">
            <p>
              I Am A 21 Years Old <span>Front-End Developer</span>, With Strong
              Understanding Of <span>HTML</span>, <span>CSS</span> And{" "}
              <span>JavaScript</span> And I Love Learning New Web Technologies.
            </p>
          </div>
          <div className="mb-32 lg:mb-24 pl-24 sm:pl-56 md:pl-72 lg:pl-0 text-center">
            <a
              href="#projects"
              className="projects-link relative font-bold capitalize"
            >
              check out my projects
            </a>
          </div>
        </div>
      </div>
      <div
        className="background-image-container lg:flex-shrink-0 absolute top-0 right-0 h-full lg:relative bg-left-bottom bg-no-repeat bg-cover z-0"
        style={{
          backgroundImage: `url(${BackgroundImage})`,
        }}
      ></div>
    </div>
  );
};

export default Header;