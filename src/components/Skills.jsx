import '../styles/skills.css';
import html from '../assets/icons/html.svg';
import css from '../assets/icons/css.svg';

const SKills = () => {

  const skills = [
    {
      id: 1,
      skill: 'HTML',
      img: html
    },
    {
      id: 2,
      skill: 'CSS',
      img: css
    }
  ]

  return (
    <section id='skills' className='container'>
      <h2 className='title center-text'>My Skills</h2>

      <div className='skill-grid'>
        {skills.map((skill) => (
          <div className='skill-item'>
            <div className='flex'>
              <div className='icon-img'>
                <img src={skill.img} />
              </div>

              <h5 className='mono'>{skill.skill}</h5>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SKills;
