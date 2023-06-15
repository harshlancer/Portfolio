import React,{useRef} from "react";
import javascript from "./Assets/javascript.png";
import reactLogo from "./Assets/react-logo.svg";
import next from "./Assets/next-js.svg";
import node from "./Assets/node-js.svg";
import pwa from "./Assets/pwa.png";
import native from "./Assets/native-apps-icon.png";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { motion } from "framer-motion";


import "./About.css";

function About() {
   

  
  return (
    <Parallax pages={3}>
      <ParallaxLayer speed={1} offset={0} style={{ overflow: "hidden" }}>
        <div className="about-section" style={{ overflow: "hidden" }}>
          <div className="about-text">
            <h3 className="intro-about">
              As a third-year undergraduate student, I am extremely passionate
              about technology. Over the past few years, I have learned and
              mastered various technologies such as ReactJS, JavaScript, NextJS,
              NodeJS, and many more. These skills have enabled me to develop and
              design websites, build progressive web apps (PWAs), and create
              native apps.
            </h3>
          </div>
<div
            className="pointer"
            style={{ display: "flex" }}
          >
            Scroll{" "}
            <img
              className="pointerImg"
              src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExODViODYwODQ5MjU4OWZhOTI1YWQ5MjY4NjQ0ZjY1MDI5OTcwZmNmYSZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PXM/K8M2BMcGyiA9E9hmEl/giphy.gif"
            ></img>
          </div>
        </div>
      </ParallaxLayer>
      <ParallaxLayer
        speed={0.5}
        offset={1}
        factor={3}
        style={{ overflow: "hidden" }}
      >
        <div className="skills">
          <div className="skills-cards">
            <div className="card">
              <img src={reactLogo} alt="React"></img>
              <h3>ReactJs</h3>
            </div>
            <div className="card">
              <img src={javascript} alt="javascript"></img>
              <h3>JavaScript</h3>
            </div>
            <div className="card">
              <img src={next} alt="next"></img>
              <h3>NextJS</h3>
            </div>
            <div className="card">
              <img src={node} alt="node"></img>
              <h3>NodeJS</h3>
            </div>
            <div className="card">
              <img src={pwa} alt="pwa"></img>
              <h3>Progressive Web Apps</h3>
            </div>
            <div className="card">
              <img src={native} alt="Native app development" />
              <h3>Native app development</h3>
            </div>
          </div>
        </div>
      </ParallaxLayer>
      <ParallaxLayer speed={1} sticky={{ start: 1.2, end: 3 }}>
        <div className="bio">
          <p>
            I am always looking to expand my knowledge and stay up-to-date with
            the latest industry trends. I am a natural problem-solver and pay
            close attention to detail, which allows me to excel in the
            ever-evolving landscape of technology.
          </p>
          <p>
            Overall, I am extremely driven and dedicated to the field of
            technology, and I believe that my skills and expertise make me a
            valuable asset to any team or project I am a part of. I am excited
            to continue learning and growing in my career as a tech enthusiast.
          </p>
        </div>
      </ParallaxLayer>
    </Parallax>
  );
}

export default About;
