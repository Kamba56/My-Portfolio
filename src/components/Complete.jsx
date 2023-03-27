import Contact from "./Contact";
import Footer from "./Footer";
import Headline from "./Headline";
import Projects from "./Projects";
import SKills from "./Skills";
import PropTypes from 'prop-types';

const CompleteApp = () => (
  <main style={{
    height: 'auto'
  }}>
    <Headline />
    <Projects />
    <SKills />
    <Contact />
    <Footer />
  </main>
);

CompleteApp.propTypes = {
  active: PropTypes.bool.isRequired,
};

export default CompleteApp;
