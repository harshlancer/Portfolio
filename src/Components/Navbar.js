import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./Navbar.css";
function Navbar() {
  const [menu, setMenu] = useState(true);
  const handleClick = () => {
    setMenu(!menu);
  };
  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="Navbar"
    >
      <ul>
        {menu ? (
          <div className="large">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>

            <li className="small">
              <span class="material-symbols-outlined" onClick={handleClick}>
                menu
              </span>
            </li>
          </div>
        ) : (
          <span className="menu">
            <span class="material-symbols-outlined" onClick={handleClick}>
              menu
            </span>
          </span>
        )}
      </ul>
    </motion.nav>
  );
}

export default Navbar;
