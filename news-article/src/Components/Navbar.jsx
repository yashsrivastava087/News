import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = ({ setoption }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  return (
    <nav className="navbar navbar-expand-lg bg-primary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#"><span className='badge bg-black'>NEWSX</span></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" onClick={() => setoption('general')}>Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={() => setoption("business")}>Business</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={() => setoption("entertainment")}>Entertainment</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Others
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" onClick={() => setoption("science")}>Science</a></li>
                <li><a className="dropdown-item" onClick={() => setoption("sports")}>Sports</a></li>
                <li><a className="dropdown-item" onClick={() => setoption("technology")}>Technology</a></li>
              </ul>
            </li>
          </ul>
          <button className={`btn btn-outline-light ${darkMode ? 'dark-mode-icon' : ''}`} onClick={toggleDarkMode}>
            {darkMode ? <i className="fas fa-sun"></i> : <i className="fas fa-moon"></i>}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
