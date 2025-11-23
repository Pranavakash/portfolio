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
        <div style="display: flex; justify-content: space-around; align-items: center; background-color: #0a0a1a; padding: 2rem; border-radius: 12px; box-shadow: 0 0 15px rgba(0, 102, 255, 0.4); max-width: 600px; margin: auto; font-family: 'Segoe UI', sans-serif; color: #fff;">
  <div style="text-align: center;">
    <div style="font-size: 2.5rem; font-weight: bold; color: #0066ff; text-shadow: 0 0 8px rgba(0, 102, 255, 0.8), 0 0 16px rgba(0, 102, 255, 0.6);">3+</div>
    <div style="font-size: 1rem; color: #bbb; margin-top: 0.5rem;">Professional Projects</div>
  </div>
  <div style="text-align: center;">
    <div style="font-size: 2.5rem; font-weight: bold; color: #0066ff; text-shadow: 0 0 8px rgba(0, 102, 255, 0.8), 0 0 16px rgba(0, 102, 255, 0.6);">2025</div>
    <div style="font-size: 1rem; color: #bbb; margin-top: 0.5rem;">Active Year</div>
  </div>
  <div style="text-align: center;">
    <div style="font-size: 2.5rem; font-weight: bold; color: #0066ff; text-shadow: 0 0 8px rgba(0, 102, 255, 0.8), 0 0 16px rgba(0, 102, 255, 0.6);">100%</div>
    <div style="font-size: 1rem; color: #bbb; margin-top: 0.5rem;">Project Success Rate</div>
  </div>
</div>
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
