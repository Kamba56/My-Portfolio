import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/header.css';

const Header = () => (
  <header className="flex-space">
    <div className="logo">
      <a>Kamba</a>
    </div>

    <nav className='desktop-nav'>
      <ul className="flex">
        <li><a href="#">About me</a></li>
        <li><a href="#">Projects</a></li>
        <li><a href="#">Skills</a></li>
        <li><a href="#">Contact me</a></li>
      </ul>
    </nav>

    <nav className='mobile-nav'>
      <a><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
</svg></a>
    </nav>
  </header>
);

export default Header;
