import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiLinkedin, FiInstagram, FiGithub } from 'react-icons/fi';

const Contact = () => {
  const contacts = [
    { icon: <FiMail size={24} />, href: 'mailto:abhishekiitj95@gmail.com', tooltip: 'Email' },
    { icon: <FiPhone size={24} />, href: 'tel:+919555673314', tooltip: 'Phone' },
    { icon: <FiLinkedin size={24} />, href: 'https://www.linkedin.com/in/abhishek-yadav-9156a229b/', tooltip: 'LinkedIn' },
    { icon: <FiInstagram size={24} />, href: 'https://www.instagram.com/abhishekyadav_prgrj', tooltip: 'Instagram' },
    { icon: <FiGithub size={24} />, href: 'https://github.com/AbhishekYadav-01', tooltip: 'GitHub' }
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="contact"
      style={{
        borderRadius: '20px',
        padding: '40px',
        boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
        color: 'white',
        maxWidth: '800px',
        margin: '80px auto',
        textAlign: 'center'
      }}
    >
      <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Contact Me</h2>
      <p style={{ fontSize: '1rem', marginBottom: '20px' }}>
I’m always open to connecting with people who share an interest in software engineering, AI, or building impactful digital products. 
Whether you have an opportunity, a project idea, or just want to talk tech, feel free to reach out I’d be glad to connect. 
You can contact me using the icons below.
      </p>
        <ul className="contact-list">
          {contacts.map((contact, index) => (
            <li key={index}>
              <motion.a
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  scale: 1.1,
                  color: 'blue',
                }}
                className="contact-link"
                title={contact.tooltip}
              >
                {contact.icon}
              </motion.a>
            </li>
          ))}
        </ul>
      <p style={{ fontSize: '1.2rem', marginTop: '20px' }}>
      </p>
    </motion.section>
  );
};

export default Contact;