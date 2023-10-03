import React from 'react';
import '../styles/footer.css'; // You can create a new CSS file for the footer styles

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <img src={process.env.PUBLIC_URL + '/logos/brand_logo.png'} alt="my Logo" />
            {/* <h1>Your Logo</h1>
            <p>Your Slogan or Tagline</p> */}
          </div>
          <div className="footer-contact">
            <h2>Contact Information:</h2>
            <p>Email: oriazadok@gmail.com</p>
          </div>
          <div className="footer-social">
            <h2>Follow Me</h2>
            <ul>
              <li><a href="https://github.com/your-github-username" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a></li>
              <li><a href="https://www.linkedin.com/in/your-linkedin-profile" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Oria Zadok. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
