import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import HomePage from './pages/HomePage';
import PortfolioPage from './pages/PortfolioPage';
import ChatPage from './pages/ChatPage';
import axios from 'axios';
axios.defaults.baseURL = 'https://portfolio-backend-v2-3kgf.onrender.com/api';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PortfolioPage />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/projects" element={<PortfolioPage section="projects" />} />
        <Route path="/about-me" element={<PortfolioPage section="about-me" />} />
        <Route path="/skills" element={<PortfolioPage section="skills" />} />
        <Route path="/experience" element={<PortfolioPage section="experience" />} />
        <Route path="/education" element={<PortfolioPage section="education" />} />
        <Route path="/achievements" element={<PortfolioPage section="achievements" />} />
        <Route path="/contact" element={<PortfolioPage section="contact" />} />
      </Routes>
    </Router>
  );
}

export default App;