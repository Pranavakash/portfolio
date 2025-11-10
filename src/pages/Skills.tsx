import { useEffect } from 'react';

interface Skill {
  name: string;
  level: number;
  category: string;
}

function Skills() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const skills: Skill[] = [
    { name: 'Java', level: 90, category: 'Backend' },
    { name: 'Spring Boot', level: 85, category: 'Backend' },
    { name: 'React', level: 88, category: 'Frontend' },
    { name: 'JavaScript', level: 87, category: 'Frontend' },
    { name: 'HTML/CSS', level: 92, category: 'Frontend' },
    { name: 'Bootstrap', level: 85, category: 'Frontend' },
    { name: 'MySQL', level: 83, category: 'Database' },
    { name: 'PostgreSQL', level: 80, category: 'Database' },
    { name: 'Git', level: 88, category: 'Tools' },
    { name: 'RESTful APIs', level: 86, category: 'Backend' },
    { name: 'TypeScript', level: 82, category: 'Frontend' },
    { name: 'Node.js', level: 78, category: 'Backend' },
  ];

  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  return (
    <div className="page-container skills-page">
      <div className="content-wrapper fade-in">
        <h1 className="page-title">Technical Skills</h1>
        <p className="page-subtitle">My Expertise</p>

        <div className="skills-container">
          {Object.entries(groupedSkills).map(([category, categorySkills]) => (
            <div key={category} className="skill-category">
              <h2 className="category-title">{category}</h2>
              <div className="skills-list">
                {categorySkills.map((skill, index) => (
                  <div key={index} className="skill-item">
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className="skill-progress"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
