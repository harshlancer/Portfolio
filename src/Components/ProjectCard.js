import React from "react";
import { motion } from "framer-motion";
import "./Project.css";

function ProjectCard(props) {
  const { title, description, image, link } = props;
  return (
    <motion.div className="card" whileHover={{ scale: 1.05 }}>
      <img src={image} alt={title} className="card-image" />
      <h3 className="project-title">{title}</h3>
      <p className="project-discription">{description}</p>
      <a className="view" href={link} target="_blank" rel="noreferrer">
        <p
          style={{
            fontWeight: 500,
            fontSize: 23,
            color: "voilet",
          }}
        >
          View Project
        </p>
      </a>
    </motion.div>
  );
}

export default ProjectCard;
