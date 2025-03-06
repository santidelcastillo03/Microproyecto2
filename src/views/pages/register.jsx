import React, { useState } from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import '../../assets/styles/register.css';

function Register() {
  const [role, setRole] = useState('');
  const [showModal, setShowModal] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState('');

  const handleRoleSelection = (selectedRole) => {
    setRole(selectedRole);
    setShowModal(false);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(''); // Clear error when user changes input
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // If role is estudiante, validate that email contains @correo.unimet.edu.ve
    if (role === 'estudiante' && !formData.email.includes('@correo.unimet.edu.ve')) {
      setError('El correo debe pertenecer a @correo.unimet.edu.ve para estudiantes.');
      return;
    }
    // Registration logic here
    console.log('Registrando usuario:', { role, ...formData });
  };

  return (
    <div className="register-page">
      <Header />
      <section className="register-section">
        <div className="register-container">
          <h2>Registro</h2>
          {role && <p>Registrarse como: <strong>{role}</strong></p>}
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Nombre Completo</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Tu nombre"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Correo Electrónico</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
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
                value={formData.password}
                onChange={handleChange}
                placeholder="********"
                required
              />
            </div>
            {error && <p className="error-message">{error}</p>}
            <button type="submit">Registrarse</button>
          </form>
        </div>
      </section>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Selecciona tu rol</h2>
            <p>¿Eres Guía o Estudiante?</p>
            <div className="modal-buttons">
              <button onClick={() => handleRoleSelection('guia')}>Guía</button>
              <button onClick={() => handleRoleSelection('estudiante')}>Estudiante</button>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}

export default Register;