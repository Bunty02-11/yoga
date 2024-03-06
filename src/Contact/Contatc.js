import React from 'react'
import Header from '../Component/Layout/Header'
import Footer from '../Component/Layout/Footer'

function Contatc() {
  return (
    <div>
      <>
  <div className="page-wrapper">
    {/* Header Main Area */}
    <Header/>
    {/* Header Main Area End Here */}
    {/* Title Bar */}
    <div className="pbmit-title-bar-wrapper">
      <div className="container">
        <div className="pbmit-title-bar-content">
          <div className="pbmit-title-bar-content-inner">
            <div className="pbmit-tbar">
              <div className="pbmit-tbar-inner container">
                <h1 className="pbmit-tbar-title"> Contact Us</h1>
              </div>
            </div>
            <div className="pbmit-breadcrumb">
              <div className="pbmit-breadcrumb-inner">
                <span>
                  <a title="" href="#" className="home">
                    <span>Yoge</span>
                  </a>
                </span>
                <span className="sep">
                  <i className="pbmit-base-icon-angle-double-right" />
                </span>
                <span>
                  <span className="post-root post post-post current-item">
                    {" "}
                    Contact Us
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Title Bar End*/}
    {/* Contact Us Content */}
    <div className="page-content">
      {/* Ihbox */}
      <section className="section-xl ihbox_section">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-xl-4">
              <div className="pbmit-ihbox-style-9">
                <div className="pbmit-ihbox-headingicon d-sm-flex align-items-center">
                  <div className="pbmit-ihbox-icon">
                    <div className="pbmit-ihbox-icon-wrapper">
                      <div className="pbmit-icon-wrapper pbmit-icon-type-icon">
                        <i className="pbmit-yoge-icon pbmit-yoge-icon-phone-call" />
                      </div>
                    </div>
                  </div>
                  <div className="pbmit-ihbox-contents">
                    <h2 className="pbmit-element-title">24/7 Contact us</h2>
                    <div className="pbmit-heading-desc">
                      Phone : (+55) 654 - 545 - 5418
                      <br /> Mobile : (+01) 654 - 545 - 1235
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-4">
              <div className="pbmit-ihbox-style-9">
                <div className="pbmit-ihbox-headingicon d-sm-flex align-items-center">
                  <div className="pbmit-ihbox-icon">
                    <div className="pbmit-ihbox-icon-wrapper">
                      <div className="pbmit-icon-wrapper pbmit-icon-type-icon">
                        <i className="pbmit-yoge-icon pbmit-yoge-icon-email" />
                      </div>
                    </div>
                  </div>
                  <div className="pbmit-ihbox-contents">
                    <h2 className="pbmit-element-title">24/7 Mail us</h2>
                    <div className="pbmit-heading-desc">
                      <a
                        href="https://yoge-demo.pbminfotech.com/cdn-cgi/l/email-protection"
                        className="__cf_email__"
                        data-cfemail="711f1e5c0314011d083101131c18055f121e1c"
                      >
                        [email&nbsp;protected]
                      </a>{" "}
                      <br />{" "}
                      <a
                        href="https://yoge-demo.pbminfotech.com/cdn-cgi/l/email-protection"
                        className="__cf_email__"
                        data-cfemail="f19f9edc8394819d88b181939c9885df929e9c"
                      >
                        [email&nbsp;protected]
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-4">
              <div className="pbmit-ihbox-style-9">
                <div className="pbmit-ihbox-headingicon d-sm-flex align-items-center">
                  <div className="pbmit-ihbox-icon">
                    <div className="pbmit-ihbox-icon-wrapper">
                      <div className="pbmit-icon-wrapper pbmit-icon-type-icon">
                        <i className="pbmit-yoge-icon pbmit-yoge-icon-location" />
                      </div>
                    </div>
                  </div>
                  <div className="pbmit-ihbox-contents">
                    <h2 className="pbmit-element-title">Our Address</h2>
                    <div className="pbmit-heading-desc">
                      4821 Ride Top, Anch St, Alaska <br /> 997998, USA main
                      city.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Ihbox End */}
      {/* Contact Form */}
      <section className="section-lgb">
        <div className="container">
          <div className="pbmit-heading-subheading animation-style2">
            <h4 className="pbmit-subtitle">Contact us</h4>
            <h2 className="pbmit-title">
              Contact &amp; hire us for your fitness!
            </h2>
            <div className="mt-4">
              There are many variations of passages of Lorem Ipsum available,
              but the in some form, or randomised words which don't look even.
            </div>
          </div>
          <div className="row g-0">
            <div className="col-md-8 contact-us-left_col">
              <div className="contact-form_main">
                <h3 className="pbmit-title mb-3">Send a message</h3>
                <form
                  className="contact-form"
                  method="post"
                  id="contact-form"
                  action="https://yoge-demo.pbminfotech.com/html-demo/send.php"
                >
                  <div className="row">
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Your Name *"
                        name="name"
                        required=""
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Your Email *"
                        name="email"
                        required=""
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="tel"
                        className="form-control"
                        placeholder="Your Phone *"
                        name="phone"
                        required=""
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Subject"
                        name="subject"
                        required=""
                      />
                    </div>
                    <div className="col-md-12">
                      <textarea
                        name="message"
                        cols={40}
                        rows={10}
                        className="form-control"
                        placeholder="Message"
                        required=""
                        defaultValue={""}
                      />
                    </div>
                    <div className="col-md-12">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" />
                        <label className="form-check-label">
                          Save my name, email, and website in this browser for
                          the next time I comment.
                        </label>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <button className="pbmit-btn pbmit-btn-global">
                        <i className="form-btn-loader fa fa-circle-o-notch fa-spin fa-fw margin-bottom d-none" />
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
                          <span className="pbmit-button-text">Submit Now</span>
                        </span>
                      </button>
                    </div>
                    <div className="col-md-12 col-lg-12 message-status" />
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-4 contact-us-right_col">
              <div className="contact-us-right-box">
                <div className="contact-us-right_img">
                  <div className="pbmit-animation-style4">
                    <img src="images/contact-us-img.png" alt="" />
                  </div>
                </div>
                <div className="ihbox-style_11">
                  <div className="pbmit-ihbox-style-11">
                    <div className="pbmit-ihbox-headingicon">
                      <div className="pbmit-ihbox-contents">
                        <h2 className="pbmit-element-title">
                          Relax body &amp; mind for visit our yoga session!!
                        </h2>
                        <h4 className="pbmit-element-heading">
                          Opening days :
                        </h4>
                        <div className="pbmit-heading-desc">
                          mon- fri : 07:00am to 06:00pm <br />
                          sat - sun : Closed
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pbmit-contact-share-btn_box">
                  <div className="pbmit-contact-share-btn">
                    <div className="pbmit-share-icon-wrapper">
                      <span className="pbmit-share-icon">
                        <i className="pbmit-base-icon-share-2" />
                      </span>
                      <ul className="pbmit-social-links">
                        <li className="pbmit-social-li pbmit-social-facebook">
                          <a title="Facebook" href="#" target="_blank">
                            <span>
                              <i className="pbmit-base-icon-facebook-f" />
                            </span>
                          </a>
                        </li>
                        <li className="pbmit-social-li pbmit-social-twitter">
                          <a title="Twitter" href="#" target="_blank">
                            <span>
                              <i className="pbmit-base-icon-twitter-2" />
                            </span>
                          </a>
                        </li>
                        <li className="pbmit-social-li pbmit-social-linkedin">
                          <a title="LinkedIn" href="#" target="_blank">
                            <span>
                              <i className="pbmit-base-icon-linkedin-in" />
                            </span>
                          </a>
                        </li>
                        <li className="pbmit-social-li pbmit-social-instagram">
                          <a title="Instagram" href="#" target="_blank">
                            <span>
                              <i className="pbmit-base-icon-instagram" />
                            </span>
                          </a>
                        </li>
                      </ul>
                      <div className="pbmit-sticky-corner  pbmit-bottom-left-corner">
                        <svg
                          width={30}
                          height={30}
                          viewBox="0 0 30 30"
                          fill=""
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M30 30V0C30 16 16 30 0 30H30Z" fill="red" />
                        </svg>
                      </div>
                      <div className="pbmit-sticky-corner pbmit-top-right-corner">
                        <svg
                          width={30}
                          height={30}
                          viewBox="0 0 30 30"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M30 30V0C30 16 16 30 0 30H30Z" fill="red" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Form */}
      {/* Iframe */}
      <section className="iframe_section section-lgb">
        <div className="container-fluid">
          <div className="iframe_box">
            <iframe
              src="https://maps.google.com/maps?q=London%20Eye%2C%20London%2C%20United%20Kingdom&t=m&z=10&output=embed&iwloc=near"
              title="London Eye, London, United Kingdom"
              aria-label="London Eye, London, United Kingdom"
            />
          </div>
        </div>
      </section>
      {/* Iframe End*/}
    </div>
    {/* Contact Us Content End */}
    {/* footer */}
  <Footer/>
    {/* footer End */}
  </div>
  {/* Page Wrapper End */}
  {/* Search Box Start Here */}
  <div className="pbmit-search-overlay">
    <div className="pbmit-icon-close">
      <svg
        className="qodef-svg--close qodef-m"
        xmlns="http://www.w3.org/2000/svg"
        width="28.163"
        height="28.163"
        viewBox="0 0 26.163 26.163"
      >
        <rect width={36} height={1} transform="translate(0.707) rotate(45)" />
        <rect
          width={36}
          height={1}
          transform="translate(0 25.456) rotate(-45)"
        />
      </svg>
    </div>
    <div className="pbmit-search-outer">
      <form className="pbmit-site-searchform">
        <input
          type="search"
          className="form-control field searchform-s"
          name="s"
          placeholder="Search …"
        />
        <button type="submit" />
      </form>
    </div>
  </div>
  {/* Search Box End Here */}
  {/* Scroll To Top */}
  <div className="pbmit-progress-wrap">
    <svg
      className="pbmit-progress-circle svg-content"
      width="100%"
      height="100%"
      viewBox="-1 -1 102 102"
    >
      <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
    </svg>
  </div>
</>

    </div>
  )
}

export default Contatc