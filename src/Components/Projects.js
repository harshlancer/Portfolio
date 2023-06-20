import React, { useEffect } from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import ProjectCard from "./ProjectCard";
import projectData from "./ProjectData";

import "./Project.css";

function Projects() {
  const { scrollY } = useViewportScroll();
  const opacity = useTransform(scrollY, [0, 200], [0, 1]);
  const translateY = useTransform(scrollY, [0, 200], [100, 0]);

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on component mount
  }, []);

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, translateY: 100 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="section-title">Projects</h1>
      </motion.div>

      <div className="project-list">
        {projectData.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, translateY: 100 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              image={project.image}
              link={project.link}
            />
          </motion.div>
        ))}
      </div>

      <button className="scroll-top-btn" onClick={() => window.scrollTo(0, 0)}>
        Scroll to Top
      </button>

      <motion.div
        className="scroll-indicator"
        style={{ opacity, translateY }}
      />
    </div>
  );
}

export default Projects;
