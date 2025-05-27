import React, { useState } from 'react';
import './portifolio.css';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Portfolio = () => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      image: 'https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg',
      title: 'Modern E-commerce Platform',
      description: 'Full-stack e-commerce solution with React and Node.js',
      github: 'https://github.com/yourusername/ecommerce',
      demo: 'https://ecommerce-demo.com',
      tech: ['React', 'Node.js', 'MongoDB']
    },
    {
      id: 2,
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg',
      title: 'AI-Powered Task Manager',
      description: 'Task management app with AI suggestions',
      github: 'https://github.com/yourusername/taskmanager',
      demo: 'https://taskmanager-demo.com',
      tech: ['React', 'Python', 'TensorFlow']
    },
    {
      id: 3,
      image: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg',
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for social media metrics',
      github: 'https://github.com/yourusername/dashboard',
      demo: 'https://dashboard-demo.com',
      tech: ['React', 'D3.js', 'Firebase']
    }
  ]);

  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const addProject = () => {
    const newProject = {
      id: projects.length + 1,
      image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg',
      title: 'New Project',
      description: 'Description of your new project',
      github: 'https://github.com/yourusername/newproject',
      demo: 'https://newproject-demo.com',
      tech: ['React', 'Node.js']
    };
    setProjects([...projects, newProject]);
  };

  return (
    <section id="portfolio" ref={ref}>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <motion.div 
        className="container portfolio__container"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {projects.map((project) => (
          <motion.article 
            key={project.id} 
            className="portfolio__item"
            variants={itemVariants}
          >
            <div className="portfolio__item-image">
              <img src={project.image} alt={project.title} />
            </div>
            <h3>{project.title}</h3>
            <p className="portfolio__item-description">{project.description}</p>
            <div className="portfolio__item-tech">
              {project.tech.map((tech, index) => (
                <span key={index} className="tech-tag">{tech}</span>
              ))}
            </div>
            <div className="portfolio__item-cta">
              <a href={project.github} className="btn" target="_blank" rel="noreferrer">Github</a>
              <a href={project.demo} className="btn btn-primary" target="_blank" rel="noreferrer">Live Demo</a>
            </div>
          </motion.article>
        ))}
      </motion.div>

      <motion.button 
        className="add-project-btn"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={addProject}
      >
        Add New Project
      </motion.button>
    </section>
  );
};

export default Portfolio;