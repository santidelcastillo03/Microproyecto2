import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import '../../assets/styles/header.css';

function Header() {
  return (
    <header className="landing-header">
      <div className="landing-header-logo">
        <Link to="/">
          <img src={logo} alt="UNIMET AvilaGo Logo" />
        </Link>
      </div>
      <nav className="landing-nav">
        <ul>
          <li><a href="#">Rutas</a></li>
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
        <div className="user-icon">
          <i className="fa fa-user"></i>
        </div>
      </div>
    </header>
  );
}

export default Header;