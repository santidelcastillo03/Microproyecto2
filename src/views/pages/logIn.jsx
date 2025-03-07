import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import '../../assets/styles/logIn.css';
import { login } from "./Auth";
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../../services/firebaseConfig.js';

function ForgotPasswordModal({ onClose }) {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorModal, setErrorModal] = useState('');

  const handleSubmitModal = async (e) => {
    e.preventDefault();
    try {
      await sendPasswordResetEmail(auth, email);
      setMessage('Se ha enviado un correo para restablecer tu contraseña.');
      setErrorModal('');
    } catch (error) {
      console.error(error);
      setErrorModal('Error al enviar el correo. Intenta de nuevo.');
      setMessage('');
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Recuperar Contraseña</h2>
        <p>Ingresa tu correo electrónico para restablecer tu contraseña.</p>
        <form onSubmit={handleSubmitModal}>
          <input
            type="email"
            placeholder="ejemplo@mail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          {errorModal && <p className="error-message">{errorModal}</p>}
          {message && <p className="success-message">{message}</p>}
          <button type="submit">Enviar</button>
        </form>
        <button onClick={onClose} className="close-button">Cerrar</button>
      </div>
    </div>
  );
}

function LogIn() {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [showForgotModal, setShowForgotModal] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await login(credentials.email, credentials.password);
      console.log('Logged in user:', userCredential.user);
      setError('');
      navigate('/');
    } catch (err) {
      console.error('Error during login:', err);
      setError("Correo o contrasena invalida, verifica los datos e intente de nuevo.");
    }
  };

  return (
    <div className="login-page">
      <Header />
      <section className="login-section">
        <div className="login-container">
          <h2>Iniciar Sesión</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Correo Electrónico</label>
              <input
                type="email"
                id="email"
                name="email"
                value={credentials.email}
                onChange={handleChange}
                placeholder="ejemplo@mail.com"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Contraseña</label>
              <input
                type="password"
                id="password"
                name="password"
                value={credentials.password}
                onChange={handleChange}
                placeholder="********"
                required
              />
            </div>
            {error && <p className="error-message">{error}</p>}
            <button type="submit">Acceder</button>
            <p className="link-text" style={{ marginTop: '1rem' }}>
              <Link to="/register" className="full-link">
                ¿No tienes una cuenta? Regístrate aquí.
              </Link>
            </p>
          </form>
          <p className="link-text" style={{ marginTop: '1rem', textAlign: 'center' }}>
            <span
              onClick={() => setShowForgotModal(true)}
              style={{ color: '#000', textDecoration: 'underline', cursor: 'pointer' }}
            >
              ¿Olvidaste tu contraseña?
            </span>
          </p>
        </div>
      </section>
      {showForgotModal && <ForgotPasswordModal onClose={() => setShowForgotModal(false)} />}
      <Footer />
    </div>
  );
}

export default LogIn;