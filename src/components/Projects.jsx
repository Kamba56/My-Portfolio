import '../styles/projects.css';
import proj1 from '../assets/projects/proj1.png';
import proj2 from '../assets/projects/proj2.png';
import proj3 from '../assets/projects/proj3.png';
import proj4 from '../assets/projects/proj4.png';

const Projects = () => {
  const projects = [
    { 
      id: 1,
      title: 'GDG event landing page',
      desc: 'This is an e-vite site to goodgle developers group maiduguri events built with react.',
      image: proj1,
      source: 'https://github.com/Kamba56/GDG-Event',
      live: 'https://gdgmaiduguri.com/',
    },
    { 
      id: 2,
      title: 'Movie Hub',
      desc: 'A web application built with react that allows users view their favourite movies and add likes and comments.',
      image: proj2,
      source: 'https://github.com/Kamba56/MediaHub',
      live: 'https://kamba56.github.io/MediaHub/docs/',
    },
    { 
      id: 3,
      title: 'Math Magicians',
      desc: 'This is a calculator application built with react. It can perform basic math operations.',
      image: proj3,
      source: 'https://github.com/Kamba56/MagicMaths',
      live: 'https://mathmagicians-kamba.netlify.app/calculator',
    },
    { 
      id: 4,
      title: 'Crypto Today',
      desc: 'A web application that shows the current price of crypto currencies.',
      image: proj4,
      source: 'https://github.com/Kamba56/FX-Today',
      live: 'https://lively-kheer-cc474b.netlify.app/',
    },
  ];

  return (
    <section id='projects' className='container'>
      <h2 className='title center-text'>Projects</h2>

      <div className='project-grid container content'>
        {projects.map((project) => (
          <div className='grid-item flex column' key={project.id}>
            <div className='project-img scale'>
              <img src={project.image} />
            </div>
            <div className='project-details flex column'>
              <h4 className='center-text'>{project.title}</h4>
              <p className='center-text'>{project.desc}</p>
              <div className='project-btns flex-space'>
                <a href={project.source} className="btn mono scale" target='_blank'>Source code</a>
                <a href={project.live} className="btn btn2 mono scale" target='_blank'>Live demo</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
