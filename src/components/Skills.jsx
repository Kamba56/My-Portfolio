import '../styles/skills.css';
import html from '../assets/icons/html.svg';
import css from '../assets/icons/css.svg';
import js from '../assets/icons/javascript.svg';
import ruby from '../assets/icons/ruby.svg';
import rails from '../assets/icons/rails.svg';
import pgsql from '../assets/icons/pgsql.svg';
import git from '../assets/icons/git.svg';
import react from '../assets/icons/reactjs.svg';
import figma from '../assets/icons/figma.svg';
import redux from '../assets/icons/redux.svg';
import rspec from '../assets/icons/rspec.svg';
import jest from '../assets/icons/jest.png';

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
    },
    {
      id: 3,
      skill: 'JavaScript',
      img: js
    },
    {
      id: 4,
      skill: 'React',
      img: react
    },
    {
      id: 5,
      skill: 'Redux',
      img: redux
    },
    {
      id: 6,
      skill: 'Ruby',
      img: ruby
    },
    {
      id: 7,
      skill: 'Ruby on Rails',
      img: rails
    },
    {
      id: 8,
      skill: 'Postgres',
      img: pgsql
    },
    {
      id: 9,
      skill: 'Figma',
      img: figma
    },
    {
      id: 10,
      skill: 'Git',
      img: git
    },
    {
      id: 11,
      skill: 'Jest',
      img: jest
    },
    {
      id: 12,
      skill: 'Rspec',
      img: rspec
    }
  ]

  return (
    <section id='skills' className='container'>
      <h2 className='title center-text'>My Skills</h2>

      <div className='skill-grid content'>
        {skills.map((skill) => (
          <div className='skill-item flex scale' key={skill.id}>
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
