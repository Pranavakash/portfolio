import { useEffect } from 'react';
import { Linkedin, Github } from 'lucide-react';
import TypingEffect from '../components/TypingEffect';
import profileImg from './WhatsApp Image 2025-11-15 at 14.58.30.jpeg'; // <-- Import the image

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-container home-page">
      <div className="home-content">
        <div className="text-section fade-in">
          <h3 className="intro-text">Hello, It's Me</h3>
          <h1 className="name-text">Pranavakash</h1>
          <h2 className="title-wrapper">
            And I'm a <TypingEffect texts={['Java Full Stack Developer', 'Frontend Developer', 'React Enthusiast', 'Backend Developer']} />
          </h2>
          <p className="bio-text">
            Enthusiastic Full Stack Developer with hands-on experience in building web applications using Java, Spring Boot, React, and modern web technologies. Skilled at creating responsive user interfaces and robust backend systems.
          </p>
          <div className="social-buttons">
            <a href="https://www.linkedin.com/in/pranavakash-d?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="social-btn">
              <Linkedin size={24} />
            </a>
            <a href="https://github.com/Pranavakash" target="_blank" rel="noopener noreferrer" className="social-btn">
              <Github size={24} />
            </a>
          </div>
        </div>
        <div className="image-section fade-in-delayed">
          <div className="profile-image-wrapper">
            <div className="glow-circle"></div>
            <img
              src={profileImg}
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

