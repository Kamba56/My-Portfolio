import '../styles/header.css';

const Header = () => (
  <header className="flex-space">
    <div className="logo">
      <a>Kamba</a>
    </div>

    <nav>
      <ul className="flex">
        <li><a href="#">About me</a></li>
        <li><a href="#">Projects</a></li>
        <li><a href="#">Skills</a></li>
        <li><a href="#">Contact me</a></li>
      </ul>
    </nav>
  </header>
);

export default Header;
