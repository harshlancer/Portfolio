import React from "react";
import javascript from "./Assets/javascript.png";
import reactLogo from "./Assets/react-logo.svg";
import next from "./Assets/next-js.svg";
import node from "./Assets/node-js.svg";
import pwa from "./Assets/pwa.png";
import native from "./Assets/native-apps-icon.png";

function About() {
  return (
    <div className="about-section">
      <div className="about-text">
        <h3 className="intro" style={{ padding: 50, textAlign: "left" }}>
          {" "}
          As a third-year undergraduate student, I am extremely passionate about
          technology. Over the past few years, I have learned and mastered
          various technologies such as ReactJS, JavaScript, NextJS, NodeJS, and
          many more. These skills have enabled me to develop and design
          websites, build progressive web apps (PWAs), and create native apps.{" "}
        </h3>
      </div>

      <section id="skills">
        <h2 className="color" style={{ fontWeight: 600 }}>
          Skills
        </h2>
        <div className="skills">
          <div className="skill-card">
            <img src={reactLogo} alt="React" />
            <h3 className="color">ReactJS</h3>
          </div>
          <div className="skill-card">
            <img src={javascript} alt="JavaScript" />
            <h3 className="color">JavaScript</h3>
          </div>
          <div className="skill-card">
            <img src={next} alt="NextJS" />
            <h3 className="color">NextJS</h3>
          </div>
          <div className="skill-card">
            <img src={node} alt="NodeJS" />
            <h3 className="color">NodeJS</h3>
          </div>

          <div className="skill-card">
            <img src={pwa} />
            <h3 className="color">PWA development</h3>
          </div>
          <div className="skill-card">
            <img src={native} alt="Native app development" />
            <h3 className="color">Native app development</h3>
          </div>
        </div>
      </section>
      <div class="bio">
        <p>
          I am always looking to expand my knowledge and stay up-to-date with
          the latest industry trends. I am a natural problem-solver and pay
          close attention to detail, which allows me to excel in the
          ever-evolving landscape of technology.
        </p>
        <p>
          Overall, I am extremely driven and dedicated to the field of
          technology, and I believe that my skills and expertise make me a
          valuable asset to any team or project I am a part of. I am excited to
          continue learning and growing in my career as a tech enthusiast.
        </p>
      </div>
    </div>
  );
}

export default About;
