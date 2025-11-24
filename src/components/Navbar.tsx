// import { Link, useLocation } from 'react-router-dom';
// import { Download, Menu, X } from 'lucide-react';
// import { useState } from 'react';

// function Navbar() {
//   const location = useLocation();
//   const [open, setOpen] = useState(false);

//   const isActive = (path: string) => location.pathname === path;

//   return (
//     <nav className="navbar">
//       <div className="nav-container">
//         <div className="nav-logo">Portfolio</div>

//         {/* Hamburger icon (mobile only) */}
//         <button className="hamburger" onClick={() => setOpen(!open)}>
//           {open ? <X size={28} /> : <Menu size={28} />}
//         </button>

//         {/* Overlay background */}
//         <div
//           className={`overlay ${open ? 'active' : ''}`}
//           onClick={() => setOpen(false)}
//         ></div>

//         {/* Nav menu */}
//         <ul className={`nav-menu ${open ? 'active' : ''}`}>
//           <li>
//             <Link to="/" className={isActive('/') ? 'active' : ''} onClick={() => setOpen(false)}>
//               Home
//             </Link>
//           </li>
//           <li>
//             <Link to="/about" className={isActive('/about') ? 'active' : ''} onClick={() => setOpen(false)}>
//               About
//             </Link>
//           </li>
//           <li>
//             <Link to="/services" className={isActive('/services') ? 'active' : ''} onClick={() => setOpen(false)}>
//               Services
//             </Link>
//           </li>
//           <li>
//             <Link to="/skills" className={isActive('/skills') ? 'active' : ''} onClick={() => setOpen(false)}>
//               Skills
//             </Link>
//           </li>
//           <li>
//             <Link to="/projects" className={isActive('/projects') ? 'active' : ''} onClick={() => setOpen(false)}>
//               Projects
//             </Link>
//           </li>
//           <li>
//             <Link to="/contact" className={isActive('/contact') ? 'active' : ''} onClick={() => setOpen(false)}>
//               Contact
//             </Link>
//           </li>

//           {/* Resume Download Button */}
//           <li>
//             <a href="/resume.pdf" download className="resume-btn" onClick={() => setOpen(false)}>
//               <Download size={18} /> Resume
//             </a>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;



import { Link, useLocation } from 'react-router-dom';
import { Download, Menu, X } from 'lucide-react';
import { useState } from 'react';

function Navbar() {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">Portfolio</div>

        {/* Hamburger icon (mobile only) */}
        <button className="hamburger" onClick={() => setOpen(!open)}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Overlay background */}
        <div
          className={`overlay ${open ? 'active' : ''}`}
          onClick={() => setOpen(false)}
        ></div>

        {/* Nav menu */}
        <ul className={`nav-menu ${open ? 'active' : ''}`}>
          <li>
            <Link to="/" className={isActive('/') ? 'active' : ''} onClick={() => setOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className={isActive('/about') ? 'active' : ''} onClick={() => setOpen(false)}>
              About
            </Link>
          </li>
          <li>
            <Link to="/services" className={isActive('/services') ? 'active' : ''} onClick={() => setOpen(false)}>
              Services
            </Link>
          </li>
          <li>
            <Link to="/skills" className={isActive('/skills') ? 'active' : ''} onClick={() => setOpen(false)}>
              Skills
            </Link>
          </li>
          <li>
            <Link to="/projects" className={isActive('/projects') ? 'active' : ''} onClick={() => setOpen(false)}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="/contact" className={isActive('/contact') ? 'active' : ''} onClick={() => setOpen(false)}>
              Contact
            </Link>
          </li>

          {/* Resume Link Button */}
          <li>
  <a
    href="https://pranavakash.github.io/My-resume/"
    target="_blank"
    rel="noopener noreferrer"
    className="resume-btn"
    onClick={() => setOpen(false)}
  >
    Resume
  </a>
</li>

        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

