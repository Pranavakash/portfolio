// import { Link, useLocation } from 'react-router-dom';
// import { Download } from 'lucide-react';
// import { generateResumePDF } from '../utils/resumeGenerator';

// function Navbar() {
//   const location = useLocation();

//   const isActive = (path: string) => {
//     return location.pathname === path;
//   };

//   return (
//     <nav className="navbar">
//       <div className="nav-container">
//         <div className="nav-logo">Portfolio</div>
//         <ul className="nav-menu">
//           <li>
//             <Link to="/" className={isActive('/') ? 'active' : ''}>
//               Home
//             </Link>
//           </li>
//           <li>
//             <Link to="/about" className={isActive('/about') ? 'active' : ''}>
//               About
//             </Link>
//           </li>
//           <li>
//             <Link to="/services" className={isActive('/services') ? 'active' : ''}>
//               Services
//             </Link>
//           </li>
//           <li>
//             <Link to="/skills" className={isActive('/skills') ? 'active' : ''}>
//               Skills
//             </Link>
//           </li>
//           <li>
//             <Link to="/projects" className={isActive('/projects') ? 'active' : ''}>
//               Projects
//             </Link>
//           </li>
//           <li>
//             <Link to="/contact" className={isActive('/contact') ? 'active' : ''}>
//               Contact
//             </Link>
//           </li>
//         </ul>
//         <button className="resume-btn" onClick={generateResumePDF}>
//           <Download size={18} />
//           Resume
//         </button>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;




import { Link, useLocation } from 'react-router-dom';
import { Download } from 'lucide-react';

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
        {/* Resume Download Button */}
        <a href="/portfolio/Pranavakash D Fullstack Developer (1).pdf" download className="resume-btn">
          <Download size={18} />
          Resume
        </a>
      </div>
    </nav>
  );
}

export default Navbar;




// import { Link, useLocation } from 'react-router-dom';
// import { Download } from 'lucide-react';
// import { useState } from 'react';

// function Navbar() {
//   const location = useLocation();
//   const [isOpen, setIsOpen] = useState(false); // mobile menu
//   const [dropdownOpen, setDropdownOpen] = useState(false); // mobile dropdown

//   const isActive = (path: string) => location.pathname === path;

//   const toggleMenu = () => setIsOpen(!isOpen);
//   const closeMenu = () => setIsOpen(false);

//   return (
//     <nav className="navbar">
//       <div className="nav-container">
//         <div className="nav-logo">Portfolio</div>

//         {/* Hamburger icon */}
//         <button className="hamburger" onClick={toggleMenu}>
//           {isOpen ? '✖' : '☰'}
//         </button>

//         {/* Navigation menu */}
//         <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
//           <li>
//             <Link to="/" className={isActive('/') ? 'active' : ''} onClick={closeMenu}>
//               Home
//             </Link>
//           </li>
//           <li>
//             <Link to="/about" className={isActive('/about') ? 'active' : ''} onClick={closeMenu}>
//               About
//             </Link>
//           </li>

//           {/* Dropdown */}
//           <li className="dropdown">
//             <button
//               className="dropdown-toggle"
//               onClick={() => setDropdownOpen(!dropdownOpen)}
//             >
//               Services ▾
//             </button>
//             <ul className={`dropdown-menu ${dropdownOpen ? 'show' : ''}`}>
//               <li>
//                 <Link to="/services/web" onClick={closeMenu}>Web Development</Link>
//               </li>
//               <li>
//                 <Link to="/services/mobile" onClick={closeMenu}>Mobile Apps</Link>
//               </li>
//               <li>
//                 <Link to="/services/uiux" onClick={closeMenu}>UI/UX Design</Link>
//               </li>
//             </ul>
//           </li>

//           <li>
//             <Link to="/skills" className={isActive('/skills') ? 'active' : ''} onClick={closeMenu}>
//               Skills
//             </Link>
//           </li>
//           <li>
//             <Link to="/projects" className={isActive('/projects') ? 'active' : ''} onClick={closeMenu}>
//               Projects
//             </Link>
//           </li>
//           <li>
//             <Link to="/contact" className={isActive('/contact') ? 'active' : ''} onClick={closeMenu}>
//               Contact
//             </Link>
//           </li>
//         </ul>

//         {/* Resume Download Button */}
//         <a
//           href="./Pranavakash D Fullstack Developer (1).pdf"
//           download
//           className="resume-btn"
//         >
//           <Download size={18} />
//           Resume
//         </a>
//       </div>

//       {/* Overlay */}
//       {isOpen && <div className="overlay" onClick={closeMenu}></div>}
//     </nav>
//   );
// }

// export default Navbar;






// import { Link, useLocation } from 'react-router-dom';
// import { Download } from 'lucide-react';
// import { useState } from 'react';

// function Navbar() {
//   const location = useLocation();
//   const [isOpen, setIsOpen] = useState(false); // mobile menu
//   const [dropdownOpen, setDropdownOpen] = useState(false); // dropdown

//   const isActive = (path: string) => location.pathname === path;

//   const toggleMenu = () => setIsOpen(!isOpen);
//   const closeMenu = () => setIsOpen(false);

//   return (
//     <nav className="navbar">
//       <div className="nav-container">
//         <div className="nav-logo">Portfolio</div>

//         {/* Hamburger icon */}
//         <button className="hamburger" onClick={toggleMenu}>
//           {isOpen ? '✖' : '☰'}
//         </button>

//         {/* Navigation menu */}
//         <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
//           <li>
//             <Link to="/" className={isActive('/') ? 'active' : ''} onClick={closeMenu}>
//               Home
//             </Link>
//           </li>
//           <li>
//             <Link to="/about" className={isActive('/about') ? 'active' : ''} onClick={closeMenu}>
//               About
//             </Link>
//           </li>

//           {/* Dropdown example */}
//           <li className="dropdown">
//             <button
//               className="dropdown-toggle"
//               onClick={() => setDropdownOpen(!dropdownOpen)}
//             >
//               Services ▾
//             </button>
//             {dropdownOpen && (
//               <ul className="dropdown-menu">
//                 <li>
//                   <Link to="/services/web" onClick={closeMenu}>Web Development</Link>
//                 </li>
//                 <li>
//                   <Link to="/services/mobile" onClick={closeMenu}>Mobile Apps</Link>
//                 </li>
//                 <li>
//                   <Link to="/services/uiux" onClick={closeMenu}>UI/UX Design</Link>
//                 </li>
//               </ul>
//             )}
//           </li>

//           <li>
//             <Link to="/skills" className={isActive('/skills') ? 'active' : ''} onClick={closeMenu}>
//               Skills
//             </Link>
//           </li>
//           <li>
//             <Link to="/projects" className={isActive('/projects') ? 'active' : ''} onClick={closeMenu}>
//               Projects
//             </Link>
//           </li>
//           <li>
//             <Link to="/contact" className={isActive('/contact') ? 'active' : ''} onClick={closeMenu}>
//               Contact
//             </Link>
//           </li>
//         </ul>

//         {/* Resume Download Button */}
//         <a
//           href="./Pranavakash D Fullstack Developer (1).pdf"
//           download
//           className="resume-btn"
//         >
//           <Download size={18} />
//           Resume
//         </a>
//       </div>

//       {/* Overlay */}
//       {isOpen && <div className="overlay" onClick={closeMenu}></div>}
//     </nav>
//   );
// }

// export default Navbar;
