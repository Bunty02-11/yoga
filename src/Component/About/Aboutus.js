import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Aboutus() {
    const [data, setData] = useState('')

    useEffect(() => {
        axios.get('http://localhost:8000/api/get/about')
            .then(response => {
                console.log(response);
                setData(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    return (
        <div>
            <section className="section-md">
                <div className="container">
                    <div className="row g-0">
                        <div className="col-md-12 col-xl-6">
                            <div className="about-us-two_img">
                                <div className="fid-style-2_box">
                                    <div className="pbminfotech-ele-fid-style-2">
                                        <div className="pbmit-fld-contents">
                                            <div className="pbmit-fld-wrap">
                                                <h4 className="pbmit-fid-inner">
                                                    <span className="pbmit-fid-before" />
                                                    <span
                                                        className="pbmit-number-rotate numinate"
                                                        data-appear-animation="animateDigits"
                                                        data-from={0}
                                                        data-to={235}
                                                        data-interval={5}
                                                        data-before=""
                                                        data-before-style=""
                                                        data-after=""
                                                        data-after-style=""
                                                    >
                                                        235
                                                    </span>
                                                    <span className="pbmit-fid">
                                                        <sup>+</sup>
                                                    </span>
                                                </h4>
                                                <div className="pbmit-fid-sub">
                                                    <div className="pbmit-heading-desc">
                                                        Happy club members
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="pbmit-sticky-corner  pbmit-bottom-left-corner">
                                            <svg
                                                width={30}
                                                height={30}
                                                viewBox="0 0 30 30"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M30 30V0C30 16 16 30 0 30H30Z" />
                                            </svg>
                                        </div>
                                        <div className="pbmit-sticky-corner pbmit-top-right-corner">
                                            <svg
                                                width={30}
                                                height={30}
                                                viewBox="0 0 30 30"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M30 30V0C30 16 16 30 0 30H30Z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 col-xl-6">
                            <div className="about-us-two_rightbox">
                                <div className="pbmit-heading-subheading animation-style2">
                                    <h4 className="pbmit-subtitle">About Us</h4>
                                    <h2 className="pbmit-title">
                                        Yoga
                                    </h2>
                                    <div className="pbmit-heading-desc">
                                        Yoga is Life
                                    </div>
                                </div>
                                <div className="about-us-two_ihbox">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="pbmit-ihbox-style-6">
                                                <div className="pbmit-ihbox-headingicon">
                                                    <div className="pbmit-ihbox-icon">
                                                        <div className="pbmit-ihbox-icon-wrapper">
                                                            <div className="pbmit-icon-wrapper pbmit-icon-type-icon">
                                                                <i className="pbmit-yoge-icon pbmit-yoge-icon-yoga-pose" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="pbmit-ihbox-contents">
                                                        <h2 className="pbmit-element-title">
                                                            Changing rooms
                                                        </h2>
                                                        <div className="pbmit-heading-desc">
                                                            Neque blandit consectetur viverra placerat ante.
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="pbmit-ihbox-style-6">
                                                <div className="pbmit-ihbox-headingicon">
                                                    <div className="pbmit-ihbox-icon">
                                                        <div className="pbmit-ihbox-icon-wrapper">
                                                            <div className="pbmit-icon-wrapper pbmit-icon-type-icon">
                                                                <i className="pbmit-yoge-icon pbmit-yoge-icon-yoga-pose-18" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="pbmit-ihbox-contents">
                                                        <h2 className="pbmit-element-title">
                                                            Training Programs
                                                        </h2>
                                                        <div className="pbmit-heading-desc">
                                                            Neque blandit consectetur viverra placerat ante.
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <a className="pbmit-btn pbmit-btn-global" href="classes.html">
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
                                        <span className="pbmit-button-text">know more</span>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Aboutus
