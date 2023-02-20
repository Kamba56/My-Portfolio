import { useState } from 'react';
import CompleteApp from './components/Complete';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';

const App = () => {
  const [active, setActive] = useState(false)

  return (
    <Router>
      <Header setActive={setActive} active={active} />
      <Routes>
        <Route path='/' element={<CompleteApp active={active} />} />
      </Routes>
    </Router>
  );
};

export default App;
