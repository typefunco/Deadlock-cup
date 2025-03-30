import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import CreateTeam from './pages/CreateTeam';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create-team" element={<CreateTeam />} />
      </Routes>
    </Router>
  );
}

export default App;
