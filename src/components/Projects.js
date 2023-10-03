import '../styles/projects.css'; // Import your CSS styles


// Projects.js

const Project = ({ imageSrc, description, repoLink }) => {
  return (
    <div className="project">
      <div className="project-content">
        <div className="project-image">
          <img src={imageSrc} alt="Project" />
        </div>
        <div className="project-description">
          <p>{description}</p>
        </div>
      </div>
      <div className="project-button">
        <a href={repoLink} target="_blank" rel="noopener noreferrer">
          View Code
        </a>
      </div>
    </div>
  );
};


const Projects = () => {
  const projectsData = [
    {
      id: 1,
      imageSrc: process.env.PUBLIC_URL + '/images/dashboard.png',
      description: 'The Astronomic Dashboard project represents a remarkable initiative that harmoniously combines cutting-edge technologies, including Kafka, ElasticSearch, MongoDB, and web scraping, to unlock the potential of Astronomic Big Data. Through real-time alerts enabled by socket IO and dynamic visualizations using ejs, the dashboard empowers users to efficiently extract celestial insights. By harnessing cloud advancements and state-of-the-art tools, this project provides a gateway to explore and comprehend extensive astronomical datasets, empowering scientists and researchers to make transformative discoveries in the field of astronomy.',
      repoLink: 'https://github.com/oriazadok/big_data',
    },
    {
      id: 2,
      imageSrc: process.env.PUBLIC_URL + '/images/dashboard.png',
      description: 'The Astronomic Dashboard project represents a remarkable initiative that harmoniously combines cutting-edge technologies, including Kafka, ElasticSearch, MongoDB, and web scraping, to unlock the potential of Astronomic Big Data. Through real-time alerts enabled by socket IO and dynamic visualizations using ejs, the dashboard empowers users to efficiently extract celestial insights. By harnessing cloud advancements and state-of-the-art tools, this project provides a gateway to explore and comprehend extensive astronomical datasets, empowering scientists and researchers to make transformative discoveries in the field of astronomy.',
      repoLink: 'https://github.com/your-username/project1',
    },
    {
      id: 3,
      imageSrc: process.env.PUBLIC_URL + '/images/dashboard.png',
      description: 'The Astronomic Dashboard project represents a remarkable initiative that harmoniously combines cutting-edge technologies, including Kafka, ElasticSearch, MongoDB, and web scraping, to unlock the potential of Astronomic Big Data. Through real-time alerts enabled by socket IO and dynamic visualizations using ejs, the dashboard empowers users to efficiently extract celestial insights. By harnessing cloud advancements and state-of-the-art tools, this project provides a gateway to explore and comprehend extensive astronomical datasets, empowering scientists and researchers to make transformative discoveries in the field of astronomy.',
      repoLink: 'https://github.com/your-username/project1',
    },
    {
      id: 4,
      imageSrc: process.env.PUBLIC_URL + '/images/dashboard.png',
      description: 'The Astronomic Dashboard project represents a remarkable initiative that harmoniously combines cutting-edge technologies, including Kafka, ElasticSearch, MongoDB, and web scraping, to unlock the potential of Astronomic Big Data. Through real-time alerts enabled by socket IO and dynamic visualizations using ejs, the dashboard empowers users to efficiently extract celestial insights. By harnessing cloud advancements and state-of-the-art tools, this project provides a gateway to explore and comprehend extensive astronomical datasets, empowering scientists and researchers to make transformative discoveries in the field of astronomy.',
      repoLink: 'https://github.com/your-username/project1',
    },
  ];

  return (
    <div id='projects' className="projects-container">
      <h2>My Projects</h2>
      <div className="projects">
        {projectsData.map((project) => (
          <Project
            key={project.id}
            imageSrc={project.imageSrc}
            description={project.description}
            repoLink={project.repoLink}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;