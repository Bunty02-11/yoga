import React from 'react'
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  const reloadHomePage = () => {
    navigate("/");
    window.scrollTo(0,0);
    window.location.reload();
  }
  const reloadAboutPage = () => {
    navigate("/about");
    window.scrollTo(0,0);
    window.location.reload();
  }
  
return (
    <div>
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
                    <nav className="main-menu navbar-expand-xl navbar-light">
                      <div className="navbar-header">
                        {/* Toggle Button */}
                        <button className="navbar-toggler" type="button">
                          <i className="pbmit-base-icon-menu-1" />
                        </button>
                      </div>
                      <div className="pbmit-mobile-menu-bg" />
                      <div
                        className="collapse navbar-collapse clearfix show"
                        id="pbmit-menu"
                      >
                        <div className="pbmit-menu-wrap">
                          <span className="closepanel">
                            <svg
                              className="qodef-svg--close qodef-m"
                              xmlns="http://www.w3.org/2000/svg"
                              width="20.163"
                              height="20.163"
                              viewBox="0 0 26.163 26.163"
                            >
                              <rect
                                width={36}
                                height={1}
                                transform="translate(0.707) rotate(45)"
                              ></rect>
                              <rect
                                width={36}
                                height={1}
                                transform="translate(0 25.456) rotate(-45)"
                              />
                            </svg>
                          </span>
                          <ul className="navigation clearfix">
                            <li className="dropdown active">
                              <a onClick={reloadHomePage}>Home</a>
                            </li>
                            <li className="dropdown">
                              <a onClick={reloadAboutPage}>About</a>
                            </li>
                            <li className="dropdown">
                              <a href="#">Services</a>
                            </li>
                            <li>
                              <a href="contact-us.html">Contact Us</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </nav>
                  </div>
                  <div className="pbmit-right-box d-flex align-items-center">
                    <div className="pbmit-header-search-btn">
                      <a href="#" title="Search">
                        <i className="pbmit-base-icon-search-1" />
                      </a>
                    </div>
                    {/* <div className="pbmit-button-box-second">
                      <a className="pbmit-btn" href="contact-us.html">
                        <span className="pbmit-btn-content-wrapper">
                          <span className="pbmit-button-icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="22.76"
                              height="22.76"
                              viewBox="0 0 22.76 22.76"
                            >
                              <title>black-arrow</title>
                              <path
                                d="M22.34,1A14.67,14.67,0,0,1,12,5.3,14.6,14.6,0,0,1,6.08,4.06,14.68,14.68,0,0,1,1.59,1"
                                transform="translate(-0.29 -0.29)"
                                fill="none"
                                stroke="#000"
                                strokeWidth={2}
                              />
                              <path
                                d="M22.34,1a14.67,14.67,0,0,0,0,20.75"
                                transform="translate(-0.29 -0.29)"
                                fill="none"
                                stroke="#000"
                                strokeWidth={2}
                              />
                              <path
                                d="M22.34,1,1,22.34"
                                transform="translate(-0.29 -0.29)"
                                fill="none"
                                stroke="#000"
                                strokeWidth={2}
                              />
                            </svg>
                          </span>
                           <span className="pbmit-button-text">
                            Make An Appointment
                          </span> 
                        </span>
                      </a>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
         
        </header>
    </div>
  )
}

export default Header
