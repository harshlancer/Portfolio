import React from "react";
import github from "./Assets/githubLogo.png";
import linkedIn from "./Assets/linkedin.png";
import twitter from "./Assets/twitter.png";

import { motion } from "framer-motion";

function Footer() {
  return (
    <motion.footer
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 style={{ fontSize: "large", paddingLeft: 50, textAlign: "left" }}>
        Find me on
      </h3>
      <div className="logo-wrapper">
        <a href="https://github.com/harshlancer">
          <img className="logo" src={github} />
        </a>

        <a href="https://www.linkedin.com/in/harsh-ranjan-dwivedi-687106212/">
          <img className="logo" src={linkedIn} />
        </a>
        <a href="https://twitter.com/HarshRanjanDwi3">
          <img className="logo" src={twitter} />
        </a>
      </div>
    </motion.footer>
  );
}

export default Footer;