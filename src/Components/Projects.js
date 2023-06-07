import React from "react";
import ProjectCard from "./ProjectCard";
import projectData from "./ProjectData";
import { motion } from "framer-motion";

import "./Project.css";
function Projects() {
  return (
    <motion.div
      initial={{ x: 5000 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="project-list">
        {projectData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            image={project.image}
            link={project.link}
          />
        ))}
      </div>
    </motion.div>
  );
}

export default Projects;
