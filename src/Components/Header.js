import React from "react";
import { motion } from "framer-motion";
import Type from "./Type";

function Header() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="intro" style={{ padding: 50, textAlign: "left" }}>
        Let me introduce a tech-savvy undergraduate with expertise in ReactJS,
        JavaScript, <span className="color">and website development.</span>
      </h1>

      <h1>
        <div style={{ padding: 50, textAlign: "left" }}>
          <Type />
        </div>
      </h1>
    </motion.header>
  );
}
export default Header;
