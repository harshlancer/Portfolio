import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Type from "./Type";
import Projects from "./Projects";
import Header from "./Header";
import About from "./About";
import Footer from "./Footer";
import Navbar from "./Navbar";
function MainSection() {
  return (
    <section className="main-section">
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Header />
        <Footer />
      </motion.main>
    </section>
  );
}

export default MainSection;
