// Sidebar.js
import React from 'react';
import '../styles/sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <a href="https://www.linkedin.com/in/linkedin.com/in/oria-zadok-71730b240/" target="_blank" rel="noopener noreferrer">
        <img className='in' src={process.env.PUBLIC_URL + '/logos/In_logo.png'} alt="LinkedIn Logo" />
      </a>
      <a href="https://github.com/oriazadok" target="_blank" rel="noopener noreferrer">
        <img className='github' src={process.env.PUBLIC_URL + '/logos/github_logo.png'} alt="GitHub Logo" />
      </a>
      <a href="mailto:your-email@example.com">
        <img src={process.env.PUBLIC_URL + '/logos/mail_logo.png'} alt="Email Logo" />
      </a>
    </div>
  );
};

export default Sidebar;
