import React from "react";
import { Link } from "react-router-dom";
import { footerLinks } from "../lib/data";

// const Fade = require("react-reveal/Fade");
import Fade from "react-reveal/Fade";

const Footer: React.FC = () => {
  return (
    <Fade bottom>
      <footer className="bg-[#dfe7f3] p-6 md:py-12 w-full z-[100]">
        <Fade bottom>
          <div className="container max-w-7xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-sm">
            {footerLinks?.map((fl, index) => (
              <div key={index || fl.id} className="grid gap-1">
                <h3 className="font-semibold">{fl.head}</h3>
                {fl.links.map((l, index) => (
                  <div key={index || l.id}>
                    <Link to={l.url}>{l.title}</Link>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </Fade>
      </footer>
    </Fade>
  );
};

export default Footer;
