import '../styles/header.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll-v2';

const Header = (props) => {
  const { active, setActive } = props;
  const handleAnchorTags = () => {
    setActive(false);
    document.body.classList.remove('hidden');
  }

  const handleNav = () => {
    setActive((active) => !active);
    document.body.classList.toggle('hidden');
  };

  return (
    <header className="flex-space">
      <div className="logo">
        <Link to='/' className='mono'>Kamba</Link>
      </div>

      <nav className='desktop-nav'>
        <ul className="flex">
          <li><AnchorLink href="#about" className='mono scale' onClick={handleAnchorTags}>About me</AnchorLink></li>
          <li><AnchorLink href="#projects" className='mono scale' onClick={handleAnchorTags}>Projects</AnchorLink></li>
          <li><AnchorLink href="#skills" className='mono scale' onClick={handleAnchorTags}>Skills</AnchorLink></li>
          <li><AnchorLink href="#contact" className='mono scale' onClick={handleAnchorTags}>Contact me</AnchorLink></li>
        </ul>
      </nav>
      {!active && <button className='hamburger' onClick={handleNav}>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
        </svg>
      </button>}

      {active && <nav id='mobile-nav' className='flex-space'>
        <ul className="flex column">
          <li><a href="#about" className='mono' onClick={handleAnchorTags}>About me</a></li>
          <li><a href="#projects" className='mono' onClick={handleAnchorTags}>Projects</a></li>
          <li><a href="#skills" className='mono' onClick={handleAnchorTags}>Skills</a></li>
          <li><a href="#contact" className='mono' onClick={handleAnchorTags}>Contact me</a></li>
        </ul>
        <button onClick={handleNav}>
          <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
          </svg>
        </button>
      </nav>}
    </header>
  );
};

Header.propTypes = {
  active: PropTypes.bool.isRequired,
  setActive: PropTypes.func.isRequired,
};

export default Header;
