import React from "react";
import './About.css';

const About = () => {
  const timeline = [
    {
        year: "2025",
        content: "Final year student, currently working on impactful web and mobile projects, aiming to become a Software Engineer.",
    },
    {
        year: "2024",
        content: "Participated in hackathons and built projects like WWF Why Go Wild and Pervrte. Joined FASSET to help others in programming.",
      },
    {
      year: "2023",
      content: "Started studying ICT (Application Development) at Sol Plaatje University.",
    },
    
  ];

  const technicalSkills = [
    { name: "Java", percentage: "95%" },
    { name: "Python", percentage: "70%" },
    { name: "PHP", percentage: "65%" },
    { name: "JavaScript", percentage: "85%" },
    { name: "HTML", percentage: "90%" },
    { name: "CSS", percentage: "85%" },
    { name: "SQL", percentage: "95%" },
  ];

  const softSkills = [
    { name: "Communication", percentage: "95%" },
    { name: "Teamwork", percentage: "90%" },
    { name: "Problem Solving", percentage: "85%" },
    { name: "Adaptability", percentage: "95%" },
  ];

  return (
    <div className="about-container" id="about-me">
      <h2 className="section-title">About Me</h2>
      
      <div className="about-content">
        <div className="timeline-section">
          <h3 className="subsection-title">My Journey</h3>
          <div className="timeline">
            {timeline.map((item, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-dot" />
                <div className="timeline-content">
                  <h4>{item.year}</h4>
                  <p>{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="skills-section">
          <div className="skills-column">
            <h3 className="subsection-title">Technical Skills</h3>
            <table className="skills-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>%</th>
                </tr>
              </thead>
              <tbody>
                {technicalSkills.map((skill, index) => (
                  <tr key={`tech-${index}`}>
                    <td>{skill.name}</td>
                    <td>{skill.percentage}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <h3 className="subsection-title soft-skills-title">Soft Skills</h3>
            <table className="skills-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>%</th>
                </tr>
              </thead>
              <tbody>
                {softSkills.map((skill, index) => (
                  <tr key={`soft-${index}`}>
                    <td>{skill.name}</td>
                    <td>{skill.percentage}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;