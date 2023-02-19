import { useState } from 'react';
import CompleteApp from './components/Complete';
import Header from './components/Header';

const App = () => {
  const [active, setActive] = useState(false)

  const handleNav = () => {
    setActive((active) => !active);
  };

  return (
    <>
      <Header handleNav={handleNav} active={active} />
      <CompleteApp active={active} />
    </>
  );
};

export default App;
