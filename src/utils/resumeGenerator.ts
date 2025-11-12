export const generateResumePDF = () => {
  const resumeContent = `
YOUR NAME
Java Full Stack Developer | Software Engineer
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

CONTACT INFORMATION
Email: your.email@example.com
Phone: +1 (123) 456-7890
Location: Your City, Your Country
LinkedIn: linkedin.com/in/yourprofile
GitHub: github.com/yourprofile

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PROFESSIONAL SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Experienced Full Stack Developer with expertise in Java, Spring Boot, and React.
Proven track record of developing scalable web applications and delivering robust
backend solutions. Strong problem-solving skills with a passion for clean code.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TECHNICAL SKILLS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Backend:       Java, Spring Boot, Spring Data JPA, REST APIs, Microservices
Frontend:      React, JavaScript, HTML5, CSS3, Bootstrap, Responsive Design
Databases:     MySQL, PostgreSQL, MongoDB
Tools:         Git, Docker, Maven, JIRA, IntelliJ IDEA
Other:         JWT Authentication, RESTful API Design, MVC Architecture

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PROFESSIONAL EXPERIENCE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Senior Java Full Stack Developer
ABC Tech Solutions | Jan 2022 - Present
• Developed and maintained multiple Spring Boot microservices handling 100K+ daily transactions
• Designed and implemented React-based frontend reducing page load time by 40%
• Led API integration with third-party services improving system efficiency
• Mentored junior developers on best practices and design patterns

Java Developer
XYZ Software Company | Jun 2020 - Dec 2021
• Built RESTful APIs using Spring Boot and Spring Data JPA for internal applications
• Implemented MySQL database optimization improving query performance by 35%
• Collaborated with frontend team to deliver seamless user experiences
• Participated in code reviews and maintained code quality standards

Junior Software Developer
Tech Startup Inc | Jan 2019 - May 2020
• Developed web applications using Java and Spring Framework
• Created responsive UI components with HTML5 and CSS3
• Assisted in database design and optimization
• Participated in agile development methodology

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
EDUCATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Bachelor of Science in Computer Science
University Name | Graduation: 2018
Relevant Coursework: OOP, Database Systems, Web Development, Data Structures

CERTIFICATIONS
• Oracle Certified Associate Java Programmer (OCAJP)
• AWS Certified Cloud Practitioner

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
KEY PROJECTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

E-Commerce Platform (2023)
Java, Spring Boot, React, MySQL
• Full-stack platform with product catalog and payment integration
• JWT authentication and authorization
• 99.5% system uptime with load balancing

Task Management Application (2022)
React, Node.js, MongoDB, Socket.io
• Collaborative system with real-time updates
• User roles and permissions management
• AWS deployment with CI/CD pipeline

Weather Dashboard (2021)
React, JavaScript, Weather API, Bootstrap
• Real-time weather with location-based forecasts
• Third-party API integration with caching
• Responsive design for all devices

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ACHIEVEMENTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✓ Successfully delivered 15+ production applications
✓ Reduced application response time by 45% through optimization
✓ Mentored 5+ junior developers
✓ Active contributor to open-source projects
✓ Speaker at tech meetups and conferences

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
LANGUAGES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
English (Fluent) | Spanish (Intermediate)
  `;

  const element = document.createElement('a');
  const file = new Blob([resumeContent], { type: 'text/plain' });
  element.href = URL.createObjectURL(file);
  element.download = 'Your_Name_Resume.pdf';
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
  URL.revokeObjectURL(element.href);
};
