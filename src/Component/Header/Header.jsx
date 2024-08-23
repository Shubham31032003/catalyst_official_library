import React, { useState,useEffect } from 'react';
import { Link,NavLink } from 'react-router-dom';
import './Header.css'
function Header() {
  const [fullscreen,Setfullscreen] = useState('Full Screen')
  useEffect(() => {
    const handleFullscreenChange = () => {
      if (!document.fullscreenElement) {
        Setfullscreen('Full Screen');
      }
    };
  
    document.addEventListener('fullscreenchange', handleFullscreenChange);
  
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);
  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.mozRequestFullScreen) { // Firefox
        document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullscreen) { // Chrome, Safari and Opera
        document.documentElement.webkitRequestFullscreen();
      } else if (document.documentElement.msRequestFullscreen) { // IE/Edge
        document.documentElement.msRequestFullscreen();
      }
      Setfullscreen('Exit Full Screen');
      
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) { // Firefox
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) { // Chrome, Safari and Opera
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) { // IE/Edge
        document.msExitFullscreen();
      }
      Setfullscreen('Full Screen');
    }
  };
  return (
    <header>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <div className="d-flex align-items-center brand_heading">
            <img src="/assets/logo.png" alt="logo" width="50" height="50" className="me-2" />
            <Link className="navbar-brand" to="/">Catalyst Library</Link>
          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link custom_nav-link" aria-current="page" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link custom_nav-link" to="/about">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link custom_nav-link" to="/contact">Contact</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link custom_nav-link" to="/quiz">Take A Quiz</NavLink>
              </li>
              
              
            </ul>
            <button className="btn btn-outline custom_button" onClick={toggleFullScreen}>
            <i className="fas fa-expand">{fullscreen}</i>
            </button>
          </div>
        </div>
      </nav>
    </header>
    
  );
}

export default Header;