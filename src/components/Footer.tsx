import { Linkedin, Github, Mail } from 'lucide-react';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="social-icons">
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <Linkedin size={24} />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <Github size={24} />
          </a>
          <a href="mailto:pranavakash250@gmail.com" className="social-icon">
            <Mail size={24} />
          </a>
        </div>
        <p className="copyright">© Pranavakash. made with React.</p>
      </div>
    </footer>
  );
}

export default Footer;
