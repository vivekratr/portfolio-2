import './App.css';
import { Routes, Route } from 'react-router-dom';
import React from 'react';

import Header from './components/Header/Header';
import Self from './pages/Self/Self';
import About from './pages/About/About';
import Work from './pages/Work/Work';
import Play from './pages/Play/Play';
// import Resume from './components/ResumeNew';
import Resume from './pages/Resume/Resume';

function App() {
  return (
    <div className="body">
      <Header />

      <Routes>
        <Route exact path="/" element={<Work />} />
        <Route exact path="/resume" element={<Resume />} />
        <Route exact path="/play" element={<Play />} />
        <Route exact path="/self" element={<Self />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="*" element={<Work />} />
      </Routes>
    </div>
  );
}

export default App;
