import React from "react";
import { motion } from "framer-motion";

function ProjectCard(props) {
  const { title, description, image, link } = props;
  return (
    <motion.div className="card" whileHover={{ scale: 1.05 }}>
      <img src={image} alt={title} className="card-image" />
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={link} target="_blank" rel="noreferrer">
        View Project
      </a>

      {/* <button onClick={console.log("hello")}>View Project</button> */}
    </motion.div>
  );
}

export default ProjectCard;
