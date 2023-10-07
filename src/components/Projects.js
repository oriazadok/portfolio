import React from 'react';
import '../styles/projects.css'; // Import your CSS styles

// Projects.js

const Project = ({ imageSrc, alt, description, repoLink }) => {
  return (
    <div className="project">
      <div className="project-content">
        <div className="project-image">
          <img src={imageSrc} alt={alt} />
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
      alt: 'Astronomic Dashboard',
      description: 'The Astronomic Dashboard project represents a remarkable initiative that harmoniously combines cutting-edge technologies, including Kafka, ElasticSearch, MongoDB, and web scraping, to unlock the potential of Astronomic Big Data. Through real-time alerts enabled by socket IO and dynamic visualizations using ejs, the dashboard empowers users to efficiently extract celestial insights. By harnessing cloud advancements and state-of-the-art tools, this project provides a gateway to explore and comprehend extensive astronomical datasets, empowering scientists and researchers to make transformative discoveries in the field of astronomy.',
      repoLink: 'https://github.com/oriazadok/big_data',
    },
    {
      id: 2,
      imageSrc: process.env.PUBLIC_URL + '/images/graph.png',
      alt: 'GUI for the praphs',
      description: 'This repository contains the implementation of directed and weighted graphs, along with various graph algorithms such as shortest path, TSP etc, designed and implemented as part of an Object-Oriented Programming (OOP) project. This comprehensive project offers a rich set of features and tools for working with graphs, making it a valuable resource for anyone interested in graph theory and algorithms.',
      repoLink: 'https://github.com/oriazadok/directed_weighted_graph',
    },
    {
      id: 3,
      imageSrc: process.env.PUBLIC_URL + '/images/chat.png',
      alt: 'UI chat',
      description: 'The Python Chat Application is a user-friendly and versatile chat system designed to facilitate seamless communication between users. Whether you want to engage in group discussions or have private one-on-one conversations, this chat application has got you covered. The project enables users to log in, send messages to everyone in a public chat room, or engage in private conversations with specific users.',
      repoLink: 'https://github.com/oriazadok/chat_python',
    },
    {
      id: 4,
      imageSrc: process.env.PUBLIC_URL + '/images/android.png',
      alt: 'android',
      description: "Android Malware Detection With NLP is an innovative project that harnesses the power of Natural Language Processing (NLP) to identify malicious Android applications. The project's core objective is to shed light on a critical vulnerability in the classifier's accuracy, revealing its susceptibility to manipulation. Through practical examples and rigorous testing, the project showcases an attack strategy that involves adding empty XML tags and benign app features to malicious apps, effectively reducing the classifier's accuracy. Notably, the project employs tools like Apktool for analyzing and modifying Android applications and DroidBot to rigorously test and verify that the attack doesn't compromise the functionality of targeted applications. ",
      repoLink: 'https://github.com/oriazadok/androidMalwareDetectionWithNLP/tree/master',
    },
    {
      id: 5,
      imageSrc: process.env.PUBLIC_URL + '/images/shell.jpeg',
      alt: 'shell',
      description: 'MyShell is a versatile Unix shell program written in C that simplifies command execution and script running. It offers a wide range of familiar bash commands, enabling users to navigate directories, manage processes, and retrieve exit statuses effortlessly. This lightweight shell also features powerful capabilities such as redirection, multiple pipes, and conditional command execution with if/else logic. Even the handling of Ctrl-C interruptions is elegantly managed, providing informative messages instead of abrupt exits. With built-in history navigation and customization options, MyShell empowers users to navigate the command line with ease and finesse.',
      repoLink: 'https://github.com/oriazadok/shell',
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
            alt={project.alt}
            description={project.description}
            repoLink={project.repoLink}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
