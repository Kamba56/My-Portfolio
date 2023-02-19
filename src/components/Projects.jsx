import '../styles/projects.css';

const Projects = () => {
  const projects = [
    { 
      id: 1,
      title: 'GDG event landing page',
      desc: 'loremkamdoemofmocamem aomowa admo oamoe oamcid  oamfijdcmooamc onmainc oanfciodn oamoind omaodc odun omnad onjud onjiadn iwmai',
      image: 'imc',
      source: 'micmoe',
      live: 'imcd',
    }
  ];

  return (
    <section id='projects' className='container'>
      <h2 className='title center-text'>Projects</h2>

      <div className='project-grid container content'>
        {projects.map((project) => (
          <div className='grid-item flex column' key={project.id}>
            <div className='project-img'>
              <img src={project.image} />
            </div>
            <div className='project-details flex column'>
              <h4 className='center-text'>{project.title}</h4>
              <p className='center-text'>{project.desc}</p>
              <div className='project-btns flex-space'>
                <a href={project.source} className="btn mono" target='_blank'>Source code</a>
                <a href={project.live} className="btn btn2 mono" target='_blank'>Live demo</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
