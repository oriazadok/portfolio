import '../styles/edu.css'

const Education = () => {
  return (
    <section id="education" className="education">
      <div className="container">
        <h2 className="text-white main-font">Education</h2>
        <div className="education-details">
          <div className="education-item">
            <h3>B.Sc. COMPUTER SCIENCE AND MATHEMATICS</h3>
            <p>Ariel University, 2020 - expected 2024</p>
            <ul className="vertical">
              <li>Deep understanding of programming fundamentals including Design Patterns, OOP, Data Structures, Testing, Debuging and Computer Architecture.</li>
              <li>Skilled in theory of numerical and programming algorithms, analyzing complexity and efficiency in Java, Python, C, and C++.</li>
              <li>Proficient in Networking and Socket programming, operating systems such Linux/Windows, and databases such SQL, MongoDB.</li>
              {/* <li>Familiar with Agile and Scrum methodologies for mobile app development and design.</li> */}
              {/* <li>Experience with Machine Learning and Deep Learning algorithms and frameworks.</li> */}
              <li>Developed expertise in managing large-scale data sets through Big Data coursework, using databases and cloud technologies and services.</li>
              <li>Experienced with attacks on android devices and manipulate android apps to pass classifier.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
