import React from "react";
import ProjectCard from "./ProjectCard";
import projectData from "./ProjectData";

function Projects() {
  return (
    <div className="project-list" style={{ marginTop: 150 }}>
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
  );
}

export default Projects;
