import React from "react";
import { socialMediaLinks } from "../../Data/Links";
import "./footer.scss";

const Footer: React.FC = () => {
  return (
    <div className="section footer">
      <div className="text-area flex justify-center" data-aos="fade-up">
        <p className="font-medium">Designed and Developed by Farhad Gholamie</p>
        <div className="social-media-links flex sm:items-center mt-1 sm:mt-0">
          {socialMediaLinks.map((link) => {
            return (
              <a
                key={link.alt}
                href={link.href}
                target="_blank"
                rel="noreferrer"
              >
                {<link.icon />}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Footer;
