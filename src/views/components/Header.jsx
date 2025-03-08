import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import '../../assets/styles/header.css';
import { useAuth } from '../../context/AuthContext';

function Header() {
  const { currentUser, logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
      // No need for navigation as onAuthStateChanged in AuthContext will update UI
    } catch (error) {
      console.error('Failed to log out', error);
    }
  };

  return (
    <header className="landing-header">
      <div className="landing-header-logo">
        <Link to="/">
          <img src={logo} alt="UNIMET AvilaGo Logo" />
        </Link>
      </div>
      <nav className="landing-nav">
        <ul>
          <li><Link to="/routes">Rutas</Link></li>
          <li><a href="#">Foro</a></li>
          <li><a href="#">Galería</a></li>
          <li><a href="#">Reservas</a></li>
        </ul>
      </nav>
      <div className="landing-nav-right">
        <div className="search-icon">
          <i className="fa fa-search"></i>
        </div>
        <a href="#">Contact us</a>
        <a href="#">About us</a>
        <a href="#">FAQ</a>
        
        {/* Auth buttons */}
        <div className="auth-buttons">
          {currentUser ? (
            <button onClick={handleLogout} className="auth-btn logout-btn">
              Cerrar sesión
            </button>
          ) : (
            <>
              <Link to="/login" className="auth-btn login-btn">
                Iniciar sesión
              </Link>
              <Link to="/register" className="auth-btn register-btn">
                Registrarse
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;