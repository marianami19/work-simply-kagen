import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Footer() {
  return (
    <footer className="bg-light text-center text-lg-start">
      <div className="container p-4">
        <div className="row">
          <div className="col-lg-4 col-md-12 mb-4">
            <h5 className="text-uppercase">Work-Simply</h5>
            <p>
              Empowering business leaders with tailored solutions to streamline processes and drive growth.
            </p>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <h5 className="text-uppercase">Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/" className="text-dark">Home</a>
              </li>
              <li>
                <a href="/about" className="text-dark">About</a>
              </li>
              <li>
                <a href="/services" className="text-dark">Services</a>
              </li>
              <li>
                <a href="/contact" className="text-dark">Contact</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <h5 className="text-uppercase">Contact Us</h5>
            <p>Email: info@work-simply.com</p>
            <p>Phone: +1 (123) 456-7890</p>
            <div>
              <a href="#" className="me-4 text-dark">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="me-4 text-dark">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="me-4 text-dark">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center p-3 bg-light">
        © 2024 Work-Simply. All rights reserved.
      </div>
    </footer>
  );
}
