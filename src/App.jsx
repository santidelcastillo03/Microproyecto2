import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './views/pages/landingPage';
import LogIn from './views/pages/logIn'; // Import the LogIn page
import Register from './views/pages/register'; // Import the Register page

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<Register />} /> 
        <Route path="/login" element={<LogIn />} /> 
      </Routes>
    </Router>
  );
}

export default App;