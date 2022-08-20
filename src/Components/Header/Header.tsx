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
      <div className="text-area lg:flex-grow flex flex-col justify-between h-full relative z-10 overflow-hidden">
        <div className="brand-logo">
          <a href="/">
            <img src={BrandLogo} alt="brand" className="h-auto" />
          </a>
          <span className="small-text font-medium uppercase inline-block">
            it's time
          </span>
        </div>

        <div className="bottom-right-text absolute bottom-0">
          <span className="small-text font-medium uppercase inline-block">
            have a great Idea? make it happen
          </span>
        </div>

        <div className="social-media-container absolute">
          {socialMediaLinks.map((link) => {
            return (
              <a
                key={link.alt}
                href={link.href}
                target="_blank"
                rel="noreferrer"
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
              I Am A 23 Years Old <span>Front-End Developer</span> Based In
              Iran, My Job Is To Bring <span>Great Ideas</span> To Life With
              Awesome People And I <span>Love</span> Learning New Web
              Technologies.
            </p>
          </div>
          <div className="mb-32 lg:mb-24 pl-24 sm:pl-56 md:pl-72 lg:pl-0 text-center">
            <a
              href="../../Assets/resume.pdf"
              download="Farhad_Gholami_Resume"
              className="resume-link relative font-medium capitalize"
            >
              Download My Resume <span className="font-medium"> | </span>
            </a>
            <a
              href="#projects"
              className="projects-link relative font-medium capitalize"
            >
              {" "}
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
