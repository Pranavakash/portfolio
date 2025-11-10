import { useEffect } from 'react';
import { Linkedin, Github } from 'lucide-react';
import TypingEffect from '../components/TypingEffect';

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-container home-page">
      <div className="home-content">
        <div className="text-section fade-in">
          <h3 className="intro-text">Hello, It's Me</h3>
          <h1 className="name-text">Your Name</h1>
          <h2 className="title-wrapper">
            And I'm a <TypingEffect texts={['Java Full Stack Developer', 'Frontend Developer', 'React Enthusiast', 'Backend Developer']} />
          </h2>
          <p className="bio-text">
            Passionate Full Stack Developer with expertise in building scalable web applications
            using Java, Spring Boot, React, and modern web technologies. I specialize in creating
            responsive user interfaces and robust backend systems that deliver exceptional user experiences.
          </p>
          <div className="social-buttons">
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="social-btn">
              <Linkedin size={24} />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-btn">
              <Github size={24} />
            </a>
          </div>
        </div>
        <div className="image-section fade-in-delayed">
          <div className="profile-image-wrapper">
            <div className="glow-circle"></div>
            <img
              src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt="Profile"
              className="profile-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
