import React, { useState } from "react";
import "../styles/hero.scss";

const Hero = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`hero ${darkMode ? "darkmode" : ""}`}>
      {/* <header className="header" id="header">
        <nav className="navbar container">
          <a href="#" className="brand">Brand</a>
          <div
            className={`burger ${menuActive ? "is-active" : ""}`}
            id="burger"
            onClick={toggleMenu}
          >
            <span className="burger-line"></span>
            <span className="burger-line"></span>
            <span className="burger-line"></span>
          </div>
          <div className={`menu ${menuActive ? "is-active" : ""}`} id="menu">
            <ul className="menu-inner">
              <li className="menu-item"><a href="#" className="menu-link">Home</a></li>
              <li className="menu-item"><a href="#" className="menu-link">Feature</a></li>
              <li className="menu-item"><a href="#" className="menu-link">Pricing</a></li>
              <li className="menu-item"><a href="#" className="menu-link">Support</a></li>
            </ul>
          </div>
          <button className="switch" id="switch" onClick={toggleDarkMode}>
            <i className={`switch-light bx bx-sun ${darkMode ? "hidden" : ""}`}></i>
            <i className={`switch-dark bx bx-moon ${darkMode ? "" : "hidden"}`}></i>
          </button>
        </nav>
      </header> */}

      <main className="main">
        <section className="section banner banner-section">
          <div className="container banner-column">
            <img
              className="banner-image"
              src="https://i.ibb.co/sVqYmS2/Illustration.png"
              alt="Illustration"
            />
            <div className="banner-inner">
              <h1 className="heading-xl">Connecting business leaders with top industry talent</h1>
              <p className="paragraph">
              From customer service to tech support, our tailored solutions streamline processes, reduce costs, and boost growth. Experience our boutique, consultative approach and see the difference.
              </p>
              {/* <button className="btn btn-darken btn-inline">
                Get Started<i className="bx bx-right-arrow-alt"></i>
              </button> */}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Hero;
