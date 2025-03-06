import React from 'react';
import '../../assets/styles/footer.css';

function Footer() {
  return (
    <footer className="landing-footer">
      <div className="footer-content">
        <div className="footer-links">
          <a href="#">Contact us</a>
          <a href="#">FAQ</a>
          <a href="#">About us</a>
        </div>

        <div className="footer-developed">
          <p className="developed-label">Developed by:</p>
          <div className="footer-developers">
            <div className="developer-column">
              <p>Nombre 1</p>
              <p>Nombre 2</p>
              <p>Nombre 3</p>
            </div>
            <div className="developer-column">
              <p>Nombre 4</p>
              <p>Nombre 5</p>
              <p>Nombre 6</p>
            </div>
          </div>
        </div>

        <div className="footer-feedback">
          <input type="text" placeholder="Feedback" />
          <button className="feedback-button">
            <i className="fa fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;