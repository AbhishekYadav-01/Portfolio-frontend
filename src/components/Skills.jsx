import React from 'react';
import { motion } from 'framer-motion';
import { Container } from 'react-bootstrap';

const Skills = ({ data }) => {
  if (!data || data.length === 0) return <div>No skills available</div>;

  const pick = (names) =>
    data.filter((s) => names.includes(s.name));

const groups = [
  {
    title: 'Programming Languages',
    names: ['C++','Python','C', 'JavaScript', 'SQL', 'Pine Script'],
  },
  {
    title: 'Computer Science Fundamentals',
    names: [
      'Data Structures',
      'Algorithms',
      'Operating Systems',
      'Database Systems',
      'Computer Architecture',
      'Computer Networks',
      'System Design'
    ],
  },


  {
    title: 'Web & Backend Development',
    names: [
      'React.js',
      'Django',
      'HTML',
      'CSS',
      'Celery',
      'Docker',
      'Container',
      'AWS',
      'Redis',
      'WebSocket',
      'asyncio',
      'API',
      'Cron Jobs',
    ],
  },
  {
    title: 'Data Science & Machine Learning',
    names: [
      'Machine Learning',
      'Deep Learning',
      'PyTorch',
      'Scikit-learn',
      'Pandas',
      'NumPy',
      'Matplotlib',
      'Seaborn',
      'LangChain',
      'NLP',
      'Computer Vision',
      'GAN',
      'LLM',
    ],
  },
  {
    title: 'Multi-Agent Systems',
    names: [
      'Agent Communication',
      'Distributed Decision-Making',
      'Agentic AI',
    ],
  },
  {
    title: 'Tools & Platforms',
    names: ['Matlab', 'Git', 'GitHub', 'Windows', 'Ubuntu', 'memcached', 'Jupyter Notebook'],
  },
];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="skills-section"
    >
      <Container>
        <h3 className="section-title mb-5">Technical Skills</h3>

        <div className="skills-container">
          {groups.map((group) => {
            const items = pick(group.names);
            if (!items.length) return null;

            return (
              <div key={group.title} style={{ width: '100%', marginBottom: '18px' }}>
<h3 className="skill-category" style={{ margin: '10px 0', color: '#fff', fontSize: '1.05rem', textAlign: 'center' }}>
                  {group.title}
                </h3>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                  {items.map((skill) => (
                    <motion.div
                      key={skill.id}
                      className="skill-chip"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <div
                        className="skill-rectangle"
                        style={{
                          background: 'rgba(221, 218, 226, 0.2)',
                          padding: '8px 14px',
                          borderRadius: '12px',
                          textAlign: 'center',
                          border: '2px solid white',
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          minWidth: 'auto',
                          height: 'auto',
                          whiteSpace: 'nowrap', // keep text in one line
                          boxSizing: 'border-box',
                        }}
                      >
                        {skill.name}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </motion.section>
  );
};

export default Skills;
