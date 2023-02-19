import '../styles/header.css';
import PropTypes from 'prop-types';
import AnchorLink from 'react-anchor-link-smooth-scroll-v2';

const Header = (props) => {
  const { active, handleNav } = props;

  return (
    <header className="flex-space">
      <div className="logo">
        <a className='mono'>Kamba</a>
      </div>

      <nav className='desktop-nav'>
        <ul className="flex">
          <li><AnchorLink href="#about" className='mono'>About me</AnchorLink></li>
          <li><AnchorLink href="#projects" className='mono'>Projects</AnchorLink></li>
          <li><AnchorLink href="#skills" className='mono'>Skills</AnchorLink></li>
          <li><AnchorLink href="#contact" className='mono'>Contact me</AnchorLink></li>
        </ul>
      </nav>
      {!active && <button className='hamburger' onClick={handleNav}>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
        </svg>
      </button>}

      {active && <nav id='mobile-nav' className='flex-space'>
        <ul className="flex column">
          <li><AnchorLink href="#about" className='mono'>About me</AnchorLink></li>
          <li><AnchorLink href="#projects" className='mono'>Projects</AnchorLink></li>
          <li><AnchorLink href="#skills" className='mono'>Skills</AnchorLink></li>
          <li><AnchorLink href="#contact" className='mono'>Contact me</AnchorLink></li>
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
  handleNav: PropTypes.func.isRequired,
};

export default Header;
