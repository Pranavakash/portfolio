import { useEffect } from 'react';
import { GraduationCap, Briefcase, Target } from 'lucide-react';

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-container about-page">
      <div className="content-wrapper fade-in">
        <h1 className="page-title">About Me</h1>
        <div className="about-grid">
          <div className="about-card">
            <div className="card-icon">
              <GraduationCap size={40} />
            </div>
            <h3>Education</h3>
            <p>
              Bachelor's Degree in Electronics and Communication with a focus on software engineering
              and full stack development. Continuously learning and staying updated with
              the latest technologies and industry best practices.
            </p>
          </div>

          <div className="about-card">
            <div className="card-icon">
              <Briefcase size={40} />
            </div>
            <h3>Experience</h3>
            <p>
              Currently working as a <b>Full Stack Developer Intern at Infronex (June 2025 – October 2025)</b>, where I am gaining hands-on experience in building and deploying real-world web applications, collaborating with senior developers in Agile workflows. This internship is helping me strengthen my expertise in modern frameworks and adapt to professional development environments.
            </p>
          </div>

          <div className="about-card">
            <div className="card-icon">
              <Target size={40} />
            </div>
            <h3>Career Goals</h3>
            <p>
             I am an aspiring software developer eager to grow into a lead architect role in the future. I enjoy learning how to build scalable, high‑performance applications. I am also interested in mentoring peers as I gain experience and contributing to open‑source projects that positively impact the developer community.
            </p>
          </div>
        </div>

        <div className="about-description">
          <h2>Who I Am</h2>
          <p>
            As a passionate Java Full Stack Developer, I am eager to apply my technical skills and creative problem‑solving to real‑world projects. My journey in software development started with a curiosity about how technology can turn ideas into reality.
          </p>
          <p>
            I am learning to build end‑to‑end web applications using Java and Spring Boot for the backend, along with modern frontend frameworks like React. I focus on writing clean and maintainable code while aiming to deliver a smooth user experience. As a fresher, I am excited to apply these skills to real‑world projects and continue growing as a developer.
          </p>
          <p>
           Beyond coding, I am passionate about continuous learning and staying updated with emerging technologies. I enjoy sharing knowledge with the developer community and believe in the power of collaboration. As I begin my career, I strive to contribute solutions that not only meet requirements but also create a positive impact.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
