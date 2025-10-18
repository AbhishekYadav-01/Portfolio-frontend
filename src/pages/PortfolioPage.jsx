import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AboutMe from '../components/AboutMe';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Contact from '../components/Contact';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import Achievements from '../components/Achievements';


const fallbackData = {
  aboutMe: {
    name: "Abhishek Yadav",
    bio: "Full-stack developer with experience in React and Django. Portfolio content is available offline if backend is down.",
    contact: {
      email: "example@example.com",
      phone: "+91-XXXXXXXXXX",
      linkedin: ""
    }
  },
  projects: [], // Projects component contains its own hardcoded projects as well
  skills: [
    { id: 1, name: "C" },
    { id: 2, name: "C++" },
    { id: 3, name: "Python" },
    { id: 4, name: "JavaScript" },
    { id: 5, name: "React.js" },
    { id: 6, name: "Django" },
    { id: 7, name: "Git" },
    { id: 8, name: "SQL" },
    { id: 9, name: "Pandas" },
    { id: 10, name: "NumPy" },
    { id: 11, name: "Scikit-learn" },
    { id: 12, name: "PyTorch" },
    { id: 13, name: "Matlab" },
    { id: 14, name: "PineScript" },
    { id: 15, name: "HTML" },
    { id: 16, name: "CSS" },
    { id: 17, name: "Reactjs" },
    { id: 18, name: "GitHub" },
    { id: 19, name: "Google Colab" },
    { id: 20, name: "Windows" },
    { id: 21, name: "Ubuntu" },
    { id: 22, name: "Jupyter Notebook" },
    { id: 23, name: "Celery" },
    { id: 24, name: "AWS" },
    { id: 25, name: "Matplotlib" },
    { id: 26, name: "Seaborn" },
    { id: 27, name: "Sklearn" }
  ],
  experience: [
    {
      id: 1,
      company: "Softwired",
      position: "SDE Intern",
      start_date: "Dec 2024",
      end_date: "Current",
      description: `Architected and delivered 5+ end-to-end AI-powered full-stack web applications (Django, PL/SQL, React); deployed on AWS and automated local setup and testing via batch scripts — all are in active production use.
Developed real-time trading automation tools using WebSockets, broker APIs, Pine Script, and MQL.
Served as group leader on multiple projects; consistently delivered features on schedule both independently and within cross-functional teams.`,
      location: "Remote"
    },

    {
      id: 2,
      company: "IIT Jodhpur (under Prof. Dip Sankar Banerjee)",
      position: "High Performance Computing Research Intern",
      start_date: "Aug 2024",
      end_date: "Apr 2025",
      description: `Gained knowledge in high-performance dynamic graph processing through research paper study and analysis.
Designed and implemented scalable graph update algorithms and optimized memory-access patterns to improve throughput via parallelization and GPU acceleration.`
    },
    {
      id: 3,
      company: "Encryptix",
      position: "Machine Learning Intern",
      start_date: "May 2024",
      end_date: "Jun 2024",
      description: `Completed a 4-week virtual internship focused on developing skills in Machine Learning. 
Gained hands-on experience with data preprocessing, feature engineering, and model development.
Addressed real-world problems using machine learning techniques and delivered a final project demonstrating practical applications.`
    },
    {
      id: 4,
      company: "DojoStack AI (Germany)",
      position: "AI Intern",
      start_date: "Mar 2025",
      end_date: "Sep 2025",
      description: "Worked remotely as an AI Intern."
    },
  ],

  education: [
    {
      id: 1,
      institution: "Indian Institute of Technology, Jodhpur",
      degree: "B.Tech. (CSE + EE)",
      field_of_study: "Major in Computer Science and Electrical Engineering",
      start_date: "October 2022",
      end_date: ""
    },
    {
      id: 2,
      institution: "Lohia Inter College, Prayagraj",
      degree: "Class XI-XII",
      field_of_study: "Science",
      start_date: "July 2019",
      end_date: "May 2021"
    },
    {
      id: 3,
      institution: "Lohia Inter College, Prayagraj",
      degree: "Class IX-X",
      field_of_study: "Science",
      start_date: "July 2017",
      end_date: "May 2019"
    }
  ]
};


const PortfolioPage = ({ section }) => {
  const [data, setData] = useState(fallbackData);
  const [backendAvailable, setBackendAvailable] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responses = await Promise.all([
          axios.get(`${import.meta.env.VITE_API_BASE_URL}/about-me/`),
          axios.get(`${import.meta.env.VITE_API_BASE_URL}/projects/`),
          axios.get(`${import.meta.env.VITE_API_BASE_URL}/skills/`),
          axios.get(`${import.meta.env.VITE_API_BASE_URL}/experience/`),
          axios.get(`${import.meta.env.VITE_API_BASE_URL}/education/`)
        ]);
        
        console.log("Fetched Projects Data:", responses[1].data); // Log projects data
        
        setData({
          aboutMe: responses[0].data,
          projects: responses[1].data,
          skills: responses[2].data,
          experience: responses[3].data,
          education: responses[4].data
        });
        setBackendAvailable(true);
      } catch (error) {
        console.error("Error fetching data:", error);
        setData(fallbackData);
        setBackendAvailable(false);
      }
    };
  
    fetchData();
  }, []);

  const renderSection = () => {
    switch (section) {
      case 'about-me':
        return <AboutMe data={data.aboutMe} />;
      case 'projects':
        return <Projects data={data.projects} />;
      case 'skills':
        return <Skills data={data.skills} />;
      case 'experience':
        return <Experience data={data.experience} />;
      case 'education':
        return <Education data={data.education} />;
      case 'contact':
        return <Contact />;
      // Added Achievements case
      case 'achievements':
        return <Achievements />;
      default:
        return (
          <>
            <AboutMe data={data.aboutMe} />
            <Projects data={data.projects} />
            <Skills data={data.skills} />
            <Experience data={data.experience} />
            <Education data={data.education} />
            <Achievements />
            <Contact />
          </>
        );
    }
  };

  return (
    <div className="portfolio-container">
      <div className="stars"></div>

      <div 
        className="nav-ellipse"
        style={{ 
          position: 'fixed',
          top: '10px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center',
          flexWrap: 'nowrap',
          gap: '10px', 
          padding: '10px 10px', 
          background: 'rgba(255, 255, 255, 0.2)', // Transparent background
          backdropFilter: 'blur(250px)', // Add blur effect
          borderRadius: '500px',  // High borderRadius creates an ellipse
          zIndex: 1000,
          overflowX: 'auto' // Allow horizontal scrolling if content overflows
        }}
      >
        <Link 
          to="/" 
          data-icon="🏠"
          style={{ 
            color: 'white', 
            padding: '5px 8px', // updated padding
            borderRadius: '500px',
            textDecoration: 'none',
            whiteSpace: 'nowrap',
            border: '2px solid white'
          }}
        >
          Home
        </Link>
        <Link 
          to="/about-me" 
          data-icon="👤"
          style={{ 
            color: 'white', 
            padding: '5px 8px', // updated padding
            borderRadius: '500px',
            textDecoration: 'none',
            whiteSpace: 'nowrap',
            border: '2px solid white'
          }}
        >
          About
        </Link>
        <Link 
          to="/projects" 
          data-icon="💻"
          style={{ 
            color: 'white', 
            padding: '5px 8px',
            borderRadius: '500px',
            textDecoration: 'none',
            whiteSpace: 'nowrap',
            border: '2px solid white'
          }}
        >
          Projects
        </Link>
        <Link 
          to="/skills" 
          data-icon="🧠"
          style={{ 
            color: 'white', 
            padding: '5px 8px',
            borderRadius: '500px',
            textDecoration: 'none',
            whiteSpace: 'nowrap',
            border: '2px solid white'
          }}
        >
          Skills
        </Link>
        <Link 
          to="/experience" 
          data-icon="💼"
          style={{ 
            color: 'white', 
            padding: '5px 8px',
            borderRadius: '500px',
            textDecoration: 'none',
            whiteSpace: 'nowrap',
            border: '2px solid white'
          }}
        >
          Experiences
        </Link>
        <Link 
          to="/education" 
          data-icon="🎓"
          style={{ 
            color: 'white', 
            padding: '5px 8px',
            borderRadius: '500px',
            textDecoration: 'none',
            whiteSpace: 'nowrap',
            border: '2px solid white'
          }}
        >
          Education
        </Link>
        <Link 
          to="/achievements" 
          data-icon="🏆"
          style={{ 
            color: 'white', 
            padding: '5px 8px',
            borderRadius: '500px',
            textDecoration: 'none',
            whiteSpace: 'nowrap',
            border: '2px solid white'
          }}
        >
          Achievements
        </Link>
        <Link 
          to="/contact" 
          data-icon="📞"
          style={{ 
            color: 'white', 
            padding: '5px 8px',
            borderRadius: '500px',
            textDecoration: 'none',
            whiteSpace: 'nowrap',
            border: '2px solid white'
          }}
        >
          Contact
        </Link>
{backendAvailable && (
  <Link 
    to="/chat" 
    style={{ 
      color: 'white', 
      padding: '5px 8px',
      borderRadius: '500px',
      textDecoration: 'none',
      whiteSpace: 'nowrap',
      border: '2px solid white'
    }}
  >
    Chat/talk with My Profile
  </Link>
)}

      </div>

      {/* Render the selected section */}
      <Container className="mt-5 pt-4">
        {renderSection()}
      </Container>
    </div>
  );
};

export default PortfolioPage;