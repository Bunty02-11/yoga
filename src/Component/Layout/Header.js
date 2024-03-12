import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [activePage, setActivePage] = useState(location.pathname);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const reloadPage = (page) => {
    navigate(page);
    window.scrollTo(0, 0);
    setActivePage(page);
    // Close mobile menu after navigation on mobile devices
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="site-header header-style-3">
      <div className="pbmit-header-overlay">
        <div className="pbmit-main-header-area">
          <div className="container">
            <div className="pbmit-header-content d-flex align-items-center justify-content-between">
              <div className="pbmit-logo-area">
                <div className="site-branding">
                  <h1 className="site-title">
                    <a href="index.html">
                      <img
                        className="logo-img"
                        src="images/logo-white.svg"
                        alt="Yoge"
                      />
                    </a>
                  </h1>
                </div>
              </div>
              <div className="site-navigation">
                <nav className={`main-menu navbar-expand-xl navbar-light ${isMobileMenuOpen ? 'show' : ''}`}>
                  <button className="navbar-toggler" type="button" onClick={toggleMobileMenu}>
                    <i className="pbmit-base-icon-menu-1" />
                  </button>
                  <div className={`pbmit-mobile-menu-bg ${isMobileMenuOpen ? 'open' : ''}`} onClick={toggleMobileMenu} />
                  <div className={`collapse navbar-collapse clearfix ${isMobileMenuOpen ? 'show' : ''}`} id="pbmit-menu">
                    <ul className="navigation clearfix">
                      <li className={`dropdown ${activePage === '/' ? 'active' : ''}`}>
                        <a onClick={() => reloadPage("/")}>Home</a>
                      </li>
                      <li className={`dropdown ${activePage === '/about' ? 'active' : ''}`}>
                        <a onClick={() => reloadPage("/about")}>About</a>
                      </li>
                      <li className={`dropdown ${activePage === '/service' ? 'active' : ''}`}>
                        <a onClick={() => reloadPage("/service")}>Services</a>
                      </li>
                      <li className={`dropdown ${activePage === '/blog' ? 'active' : ''}`}>
                        <a onClick={() => reloadPage("/blog")}>Blog</a>
                      </li>
                      <li className={` ${activePage === '/contact' ? 'active' : ''}`}>
                        <a onClick={() => reloadPage("/contact")}>Contact Us</a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
              <div className="pbmit-right-box d-flex align-items-center">
                <div className="pbmit-header-search-btn">
                  <a href="#" title="Search">
                    <i className="pbmit-base-icon-search-1" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
