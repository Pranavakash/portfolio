import { Link, useLocation } from 'react-router-dom';
import { Download } from 'lucide-react';
import { generateResumePDF } from '../utils/resumeGenerator';

function Navbar() {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">Portfolio</div>
        <ul className="nav-menu">
          <li>
            <Link to="/" className={isActive('/') ? 'active' : ''}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className={isActive('/about') ? 'active' : ''}>
              About
            </Link>
          </li>
          <li>
            <Link to="/services" className={isActive('/services') ? 'active' : ''}>
              Services
            </Link>
          </li>
          <li>
            <Link to="/skills" className={isActive('/skills') ? 'active' : ''}>
              Skills
            </Link>
          </li>
          <li>
            <Link to="/projects" className={isActive('/projects') ? 'active' : ''}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="/contact" className={isActive('/contact') ? 'active' : ''}>
              Contact
            </Link>
          </li>
        </ul>
        <button className="resume-btn" onClick={generateResumePDF}>
          <Download size={18} />
          Resume
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
