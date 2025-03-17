import React, { useRef, useEffect } from "react";
import ProjectCard, { ProjectProps } from "./ProjectCard";
import picOne from "./image1.png";
import picThree from "./image2.png";
import picFour from "./image3.png";
import picTwo from "./Blue And Red Futuristic Game YouTube Channel Art.png";
// Sample project data
const projects: ProjectProps[] = [
  {
    title: "React Native News Platform",
    description:
      "A modern e-commerce platform with a sleek UI, shopping cart functionality, and secure payment processing.",
    image: picTwo,
    tags: ["React-Native", "Node.js", "MongoDB"],
    liveUrl:
      "https://play.google.com/store/apps/details?id=com.highbro&hl=en_IN",
    repoUrl: "#",
    featured: true,
  },
  {
    title: "A Little Game",
    description:
      "A productivity app that helps users organize tasks with drag-and-drop functionality and real-time updates.",
    image: picOne,
    tags: ["HTML", "CSS", "Javascript"],
    liveUrl: "https://stately-pavlova-562c4e.netlify.app/",
    repoUrl: "https://github.com/harshlancer/Endless",
  },
  
  {
    title: "Data-Visualizer",
    description:
      "A personal portfolio website with smooth animations and responsive design to showcase projects.",
    image: picThree,
    tags: ["React", "Three.js", "GSAP"],
    liveUrl: "https://data-visualizer-delta.vercel.app/",
    repoUrl: "https://github.com/harshlancer/data-visualizer",
    featured: true,
  },
  {
    title: "Stock Market Simulator",
    description:
      "An analytics dashboard for social media platforms with data visualization and insights.",
    image: picFour,
    tags: ["React.js", "Recharts", "TailwindCSS", "Framer Motion", ],
    liveUrl: "https://stock-market-simulation-53yof8q6g-harshlancers-projects.vercel.app/",
    repoUrl: "https://github.com/harshlancer/Stock-Market-Simulation",
  },
];

const ProjectShowcase = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    const projectElements = document.querySelectorAll(".project-card");
    projectElements.forEach((el) => observer.observe(el));

    return () => {
      projectElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="bg-background py-20 md:py-28"
    >
      <div className="section-container">
        <div className="container-inner text-center space-y-4 mb-16">
          <span className="px-4 py-1 text-xs font-medium bg-primary/10 rounded-full">
            My Work
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of projects that showcase my skills and passion for
            creating intuitive and engaging digital experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`project-card opacity-0 ${
                project.featured ? "lg:col-span-2" : ""
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;
