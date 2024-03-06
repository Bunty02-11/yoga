import React from 'react'
import { useNavigate } from 'react-router-dom';
import Header from '../Layout/Header'
import Footer from '../Layout/Footer'

function Blog() {
    const navigate = useNavigate();

    const reloadBlogdetailPage = () => {
        navigate("/blogdetails");
        window.scrollTo(0,0);
        window.location.reload();
      }
    return (
        <div>
            <>
                <div className="page-wrapper">
                    {/* Header Main Area */}
                    <Header />
                    {/* Header Main Area End Here */}
                    {/* Title Bar */}
                    <div className="pbmit-title-bar-wrapper">
                        <div className="container">
                            <div className="pbmit-title-bar-content">
                                <div className="pbmit-title-bar-content-inner">
                                    <div className="pbmit-tbar">
                                        <div className="pbmit-tbar-inner container">
                                            <h1 className="pbmit-tbar-title"> Blog</h1>
                                        </div>
                                    </div>
                                    <div className="pbmit-breadcrumb">
                                        <div className="pbmit-breadcrumb-inner">
                                            <span>
                                                <a title="" href="#" className="home">
                                                    <span>Yoge</span>
                                                </a>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Title Bar End*/}
                    {/*Page Content */}
                    <div className="page-content">
                        {/* Blog Classic */}
                        <section className="site_content blog_classic" >
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12 col-lg-9 blog-right-col">
                                        <div className="row pbmit-element-posts-wrapper">
                                            <article className="post blog-classic">
                                                <div className="pbmit-featured-img-wrapper">
                                                    <div className="pbmit-featured-wrapper">
                                                        <a  onClick={reloadBlogdetailPage} >
                                                            <img
                                                                src="images/blog/blog-01b.jpg"
                                                                className="img-fluid"
                                                                alt=""
                                                            />
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="pbmit-blog-classic-inner">
                                                    <div className="pbmit-blog-meta pbmit-blog-meta-top">
                                                        <span className="pbmit-meta pbmit-meta-cat">
                                                            <a  onClick={reloadBlogdetailPage} rel="category tag">
                                                                Motivation
                                                            </a>
                                                        </span>
                                                        <span className="pbmit-meta pbmit-meta-date">
                                                            <i className="pbmit-base-icon-calendar-3" />
                                                            <a  onClick={reloadBlogdetailPage} rel="bookmark">
                                                                <time
                                                                    className="entry-date published"
                                                                    dateTime="2023-08-29T09:05:54+00:00"
                                                                >
                                                                    August 29, 2023
                                                                </time>
                                                                <time
                                                                    className="updated pbmit-hide"
                                                                    dateTime="2023-10-19T05:42:54+00:00"
                                                                >
                                                                    October 19, 2023
                                                                </time>
                                                            </a>
                                                        </span>
                                                        <span className="pbmit-meta pbmit-meta-author">
                                                            <i className="pbmit-base-icon-user-3" />
                                                            by
                                                            <a
                                                                className="pbmit-author-link"
                                                                onClick={reloadBlogdetailPage}
                                                            >
                                                                admin
                                                            </a>
                                                        </span>
                                                        <span className="pbmit-meta pbmit-meta-comments pbmit-comment-bigger-than-zero">
                                                            <i className="pbmit-base-icon-chat-3" />3 Comments
                                                        </span>
                                                    </div>
                                                    <h3 className="pbmit-post-title">
                                                        <a href="blog-single-details.html">
                                                            Which Yoga Class Is Best for Beginners?
                                                        </a>
                                                    </h3>
                                                    <div className="pbmit-entry-content">
                                                        <div className="pbmit-firstletter-blog">
                                                            <p>
                                                                We It’s time to roll out your yoga mat and discovers
                                                                the combinations of physically and mentally exercises
                                                                be that for thousand of years have hooked yoga
                                                                practitioner around the…
                                                            </p>
                                                        </div>
                                                        <a
                                                            onClick={reloadBlogdetailPage}
                                                            className="pbmit-btn pbmit-btn-global"
                                                        >
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
                                                                <span className="pbmit-button-text">Read More</span>
                                                            </span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </article>
                                            <article className="post blog-classic">
                                                <div className="pbmit-featured-img-wrapper">
                                                    <div className="pbmit-featured-wrapper">
                                                        <a onClick={reloadBlogdetailPage}>
                                                            <img
                                                                src="images/blog/blog-02b.jpg"
                                                                className="img-fluid"
                                                                alt=""
                                                            />
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="pbmit-blog-classic-inner">
                                                    <div className="pbmit-blog-meta pbmit-blog-meta-top">
                                                        <span className="pbmit-meta pbmit-meta-cat">
                                                            <a  onClick={reloadBlogdetailPage} rel="category tag">
                                                                Meditation
                                                            </a>
                                                        </span>
                                                        <span className="pbmit-meta pbmit-meta-date">
                                                            <i className="pbmit-base-icon-calendar-3" />
                                                            <a onClick={reloadBlogdetailPage} rel="bookmark">
                                                                <time
                                                                    className="entry-date published"
                                                                    dateTime="2023-08-29T09:05:54+00:00"
                                                                >
                                                                    August 29, 2023
                                                                </time>
                                                                <time
                                                                    className="updated pbmit-hide"
                                                                    dateTime="2023-10-19T05:42:54+00:00"
                                                                >
                                                                    October 19, 2023
                                                                </time>
                                                            </a>
                                                        </span>
                                                        <span className="pbmit-meta pbmit-meta-author">
                                                            <i className="pbmit-base-icon-user-3" />
                                                            by
                                                            <a
                                                                className="pbmit-author-link"
                                                                onClick={reloadBlogdetailPage}
                                                            >
                                                                admin
                                                            </a>
                                                        </span>
                                                        <span className="pbmit-meta pbmit-meta-comments pbmit-comment-bigger-than-zero">
                                                            <i className="pbmit-base-icon-chat-3" />3 Comments
                                                        </span>
                                                    </div>
                                                    <h3 className="pbmit-post-title">
                                                        <a href="blog-single-details.html">
                                                            Spiritual Cleansing: 14 Rituals to Detox Your Soul
                                                        </a>
                                                    </h3>
                                                    <div className="pbmit-entry-content">
                                                        <div className="pbmit-firstletter-blog">
                                                            <p>
                                                                We It’s time to roll out your yoga mat and discovers
                                                                the combinations of physically and mentally exercises
                                                                be that for thousand of years have hooked yoga
                                                                practitioner around the…
                                                            </p>
                                                        </div>
                                                        <a
                                                            onClick={reloadBlogdetailPage}
                                                            className="pbmit-btn pbmit-btn-global"
                                                        >
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
                                                                <span className="pbmit-button-text">Read More</span>
                                                            </span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </article>
                                            <article className="post blog-classic">
                                                <div className="pbmit-featured-img-wrapper">
                                                    <div className="pbmit-featured-wrapper">
                                                        <a onClick={reloadBlogdetailPage}>
                                                            <img
                                                                src="images/blog/blog-03b.jpg"
                                                                className="img-fluid"
                                                                alt=""
                                                            />
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="pbmit-blog-classic-inner">
                                                    <div className="pbmit-blog-meta pbmit-blog-meta-top">
                                                        <span className="pbmit-meta pbmit-meta-cat">
                                                            <a  onClick={reloadBlogdetailPage} rel="category tag">
                                                                fitness
                                                            </a>
                                                        </span>
                                                        <span className="pbmit-meta pbmit-meta-date">
                                                            <i className="pbmit-base-icon-calendar-3" />
                                                            <a onClick={reloadBlogdetailPage} rel="bookmark">
                                                                <time
                                                                    className="entry-date published"
                                                                    dateTime="2023-08-29T09:05:54+00:00"
                                                                >
                                                                    August 29, 2023
                                                                </time>
                                                                <time
                                                                    className="updated pbmit-hide"
                                                                    dateTime="2023-10-19T05:42:54+00:00"
                                                                >
                                                                    October 19, 2023
                                                                </time>
                                                            </a>
                                                        </span>
                                                        <span className="pbmit-meta pbmit-meta-author">
                                                            <i className="pbmit-base-icon-user-3" />
                                                            by
                                                            <a
                                                                className="pbmit-author-link"
                                                                onClick={reloadBlogdetailPage}
                                                            >
                                                                admin
                                                            </a>
                                                        </span>
                                                        <span className="pbmit-meta pbmit-meta-comments pbmit-comment-bigger-than-zero">
                                                            <i className="pbmit-base-icon-chat-3" />3 Comments
                                                        </span>
                                                    </div>
                                                    <h3 className="pbmit-post-title">
                                                        <a href="blog-single-details.html">
                                                            Spiritual Awakening: Definition, Signs and Symptoms
                                                        </a>
                                                    </h3>
                                                    <div className="pbmit-entry-content">
                                                        <div className="pbmit-firstletter-blog">
                                                            <p>
                                                                We It’s time to roll out your yoga mat and discovers
                                                                the combinations of physically and mentally exercises
                                                                be that for thousand of years have hooked yoga
                                                                practitioner around the…
                                                            </p>
                                                        </div>
                                                        <a
                                                            onClick={reloadBlogdetailPage}
                                                            className="pbmit-btn pbmit-btn-global"
                                                        >
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
                                                                <span className="pbmit-button-text">Read More</span>
                                                            </span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </article>
                                            <article className="post blog-classic">
                                                <div className="pbmit-featured-img-wrapper">
                                                    <div className="pbmit-featured-wrapper">
                                                        <a onClick={reloadBlogdetailPage}>
                                                            <img
                                                                src="images/blog/blog-04b.jpg"
                                                                className="img-fluid"
                                                                alt=""
                                                            />
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="pbmit-blog-classic-inner">
                                                    <div className="pbmit-blog-meta pbmit-blog-meta-top">
                                                        <span className="pbmit-meta pbmit-meta-cat">
                                                            <a  onClick={reloadBlogdetailPage} rel="category tag">
                                                                Inspiration
                                                            </a>
                                                        </span>
                                                        <span className="pbmit-meta pbmit-meta-date">
                                                            <i className="pbmit-base-icon-calendar-3" />
                                                            <a onClick={reloadBlogdetailPage} rel="bookmark">
                                                                <time
                                                                    className="entry-date published"
                                                                    dateTime="2023-08-29T09:05:54+00:00"
                                                                >
                                                                    August 29, 2023
                                                                </time>
                                                                <time
                                                                    className="updated pbmit-hide"
                                                                    dateTime="2023-10-19T05:42:54+00:00"
                                                                >
                                                                    October 19, 2023
                                                                </time>
                                                            </a>
                                                        </span>
                                                        <span className="pbmit-meta pbmit-meta-author">
                                                            <i className="pbmit-base-icon-user-3" />
                                                            by
                                                            <a
                                                                className="pbmit-author-link"
                                                                onClick={reloadBlogdetailPage}
                                                            >
                                                                admin
                                                            </a>
                                                        </span>
                                                        <span className="pbmit-meta pbmit-meta-comments pbmit-comment-bigger-than-zero">
                                                            <i className="pbmit-base-icon-chat-3" />3 Comments
                                                        </span>
                                                    </div>
                                                    <h3 className="pbmit-post-title">
                                                        <a href="blog-single-details.html">
                                                            Yoga and Astrology: Find the Best Practices for Your
                                                            Sign
                                                        </a>
                                                    </h3>
                                                    <div className="pbmit-entry-content">
                                                        <div className="pbmit-firstletter-blog">
                                                            <p>
                                                                We It’s time to roll out your yoga mat and discovers
                                                                the combinations of physically and mentally exercises
                                                                be that for thousand of years have hooked yoga
                                                                practitioner around the…
                                                            </p>
                                                        </div>
                                                        <a
                                                            onClick={reloadBlogdetailPage}
                                                            className="pbmit-btn pbmit-btn-global"
                                                        >
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
                                                                <span className="pbmit-button-text">Read More</span>
                                                            </span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </article>
                                            <article className="post blog-classic">
                                                <div className="pbmit-featured-img-wrapper">
                                                    <div className="pbmit-featured-wrapper">
                                                        <a onClick={reloadBlogdetailPage}>
                                                            <img
                                                                src="images/blog/blog-05b.jpg"
                                                                className="img-fluid"
                                                                alt=""
                                                            />
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="pbmit-blog-classic-inner">
                                                    <div className="pbmit-blog-meta pbmit-blog-meta-top">
                                                        <span className="pbmit-meta pbmit-meta-cat">
                                                            <a  onClick={reloadBlogdetailPage} rel="category tag">
                                                                Motivation
                                                            </a>
                                                        </span>
                                                        <span className="pbmit-meta pbmit-meta-date">
                                                            <i className="pbmit-base-icon-calendar-3" />
                                                            <a onClick={reloadBlogdetailPage} rel="bookmark">
                                                                <time
                                                                    className="entry-date published"
                                                                    dateTime="2023-08-29T09:05:54+00:00"
                                                                >
                                                                    August 29, 2023
                                                                </time>
                                                                <time
                                                                    className="updated pbmit-hide"
                                                                    dateTime="2023-10-19T05:42:54+00:00"
                                                                >
                                                                    October 19, 2023
                                                                </time>
                                                            </a>
                                                        </span>
                                                        <span className="pbmit-meta pbmit-meta-author">
                                                            <i className="pbmit-base-icon-user-3" />
                                                            by
                                                            <a
                                                                className="pbmit-author-link"
                                                                onClick={reloadBlogdetailPage}
                                                            >
                                                                admin
                                                            </a>
                                                        </span>
                                                        <span className="pbmit-meta pbmit-meta-comments pbmit-comment-bigger-than-zero">
                                                            <i className="pbmit-base-icon-chat-3" />3 Comments
                                                        </span>
                                                    </div>
                                                    <h3 className="pbmit-post-title">
                                                        <a href="blog-single-details.html">
                                                            Puppy Yoga? What Is It and What Are the Benefits?
                                                        </a>
                                                    </h3>
                                                    <div className="pbmit-entry-content">
                                                        <div className="pbmit-firstletter-blog">
                                                            <p>
                                                                We It’s time to roll out your yoga mat and discovers
                                                                the combinations of physically and mentally exercises
                                                                be that for thousand of years have hooked yoga
                                                                practitioner around the…
                                                            </p>
                                                        </div>
                                                        <a
                                                            onClick={reloadBlogdetailPage}
                                                            className="pbmit-btn pbmit-btn-global"
                                                        >
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
                                                                <span className="pbmit-button-text">Read More</span>
                                                            </span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </article>
                                            <article className="post blog-classic">
                                                <div className="pbmit-featured-img-wrapper">
                                                    <div className="pbmit-featured-wrapper">
                                                        <a onClick={reloadBlogdetailPage}>
                                                            <img
                                                                src="images/blog/blog-06b.jpg"
                                                                className="img-fluid"
                                                                alt=""
                                                            />
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="pbmit-blog-classic-inner">
                                                    <div className="pbmit-blog-meta pbmit-blog-meta-top">
                                                        <span className="pbmit-meta pbmit-meta-cat">
                                                            <a  onClick={reloadBlogdetailPage} rel="category tag">
                                                                Meditation
                                                            </a>
                                                        </span>
                                                        <span className="pbmit-meta pbmit-meta-date">
                                                            <i className="pbmit-base-icon-calendar-3" />
                                                            <a onClick={reloadBlogdetailPage} rel="bookmark">
                                                                <time
                                                                    className="entry-date published"
                                                                    dateTime="2023-08-29T09:05:54+00:00"
                                                                >
                                                                    August 29, 2023
                                                                </time>
                                                                <time
                                                                    className="updated pbmit-hide"
                                                                    dateTime="2023-10-19T05:42:54+00:00"
                                                                >
                                                                    October 19, 2023
                                                                </time>
                                                            </a>
                                                        </span>
                                                        <span className="pbmit-meta pbmit-meta-author">
                                                            <i className="pbmit-base-icon-user-3" />
                                                            by
                                                            <a
                                                                className="pbmit-author-link"
                                                                onClick={reloadBlogdetailPage}
                                                            >
                                                                admin
                                                            </a>
                                                        </span>
                                                        <span className="pbmit-meta pbmit-meta-comments pbmit-comment-bigger-than-zero">
                                                            <i className="pbmit-base-icon-chat-3" />3 Comments
                                                        </span>
                                                    </div>
                                                    <h3 className="pbmit-post-title">
                                                        <a href="blog-single-details.html">
                                                            8 Ways to Strengthen the Mind Body Connection
                                                        </a>
                                                    </h3>
                                                    <div className="pbmit-entry-content">
                                                        <div className="pbmit-firstletter-blog">
                                                            <p>
                                                                We It’s time to roll out your yoga mat and discovers
                                                                the combinations of physically and mentally exercises
                                                                be that for thousand of years have hooked yoga
                                                                practitioner around the…
                                                            </p>
                                                        </div>
                                                        <a
                                                            onClick={reloadBlogdetailPage}
                                                            className="pbmit-btn pbmit-btn-global"
                                                        >
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
                                                                <span className="pbmit-button-text">Read More</span>
                                                            </span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </article>
                                            <article className="post blog-classic">
                                                <div className="pbmit-featured-img-wrapper">
                                                    <div className="pbmit-featured-wrapper">
                                                        <a onClick={reloadBlogdetailPage}>
                                                            <img
                                                                src="images/blog/blog-07b.jpg"
                                                                className="img-fluid"
                                                                alt=""
                                                            />
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="pbmit-blog-classic-inner">
                                                    <div className="pbmit-blog-meta pbmit-blog-meta-top">
                                                        <span className="pbmit-meta pbmit-meta-cat">
                                                            <a  onClick={reloadBlogdetailPage} rel="category tag">
                                                                Meditation
                                                            </a>
                                                        </span>
                                                        <span className="pbmit-meta pbmit-meta-date">
                                                            <i className="pbmit-base-icon-calendar-3" />
                                                            <a onClick={reloadBlogdetailPage} rel="bookmark">
                                                                <time
                                                                    className="entry-date published"
                                                                    dateTime="2023-08-29T09:05:54+00:00"
                                                                >
                                                                    August 29, 2023
                                                                </time>
                                                                <time
                                                                    className="updated pbmit-hide"
                                                                    dateTime="2023-10-19T05:42:54+00:00"
                                                                >
                                                                    October 19, 2023
                                                                </time>
                                                            </a>
                                                        </span>
                                                        <span className="pbmit-meta pbmit-meta-author">
                                                            <i className="pbmit-base-icon-user-3" />
                                                            by
                                                            <a
                                                                className="pbmit-author-link"
                                                                onClick={reloadBlogdetailPage}
                                                            >
                                                                admin
                                                            </a>
                                                        </span>
                                                        <span className="pbmit-meta pbmit-meta-comments pbmit-comment-bigger-than-zero">
                                                            <i className="pbmit-base-icon-chat-3" />3 Comments
                                                        </span>
                                                    </div>
                                                    <h3 className="pbmit-post-title">
                                                        <a href="blog-single-details.html">
                                                            13 Grounding Yoga Poses to Strengthen the Earth Element
                                                        </a>
                                                    </h3>
                                                    <div className="pbmit-entry-content">
                                                        <div className="pbmit-firstletter-blog">
                                                            <p>
                                                                We It’s time to roll out your yoga mat and discovers
                                                                the combinations of physically and mentally exercises
                                                                be that for thousand of years have hooked yoga
                                                                practitioner around the…
                                                            </p>
                                                        </div>
                                                        <a
                                                            onClick={reloadBlogdetailPage}
                                                            className="pbmit-btn pbmit-btn-global"
                                                        >
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
                                                                <span className="pbmit-button-text">Read More</span>
                                                            </span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </article>
                                            <article className="post blog-classic">
                                                <div className="pbmit-featured-img-wrapper">
                                                    <div className="pbmit-featured-wrapper">
                                                        <a onClick={reloadBlogdetailPage}>
                                                            <img
                                                                src="images/blog/blog-08b.jpg"
                                                                className="img-fluid"
                                                                alt=""
                                                            />
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="pbmit-blog-classic-inner">
                                                    <div className="pbmit-blog-meta pbmit-blog-meta-top">
                                                        <span className="pbmit-meta pbmit-meta-cat">
                                                            <a  onClick={reloadBlogdetailPage} rel="category tag">
                                                                fitness
                                                            </a>
                                                        </span>
                                                        <span className="pbmit-meta pbmit-meta-date">
                                                            <i className="pbmit-base-icon-calendar-3" />
                                                            <a onClick={reloadBlogdetailPage} rel="bookmark">
                                                                <time
                                                                    className="entry-date published"
                                                                    dateTime="2023-08-29T09:05:54+00:00"
                                                                >
                                                                    August 29, 2023
                                                                </time>
                                                                <time
                                                                    className="updated pbmit-hide"
                                                                    dateTime="2023-10-19T05:42:54+00:00"
                                                                >
                                                                    October 19, 2023
                                                                </time>
                                                            </a>
                                                        </span>
                                                        <span className="pbmit-meta pbmit-meta-author">
                                                            <i className="pbmit-base-icon-user-3" />
                                                            by
                                                            <a
                                                                className="pbmit-author-link"
                                                                onClick={reloadBlogdetailPage}
                                                            >
                                                                admin
                                                            </a>
                                                        </span>
                                                        <span className="pbmit-meta pbmit-meta-comments pbmit-comment-bigger-than-zero">
                                                            <i className="pbmit-base-icon-chat-3" />3 Comments
                                                        </span>
                                                    </div>
                                                    <h3 className="pbmit-post-title">
                                                        <a href="blog-single-details.html">
                                                            What Will it Take to Make Meditation Mainstream
                                                        </a>
                                                    </h3>
                                                    <div className="pbmit-entry-content">
                                                        <div className="pbmit-firstletter-blog">
                                                            <p>
                                                                We It’s time to roll out your yoga mat and discovers
                                                                the combinations of physically and mentally exercises
                                                                be that for thousand of years have hooked yoga
                                                                practitioner around the…
                                                            </p>
                                                        </div>
                                                        <a
                                                            onClick={reloadBlogdetailPage}
                                                            className="pbmit-btn pbmit-btn-global"
                                                        >
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
                                                                <span className="pbmit-button-text">Read More</span>
                                                            </span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </article>
                                            <article className="post blog-classic">
                                                <div className="pbmit-featured-img-wrapper">
                                                    <div className="pbmit-featured-wrapper">
                                                        <a onClick={reloadBlogdetailPage}>
                                                            <img
                                                                src="images/blog/blog-09b.jpg"
                                                                className="img-fluid"
                                                                alt=""
                                                            />
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="pbmit-blog-classic-inner">
                                                    <div className="pbmit-blog-meta pbmit-blog-meta-top">
                                                        <span className="pbmit-meta pbmit-meta-cat">
                                                            <a  onClick={reloadBlogdetailPage} rel="category tag">
                                                                fitness
                                                            </a>
                                                        </span>
                                                        <span className="pbmit-meta pbmit-meta-date">
                                                            <i className="pbmit-base-icon-calendar-3" />
                                                            <a onClick={reloadBlogdetailPage} rel="bookmark">
                                                                <time
                                                                    className="entry-date published"
                                                                    dateTime="2023-08-29T09:05:54+00:00"
                                                                >
                                                                    July 17, 2023
                                                                </time>
                                                                <time
                                                                    className="updated pbmit-hide"
                                                                    dateTime="2023-10-19T05:42:54+00:00"
                                                                >
                                                                    October 19, 2023
                                                                </time>
                                                            </a>
                                                        </span>
                                                        <span className="pbmit-meta pbmit-meta-author">
                                                            <i className="pbmit-base-icon-user-3" />
                                                            by
                                                            <a
                                                                className="pbmit-author-link"
                                                                onClick={reloadBlogdetailPage}
                                                            >
                                                                admin
                                                            </a>
                                                        </span>
                                                        <span className="pbmit-meta pbmit-meta-comments pbmit-comment-bigger-than-zero">
                                                            <i className="pbmit-base-icon-chat-3" />3 Comments
                                                        </span>
                                                    </div>
                                                    <h3 className="pbmit-post-title">
                                                        <a href="blog-single-details.html">
                                                            When Is the Perfect Time to Practice Yoga?
                                                        </a>
                                                    </h3>
                                                    <div className="pbmit-entry-content">
                                                        <div className="pbmit-firstletter-blog">
                                                            <p>
                                                                We It’s time to roll out your yoga mat and discovers
                                                                the combinations of physically and mentally exercises
                                                                be that for thousand of years have hooked yoga
                                                                practitioner around the…
                                                            </p>
                                                        </div>
                                                        <a
                                                            onClick={reloadBlogdetailPage}
                                                            className="pbmit-btn pbmit-btn-global"
                                                        >
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
                                                                <span className="pbmit-button-text">Read More</span>
                                                            </span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </article>
                                        </div>
                                    </div>
                                    <div className="col-md-12 col-lg-3 blog-left-col">
                                        <aside className="sidebar">
                                            <aside className="widget widget-search">
                                                <h2 className="widget-title">Search</h2>
                                                <form className="search-form">
                                                    <input
                                                        type="search"
                                                        className="search-field"
                                                        placeholder="Search …"
                                                        defaultValue=""
                                                    />
                                                    <button type="submit" className="search-submit" />
                                                </form>
                                            </aside>
                                            <aside className="widget widget-categories">
                                                <h2 className="widget-title">Categories</h2>
                                                <ul>
                                                    <li>
                                                        <span className="pbmit-cat-li">
                                                            <a  onClick={reloadBlogdetailPage}>fitness</a>
                                                            <span className="pbmit-brackets">( 3 )</span>
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="pbmit-cat-li">
                                                            <a  onClick={reloadBlogdetailPage}>Inspiration</a>
                                                            <span className="pbmit-brackets">( 1 )</span>
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="pbmit-cat-li">
                                                            <a  onClick={reloadBlogdetailPage}>Meditation</a>
                                                            <span className="pbmit-brackets">( 3 )</span>
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="pbmit-cat-li">
                                                            <a  onClick={reloadBlogdetailPage}>Motivation</a>
                                                            <span className="pbmit-brackets">( 2 )</span>
                                                        </span>
                                                    </li>
                                                </ul>
                                            </aside>
                                            <aside className="widget widget-recent-post">
                                                <h2 className="widget-title">Recent Post </h2>
                                                <ul className="recent-post-list">
                                                    <li className="recent-post-list-li">
                                                        <a className="recent-post-thum" onClick={reloadBlogdetailPage}>
                                                            <img
                                                                src="images/recent-post/blog-01.jpg"
                                                                className="img-fluid"
                                                                alt=""
                                                            />
                                                        </a>
                                                        <div className="pbmit-rpw-content">
                                                            <span className="pbmit-rpw-date">
                                                                <a onClick={reloadBlogdetailPage}>August 29, 2023</a>
                                                            </span>
                                                            <span className="pbmit-rpw-title">
                                                                <a onClick={reloadBlogdetailPage}>
                                                                    Which Yoga Class Is Best for Beginners?
                                                                </a>
                                                            </span>
                                                        </div>
                                                    </li>
                                                    <li className="recent-post-list-li">
                                                        <a className="recent-post-thum" onClick={reloadBlogdetailPage}>
                                                            <img
                                                                src="images/recent-post/blog-02.jpg"
                                                                className="img-fluid"
                                                                alt=""
                                                            />
                                                        </a>
                                                        <div className="pbmit-rpw-content">
                                                            <span className="pbmit-rpw-date">
                                                                <a onClick={reloadBlogdetailPage}>August 29, 2023</a>
                                                            </span>
                                                            <span className="pbmit-rpw-title">
                                                                <a onClick={reloadBlogdetailPage}>
                                                                    Spiritual Cleansing: 14 Rituals to Detox Your Soul
                                                                </a>
                                                            </span>
                                                        </div>
                                                    </li>
                                                    <li className="recent-post-list-li">
                                                        <a className="recent-post-thum" onClick={reloadBlogdetailPage}>
                                                            <img
                                                                src="images/recent-post/blog-03.jpg"
                                                                className="img-fluid"
                                                                alt=""
                                                            />
                                                        </a>
                                                        <div className="pbmit-rpw-content">
                                                            <span className="pbmit-rpw-date">
                                                                <a onClick={reloadBlogdetailPage}>August 29, 2023</a>
                                                            </span>
                                                            <span className="pbmit-rpw-title">
                                                                <a onClick={reloadBlogdetailPage}>
                                                                    Spiritual Awakening: Definition, Signs and Symptoms
                                                                </a>
                                                            </span>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </aside>
                                            <aside className="widget pbmit-service-ad">
                                                <div className="textwidget">
                                                    <div className="pbmit-service-ads">
                                                        <div className="pbmit-logo-img">
                                                            <img src="images/widget-img.png" alt="" />
                                                        </div>
                                                        <h4 className="pbmit-ads-title">
                                                            Book your yoga session
                                                        </h4>
                                                        <div className="pbmit-ads-desc">
                                                            <i className="pbmit-base-icon-phone-call-1" />
                                                            +(123) 1234-567-8901
                                                        </div>
                                                        <a className="pbmit-btn" href="#">
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
                                                                    Register now
                                                                </span>
                                                            </span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </aside>
                                            <aside className="widget widget-tag-cloud">
                                                <h3 className="widget-title">Tag Cloud</h3>
                                                <div className="tagcloud">
                                                    <a  onClick={reloadBlogdetailPage} className="tag-cloud-link">
                                                        fitness
                                                    </a>
                                                    <a  onClick={reloadBlogdetailPage} className="tag-cloud-link">
                                                        meditation
                                                    </a>
                                                    <a  onClick={reloadBlogdetailPage} className="tag-cloud-link">
                                                        peace
                                                    </a>
                                                </div>
                                            </aside>
                                        </aside>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* Blog Classic End */}
                    </div>
                    {/* Page Content End */}
                    {/* footer */}
                    <Footer />
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
                {/* Scroll To Top End */}
            </>

        </div>
    )
}

export default Blog
