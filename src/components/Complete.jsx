import Contact from "./Contact";
import Footer from "./Footer";
import Headline from "./Headline";
import Projects from "./Projects";
import SKills from "./Skills";
import PropTypes from 'prop-types';

const CompleteApp = (props) => {
  const { active } = props;

  return (
    <main style={{
      height: active ? '85vh' : 'auto',
      overflowY: active ? 'hidden' : 'scroll'
    }}>
      <Headline />
      <Projects />
      <SKills />
      <Contact />
      <Footer />
    </main>
  );
};

CompleteApp.propTypes = {
  active: PropTypes.bool.isRequired,
};

export default CompleteApp;
