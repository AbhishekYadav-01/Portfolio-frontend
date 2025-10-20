import React from 'react';
import { motion } from 'framer-motion';
import { FiDownloadCloud, FiGithub, FiLinkedin, FiMail, FiPhone } from 'react-icons/fi';
import profileImage from '../assets/profile_photo_new.jpg';
const AboutMe = () => {
  const calculateExperience = (startDate) => {
    const start = new Date(startDate);
    const now = new Date();

    let years = now.getFullYear() - start.getFullYear();
    let months = now.getMonth() - start.getMonth();

    if (months < 0) {
      years--;
      months += 12;
    }

    return { years, months };
  };

  const startDate = "2024-10-20"; 
  const { years, months } = calculateExperience(startDate);

  const data = {
bio: `Passionate Software Engineer and Full Stack Developer with expertise in building scalable, AI-driven web applications and intelligent automation systems. 
Strong foundation in Computer Science, Artificial Intelligence, Machine Learning, Deep Learning, Data Structures, and Algorithms. 
Focused on solving complex problems, optimizing system performance, and delivering high-impact, production-ready solutions.`,
    experience: { years, months }, 
    resume: "https://drive.google.com/file/d/1pezogLWZGu-18lbZfOC5aKRGahwg6YwA/view?usp=sharing", 
    github: "https://github.com/AbhishekYadav-01", 
    linkedin: "https://www.linkedin.com/in/abhishek-yadav-9156a229b/", 
    email: "abhishekiti95@gmail.com", 
    phone: "+91 95556 73314" 
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="about-container"
    >
      <div className="profile-wrapper">

        <motion.div
          initial={{ x: -20 }}
          animate={{ x: 0 }}
          className="image-container"
        >
          <img 
            src={profileImage} 
            alt="Profile" 
            className="profile-image"
          />
          <div className="image-glow"></div>
        </motion.div>


        <motion.div
          drag
          dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}

          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="content-container glass-card"
        >
          <h1 className="title">Hi there, I’m Abhishek Yadav</h1>
          
          <div className="bio-section">
            <p className="bio-text">{data.bio}</p>

            <div className="highlight-section">
              <div className="highlight-card">
                <span className="highlight-text">Professional Experience</span>
                <span className="highlight-number">
                  {data.experience.years} years {data.experience.months} months
                </span>
              </div>
            </div>

          <div className="action-buttons">
            <motion.a
              whileHover={{ scale: 1.05 }}
              className="download-btn"
              href={data.resume}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiDownloadCloud className="cv-icon" />
              <span className="cv-text"> CV</span>
            </motion.a>
              
              <div className="social-links">
                <a href={data.github} target="_blank" rel="noreferrer">
                  <FiGithub className="social-icon" />
                </a>
                <a href={data.linkedin} target="_blank" rel="noreferrer">
                  <FiLinkedin className="social-icon" />
                </a>
                <a href={`mailto:${data.email}`}>
                  <FiMail className="social-icon" />
                </a>
                <a href={`tel:${data.phone}`}>
                  <FiPhone className="social-icon" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AboutMe;