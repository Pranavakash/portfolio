import { useEffect } from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  liveLink: string;
  githubLink: string;
  image: string;
}

function Projects() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const projects: Project[] = [
    {
      id: 1,
      title: 'Employee Management System',
      description: 'Collaborative task management application with real-time updates, user authentication, and team collaboration features.',
      technologies: ['Java', 'Spring Boot', 'MySql', 'React', 'JavaScript'],
      liveLink: 'https://example.com',
      githubLink: 'https://github.com',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 2,
      title: 'E-Commerce Platform',
      description: 'E-commerce platform with product catalog, shopping cart, and payment integration. Built with React frontend.',
      technologies: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'React'],
      liveLink: 'https://example.com',
      githubLink: 'https://github.com',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    // {
    //   id: 3,
    //   title: 'Weather Dashboard',
    //   description: 'Real-time weather application with location-based forecasts, API integration, and responsive design. Shows current conditions and 7-day forecast.',
    //   technologies: ['React', 'JavaScript', 'Weather API', 'CSS3', 'Bootstrap'],
    //   liveLink: 'https://example.com',
    //   githubLink: 'https://github.com',
    //   image: 'https://images.pexels.com/photos/209728/pexels-photo-209728.jpeg?auto=compress&cs=tinysrgb&w=600'
    // },
    // {
    //   id: 4,
    //   title: 'Social Media Analytics',
    //   description: 'Analytics dashboard for social media metrics with data visualization, real-time updates, and performance insights.',
    //   technologies: ['Java', 'Spring Boot', 'React', 'PostgreSQL', 'Chart.js'],
    //   liveLink: 'https://example.com',
    //   githubLink: 'https://github.com',
    //   image: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=600'
    // },
    // {
    //   id: 5,
    //   title: 'Blog Content Management System',
    //   description: 'Full-featured CMS for managing blog content with rich text editor, comment system, and user authentication.',
    //   technologies: ['Java', 'Spring Boot', 'React', 'MySQL', 'JWT'],
    //   liveLink: 'https://example.com',
    //   githubLink: 'https://github.com',
    //   image: 'https://images.pexels.com/photos/3629547/pexels-photo-3629547.jpeg?auto=compress&cs=tinysrgb&w=600'
    // },
    // {
    //   id: 6,
    //   title: 'Expense Tracker',
    //   description: 'Personal finance management application with expense tracking, budget planning, and financial analytics.',
    //   technologies: ['React', 'Firebase', 'JavaScript', 'Chart.js', 'Bootstrap'],
    //   liveLink: 'https://example.com',
    //   githubLink: 'https://github.com',
    //   image: 'https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=600'
    // }
  ];

  return (
    <div className="page-container projects-page">
      <div className="content-wrapper fade-in">
        <h1 className="page-title">My Projects</h1>
        <p className="page-subtitle">Showcasing My Work</p>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image-wrapper">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
                <div className="project-overlay">
                  <div className="project-links">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link-btn"
                      title="View Live"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link-btn"
                      title="View Code"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>

              <div className="project-content">
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
