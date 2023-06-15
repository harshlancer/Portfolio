import React, { useRef } from "react";
import { motion } from "framer-motion";
import Type from "./Type";
import "./Header.css";
import Mid from "./Mid";

function Header() {
  const ref = useRef(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="header">
        <div className="left">
          <div className="intro">

          <h1 className="headerIntroText">
            Let me introduce a tech-savvy undergraduate with expertise in Web
            Development, <span className="color">App Development</span> Web
            Designing and <span className="color"> UI UX Development.</span>
            </h1>
            <br />
            <br />
            <br />
            <div
              className="pointer"
              style={{ display: "flex" }}
              onClick={handleClick}
              >
              Intro{" "}
              <img
                className="pointerImg"
                src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExODViODYwODQ5MjU4OWZhOTI1YWQ5MjY4NjQ0ZjY1MDI5OTcwZmNmYSZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PXM/K8M2BMcGyiA9E9hmEl/giphy.gif"
                ></img>
            </div>
          </div>
          <br />
          <br />
          <br />

          <div className="right">
            <img src="https://media1.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif?cid=ecf05e47i1c78wmh07ln5hg76l4dxkseeglo4bqzl9m8wb68&ep=v1_gifs_search&rid=giphy.gif&ct=g" />
            <h1>
              <div className="movingText">
                <Type />
              </div>
            </h1>
          </div>
        </div>
        <br />
        <br />
        <br />
        <div ref={ref}>
          {" "}
          <Mid />
        </div>
      </div>
    </motion.header>
  );
}
export default Header;
