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
              Bachelor's Degree in Computer Science with a focus on software engineering
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
              Professional Java Full Stack Developer with hands-on experience in designing,
              developing, and deploying enterprise-level web applications. Proficient in both
              frontend and backend technologies with a strong understanding of the complete
              software development lifecycle.
            </p>
          </div>

          <div className="about-card">
            <div className="card-icon">
              <Target size={40} />
            </div>
            <h3>Career Goals</h3>
            <p>
              Aspiring to become a lead software architect, specializing in building scalable,
              high-performance applications. Passionate about mentoring junior developers and
              contributing to open-source projects that make a positive impact on the developer community.
            </p>
          </div>
        </div>

        <div className="about-description">
          <h2>Who I Am</h2>
          <p>
            As a dedicated Java Full Stack Developer, I bring a unique blend of technical expertise
            and creative problem-solving to every project. My journey in software development began
            with a fascination for how technology can transform ideas into reality.
          </p>
          <p>
            I specialize in building end-to-end web applications using Java and Spring Boot on the
            backend, paired with modern frontend frameworks like React. My approach focuses on writing
            clean, maintainable code while ensuring optimal performance and user experience.
          </p>
          <p>
            Beyond coding, I'm passionate about continuous learning, staying current with emerging
            technologies, and sharing knowledge with the developer community. I believe in the power
            of collaboration and always strive to deliver solutions that exceed expectations.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
