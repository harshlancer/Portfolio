import React, { useState, useEffect } from "react";
import {
  CodeIcon,
  MonitorIcon,
  WandIcon,
  SmileIcon,
  RocketIcon,
  BookIcon,
  BrainIcon,
  UsersIcon,
  Smartphone 
} from "lucide-react";

interface SkillProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

const SkillCard: React.FC<SkillProps> = ({
  icon,
  title,
  description,
  color,
}) => {
  return (
    <div
      className={`p-6 border border-border rounded-xl bg-card transition-all duration-300 hover:shadow-lg hover:-translate-y-2 group overflow-hidden relative`}
    >
      <div
        className={`absolute -right-6 -top-6 w-12 h-12 rounded-full opacity-10 group-hover:scale-[8] transition-all duration-500 ${color}`}
      ></div>
      <div
        className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 z-10 relative ${color} bg-opacity-20 text-primary`}
      >
        {icon}
      </div>
      <h3 className="text-xl font-medium mb-2 relative z-10">{title}</h3>
      <p className="text-muted-foreground relative z-10">{description}</p>
    </div>
  );
};

const About = () => {
  const [activeTab, setActiveTab] = useState("story");
  const [animateCounter, setAnimateCounter] = useState(false);
  const [counts, setCounts] = useState({ years: 0, projects: 0, clients: 0 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setAnimateCounter(true);
        }
      },
      { threshold: 0.5 }
    );

    const counterSection = document.getElementById("counter-section");
    if (counterSection) observer.observe(counterSection);

    return () => {
      if (counterSection) observer.unobserve(counterSection);
    };
  }, []);

  useEffect(() => {
    if (animateCounter) {
      const interval = setInterval(() => {
        setCounts((prev) => {
          const newYears = prev.years >= 3 ? 3 : prev.years + 1;
          const newProjects = prev.projects >= 25 ? 25 : prev.projects + 5;
          const newClients = prev.clients >= 12 ? 12 : prev.clients + 3;

          if (newYears === 3 && newProjects === 25 && newClients === 12) {
            clearInterval(interval);
          }

          return {
            years: newYears,
            projects: newProjects,
            clients: newClients,
          };
        });
      }, 150);

      return () => clearInterval(interval);
    }
  }, [animateCounter]);

  const skills: SkillProps[] = [
    {
      icon: <CodeIcon size={24} />,
      title: "Web Development",
      description:
        "Building responsive and performant web applications using modern frameworks and tools.",
      color: "bg-blue-500",
    },
    {
      icon: <MonitorIcon size={24} />,
      title: "UI/UX Design",
      description:
        "Creating intuitive user interfaces with a focus on user experience and accessibility.",
      color: "bg-purple-500",
    },
    {
      icon: <Smartphone  size={24} />,
      title: "Android Development",
      description:
        "Developing Android Apps with buttery smooth ui and rich user experience.",
      color: "bg-amber-500",
    },
    {
      icon: <WandIcon size={24} />,
      title: "Creative Problem Solving",
      description:
        "Finding elegant solutions to complex problems through logical thinking and creativity.",
      color: "bg-gray-500",
    },
    {
      icon: <SmileIcon size={24} />,
      title: "User-Centered Approach",
      description:
        "Developing with the end-user in mind, ensuring products that meet real needs.",
      color: "bg-green-500",
    },
    {
      icon: <RocketIcon size={24} />,
      title: "Performance Optimization",
      description:
        "Enhancing application speed and efficiency through code optimization techniques.",
      color: "bg-red-500",
    },
    {
      icon: <BookIcon size={24} />,
      title: "Continuous Learning",
      description:
        "Constantly exploring new technologies and methodologies to improve skill set.",
      color: "bg-emerald-500",
    },
    {
      icon: <BrainIcon size={24} />,
      title: "AI Integration",
      description:
        "Incorporating AI solutions to enhance application functionality and user experience.",
      color: "bg-indigo-500",
    },
    
  ];

  const tabs = [
    { id: "story", label: "My Story" },
    { id: "approach", label: "My Approach" },
    { id: "vision", label: "My Vision" },
  ];

  const tabContent = {
    story: (
      <div className="space-y-4">
        <p className="text-muted-foreground text-lg">
          I'm a 23-year-old software developer with a B.Tech degree, actively
          seeking exciting software development opportunities. I'm deeply
          passionate about technology, with a particular interest in building
          Android applications and dynamic websites.
        </p>
        <p className="text-muted-foreground">
          My journey began during college where I discovered my love for coding
          through hackathons and personal projects. Since then, I've dedicated
          myself to mastering various programming languages and frameworks while
          building solutions that make a difference.
        </p>
      </div>
    ),
    approach: (
      <div className="space-y-4">
        <p className="text-muted-foreground text-lg">
          I believe in writing clean, maintainable code that stands the test of
          time. My development process always starts with understanding the core
          problem and designing solutions that prioritize both functionality and
          user experience.
        </p>
        <p className="text-muted-foreground">
          I approach challenges methodically, breaking complex problems into
          manageable components. This allows me to create scalable systems that
          can evolve alongside changing requirements and technologies.
        </p>
      </div>
    ),
    vision: (
      <div className="space-y-4">
        <p className="text-muted-foreground text-lg">
          I envision creating technology that seamlessly integrates into
          people's lives, making everyday tasks simpler and more efficient. I'm
          particularly interested in the intersection of mobile applications,
          web platforms, and emerging technologies.
        </p>
        <p className="text-muted-foreground">
          My goal is to continuously push the boundaries of what's possible,
          collaborating with forward-thinking teams to build the next generation
          of digital products that positively impact users worldwide.
        </p>
      </div>
    ),
  };

  return (
    <section
      id="about"
      className="bg-gradient-to-b from-secondary to-secondary/50 py-20 md:py-28"
    >
      <div className="section-container">
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <div className="inline-block px-4 py-1 text-xs font-medium bg-primary/10 rounded-full mb-4">
            About Me
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold leading-tight mb-6">
            Passionate about creating impactful digital experiences
          </h2>

          <div className="bg-card p-1 rounded-full inline-flex mb-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  activeTab === tab.id
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-primary/10"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="transition-all duration-300">
            {tabContent[activeTab as keyof typeof tabContent]}
          </div>
        </div>

        <div
          id="counter-section"
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20"
        >
          <div className="bg-card p-8 rounded-xl text-center">
            <div className="text-4xl font-bold text-primary mb-2">
              {counts.years}+
            </div>
            <div className="text-muted-foreground">Years Experience</div>
          </div>
          <div className="bg-card p-8 rounded-xl text-center">
            <div className="text-4xl font-bold text-primary mb-2">
              {counts.projects}+
            </div>
            <div className="text-muted-foreground">Projects Completed</div>
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-center mb-10">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
              My Skills & Expertise
            </span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <SkillCard key={index} {...skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
