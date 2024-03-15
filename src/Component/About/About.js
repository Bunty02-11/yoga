import React from 'react'
import Header from '../Layout/Header'
import Footer from '../Layout/Footer'
import Marquee from '../Marquee/Marquee'
import Aboutus from './Aboutus'
import Testimonial from './Testimonial'

function About() {
    return (
        <div>
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
                                        <h1 className="pbmit-tbar-title"> About Us</h1>
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
                                                About Us
                                            </span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Title Bar End*/}
                {/* Page Content */}
                <div className="page-content">
                    {/* About Us Start */}
                   <Aboutus/>
                    {/* About Us End */}
                    {/* Marquee Start */}
                    <Marquee/>
                    {/* Marquee End */}
                    {/* Static Box */}
                    <section className="static-box-section_two pbmit-element-static-box-style-1">
                        <div className="container-fluid">
                            <div className="pbmit-element-posts-wrapper row">
                                <article className="pbmit-static-box-style-1 pbmit-ele-static-box col-md-4">
                                    <div
                                        className="pbmit-bg-imgbox"
                                        style={{
                                            backgroundImage:
                                                "url(images/homepage-2/static-box/static-box-img01.jpg)"
                                        }}
                                    >
                                        <div className="pbmit-img-text">
                                            <div className="pbmit-text d-flex align-items-center justify-content-center">
                                                <div className="pbminfotech-static-box-number">01</div>
                                                <div className="pbminfotech-box-title">
                                                    <h4>Protection From Injury</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pbmit-img">
                                        <img
                                            src="images/homepage-2/static-box/static-box-img01.jpg"
                                            alt="Protection From Injury"
                                        />
                                    </div>
                                    <div className="pbmit-contentbox">
                                        <div className="pbmit-contentbox-inner">
                                            <div className="pbmit-ihbox-icon" />
                                            <div className="pbminfotech-box-title">
                                                <h4>Protection From Injury</h4>
                                            </div>
                                            <div className="pbminfotech-static-box-desc">
                                                There are many variations of passages of Lorem Ipsum
                                                available, but the majority have suffered alteration.
                                            </div>
                                            <div className="pbmit-button">
                                                <a href="our-history.html">
                                                    <span className="pbmit-button-text">Read More</span>
                                                    <span className="pbmit-button-icon-wrapper">
                                                        <span className="pbmit-button-icon">
                                                            <i className="pbmit-base-icon-black-arrow-1" />
                                                        </span>
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                                <article className="pbmit-static-box-style-1 pbmit-ele-static-box col-md-4">
                                    <div
                                        className="pbmit-bg-imgbox"
                                        style={{
                                            backgroundImage:
                                                "url(images/homepage-2/static-box/static-box-img02.jpg)"
                                        }}
                                    >
                                        <div className="pbmit-img-text">
                                            <div className="pbmit-text d-flex align-items-center justify-content-center">
                                                <div className="pbminfotech-static-box-number">02</div>
                                                <div className="pbminfotech-box-title">
                                                    <h4>Weight Reduction</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pbmit-img">
                                        <img
                                            src="images/homepage-2/static-box/static-box-img02.jpg"
                                            alt="Weight Reduction"
                                        />
                                    </div>
                                    <div className="pbmit-contentbox">
                                        <div className="pbmit-contentbox-inner">
                                            <div className="pbmit-ihbox-icon" />
                                            <div className="pbminfotech-box-title">
                                                <h4>Weight Reduction</h4>
                                            </div>
                                            <div className="pbminfotech-static-box-desc">
                                                There are many variations of passages of Lorem Ipsum
                                                available, but the majority have suffered alteration.
                                            </div>
                                            <div className="pbmit-button">
                                                <a href="our-history.html">
                                                    <span className="pbmit-button-text">Read More</span>
                                                    <span className="pbmit-button-icon-wrapper">
                                                        <span className="pbmit-button-icon">
                                                            <i className="pbmit-base-icon-black-arrow-1" />
                                                        </span>
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                                <article className="pbmit-static-box-style-1 pbmit-ele-static-box col-md-4">
                                    <div
                                        className="pbmit-bg-imgbox"
                                        style={{
                                            backgroundImage:
                                                "url(images/homepage-2/static-box/static-box-img03.jpg)"
                                        }}
                                    >
                                        <div className="pbmit-img-text">
                                            <div className="pbmit-text d-flex align-items-center justify-content-center">
                                                <div className="pbminfotech-static-box-number">03</div>
                                                <div className="pbminfotech-box-title">
                                                    <h4>Increased Flexibility</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pbmit-img">
                                        <img
                                            src="images/homepage-2/static-box/static-box-img03.jpg"
                                            alt="Increased Flexibility"
                                        />
                                    </div>
                                    <div className="pbmit-contentbox">
                                        <div className="pbmit-contentbox-inner">
                                            <div className="pbmit-ihbox-icon" />
                                            <div className="pbminfotech-box-title">
                                                <h4>Increased Flexibility</h4>
                                            </div>
                                            <div className="pbminfotech-static-box-desc">
                                                There are many variations of passages of Lorem Ipsum
                                                available, but the majority have suffered alteration.
                                            </div>
                                            <div className="pbmit-button">
                                                <a href="our-history.html">
                                                    <span className="pbmit-button-text">Read More</span>
                                                    <span className="pbmit-button-icon-wrapper">
                                                        <span className="pbmit-button-icon">
                                                            <i className="pbmit-base-icon-black-arrow-1" />
                                                        </span>
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </section>
                    {/* Static Box End */}
                    
                    {/* Service Start */}
                    {/* Service End */}
                    {/* Tween Effect Start */}
                    {/* Tween Effect End */}
                    {/* Team Start */}
                    {/* Team End */}
                    {/* Client Start */}
                    <section>
                        <div className="container">
                            <div
                                className="swiper-slider"
                                data-arrows-class="service-two_arrow"
                                data-autoplay="true"
                                data-loop="true"
                                data-dots="false"
                                data-arrows="false"
                                data-columns={6}
                                data-margin={30}
                                data-effect="slide"
                            >
                                <div className="swiper-wrapper">
                                    {/* Slide1 */}
                                    <article className="pbmit-client-style-1 swiper-slide">
                                        <div className="pbmit-border-wrapper">
                                            <div className="pbmit-client-wrapper pbmit-client-with-hover-img">
                                                <h4 className="pbmit-hide">Client-06</h4>
                                                <div className="pbmit-client-hover-img">
                                                    <img
                                                        src="images/homepage-2/client/green-client-logo-01.png"
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="pbmit-featured-img-wrapper">
                                                    <div className="pbmit-featured-wrapper">
                                                        <img
                                                            src="images/homepage-2/client/dark-client-logo-01.png"
                                                            className="img-fluid"
                                                            alt=""
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                    {/* Slide2 */}
                                    <article className="pbmit-client-style-1 swiper-slide">
                                        <div className="pbmit-border-wrapper">
                                            <div className="pbmit-client-wrapper pbmit-client-with-hover-img">
                                                <h4 className="pbmit-hide">Client-06</h4>
                                                <div className="pbmit-client-hover-img">
                                                    <img
                                                        src="images/homepage-2/client/green-client-logo-02.png"
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="pbmit-featured-img-wrapper">
                                                    <div className="pbmit-featured-wrapper">
                                                        <img
                                                            src="images/homepage-2/client/dark-client-logo-02.png"
                                                            className="img-fluid"
                                                            alt=""
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                    {/* Slide3 */}
                                    <article className="pbmit-client-style-1 swiper-slide">
                                        <div className="pbmit-border-wrapper">
                                            <div className="pbmit-client-wrapper pbmit-client-with-hover-img">
                                                <h4 className="pbmit-hide">Client-06</h4>
                                                <div className="pbmit-client-hover-img">
                                                    <img
                                                        src="images/homepage-2/client/green-client-logo-03.png"
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="pbmit-featured-img-wrapper">
                                                    <div className="pbmit-featured-wrapper">
                                                        <img
                                                            src="images/homepage-2/client/dark-client-logo-03.png"
                                                            className="img-fluid"
                                                            alt=""
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                    {/* Slide4 */}
                                    <article className="pbmit-client-style-1 swiper-slide">
                                        <div className="pbmit-border-wrapper">
                                            <div className="pbmit-client-wrapper pbmit-client-with-hover-img">
                                                <h4 className="pbmit-hide">Client-06</h4>
                                                <div className="pbmit-client-hover-img">
                                                    <img
                                                        src="images/homepage-2/client/green-client-logo-04.png"
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="pbmit-featured-img-wrapper">
                                                    <div className="pbmit-featured-wrapper">
                                                        <img
                                                            src="images/homepage-2/client/dark-client-logo-04.png"
                                                            className="img-fluid"
                                                            alt=""
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                    {/* Slide5 */}
                                    <article className="pbmit-client-style-1 swiper-slide">
                                        <div className="pbmit-border-wrapper">
                                            <div className="pbmit-client-wrapper pbmit-client-with-hover-img">
                                                <h4 className="pbmit-hide">Client-06</h4>
                                                <div className="pbmit-client-hover-img">
                                                    <img
                                                        src="images/homepage-2/client/green-client-logo-05.png"
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="pbmit-featured-img-wrapper">
                                                    <div className="pbmit-featured-wrapper">
                                                        <img
                                                            src="images/homepage-2/client/dark-client-logo-05.png"
                                                            className="img-fluid"
                                                            alt=""
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                    {/* Slide6 */}
                                    <article className="pbmit-client-style-1 swiper-slide">
                                        <div className="pbmit-border-wrapper">
                                            <div className="pbmit-client-wrapper pbmit-client-with-hover-img">
                                                <h4 className="pbmit-hide">Client-06</h4>
                                                <div className="pbmit-client-hover-img">
                                                    <img
                                                        src="images/homepage-2/client/green-client-logo-06.png"
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="pbmit-featured-img-wrapper">
                                                    <div className="pbmit-featured-wrapper">
                                                        <img
                                                            src="images/homepage-2/client/dark-client-logo-06.png"
                                                            className="img-fluid"
                                                            alt=""
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Client End */}
                    {/* Testimonial Start */}
                   <Testimonial/>
                    {/* Testimonial End */}
                </div>
                {/* Page Content End */}
                {/* footer */}
                <Footer />
                {/* footer End */}
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
                {/* Scroll To Top End */}
            </div>

        </div>
    )
}

export default About
