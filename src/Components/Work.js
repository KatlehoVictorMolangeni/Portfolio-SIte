import React from "react";
import './Work.css';
import { motion } from "framer-motion";

// Import your images
import one from "./homePage.png";
import two from "./kasi.png";
import three from "./unico.png";

const projects = [
  {
    title: "AssessMate",
    image: one,
    github: "https://github.com/yourgithub/wwf-why-go-wild",
    description: "AssessMate is a student-focused academic assistant designed to simplify task management, reduce burnout, and boost motivation. It helps learners stay on top of deadlines with smart reminders, motivational quotes, and quick access to tutor support—all in one easy-to-use platform."
  },
  {
    title: "Kasi My Kasi",
    image: two,
    github: "https://github.com/yourgithub/pervrte",
    description: "Kasi My Kasi is a community-driven platform that helps residents easily locate essential services like security, housing, healthcare, and food support within their township (kasi). By using real-time location and interactive maps, Kasi My Kasi connects people to the nearest service providers, empowering local communities through accessibility, safety, and support."
  },
  {
    title: "Unico-Apply",
    image: three,
    github: "https://github.com/yourgithub/pervrte",
    description: "UniCo-Apply is an application designed to simplify the higher education application process for South African Matric students. It allows users to submit their personal details and documents, track application progress, and receive real-time updates — all in one place. With UniCo-Apply, students get a stress-free, guided experience to apply to universities and colleges with confidence"
  },
];

const skills = [
  "Responsive Web Design",
  "HTML5",
  "Rest API",
  "CSS",
  "Django Framework",
  "React.Js",
  "MongoDB",
  "PHP",
  "MySQL",
  "UX Design",
];

export default function Portfolio() {
  return (
    <div className="portfolio-container" id="work">
      <div className="portfolio-header">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="portfolio-title"
        >
          My Projects
        </motion.h1>
        <p className="portfolio-subtitle">
          From Web Components and UX design to various frameworks, check out my latest web projects.
        </p>
        
        <div className="skills-container">
          {skills.map((skill, index) => (
            <motion.span
              key={index}
              whileHover={{ scale: 1.05 }}
              className="skill-tag"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>
      
      
      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="project-card"
            whileHover={{ scale: 1.02 }}
          >
            <div className="project-image-container">
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
              
              <div className="project-overlay">
                <div className="project-info-container">
                  <div className="project-info">
                    <h3 className="project-title">{project.title}</h3>
                    <div className="project-description-container">
                      <p className="project-description">{project.description}</p>
                    </div>
                  </div>
                </div>
                
                <div className="github-button-container">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="github-button"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View on GitHub
                    <svg className="github-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}