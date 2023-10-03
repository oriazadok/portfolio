import './App.css';
import './styles/navbar.css';

import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar';
import Projects from './components/Projects';
import Skills from './components/Skills'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Sidebar />
      <header className="App-header">
        <div className="logo-container">
          <img src={process.env.PUBLIC_URL + '/logos/brand_logo.png'} alt="my Logo" className="logo" />
        </div>
        <Navbar />
       
        <h1>Hello there, I'm Oria</h1>
        {/* <div className="me"> */}
          <p>Computer Science Student, third year Highly motivated.</p>
          <p>passionate about software development, curious, self learning skills.</p>
          <p>Love to learn new things and improve my set of skills.</p>
          <p>I'm a passionate developer who loves to create and innovate.</p>
          <p>I enjoy building applications that solve real-world problems and make a positive impact.</p>
        {/* </div> */}
      </header>

      <Projects />
      <Skills />
      <Education />
      <Contact />

      <Footer />
    </div>
  );
}

export default App;
