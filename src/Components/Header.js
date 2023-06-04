import React from "react";
import { motion } from "framer-motion";
import Type from "./Type";
import "./Header.css";

function Header() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="left">
        <h1
          className="intro"
          style={{ padding: 50, textAlign: "left", zIndex: 10000 }}
        >
          Let me introduce a tech-savvy undergraduate with expertise in Web
          Development, <span className="color">App Development</span> Web
          Designing and <span className="color"> UI UX Development.</span>
        </h1>

        <div className="right">
          <img src="https://media1.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif?cid=ecf05e47i1c78wmh07ln5hg76l4dxkseeglo4bqzl9m8wb68&ep=v1_gifs_search&rid=giphy.gif&ct=g" />
          <h1>
            <div style={{ padding: 50, textAlign: "left" }}>
              <Type />
            </div>
          </h1>
        </div>
      </div>
    </motion.header>
  );
}
export default Header;
