import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Banner() {
    const [banners, setBanners] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/banner')
            .then(response => {
                setBanners(response.data.banner);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    return (
        <div>
            {banners.map(banner => (
                <div
                    key={banner._id}
                    className="pbmit-title-bar-wrapper"
                    style={{ backgroundImage: `url(${banner.imageUrl})` }}
                >
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
            ))}
        </div>
    );
}

export default Banner;
