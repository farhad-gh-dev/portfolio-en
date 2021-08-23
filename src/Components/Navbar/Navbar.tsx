import React, { useState } from "react";
import { navbarLinks } from "../../Data/Links";
import CloseIcon from "../../Assets/icons/close.svg";
import "./navbar.scss";

const Navbar: React.FC = () => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const navbarBtnHandler = () => {
    setIsActive(!isActive);
  };

  return (
    <div
      className={`navbar absolute top-0 right-0 sm:w-auto z-50${
        isActive ? " active" : ""
      }`}
    >
      <div className="navbar-button-container inline-block absolute top-0 right-0 sm:hidden">
        <button className="navbar-button relative" onClick={navbarBtnHandler}>
          {isActive ? (
            <img src={CloseIcon} alt="close" />
          ) : (
            <React.Fragment>
              <div className="dot absolute top-0 left-0 bg-black rounded"></div>
              <div className="dot absolute top-0 right-0 bg-black rounded"></div>
              <div className="dot absolute bottom-0 left-0 bg-black rounded"></div>
              <div className="dot absolute bottom-0 right-0 bg-black rounded"></div>
            </React.Fragment>
          )}
        </button>
      </div>
      <div className="navbar-links-panel w-full h-full sm:w-auto sm:h-auto flex justify-center items-center bg-white sm:bg-transparent">
        <div className="navbar-links-container">
          {navbarLinks.map((link) => {
            return (
              <div key={link.title} className="text-center sm:text-left">
                <a
                  href={link.href}
                  className="navbar-link relative inline-block custom-primary-font"
                >
                  {link.title}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
