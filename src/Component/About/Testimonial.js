import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Testimonial() {
    const [testimonials, setTestimonials] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/get/testimonal')
            .then(response => {
                console.log(response);
                setTestimonials(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    return (
        <div>
            <section className="testimonial_two section-xl">
                <div className="container">
                    <div className="testimonial-two_bg">
                        <div className="row g-0">
                            {testimonials.map(testimonial => (
                                <div className="testimonial-two_bg" key={testimonial.name}>
                                    <div className="row g-0">
                                        <div className="col-md-12 col-xl-6 pbmit-col_1">
                                            <div className="testimonial-two-left_img" style={{ backgroundImage: `url(${testimonial.image})` }} />
                                        </div>
                                        <div className="col-md-12 col-xl-6 pbmit-col_2">
                                            <div className="testimonial-two_rightbox">
                                                <div className="pbmit-heading-subheading text-white animation-style2">
                                                    <h4 className="pbmit-subtitle">Testimonial</h4>
                                                    <h2 className="pbmit-title">Clients feedback</h2>
                                                </div>
                                                <div
                                                    className="swiper-slider"
                                                    data-arrows-class="testimonial-two_btn"
                                                    data-autoplay="true"
                                                    data-loop="true"
                                                    data-dots="true"
                                                    data-arrows="false"
                                                    data-columns={1}
                                                    data-margin={30}
                                                    data-effect="slide"
                                                >
                                                    <div className="swiper-wrapper">
                                                        <article className="pbmit-testimonial-style-2 swiper-slide">
                                                            <div className="pbminfotech-post-item">
                                                                <div className="pbminfotech-box-star-ratings">
                                                                    {[...Array(testimonial.rating)].map((_, index) => (
                                                                        <i key={index} className="pbmit-base-icon-star-1 pbmit-active" />
                                                                    ))}
                                                                </div>
                                                                <div className="pbminfotech-box-desc">
                                                                    <blockquote className="pbminfotech-testimonial-text">
                                                                        <p>{testimonial.message}</p>
                                                                    </blockquote>
                                                                </div>
                                                                <div className="pbminfotech-box-author d-flex align-items-center">
                                                                    <div className="pbminfotech-box-img">
                                                                        <div className="pbmit-featured-img-wrapper">
                                                                            <div className="pbmit-featured-wrapper">
                                                                                <img
                                                                                    src={testimonial.image}
                                                                                    className="img-fluid"
                                                                                    alt=""
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="pbmit-auther-content">
                                                                        <h3 className="pbminfotech-box-title">
                                                                            {testimonial.name}
                                                                        </h3>
                                                                        <div className="pbminfotech-testimonial-detail">
                                                                            Satisfied Client
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </article>
                                                    </div>
                                                </div>
                                                <div className="testimonial-two_btn swiper-btn-custom d-flex flex-row-reverse">
                                                    <div className="pbmit-sticky-corner pbmit-bottom-left-corner">
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
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Testimonial;
