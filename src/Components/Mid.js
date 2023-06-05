import React, { useRef } from "react";
import { AnimatePresence } from "framer-motion";
import { Navigate, useNavigate } from "react-router-dom";
import "./Mid.css";

function Mid() {
  const ref = useRef(null);

  const navigate = useNavigate(); 
  const handleClick = () => {
    navigate("/projects");
  };

  return (
    <AnimatePresence>
      <div>
        <div className="headerintro">
          <h1>
            Hii ,My name is <span className="color"> Harsh Ranjan Dwivedi</span>
          </h1>
          <br></br>
        </div>
        <div className="para">
          <p>
            <b>
              I'm pursuing Bachelor Of Technology in from GKV Haridwar <br />
              Since first year I've developed interest in{" "}
              <span className="color"> Computer Science</span> and started
              learning
              <span className="color"> Data Structures and Algorithms.</span>
              <br></br>
              But I didn't have interest in solving questions but I had a
              particular interest in{" "}
              <span className="color">
                <i> Development.</i>{" "}
              </span>
              <br />
              So I started my journey in{" "}
              <span className="color">
                {" "}
                <i> Web Development.</i>{" "}
              </span>
              <br></br>
              Since then I've been on my learning curve and I'm enjoying it.
              <br></br>
            </b>
          </p>
          <br />
          <br />
          <br />
          <div
            className="projectPointer"
            style={{ display: "flex" }}
            onClick={handleClick}
          >
            Projects{" "}
            <img
              className="pointerImg"
              src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExODViODYwODQ5MjU4OWZhOTI1YWQ5MjY4NjQ0ZjY1MDI5OTcwZmNmYSZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PXM/K8M2BMcGyiA9E9hmEl/giphy.gif"
            ></img>
          </div>
        </div>
      </div>
    </AnimatePresence>
  );
}

export default Mid;
