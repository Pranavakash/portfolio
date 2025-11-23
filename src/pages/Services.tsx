import { useEffect } from 'react';
import { Code, Layers, Palette, Database } from 'lucide-react';

function Services() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-container services-page">
      <div className="content-wrapper fade-in">
        <h1 className="page-title">My Services</h1>
        <p>What I offer</p>
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">
              <Code size={48} />
            </div>
            <h3>Web Development</h3>
            <p>
              Full-stack web application development using Java, Spring Boot, React, and modern
              web technologies. Creating responsive, scalable, and performant solutions tailored
              to your business needs.
            </p>
          </div>
          <div className="service-card">
            <div className="service-icon">
              <Layers size={48} />
            </div>
            <h3>API Integration</h3>
            <p>
              RESTful API design and development, third-party API integration, and microservices
              architecture. Ensuring seamless communication between different systems and services
              for optimal functionality.
            </p>
          </div>
          <div className="service-card">
            <div className="service-icon">
              <Palette size={48} />
            </div>
            <h3>UI/UX Design</h3>
            <p>
              Creating intuitive and visually appealing user interfaces with React, HTML5, CSS3,
              and Bootstrap. Focus on user experience, accessibility, and responsive design principles
              to deliver exceptional digital experiences.
            </p>
          </div>
          <div className="service-card">
            <div className="service-icon">
              <Database size={48} />
            </div>
            <h3>Database Management</h3>
            <p>
              Database design, optimization, and management using MySQL, PostgreSQL, and MongoDB.
              Implementing efficient data models, writing optimized queries, and ensuring data
              integrity and security.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
