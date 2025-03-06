import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './views/pages/landingPage';
import LogIn from './views/pages/logIn';
import Register from './views/pages/register';
import Rutas from './views/pages/rutas';  // renamed import

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<Register />} /> 
        <Route path="/login" element={<LogIn />} /> 
        <Route path="/routes" element={<Rutas />} />  {/* updated element */}
      </Routes>
    </Router>
  );
}

export default App;