import '../styles/headline.css';
import wave from '../assets/wave.png';
import comp from '../assets/comp.svg';
import Socials from './Socials';

const Headline = () => (
  <section className='container' id='about'>
    <div id='contain' className='flex column-row'>
      <div className='column flex about'>
        <div className='flex'>
          <div className='wave'>
            <img src={wave} />
          </div>
          <h4>Hello, I am</h4>
        </div>
        <h1 className='name mono'>Toma</h1>
        <p className='green-text'>&lt;&gt; A full stack developer &lt;/&gt;</p>
        <p className='about-me center-text'>Passionate about coding and eager to learn, I am a full-stack developer with 2 years of experience who loves to build great software. Armed with a solid foundation in programming concepts and expertise in responsive design, Javascript, React, Ruby, and Ruby on Rails, I am always striving to write clean, efficient, and maintainable code and am capable of ramping up quickly and efficiently.</p>

        <Socials />
        <a href='./src/assets/resume.pdf' target='_blank' className='center-text btn2 btn scale'>Get My Resume</a>
      </div>

      <div>
        <img src={comp} />
      </div>
    </div>
  </section>
);

export default Headline;