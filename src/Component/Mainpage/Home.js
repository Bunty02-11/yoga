import React from 'react'
import Header from '../Layout/Header'
import Footer from '../Layout/Footer'

function Home() {
  return (
    <div>
        <div className="page-wrapper">
        {/* Header Main Area */}
        <header className="site-header header-style-3">
        <Header/>
          <div className="pbmit-slider-social">
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
          </div>
          <div className="pbmit-slider-area">
            {/* START Slider Demo 03 REVOLUTION SLIDER 6.6.17 */}
            <p className="rs-p-wp-fix" />
            <rs-module-wrap
              id="rev_slider_1_3_wrapper"
              data-alias="slider-demo-03"
              data-source="gallery"
              style={{
                visibility: "hidden",
                background: "transparent",
                padding: 0,
                margin: "0px auto",
                marginTop: 0,
                marginBottom: 0
              }}
            >
              <rs-module id="rev_slider_1_3" data-version="6.6.17">
                <rs-slides style={{ overflow: "hidden", position: "absolute" }}>
                  <rs-slide
                    style={{ position: "absolute" }}
                    data-key="rs-1"
                    data-title="Slide"
                    data-in="o:0;"
                    data-out="a:false;"
                  >
                    <img
                      src="revolution/images/transparent.png"
                      alt="Slide"
                      className="rev-slidebg tp-rs-img"
                      data-bg="c:#448c74;"
                      data-no-retina=""
                    />
                    {/*
                 */}
                    <rs-layer
                      id="slider-1-slide-1-layer-0"
                      data-type="image"
                      data-rsp_ch="on"
                      data-xy="xo:30px,30px,30px,29px;yo:708px,570px,433px,327px;"
                      data-text="w:normal;s:20,14,10,6;l:0,17,12,7;"
                      data-dim="w:197px,150px,120px,74px;h:79px,60px,48px,29px;"
                      data-vbility="t,t,t,f"
                      data-frame_0="x:-100%;"
                      data-frame_0_mask="u:t;"
                      data-frame_1="st:3530;sp:1000;sR:3530;"
                      data-frame_1_mask="u:t;"
                      data-frame_999="o:0;st:w;sR:4470;"
                      style={{ zIndex: 12 }}
                    >
                      <img
                        src="revolution/images/icon-img.png"
                        alt=""
                        className="tp-rs-img"
                        width={197}
                        height={79}
                        data-no-retina=""
                      />
                    </rs-layer>
                    {/*

								*/}
                    <rs-layer
                      id="slider-1-slide-1-layer-1"
                      data-type="text"
                      data-rsp_ch="on"
                      data-xy="xo:30px;y:m;yo:-206px,-144px,-74px,-27px;"
                      data-text="w:normal;s:12,12,12,10;l:24,24,20,17;ls:1px,0px,0px,0px;fw:500;"
                      data-padding="t:2,1,0,0;r:18,15,0,0;b:2,1,0,0;l:18,15,0,0;"
                      data-border="bos:solid,solid,none,none;boc:#ffffff;bow:1px,1px,1px,1px;bor:20px,20px,20px,20px;"
                      data-frame_0="sX:2;sY:2;"
                      data-frame_0_mask="u:t;"
                      data-frame_1="e:power2.out;st:600;sp:1200;sR:600;"
                      data-frame_1_mask="u:t;"
                      data-frame_999="o:0;st:w;sR:7200;"
                      style={{
                        zIndex: 8,
                        fontFamily: '"Sora"',
                        textTransform: "uppercase"
                      }}
                    >
                      Practice positive energy
                    </rs-layer>
                    {/*

								*/}
                    <rs-layer
                      id="slider-1-slide-1-layer-2"
                      data-type="text"
                      data-rsp_ch="on"
                      data-xy="xo:30px;y:m;yo:-84px,-58px,-7px,24px;"
                      data-text="w:normal;s:80,56,42,28;l:80,56,42,28;fw:500;"
                      data-frame_0="x:-100%;"
                      data-frame_0_mask="u:t;"
                      data-frame_1="y:-7px,-4px,-3px,-1px;st:1380;sp:1000;sR:1380;"
                      data-frame_1_mask="u:t;"
                      data-frame_999="o:0;st:8900;sR:6520;"
                      style={{ zIndex: 9, fontFamily: '"Sora"' }}
                    >
                      Relax your{" "}
                      <span>
                        mind
                        <br /> and body.
                      </span>
                    </rs-layer>
                    {/*

								*/}
                    <rs-layer
                      id="slider-1-slide-1-layer-3"
                      data-type="image"
                      data-rsp_ch="on"
                      data-xy="xo:690px,427px,326px,199px;y:m;yo:30px,40px,30px,40px;"
                      data-text="w:normal;s:20,14,10,6;l:0,17,12,7;"
                      data-dim="w:920px,600px,455px,280px;h:777px,507px,385px,237px;"
                      data-frame_0="sX:0.9;sY:0.9;"
                      data-frame_1="e:power2.inOut;st:190;sp:1000;"
                      data-frame_999="o:0;st:w;sR:7810;"
                      data-tloop="u:true;"
                      data-loop_0="y:-10;"
                      data-loop_999="y:10;sp:6000;e:sine.inOut;yym:t;"
                      style={{ zIndex: 7 }}
                    >
                      <img
                        src="revolution/images/demo3-slider-1.png"
                        alt=""
                        className="tp-rs-img"
                        width={920}
                        height={777}
                        data-no-retina=""
                      />
                    </rs-layer>
                    {/*

								*/}
                    <rs-layer
                      id="slider-1-slide-1-layer-5"
                      data-type="text"
                      data-rsp_ch="on"
                      data-xy="xo:30px,30px,34px,40px;y:m;yo:57px,39px,29px,17px;"
                      data-text="w:normal;s:18,13,9,5;l:30,22,16,9;"
                      data-dim="w:675px,473px,359px,221px;"
                      data-vbility="t,t,f,f"
                      data-padding="t:20,14,11,7;"
                      data-border="bos:solid;boc:rgba(255, 255, 255, 0.5);bow:1px,0,0,0;"
                      data-frame_0="sX:0.9;sY:0.9;"
                      data-frame_1="e:power2.inOut;st:1950;sp:1000;sR:1950;"
                      data-frame_999="o:0;st:w;sR:6050;"
                      style={{ zIndex: 10, fontFamily: '"Roboto"' }}
                    >
                      You cannot always control what goes on outside, but you can
                      always control <br />
                      what goes on inside! Happy Yoga Day.
                    </rs-layer>
                    {/*

								*/}
                    <a
                      id="slider-1-slide-1-layer-6"
                      className="rs-layer pbmit-rev-btn rev-btn"
                      href="contact-us.html"
                      target="_self"
                      data-type="button"
                      data-color="#000000"
                      data-rsp_ch="on"
                      data-xy="xo:30px;y:m;yo:159px,121px,75px,94px;"
                      data-text="w:normal;s:12;l:36,36,36,34;fw:500;"
                      data-dim="minh:0px,none,none,none;"
                      data-padding="t:12,12,10,6;r:35,35,30,25;b:12,12,10,6;l:35,35,30,25;"
                      data-border="bor:30px,30px,30px,30px;"
                      data-frame_1="e:power4.inOut;st:2490;sp:1500;sR:2490;"
                      data-frame_999="o:0;st:w;sR:5010;"
                      data-frame_hover="c:#fff;bgc:#000;bor:30px,30px,30px,30px;sp:600ms;"
                      style={{
                        zIndex: 11,
                        backgroundColor: "rgba(255,255,255,1)",
                        fontFamily: '"Sora"',
                        textTransform: "uppercase"
                      }}
                    >
                      Contact Us{" "}
                      <span className="pbmit-button-icon-wrapper">
                        <span className="pbmit-button-icon">
                          <i className="pbmit-base-icon-black-arrow-1" />
                        </span>
                      </span>
                    </a>
                    {/*

								*/}
                    <rs-layer
                      id="slider-1-slide-1-layer-7"
                      data-type="text"
                      data-rsp_ch="on"
                      data-xy="xo:261px,198px,166px,113px;yo:729px,585px,444px,334px;"
                      data-text="w:normal;s:17,15,12,7;l:24,20,16,9;fw:500;"
                      data-vbility="t,t,t,f"
                      data-frame_0="sX:2;sY:2;"
                      data-frame_0_mask="u:t;"
                      data-frame_1="e:power2.out;st:4190;sp:1000;sR:4190;"
                      data-frame_1_mask="u:t;"
                      data-frame_999="o:0;st:w;sR:3810;"
                      style={{ zIndex: 13, fontFamily: '"Sora"' }}
                    >
                      More than
                      <span className="pbmit-color-secondarycolor">
                        9.5k members
                      </span>{" "}
                      are <br />
                      connected with us
                    </rs-layer>
                    {/*

								*/}
                    <rs-layer
                      id="slider-1-slide-1-layer-8"
                      data-type="image"
                      data-rsp_ch="on"
                      data-text="w:normal;s:20,14,10,6;l:0,17,12,7;"
                      data-dim="w:['100%','100%','100%','100%'];h:['100%','100%','100%','100%'];"
                      data-basealign="slide"
                      data-frame_999="o:0;st:w;sR:8700;"
                      style={{ zIndex: 5 }}
                    >
                      <img
                        src="revolution/images/slider-pattern-1536x761.png"
                        alt=""
                        className="tp-rs-img"
                        width={1536}
                        height={761}
                        data-c="cover-proportional"
                        data-no-retina=""
                      />
                    </rs-layer>
                    {/*
                 */}{" "}
                  </rs-slide>
                  <rs-slide
                    style={{ position: "absolute" }}
                    data-key="rs-2"
                    data-title="Slide"
                    data-in="o:0;"
                    data-out="a:false;"
                  >
                    <img
                      src="revolution/images/transparent.png"
                      alt="Slide"
                      className="rev-slidebg tp-rs-img"
                      data-bg="c:#448c74;"
                      data-no-retina=""
                    />
                    {/*
                 */}
                    <rs-layer
                      id="slider-1-slide-2-layer-0"
                      data-type="image"
                      data-rsp_ch="on"
                      data-xy="xo:30px,22px,16px,9px;yo:708px,570px,418px,327px;"
                      data-text="w:normal;s:20,14,10,6;l:0,17,12,7;"
                      data-dim="w:197px,150px,120px,74px;h:79px,60px,48px,29px;"
                      data-vbility="t,t,t,f"
                      data-frame_0="x:-100%;"
                      data-frame_0_mask="u:t;"
                      data-frame_1="st:3530;sp:1000;sR:3530;"
                      data-frame_1_mask="u:t;"
                      data-frame_999="o:0;st:w;sR:4470;"
                      style={{ zIndex: 12 }}
                    >
                      <img
                        src="revolution/images/icon-img.png"
                        alt=""
                        className="tp-rs-img"
                        width={197}
                        height={79}
                        data-no-retina=""
                      />
                    </rs-layer>
                    {/*

								*/}
                    <rs-layer
                      id="slider-1-slide-2-layer-1"
                      data-type="text"
                      data-rsp_ch="on"
                      data-xy="xo:30px,22px,16px,9px;y:m;yo:-206px,-144px,-89px,-27px;"
                      data-text="w:normal;s:12,12,9,8;l:24,24,18,15;ls:1px,0px,0px,0px;fw:500;"
                      data-padding="t:2,1,1,1;r:18,15,11,7;b:2,1,1,1;l:18,15,11,7;"
                      data-border="bos:solid;boc:#ffffff;bow:1px,1px,1px,1px;bor:20px,20px,20px,20px;"
                      data-frame_0="sX:2;sY:2;"
                      data-frame_0_mask="u:t;"
                      data-frame_1="e:power2.out;st:600;sp:1200;sR:600;"
                      data-frame_1_mask="u:t;"
                      data-frame_999="o:0;st:w;sR:7200;"
                      style={{
                        zIndex: 8,
                        fontFamily: '"Sora"',
                        textTransform: "uppercase"
                      }}
                    >
                      Practice positive energy
                    </rs-layer>
                    {/*

								*/}
                    <rs-layer
                      id="slider-1-slide-2-layer-2"
                      data-type="text"
                      data-rsp_ch="on"
                      data-xy="xo:30px,22px,16px,9px;y:m;yo:-84px,-58px,-22px,24px;"
                      data-text="w:normal;s:80,56,42,28;l:80,56,42,28;fw:500;"
                      data-frame_0="x:-100%;"
                      data-frame_0_mask="u:t;"
                      data-frame_1="y:-7px,-4px,-3px,-1px;st:1380;sp:1000;sR:1380;"
                      data-frame_1_mask="u:t;"
                      data-frame_999="o:0;st:8900;sR:6520;"
                      style={{ zIndex: 9, fontFamily: '"Sora"' }}
                    >
                      Relax your{" "}
                      <span>
                        mind
                        <br /> and body.
                      </span>
                    </rs-layer>
                    {/*

								*/}
                    <rs-layer
                      id="slider-1-slide-2-layer-3"
                      data-type="image"
                      data-rsp_ch="on"
                      data-xy="x:l,l,r,r;xo:690px,427px,0,0;y:m;yo:0,30px,30px,40px;"
                      data-text="w:normal;s:20,14,10,6;l:0,17,12,7;"
                      data-dim="w:920px,600px,400px,246px;h:626px,408px,272px,167px;"
                      data-blendmode="luminosity"
                      data-frame_0="sX:0.9;sY:0.9;"
                      data-frame_1="e:power2.inOut;st:190;sp:1000;"
                      data-frame_999="o:0;st:w;sR:7810;"
                      data-tloop="u:true;"
                      data-loop_0="y:-10;"
                      data-loop_999="y:10;sp:6000;e:sine.inOut;yym:t;"
                      style={{ zIndex: 7 }}
                    >
                      <img
                        src="revolution/images/demo3-slider-2.png"
                        alt=""
                        className="tp-rs-img"
                        width={956}
                        height={650}
                        data-no-retina=""
                      />
                    </rs-layer>
                    {/*

								*/}
                    <rs-layer
                      id="slider-1-slide-2-layer-5"
                      data-type="text"
                      data-rsp_ch="on"
                      data-xy="xo:30px,22px,16px,9px;y:m;yo:57px,39px,29px,17px;"
                      data-text="w:normal;s:18,13,9,5;l:30,22,16,9;"
                      data-dim="w:675px,473px,359px,221px;"
                      data-vbility="t,t,f,f"
                      data-padding="t:20,14,11,7;"
                      data-border="bos:solid;boc:rgba(255, 255, 255, 0.5);bow:1px,0,0,0;"
                      data-frame_0="sX:0.9;sY:0.9;"
                      data-frame_1="e:power2.inOut;st:1950;sp:1000;sR:1950;"
                      data-frame_999="o:0;st:w;sR:6050;"
                      style={{ zIndex: 10, fontFamily: '"Roboto"' }}
                    >
                      You cannot always control what goes on outside, but you can
                      always control <br />
                      what goes on inside! Happy Yoga Day.
                    </rs-layer>
                    {/*

								*/}
                    <a
                      id="slider-1-slide-2-layer-6"
                      className="rs-layer pbmit-rev-btn rev-btn"
                      href="contact-us.html"
                      target="_self"
                      data-type="button"
                      data-color="#000000"
                      data-rsp_ch="on"
                      data-xy="xo:30px,22px,16px,9px;y:m;yo:159px,121px,60px,94px;"
                      data-text="w:normal;s:12;l:36,36,36,34;fw:500;"
                      data-dim="minh:0px,none,none,none;"
                      data-padding="t:12,12,10,6;r:35,35,30,25;b:12,12,10,6;l:35,35,30,25;"
                      data-border="bor:30px,30px,30px,30px;"
                      data-frame_1="e:power4.inOut;st:2490;sp:1500;sR:2490;"
                      data-frame_999="o:0;st:w;sR:5010;"
                      data-frame_hover="c:#fff;bgc:#000;bor:30px,30px,30px,30px;sp:600ms;"
                      style={{
                        zIndex: 11,
                        backgroundColor: "rgba(255,255,255,1)",
                        fontFamily: '"Sora"',
                        textTransform: "uppercase"
                      }}
                    >
                      Contact Us{" "}
                      <span className="pbmit-button-icon-wrapper">
                        <span className="pbmit-button-icon">
                          <i className="pbmit-base-icon-black-arrow-1" />
                        </span>
                      </span>
                    </a>
                    {/*

								*/}
                    <rs-layer
                      id="slider-1-slide-2-layer-7"
                      data-type="text"
                      data-rsp_ch="on"
                      data-xy="xo:261px,190px,152px,93px;yo:729px,585px,429px,334px;"
                      data-text="w:normal;s:17,15,12,7;l:24,20,16,9;fw:500;"
                      data-vbility="t,t,t,f"
                      data-frame_0="sX:2;sY:2;"
                      data-frame_0_mask="u:t;"
                      data-frame_1="e:power2.out;st:4190;sp:1000;sR:4190;"
                      data-frame_1_mask="u:t;"
                      data-frame_999="o:0;st:w;sR:3810;"
                      style={{ zIndex: 13, fontFamily: '"Sora"' }}
                    >
                      More than
                      <span className="pbmit-color-secondarycolor">
                        9.5k members
                      </span>{" "}
                      are <br />
                      connected with us
                    </rs-layer>
                    {/*

								*/}
                    <rs-layer
                      id="slider-1-slide-2-layer-8"
                      data-type="image"
                      data-rsp_ch="on"
                      data-text="w:normal;s:20,14,10,6;l:0,17,12,7;"
                      data-dim="w:['100%','100%','100%','100%'];h:['100%','100%','100%','100%'];"
                      data-basealign="slide"
                      data-frame_999="o:0;st:w;sR:8700;"
                      style={{ zIndex: 6 }}
                    >
                      <img
                        src="revolution/images/slider-pattern.png"
                        alt=""
                        className="tp-rs-img"
                        width={1900}
                        height={941}
                        data-c="cover-proportional"
                        data-no-retina=""
                      />
                    </rs-layer>
                    {/*
                 */}{" "}
                  </rs-slide>
                  <rs-slide
                    style={{ position: "absolute" }}
                    data-key="rs-3"
                    data-title="Slide"
                    data-in="o:0;"
                    data-out="a:false;"
                  >
                    <img
                      src="revolution/images/transparent.png"
                      alt="Slide"
                      className="rev-slidebg tp-rs-img"
                      data-bg="c:#448c74;"
                      data-no-retina=""
                    />
                    {/*
                 */}
                    <rs-layer
                      id="slider-1-slide-3-layer-0"
                      data-type="image"
                      data-rsp_ch="on"
                      data-xy="xo:30px,22px,16px,9px;yo:708px,570px,418px,327px;"
                      data-text="w:normal;s:20,14,10,6;l:0,17,12,7;"
                      data-dim="w:197px,150px,120px,74px;h:79px,60px,48px,29px;"
                      data-vbility="t,t,t,f"
                      data-frame_0="x:-100%;"
                      data-frame_0_mask="u:t;"
                      data-frame_1="st:3530;sp:1000;sR:3530;"
                      data-frame_1_mask="u:t;"
                      data-frame_999="o:0;st:w;sR:4470;"
                      style={{ zIndex: 12 }}
                    >
                      <img
                        src="revolution/images/icon-img.png"
                        alt=""
                        className="tp-rs-img"
                        width={197}
                        height={79}
                        data-no-retina=""
                      />
                    </rs-layer>
                    {/*

								*/}
                    <rs-layer
                      id="slider-1-slide-3-layer-1"
                      data-type="text"
                      data-rsp_ch="on"
                      data-xy="xo:30px,22px,16px,9px;y:m;yo:-206px,-144px,-89px,-54px;"
                      data-text="w:normal;s:12,12,9,8;l:24,24,18,15;ls:1px,0px,0px,0px;fw:500;"
                      data-padding="t:2,1,1,1;r:18,15,11,7;b:2,1,1,1;l:18,15,11,7;"
                      data-border="bos:solid;boc:#ffffff;bow:1px,1px,1px,1px;bor:20px,20px,20px,20px;"
                      data-frame_0="sX:2;sY:2;"
                      data-frame_0_mask="u:t;"
                      data-frame_1="e:power2.out;st:820;sp:1200;sR:820;"
                      data-frame_1_mask="u:t;"
                      data-frame_999="o:0;st:w;sR:6980;"
                      style={{
                        zIndex: 8,
                        fontFamily: '"Sora"',
                        textTransform: "uppercase"
                      }}
                    >
                      Practice positive energy
                    </rs-layer>
                    {/*

								*/}
                    <rs-layer
                      id="slider-1-slide-3-layer-2"
                      data-type="text"
                      data-rsp_ch="on"
                      data-xy="xo:30px,22px,16px,9px;y:m;yo:-84px,-58px,-22px,-16px;"
                      data-text="w:normal;s:80,56,42,28;l:80,56,42,28;fw:500;"
                      data-frame_0="x:-100%;"
                      data-frame_0_mask="u:t;"
                      data-frame_1="y:-7px,-4px,-3px,-1px;st:1380;sp:1000;sR:1380;"
                      data-frame_1_mask="u:t;"
                      data-frame_999="o:0;st:8900;sR:6520;"
                      style={{ zIndex: 9, fontFamily: '"Sora"' }}
                    >
                      Relax your{" "}
                      <span>
                        mind
                        <br /> and body.
                      </span>
                    </rs-layer>
                    {/*

								*/}
                    <rs-layer
                      id="slider-1-slide-3-layer-3"
                      data-type="image"
                      data-rsp_ch="on"
                      data-xy="xo:690px,427px,324px,199px;yo:92px,154px,117px,122px;"
                      data-text="w:normal;s:20,14,10,6;l:0,17,12,7;"
                      data-dim="w:920px,600px,455px,280px;h:777px,507px,385px,237px;"
                      data-frame_0="sX:0.9;sY:0.9;"
                      data-frame_1="e:power2.inOut;st:190;sp:1000;"
                      data-frame_999="o:0;st:w;sR:7810;"
                      data-tloop="u:true;"
                      data-loop_0="y:-10;"
                      data-loop_999="y:10;sp:6000;e:sine.inOut;yym:t;"
                      style={{ zIndex: 7 }}
                    >
                      <img
                        src="revolution/images/demo3-slider-3.png"
                        alt=""
                        className="tp-rs-img"
                        width={920}
                        height={777}
                        data-no-retina=""
                      />
                    </rs-layer>
                    {/*

								*/}
                    <rs-layer
                      id="slider-1-slide-3-layer-5"
                      data-type="text"
                      data-rsp_ch="on"
                      data-xy="xo:30px,22px,16px,9px;y:m;yo:57px,39px,29px,17px;"
                      data-text="w:normal;s:18,13,9,5;l:30,22,16,9;"
                      data-dim="w:675px,473px,359px,221px;"
                      data-vbility="t,t,f,f"
                      data-padding="t:20,14,11,7;"
                      data-border="bos:solid;boc:rgba(255, 255, 255, 0.5);bow:1px,0,0,0;"
                      data-frame_0="sX:0.9;sY:0.9;"
                      data-frame_1="e:power2.inOut;st:1950;sp:1000;sR:1950;"
                      data-frame_999="o:0;st:w;sR:6050;"
                      style={{ zIndex: 10, fontFamily: '"Roboto"' }}
                    >
                      You cannot always control what goes on outside, but you can
                      always control <br />
                      what goes on inside! Happy Yoga Day.
                    </rs-layer>
                    {/*

								*/}
                    <a
                      id="slider-1-slide-3-layer-6"
                      className="rs-layer pbmit-rev-btn rev-btn"
                      href="contact-us.html"
                      target="_self"
                      data-type="button"
                      data-color="#000000"
                      data-rsp_ch="on"
                      data-xy="xo:30px,22px,16px,9px;y:m;yo:159px,121px,60px,54px;"
                      data-text="w:normal;s:12;l:36,36,36,34;fw:500;"
                      data-dim="minh:0px,none,none,none;"
                      data-padding="t:12,12,10,6;r:35,35,30,25;b:12,12,10,6;l:35,35,30,25;"
                      data-border="bor:30px,30px,30px,30px;"
                      data-frame_1="e:power4.inOut;st:2490;sp:1500;sR:2490;"
                      data-frame_999="o:0;st:w;sR:5010;"
                      data-frame_hover="c:#fff;bgc:#000;bor:30px,30px,30px,30px;sp:600ms;"
                      style={{
                        zIndex: 11,
                        backgroundColor: "rgba(255,255,255,1)",
                        fontFamily: '"Sora"',
                        textTransform: "uppercase"
                      }}
                    >
                      Contact Us{" "}
                      <span className="pbmit-button-icon-wrapper">
                        <span className="pbmit-button-icon">
                          <i className="pbmit-base-icon-black-arrow-1" />
                        </span>
                      </span>
                    </a>
                    {/*

								*/}
                    <rs-layer
                      id="slider-1-slide-3-layer-7"
                      data-type="text"
                      data-rsp_ch="on"
                      data-xy="xo:261px,190px,152px,93px;yo:729px,585px,429px,334px;"
                      data-text="w:normal;s:17,15,12,7;l:24,20,16,9;fw:500;"
                      data-vbility="t,t,t,f"
                      data-frame_0="sX:2;sY:2;"
                      data-frame_0_mask="u:t;"
                      data-frame_1="e:power2.out;st:4190;sp:1000;sR:4190;"
                      data-frame_1_mask="u:t;"
                      data-frame_999="o:0;st:w;sR:3810;"
                      style={{ zIndex: 13, fontFamily: '"Sora"' }}
                    >
                      More than
                      <span className="pbmit-color-secondarycolor">
                        9.5k members
                      </span>{" "}
                      are <br />
                      connected with us
                    </rs-layer>
                    {/*

								*/}
                    <rs-layer
                      id="slider-1-slide-3-layer-8"
                      data-type="image"
                      data-rsp_ch="on"
                      data-text="w:normal;s:20,14,10,6;l:0,17,12,7;"
                      data-dim="w:['100%','100%','100%','100%'];h:['100%','100%','100%','100%'];"
                      data-basealign="slide"
                      data-frame_999="o:0;st:w;sR:8700;"
                      style={{ zIndex: 6 }}
                    >
                      <img
                        src="revolution/images/slider-pattern.png"
                        alt=""
                        className="tp-rs-img"
                        width={1900}
                        height={941}
                        data-c="cover-proportional"
                        data-no-retina=""
                      />
                    </rs-layer>
                    {/*
                 */}{" "}
                  </rs-slide>
                </rs-slides>
              </rs-module>
            </rs-module-wrap>
            {/* END REVOLUTION SLIDER */}
          </div>
        </header>
        {/* Header Main Area End Here */}
        {/* page content */}
        <div className="page-content pbmit-bg-color-light">
          {/* Marquee */}
          <section className="marquee-section_three">
            <div className="container-fluid p-0">
              <div className="swiper-slider marquee">
                <div className="swiper-wrapper">
                  <article className="pbmit-marquee-effect-style-1 swiper-slide">
                    <div className="pbmit-tag-wrapper">
                      <h2
                        className="pbmit-element-title"
                        data-text="Ashtanga vinyasa yoga"
                      >
                        Ashtanga vinyasa yoga
                      </h2>
                    </div>
                  </article>
                  <article className="pbmit-marquee-effect-style-1 swiper-slide">
                    <div className="pbmit-tag-wrapper">
                      <h2 className="pbmit-element-title" data-text="Iyengar Yoga">
                        Iyengar Yoga
                      </h2>
                    </div>
                  </article>
                  <article className="pbmit-marquee-effect-style-1 swiper-slide">
                    <div className="pbmit-tag-wrapper">
                      <h2 className="pbmit-element-title" data-text="Hot yoga">
                        Hot yoga
                      </h2>
                    </div>
                  </article>
                  <article className="pbmit-marquee-effect-style-1 swiper-slide">
                    <div className="pbmit-tag-wrapper">
                      <h2
                        className="pbmit-element-title"
                        data-text="Kundalini yoga"
                      >
                        Kundalini yoga
                      </h2>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </section>
          {/* Marquee end */}
          {/* Tab Start */}
          <section >
            <div className="container">
              <div className="position-relative">
                <div className="pbmit-heading-subheading animation-style2">
                  <h4 className="pbmit-subtitle">motivation</h4>
                  <h2 className="pbmit-title">Let's change your life</h2>
                </div>
                <div className="tab_btn">
                  <a
                    className="pbmit-btn pbmit-btn-outline"
                    href="about-us.html"
                    data-magnetic=""
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
                      <span className="pbmit-button-text">View All</span>
                    </span>
                  </a>
                </div>
              </div>
              <div className="pbmit-tab">
                <ul className="nav nav-tabs" role="tablist">
                  <li className="nav-item" role="presentation">
                    <a
                      className="nav-link active"
                      data-bs-toggle="tab"
                      href="#tab-2-1"
                      aria-selected="true"
                      role="tab"
                    >
                      <span>Flow for agility</span>
                      <i className="pbmit-base-icon-black-arrow-1" />
                    </a>
                  </li>
                  <li className="nav-item" role="presentation">
                    <a
                      className="nav-link"
                      data-bs-toggle="tab"
                      href="#tab-2-2"
                      aria-selected="false"
                      role="tab"
                      tabIndex={-1}
                    >
                      <span>Market Strategy</span>
                      <i className="pbmit-base-icon-black-arrow-1" />
                    </a>
                  </li>
                  <li className="nav-item" role="presentation">
                    <a
                      className="nav-link"
                      data-bs-toggle="tab"
                      href="#tab-2-3"
                      aria-selected="false"
                      role="tab"
                      tabIndex={-1}
                    >
                      <span>Market Strategy</span>
                      <i className="pbmit-base-icon-black-arrow-1" />
                    </a>
                  </li>
                  <li className="nav-item" role="presentation">
                    <a
                      className="nav-link"
                      data-bs-toggle="tab"
                      href="#tab-2-4"
                      aria-selected="false"
                      role="tab"
                      tabIndex={-1}
                    >
                      <span>Market Strategy</span>
                      <i className="pbmit-base-icon-black-arrow-1" />
                    </a>
                  </li>
                </ul>
                <div className="tab-content">
                  <div
                    className="tab-pane show active"
                    id="tab-2-1"
                    role="tabpanel"
                  >
                    <div className="pbmit-column-inner">
                      <div className="row g-0">
                        <div className="col-md-12 col-xl-6 pbmit-tab-img">
                          <img
                            src="images/homepage-3/1.jpg"
                            className="img-fluid"
                            alt=""
                          />
                        </div>
                        <div className="col-md-12 col-xl-6 pbmit-tab-list">
                          <h2>We are an awesome team of yoga lovers</h2>
                          <div>
                            The best yoga and meditation practices, adapted at a
                            high level to the needs of the modern pace of life There
                            are many variatio ns of passage of lorem Ipsum
                            available.
                          </div>
                          <ul className="list-group list-group-borderless">
                            <li className="list-group-item">
                              <span className="pbmit-icon-list-icon">
                                <i
                                  aria-hidden="true"
                                  className="pbmit-base-icon-check"
                                />
                              </span>
                              <span className="pbmit-icon-list-text">
                                Effective exercises
                              </span>
                            </li>
                            <li className="list-group-item">
                              <span className="pbmit-icon-list-icon">
                                <i
                                  aria-hidden="true"
                                  className="pbmit-base-icon-check"
                                />
                              </span>
                              <span className="pbmit-icon-list-text">
                                Body condition improving
                              </span>
                            </li>
                            <li className="list-group-item">
                              <span className="pbmit-icon-list-icon">
                                <i
                                  aria-hidden="true"
                                  className="pbmit-base-icon-check"
                                />
                              </span>
                              <span className="pbmit-icon-list-text">
                                Mood &amp; feeling control
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane" id="tab-2-2" role="tabpanel">
                    <div className="pbmit-column-inner">
                      <div className="row g-0">
                        <div className="col-md-12 col-xl-6 pbmit-tab-img">
                          <img
                            src="images/homepage-3/2.jpg"
                            className="img-fluid"
                            alt=""
                          />
                        </div>
                        <div className="col-md-12 col-xl-6 pbmit-tab-list">
                          <h2>We don’t set out to save the world</h2>
                          <div>
                            The best yoga and meditation practices, adapted at a
                            high level to the needs of the modern pace of life There
                            are many variatio ns of passage of lorem Ipsum
                            available.
                          </div>
                          <ul className="list-group list-group-borderless">
                            <li className="list-group-item">
                              <span className="pbmit-icon-list-icon">
                                <i
                                  aria-hidden="true"
                                  className="pbmit-base-icon-check"
                                />
                              </span>
                              <span className="pbmit-icon-list-text">
                                Discover a calmer mind
                              </span>
                            </li>
                            <li className="list-group-item">
                              <span className="pbmit-icon-list-icon">
                                <i
                                  aria-hidden="true"
                                  className="pbmit-base-icon-check"
                                />
                              </span>
                              <span className="pbmit-icon-list-text">
                                Increase Flexibility
                              </span>
                            </li>
                            <li className="list-group-item">
                              <span className="pbmit-icon-list-icon">
                                <i
                                  aria-hidden="true"
                                  className="pbmit-base-icon-check"
                                />
                              </span>
                              <span className="pbmit-icon-list-text">
                                Find relief from pain
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane" id="tab-2-3" role="tabpanel">
                    <div className="pbmit-column-inner">
                      <div className="row g-0">
                        <div className="col-md-12 col-xl-6 pbmit-tab-img">
                          <img
                            src="images/homepage-3/3.jpg"
                            className="img-fluid"
                            alt=""
                          />
                        </div>
                        <div className="col-md-12 col-xl-6 pbmit-tab-list">
                          <h2>
                            The more we grow in love &amp; virtue &amp; holiness
                          </h2>
                          <div>
                            The best yoga and meditation practices, adapted at a
                            high level to the needs of the modern pace of life There
                            are many variatio ns of passage of lorem Ipsum
                            available.
                          </div>
                          <ul className="list-group list-group-borderless">
                            <li className="list-group-item">
                              <span className="pbmit-icon-list-icon">
                                <i
                                  aria-hidden="true"
                                  className="pbmit-base-icon-check"
                                />
                              </span>
                              <span className="pbmit-icon-list-text">
                                Hostility decreases
                              </span>
                            </li>
                            <li className="list-group-item">
                              <span className="pbmit-icon-list-icon">
                                <i
                                  aria-hidden="true"
                                  className="pbmit-base-icon-check"
                                />
                              </span>
                              <span className="pbmit-icon-list-text">
                                Well-being increases
                              </span>
                            </li>
                            <li className="list-group-item">
                              <span className="pbmit-icon-list-icon">
                                <i
                                  aria-hidden="true"
                                  className="pbmit-base-icon-check"
                                />
                              </span>
                              <span className="pbmit-icon-list-text">
                                Self-acceptance increase
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane" id="tab-2-4" role="tabpanel">
                    <div className="pbmit-column-inner">
                      <div className="row g-0">
                        <div className="col-md-12 col-xl-6 pbmit-tab-img">
                          <img
                            src="images/homepage-3/4.jpg"
                            className="img-fluid"
                            alt=""
                          />
                        </div>
                        <div className="col-md-12 col-xl-6 pbmit-tab-list">
                          <h2>
                            Truly, the wise proclaim that love is the only path
                          </h2>
                          <div>
                            The best yoga and meditation practices, adapted at a
                            high level to the needs of the modern pace of life There
                            are many variatio ns of passage of lorem Ipsum
                            available.
                          </div>
                          <ul className="list-group list-group-borderless">
                            <li className="list-group-item">
                              <span className="pbmit-icon-list-icon">
                                <i
                                  aria-hidden="true"
                                  className="pbmit-base-icon-check"
                                />
                              </span>
                              <span className="pbmit-icon-list-text">
                                Concentration improves
                              </span>
                            </li>
                            <li className="list-group-item">
                              <span className="pbmit-icon-list-icon">
                                <i
                                  aria-hidden="true"
                                  className="pbmit-base-icon-check"
                                />
                              </span>
                              <span className="pbmit-icon-list-text">
                                Improve posture
                              </span>
                            </li>
                            <li className="list-group-item">
                              <span className="pbmit-icon-list-icon">
                                <i
                                  aria-hidden="true"
                                  className="pbmit-base-icon-check"
                                />
                              </span>
                              <span className="pbmit-icon-list-text">
                                Depth perception improves
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Tab end */}
          {/* Ihbox Start */}
          <section className="ihbox-section_three">
            <div className="container">
              <div className="row">
                <div className="col-md-6 col-xl-4">
                  <div className="pbmit-ihbox-style-7">
                    <div className="pbmit-ihbox-box">
                      <div className="pbmit-icon-wrapper d-flex align-items-center">
                        <div className="pbmit-ihbox-icon">
                          <div className="pbmit-ihbox-icon-wrapper">
                            <div className="pbmit-icon-wrapper pbmit-icon-type-icon">
                              <i className="pbmit-yoge-icon pbmit-yoge-icon-yoga-pose" />
                            </div>
                          </div>
                        </div>
                        <h2 className="pbmit-element-title">5+ years experience</h2>
                      </div>
                      <div className="pbmit-content-wrapper">
                        <div className="pbmit-heading-desc">
                          Nullam porta enim vel tellus commodo, eget laoreet odio
                          ultrices.
                        </div>
                      </div>
                    </div>
                    <div className="pbmit-ihbox-box-number">01</div>
                  </div>
                </div>
                <div className="col-md-6 col-xl-4">
                  <div className="pbmit-ihbox-style-7">
                    <div className="pbmit-ihbox-box">
                      <div className="pbmit-icon-wrapper d-flex align-items-center">
                        <div className="pbmit-ihbox-icon">
                          <div className="pbmit-ihbox-icon-wrapper">
                            <div className="pbmit-icon-wrapper pbmit-icon-type-icon">
                              <i className="pbmit-yoge-icon pbmit-yoge-icon-yoga-pose-4" />
                            </div>
                          </div>
                        </div>
                        <h2 className="pbmit-element-title">Personal approach</h2>
                      </div>
                      <div className="pbmit-content-wrapper">
                        <div className="pbmit-heading-desc">
                          Nullam porta enim vel tellus commodo, eget laoreet odio
                          ultrices.
                        </div>
                      </div>
                    </div>
                    <div className="pbmit-ihbox-box-number">02</div>
                  </div>
                </div>
                <div className="col-md-6 col-xl-4">
                  <div className="pbmit-ihbox-style-7">
                    <div className="pbmit-ihbox-box">
                      <div className="pbmit-icon-wrapper d-flex align-items-center">
                        <div className="pbmit-ihbox-icon">
                          <div className="pbmit-ihbox-icon-wrapper">
                            <div className="pbmit-icon-wrapper pbmit-icon-type-icon">
                              <i className="pbmit-yoge-icon pbmit-yoge-icon-yoga-pose-9" />
                            </div>
                          </div>
                        </div>
                        <h2 className="pbmit-element-title">World class gurus</h2>
                      </div>
                      <div className="pbmit-content-wrapper">
                        <div className="pbmit-heading-desc">
                          Nullam porta enim vel tellus commodo, eget laoreet odio
                          ultrices.
                        </div>
                      </div>
                    </div>
                    <div className="pbmit-ihbox-box-number">03</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Ihbox End */}
          {/* Service Start */}
          <section className="section-xl pbmit-extend-animation service-three_bg pbmit-bg-color-global">
            <div className="container">
              <div className="position-relative">
                <div className="pbmit-heading-subheading text-white animation-style2">
                  <h4 className="pbmit-subtitle">our Services</h4>
                  <h2 className="pbmit-title">Our main services</h2>
                </div>
                <div className="service-three_btn">
                  <a
                    className="pbmit-btn pbmit-btn-outline"
                    href="service-details.html"
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
                      <span className="pbmit-button-text">View All</span>
                    </span>
                  </a>
                </div>
              </div>
              <div className="pbmit-element-service-style-3">
                <div className="pbmit-main-hover-slider d-flex align-items-center">
                  <div className="swiper-hover-slide-images col-md-5 col-lg-5">
                    <div className="swiper pbmit-hover-image">
                      <div className="swiper-wrapper">
                        <div className="swiper-slide">
                          <div className="pbmit-featured-img-wrapper">
                            <div className="pbmit-featured-wrapper">
                              <img
                                src="images/homepage-3/service/service-img-01.jpg"
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="pbmit-featured-img-wrapper">
                            <div className="pbmit-featured-wrapper">
                              <img
                                src="images/homepage-3/service/service-img-02.jpg"
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="pbmit-featured-img-wrapper">
                            <div className="pbmit-featured-wrapper">
                              <img
                                src="images/homepage-3/service/service-img-03.jpg"
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="pbmit-featured-img-wrapper">
                            <div className="pbmit-featured-wrapper">
                              <img
                                src="images/homepage-3/service/service-img-04.jpg"
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-hover-slide-nav col-md-7 col-lg-7">
                    <ul className="pbmit-hover-inner">
                      <li>
                        <span className="pbmit-service-icon">
                          <i className="pbmit-yoge-icon pbmit-yoge-icon-yoga-pose" />
                        </span>
                        <h3
                          className="pbmit-title-data-hover d-flex align-items-center"
                          data-text="Ardha Chakrasana"
                        >
                          <span className="pbmit-text-content">
                            <span className="pbmit-serv-cat">
                              <a href="service-details.html" rel="tag">
                                DJ Yoga Trainer
                              </a>
                            </span>
                            <a
                              className="pbmit-title-inner"
                              href="service-details.html"
                            >
                              <span>Ardha Chakrasana</span>
                            </a>
                          </span>
                          <span className="pbmit-featured-img-wrapper">
                            <span className="pbmit-featured-wrapper">
                              <img
                                src="images/homepage-3/service/service-img-01.jpg"
                                className="img-fluid"
                                alt=""
                              />
                            </span>
                          </span>
                          <span className="pbmit-service-btn">
                            <a href="service-details.html">
                              <span className="pbmit-button-icon-wrapper">
                                <span className="pbmit-button-icon">
                                  <i className="pbmit-base-icon-black-arrow-1" />
                                </span>
                              </span>
                            </a>
                          </span>
                        </h3>
                        <a className="pbmit-link" href="service-details.html" />
                      </li>
                      <li>
                        <span className="pbmit-service-icon">
                          <i className="pbmit-yoge-icon pbmit-yoge-icon-yoga-pose-18" />
                        </span>
                        <h3
                          className="pbmit-title-data-hover d-flex align-items-center"
                          data-text="Baddha Konasana"
                        >
                          <span className="pbmit-text-content">
                            <span className="pbmit-serv-cat">
                              <a href="service-details.html" rel="tag">
                                Mantra yoga Trainer
                              </a>
                            </span>
                            <a
                              className="pbmit-title-inner"
                              href="service-details.html"
                            >
                              <span>Baddha Konasana</span>
                            </a>
                          </span>
                          <span className="pbmit-featured-img-wrapper">
                            <span className="pbmit-featured-wrapper">
                              <img
                                src="images/homepage-3/service/service-img-02.jpg"
                                className="img-fluid"
                                alt=""
                              />
                            </span>
                          </span>
                          <span className="pbmit-service-btn">
                            <a href="service-details.html">
                              <span className="pbmit-button-icon-wrapper">
                                <span className="pbmit-button-icon">
                                  <i className="pbmit-base-icon-black-arrow-1" />
                                </span>
                              </span>
                            </a>
                          </span>
                        </h3>
                        <a className="pbmit-link" href="service-details.html" />
                      </li>
                      <li>
                        <span className="pbmit-service-icon">
                          <i className="pbmit-yoge-icon pbmit-yoge-icon-yoga-pose-8" />
                        </span>
                        <h3
                          className="pbmit-title-data-hover d-flex align-items-center"
                          data-text="Ashtanga Namaskara"
                        >
                          <span className="pbmit-text-content">
                            <span className="pbmit-serv-cat">
                              <a href="service-details.html" rel="tag">
                                DJ Yoga Trainer
                              </a>
                            </span>
                            <a
                              className="pbmit-title-inner"
                              href="service-details.html"
                            >
                              <span>Ashtanga Namaskara</span>
                            </a>
                          </span>
                          <span className="pbmit-featured-img-wrapper">
                            <span className="pbmit-featured-wrapper">
                              <img
                                src="images/homepage-3/service/service-img-03.jpg"
                                className="img-fluid"
                                alt=""
                              />
                            </span>
                          </span>
                          <span className="pbmit-service-btn">
                            <a href="service-details.html">
                              <span className="pbmit-button-icon-wrapper">
                                <span className="pbmit-button-icon">
                                  <i className="pbmit-base-icon-black-arrow-1" />
                                </span>
                              </span>
                            </a>
                          </span>
                        </h3>
                        <a className="pbmit-link" href="service-details.html" />
                      </li>
                      <li>
                        <span className="pbmit-service-icon">
                          <i className="pbmit-yoge-icon pbmit-yoge-icon-yoga-pose-7" />
                        </span>
                        <h3
                          className="pbmit-title-data-hover d-flex align-items-center"
                          data-text="Urdhva Hastasana"
                        >
                          <span className="pbmit-text-content">
                            <span className="pbmit-serv-cat">
                              <a href="service-details.html" rel="tag">
                                Astanga yoga Trainer
                              </a>
                            </span>
                            <a
                              className="pbmit-title-inner"
                              href="service-details.html"
                            >
                              <span>Urdhva Hastasana</span>
                            </a>
                          </span>
                          <span className="pbmit-featured-img-wrapper">
                            <span className="pbmit-featured-wrapper">
                              <img
                                src="images/homepage-3/service/service-img-04.jpg"
                                className="img-fluid"
                                alt=""
                              />
                            </span>
                          </span>
                          <span className="pbmit-service-btn">
                            <a href="service-details.html">
                              <span className="pbmit-button-icon-wrapper">
                                <span className="pbmit-button-icon">
                                  <i className="pbmit-base-icon-black-arrow-1" />
                                </span>
                              </span>
                            </a>
                          </span>
                        </h3>
                        <a className="pbmit-link" href="service-details.html" />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Service End */}
          {/* Counter Start */}
          {/* <section className="counter_three">
            <div className="container">
              <div className="counter-three_bg">
                <div className="row g-0">
                  <div className="col-md-3 pbmit-col_1">
                    <div className="ihbox-style_8">
                      <div className="pbmit-ihbox-style-8">
                        <div className="pbmit-ihbox-headingicon">
                          <div className="pbmit-ihbox-icon">
                            <div className="pbmit-ihbox-icon-wrapper pbmit-ihbox-icon-type-image">
                              <img
                                src="images/homepage-3/ihbox/icon-img.png"
                                alt=""
                              />
                            </div>
                          </div>
                          <div className="pbmit-content-wrapper">
                            <h2 className="pbmit-element-title">
                              More than <span>9.5k members</span> are connected with
                              us
                            </h2>
                            <div className="pbmit-ihbox-btn">
                              <a href="about-us.html">
                                <span className="pbmit-button-text">
                                  sign up now
                                </span>
                                <span className="pbmit-button-icon-wrapper">
                                  <span className="pbmit-button-icon">
                                    <i className="pbmit-base-icon-black-arrow-1" />
                                  </span>
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-9 pbmit-col_2">
                    <div className="counter-three_mainbox">
                      <div className="pbmit-heading animation-style2">
                        <h5 className="pbmit-title">The proof is in the numbers</h5>
                      </div>
                      <div className="row">
                        <div className="col-md-4">
                          <div className="pbminfotech-ele-fid-style-3">
                            <div className="pbmit-fld-contents">
                              <div
                                className="pbmit-circle-outer"
                                data-digit={85}
                                data-fill="#448c74"
                                data-emptyfill="#e5c466"
                                data-before="<sup>%</sup>"
                                data-after="<sup>%</sup>"
                                data-thickness={3}
                                data-size={150}
                              >
                                <div className="pbmit-circle">
                                  <div className="pbmit-fid-inner">
                                    <span
                                      className="pbmit-number-rotate numinate"
                                      data-appear-animation="animateDigits"
                                      data-from={0}
                                      data-to={85}
                                      data-interval={5}
                                      data-before=""
                                      data-before-style=""
                                      data-after=""
                                      data-after-style=""
                                    >
                                      85
                                    </span>
                                    <span className="pbmit-fid">
                                      <sup>%</sup>
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="pbmit-fid-sub">
                                <div className="pbmit-heading-desc">
                                  Sed risus augue commodo ornare felis non eleifend.
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="pbminfotech-ele-fid-style-3">
                            <div className="pbmit-fld-contents">
                              <div
                                className="pbmit-circle-outer"
                                data-digit={90}
                                data-fill="#448c74"
                                data-emptyfill="#e5c466"
                                data-before="<sup>%</sup>"
                                data-after="<sup>%</sup>"
                                data-thickness={3}
                                data-size={150}
                              >
                                <div className="pbmit-circle">
                                  <div className="pbmit-fid-inner">
                                    <span
                                      className="pbmit-number-rotate numinate"
                                      data-appear-animation="animateDigits"
                                      data-from={0}
                                      data-to={90}
                                      data-interval={5}
                                      data-before=""
                                      data-before-style=""
                                      data-after=""
                                      data-after-style=""
                                    >
                                      90
                                    </span>
                                    <span className="pbmit-fid">
                                      <sup>%</sup>
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="pbmit-fid-sub">
                                <div className="pbmit-heading-desc">
                                  It uses a dictionary of over 200 Latin words,
                                  combined.
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="pbminfotech-ele-fid-style-3">
                            <div className="pbmit-fld-contents">
                              <div
                                className="pbmit-circle-outer"
                                data-digit={70}
                                data-fill="#448c74"
                                data-emptyfill="#e5c466"
                                data-before="<sup>%</sup>"
                                data-after="<sup>%</sup>"
                                data-thickness={3}
                                data-size={150}
                              >
                                <div className="pbmit-circle">
                                  <div className="pbmit-fid-inner">
                                    <span
                                      className="pbmit-number-rotate numinate"
                                      data-appear-animation="animateDigits"
                                      data-from={0}
                                      data-to={70}
                                      data-interval={5}
                                      data-before=""
                                      data-before-style=""
                                      data-after=""
                                      data-after-style=""
                                    >
                                      70
                                    </span>
                                    <span className="pbmit-fid">
                                      <sup>%</sup>
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="pbmit-fid-sub">
                                <div className="pbmit-heading-desc">
                                  Nam libero tempore, cum soluta nobis est eligendi.
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section> */}
          {/* Counter End */}
          {/* Pricing Start */}
          <section className="section-xl">
            {/* <div className="container">
              <div className="pbmit-heading-subheading animation-style2">
                <h4 className="pbmit-subtitle">my price</h4>
                <h2 className="pbmit-title">Choose a subscription</h2>
              </div>
              <div className="pbminfotech-ptable-style-1">
                <div className="pbmit-ptable-cols row">
                  <div className="pbmit-ptable-col col-lg-4 col-md-6">
                    <div className="pbmit-pricing-table-box">
                      <div className="pbmit-head-wrap">
                        <div className="pbminfotech-ptable-desc">Individual</div>
                        <h3 className="pbminfotech-ptable-heading">Light Yoga</h3>
                        <div className="pbminfotech-sep" />
                        <div className="pbmit-price-wrapper">
                          <div className="pbmit-head-icon-wrap">
                            <div className="pbmit-ptable-icon">
                              <div className="pbmit-ptable-icon-wrapper" />
                            </div>
                          </div>
                          <div className="pbmit-ptable-price-w">
                            <div className="pbminfotech-ptable-symbol">$</div>
                            <div className="pbminfotech-ptable-price">12</div>
                          </div>
                          <div className="pbminfotech-ptable-frequency">
                            / Month
                          </div>
                        </div>
                      </div>
                      <div className="pbmit-ptable-inner">
                        <div className="pbmit-ptable-lines-w">
                          <div className="pbmit-ptable-line">
                            <i className="ti-check" /> 2 hours personal training
                          </div>
                          <div className="pbmit-ptable-line">
                            <i className="" /> Video &amp; audio content
                          </div>
                          <div className="pbmit-ptable-line">
                            <i className="ti-check" /> 1 month support
                          </div>
                          <div className="pbmit-ptable-line">
                            <i className="" /> Lifetime access
                          </div>
                        </div>
                        <div className="pbminfotech-ptable-btn">
                          <a href="#" className="pbmit-btn pbmit-btn-outline">
                            <span className="pbmit-button-text">Purchase now</span>
                            <span className="pbmit-button-icon-wrapper">
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
                            </span>
                          </a>
                        </div>
                      </div>
                      <div className="pbmit-feature-wrap" />
                    </div>
                  </div>
                  <div className="pbmit-pricing-table-featured-col pbmit-ptable-col col-lg-4 col-md-6">
                    <div className="pbmit-pricing-table-box">
                      <div className="pbmit-head-wrap">
                        <div className="pbminfotech-ptable-desc">Premium plan</div>
                        <h3 className="pbminfotech-ptable-heading">
                          Deep Meditaion
                        </h3>
                        <div className="pbminfotech-sep" />
                        <div className="pbmit-price-wrapper">
                          <div className="pbmit-head-icon-wrap">
                            <div className="pbmit-ptable-icon">
                              <div className="pbmit-ptable-icon-wrapper" />
                            </div>
                          </div>
                          <div className="pbmit-ptable-price-w">
                            <div className="pbminfotech-ptable-symbol">$</div>
                            <div className="pbminfotech-ptable-price">45</div>
                          </div>
                          <div className="pbminfotech-ptable-frequency">
                            / Month
                          </div>
                        </div>
                      </div>
                      <div className="pbmit-ptable-inner">
                        <div className="pbmit-ptable-lines-w">
                          <div className="pbmit-ptable-line">
                            <i className="ti-check" /> 2 hours personal training
                          </div>
                          <div className="pbmit-ptable-line">
                            <i className="ti-check" /> Video &amp; audio content
                          </div>
                          <div className="pbmit-ptable-line">
                            <i className="ti-check" /> 1 month support
                          </div>
                          <div className="pbmit-ptable-line">
                            <i className="" /> Lifetime access
                          </div>
                        </div>
                        <div className="pbminfotech-ptable-btn">
                          <a href="#" className="pbmit-btn pbmit-btn-outline">
                            <span className="pbmit-button-text">Purchase now</span>
                            <span className="pbmit-button-icon-wrapper">
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
                            </span>
                          </a>
                        </div>
                      </div>
                      <div className="pbmit-feature-wrap">
                        <div className="pbmit-ptablebox-featured-w" />
                      </div>
                    </div>
                  </div>
                  <div className="pbmit-ptable-col col-lg-4 col-md-6">
                    <div className="pbmit-pricing-table-box">
                      <div className="pbmit-head-wrap">
                        <div className="pbminfotech-ptable-desc">Advanced plan</div>
                        <h3 className="pbminfotech-ptable-heading">Full Complex</h3>
                        <div className="pbminfotech-sep" />
                        <div className="pbmit-price-wrapper">
                          <div className="pbmit-head-icon-wrap">
                            <div className="pbmit-ptable-icon">
                              <div className="pbmit-ptable-icon-wrapper" />
                            </div>
                          </div>
                          <div className="pbmit-ptable-price-w">
                            <div className="pbminfotech-ptable-symbol">$</div>
                            <div className="pbminfotech-ptable-price">99</div>
                          </div>
                          <div className="pbminfotech-ptable-frequency">
                            / Month
                          </div>
                        </div>
                      </div>
                      <div className="pbmit-ptable-inner">
                        <div className="pbmit-ptable-lines-w">
                          <div className="pbmit-ptable-line">
                            <i className="ti-check" /> 2 hours personal training
                          </div>
                          <div className="pbmit-ptable-line">
                            <i className="ti-check" /> Video &amp; audio content
                          </div>
                          <div className="pbmit-ptable-line">
                            <i className="ti-check" /> 1 month support
                          </div>
                          <div className="pbmit-ptable-line">
                            <i className="ti-check" /> Lifetime access
                          </div>
                        </div>
                        <div className="pbminfotech-ptable-btn">
                          <a href="#" className="pbmit-btn pbmit-btn-outline">
                            <span className="pbmit-button-text">Purchase now</span>
                            <span className="pbmit-button-icon-wrapper">
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
                            </span>
                          </a>
                        </div>
                      </div>
                      <div className="pbmit-feature-wrap" />
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </section>
          {/* Pricing End */}
          {/* Testimonial Start */}
          <section className="testimonial-three_bg">
            <div className="container">
              <div className="row g-0">
                <div className="col-md-8 pbmit-col_1" />
                <div className="col-md-4 pbmit-col_2">
                  <div
                    className="swiper-slider"
                    data-autoplay="true"
                    data-loop="true"
                    data-dots="false"
                    data-arrows="false"
                    data-columns={1}
                    data-margin={30}
                    data-effect="slide"
                  >
                    <div className="swiper-wrapper">
                      {/* Slide1 */}
                      <article className="pbmit-testimonial-style-3 swiper-slide">
                        <div className="pbminfotech-post-item">
                          <div className="pbmit-box-content-wrap">
                            <div className="pbminfotech-box-star-ratings">
                              <i className="pbmit-base-icon-star-1 pbmit-active" />
                              <i className="pbmit-base-icon-star-1 pbmit-active" />
                              <i className="pbmit-base-icon-star-1 pbmit-active" />
                              <i className="pbmit-base-icon-star-1 pbmit-active" />
                              <i className="pbmit-base-icon-star-1 pbmit-active" />
                            </div>
                            <div className="pbminfotech-box-desc">
                              <blockquote className="pbminfotech-testimonial-text">
                                <p>
                                  I would recommend practitioners at this center to
                                  everyone! They are great to work with and are
                                  excellemt trainers. Thank you all!
                                </p>
                              </blockquote>
                            </div>
                            <div className="pbminfotech-box-author d-flex align-items-center">
                              <div className="pbminfotech-box-img">
                                <div className="pbmit-featured-img-wrapper">
                                  <div className="pbmit-featured-wrapper">
                                    <img
                                      src="images/homepage-3/testimonial/testimonial-01.jpg"
                                      alt=""
                                      className="img-fluid"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="pbmit-auther-content">
                                <h3 className="pbminfotech-box-title">
                                  Maria Flynn
                                </h3>
                                <div className="pbminfotech-testimonial-detail">
                                  Satisfied Client
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </article>
                      {/* Slide2 */}
                      <article className="pbmit-testimonial-style-3 swiper-slide">
                        <div className="pbminfotech-post-item">
                          <div className="pbmit-box-content-wrap">
                            <div className="pbminfotech-box-star-ratings">
                              <i className="pbmit-base-icon-star-1 pbmit-active" />
                              <i className="pbmit-base-icon-star-1 pbmit-active" />
                              <i className="pbmit-base-icon-star-1 pbmit-active" />
                              <i className="pbmit-base-icon-star-1 pbmit-active" />
                              <i className="pbmit-base-icon-star-1 pbmit-active" />
                            </div>
                            <div className="pbminfotech-box-desc">
                              <blockquote className="pbminfotech-testimonial-text">
                                <p>
                                  I would recommend practitioners at this center to
                                  everyone! They are great to work with and are
                                  excellemt trainers. Thank you all!
                                </p>
                              </blockquote>
                            </div>
                            <div className="pbminfotech-box-author d-flex align-items-center">
                              <div className="pbminfotech-box-img">
                                <div className="pbmit-featured-img-wrapper">
                                  <div className="pbmit-featured-wrapper">
                                    <img
                                      src="images/homepage-3/testimonial/testimonial-02.jpg"
                                      alt=""
                                      className="img-fluid"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="pbmit-auther-content">
                                <h3 className="pbminfotech-box-title">
                                  Jennifer Smith
                                </h3>
                                <div className="pbminfotech-testimonial-detail">
                                  Satisfied Client
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </article>
                      {/* Slide3 */}
                      <article className="pbmit-testimonial-style-3 swiper-slide">
                        <div className="pbminfotech-post-item">
                          <div className="pbmit-box-content-wrap">
                            <div className="pbminfotech-box-star-ratings">
                              <i className="pbmit-base-icon-star-1 pbmit-active" />
                              <i className="pbmit-base-icon-star-1 pbmit-active" />
                              <i className="pbmit-base-icon-star-1 pbmit-active" />
                              <i className="pbmit-base-icon-star-1 pbmit-active" />
                              <i className="pbmit-base-icon-star-1 pbmit-active" />
                            </div>
                            <div className="pbminfotech-box-desc">
                              <blockquote className="pbminfotech-testimonial-text">
                                <p>
                                  I would recommend practitioners at this center to
                                  everyone! They are great to work with and are
                                  excellemt trainers. Thank you all!
                                </p>
                              </blockquote>
                            </div>
                            <div className="pbminfotech-box-author d-flex align-items-center">
                              <div className="pbminfotech-box-img">
                                <div className="pbmit-featured-img-wrapper">
                                  <div className="pbmit-featured-wrapper">
                                    <img
                                      src="images/homepage-3/testimonial/testimonial-03.jpg"
                                      alt=""
                                      className="img-fluid"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="pbmit-auther-content">
                                <h3 className="pbminfotech-box-title">
                                  Jane Brown
                                </h3>
                                <div className="pbminfotech-testimonial-detail">
                                  Satisfied Client
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </article>
                      {/* Slide4 */}
                      <article className="pbmit-testimonial-style-3 swiper-slide">
                        <div className="pbminfotech-post-item">
                          <div className="pbmit-box-content-wrap">
                            <div className="pbminfotech-box-star-ratings">
                              <i className="pbmit-base-icon-star-1 pbmit-active" />
                              <i className="pbmit-base-icon-star-1 pbmit-active" />
                              <i className="pbmit-base-icon-star-1 pbmit-active" />
                              <i className="pbmit-base-icon-star-1 pbmit-active" />
                              <i className="pbmit-base-icon-star-1 pbmit-active" />
                            </div>
                            <div className="pbminfotech-box-desc">
                              <blockquote className="pbminfotech-testimonial-text">
                                <p>
                                  I would recommend practitioners at this center to
                                  everyone! They are great to work with and are
                                  excellemt trainers. Thank you all!
                                </p>
                              </blockquote>
                            </div>
                            <div className="pbminfotech-box-author d-flex align-items-center">
                              <div className="pbminfotech-box-img">
                                <div className="pbmit-featured-img-wrapper">
                                  <div className="pbmit-featured-wrapper">
                                    <img
                                      src="images/homepage-3/testimonial/testimonial-04.jpg"
                                      alt=""
                                      className="img-fluid"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="pbmit-auther-content">
                                <h3 className="pbminfotech-box-title">
                                  Becky Linch
                                </h3>
                                <div className="pbminfotech-testimonial-detail">
                                  Satisfied Client
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </article>
                      {/* Slide5 */}
                      <article className="pbmit-testimonial-style-3 swiper-slide">
                        <div className="pbminfotech-post-item">
                          <div className="pbmit-box-content-wrap">
                            <div className="pbminfotech-box-star-ratings">
                              <i className="pbmit-base-icon-star-1 pbmit-active" />
                              <i className="pbmit-base-icon-star-1 pbmit-active" />
                              <i className="pbmit-base-icon-star-1 pbmit-active" />
                              <i className="pbmit-base-icon-star-1 pbmit-active" />
                              <i className="pbmit-base-icon-star-1 pbmit-active" />
                            </div>
                            <div className="pbminfotech-box-desc">
                              <blockquote className="pbminfotech-testimonial-text">
                                <p>
                                  I would recommend practitioners at this center to
                                  everyone! They are great to work with and are
                                  excellemt trainers. Thank you all!
                                </p>
                              </blockquote>
                            </div>
                            <div className="pbminfotech-box-author d-flex align-items-center">
                              <div className="pbminfotech-box-img">
                                <div className="pbmit-featured-img-wrapper">
                                  <div className="pbmit-featured-wrapper">
                                    <img
                                      src="images/homepage-3/testimonial/testimonial-05.jpg"
                                      alt=""
                                      className="img-fluid"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="pbmit-auther-content">
                                <h3 className="pbminfotech-box-title">
                                  Daniel Craig
                                </h3>
                                <div className="pbminfotech-testimonial-detail">
                                  Satisfied Client
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </article>
                      {/* Slide6 */}
                      <article className="pbmit-testimonial-style-3 swiper-slide">
                        <div className="pbminfotech-post-item">
                          <div className="pbmit-box-content-wrap">
                            <div className="pbminfotech-box-star-ratings">
                              <i className="pbmit-base-icon-star-1 pbmit-active" />
                              <i className="pbmit-base-icon-star-1 pbmit-active" />
                              <i className="pbmit-base-icon-star-1 pbmit-active" />
                              <i className="pbmit-base-icon-star-1 pbmit-active" />
                              <i className="pbmit-base-icon-star-1 pbmit-active" />
                            </div>
                            <div className="pbminfotech-box-desc">
                              <blockquote className="pbminfotech-testimonial-text">
                                <p>
                                  I would recommend practitioners at this center to
                                  everyone! They are great to work with and are
                                  excellemt trainers. Thank you all!
                                </p>
                              </blockquote>
                            </div>
                            <div className="pbminfotech-box-author d-flex align-items-center">
                              <div className="pbminfotech-box-img">
                                <div className="pbmit-featured-img-wrapper">
                                  <div className="pbmit-featured-wrapper">
                                    <img
                                      src="images/homepage-3/testimonial/testimonial-06.jpg"
                                      alt=""
                                      className="img-fluid"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="pbmit-auther-content">
                                <h3 className="pbminfotech-box-title">
                                  Mariam Ness
                                </h3>
                                <div className="pbminfotech-testimonial-detail">
                                  Satisfied Client
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </article>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Testimonial End */}
          {/* Blog Start */}
          <section className="section-xl">
            <div className="container">
              <div className="position-relative">
                <div className="pbmit-heading-subheading animation-style2">
                  <h4 className="pbmit-subtitle">blogs</h4>
                  <h2 className="pbmit-title">Recent blogs</h2>
                </div>
                <div className="blog-two_arrow swiper-btn-custom d-flex flex-row-reverse" />
              </div>
              <div
                className="swiper-slider"
                data-arrows-class="blog-two_arrow"
                data-autoplay="false"
                data-loop="false"
                data-dots="false"
                data-arrows="true"
                data-columns={2}
                data-margin={30}
                data-effect="slide"
              >
                <div className="swiper-wrapper">
                  {/* Slide1 */}
                  <article className="pbmit-blog-style-2 swiper-slide">
                    <div className="post-item d-flex">
                      <div className="pbmit-featured-container">
                        <div
                          className="pbmit-bg-image"
                          style={{
                            backgroundImage:
                              "url(images/homepage-2/blog/blog-img-01.jpg)"
                          }}
                        >
                          <div className="pbmit-featured-img-wrapper">
                            <div className="pbmit-featured-wrapper" />
                          </div>
                        </div>
                      </div>
                      <div className="pbminfotech-box-wrap">
                        <div className="pbminfotech-box-content">
                          <div className="pbmit-date-admin-wraper d-flex align-items-center">
                            <div className="pbmit-meta-cat-wrapper pbmit-meta-line">
                              <div className="pbmit-meta-category">
                                <a href="blog-classic.html" rel="category tag">
                                  Motivation
                                </a>
                              </div>
                            </div>
                            <div className="pbmit-meta-date pbmit-meta-line">
                              <span className="pbmit-post-date">
                                August 29. 2023
                              </span>
                            </div>
                          </div>
                          <h3 className="pbmit-post-title">
                            <a href="blog-details.html">
                              Which Yoga Class Is Best for Beginners?
                            </a>
                          </h3>
                          <div className="pbminfotech-box-desc">
                            We It’s time to roll out your yoga mat and discovers the
                            combinations of physically…
                          </div>
                        </div>
                        <a className="pbmit-blog-btn" href="blog-details.html">
                          <span className="pbmit-button-icon-wrapper">
                            <span className="pbmit-button-icon">
                              <i className="pbmit-base-icon-black-arrow-1" />
                            </span>
                          </span>
                        </a>
                      </div>
                    </div>
                  </article>
                  {/* Slide2 */}
                  <article className="pbmit-blog-style-2 swiper-slide">
                    <div className="post-item d-flex">
                      <div className="pbmit-featured-container">
                        <div
                          className="pbmit-bg-image"
                          style={{
                            backgroundImage:
                              "url(images/homepage-2/blog/blog-img-02.jpg)"
                          }}
                        >
                          <div className="pbmit-featured-img-wrapper">
                            <div className="pbmit-featured-wrapper" />
                          </div>
                        </div>
                      </div>
                      <div className="pbminfotech-box-wrap">
                        <div className="pbminfotech-box-content">
                          <div className="pbmit-date-admin-wraper d-flex align-items-center">
                            <div className="pbmit-meta-cat-wrapper pbmit-meta-line">
                              <div className="pbmit-meta-category">
                                <a href="blog-classic.html" rel="category tag">
                                  Meditation
                                </a>
                              </div>
                            </div>
                            <div className="pbmit-meta-date pbmit-meta-line">
                              <span className="pbmit-post-date">
                                August 29. 2023
                              </span>
                            </div>
                          </div>
                          <h3 className="pbmit-post-title">
                            <a href="blog-details.html">
                              Spiritual Cleansing: 14 Rituals to Detox Your Soul
                            </a>
                          </h3>
                          <div className="pbminfotech-box-desc">
                            We It’s time to roll out your yoga mat and discovers the
                            combinations of physically…
                          </div>
                        </div>
                        <a className="pbmit-blog-btn" href="blog-details.html">
                          <span className="pbmit-button-icon-wrapper">
                            <span className="pbmit-button-icon">
                              <i className="pbmit-base-icon-black-arrow-1" />
                            </span>
                          </span>
                        </a>
                      </div>
                    </div>
                  </article>
                  {/* Slide3 */}
                  <article className="pbmit-blog-style-2 swiper-slide">
                    <div className="post-item d-flex">
                      <div className="pbmit-featured-container">
                        <div
                          className="pbmit-bg-image"
                          style={{
                            backgroundImage:
                              "url(images/homepage-2/blog/blog-img-03.jpg)"
                          }}
                        >
                          <div className="pbmit-featured-img-wrapper">
                            <div className="pbmit-featured-wrapper" />
                          </div>
                        </div>
                      </div>
                      <div className="pbminfotech-box-wrap">
                        <div className="pbminfotech-box-content">
                          <div className="pbmit-date-admin-wraper d-flex align-items-center">
                            <div className="pbmit-meta-cat-wrapper pbmit-meta-line">
                              <div className="pbmit-meta-category">
                                <a href="blog-classic.html" rel="category tag">
                                  fitness
                                </a>
                              </div>
                            </div>
                            <div className="pbmit-meta-date pbmit-meta-line">
                              <span className="pbmit-post-date">
                                August 29. 2023
                              </span>
                            </div>
                          </div>
                          <h3 className="pbmit-post-title">
                            <a href="blog-details.html">
                              Spiritual Awakening: Definition, Signs and Symptoms
                            </a>
                          </h3>
                          <div className="pbminfotech-box-desc">
                            We It’s time to roll out your yoga mat and discovers the
                            combinations of physically…
                          </div>
                        </div>
                        <a className="pbmit-blog-btn" href="blog-details.html">
                          <span className="pbmit-button-icon-wrapper">
                            <span className="pbmit-button-icon">
                              <i className="pbmit-base-icon-black-arrow-1" />
                            </span>
                          </span>
                        </a>
                      </div>
                    </div>
                  </article>
                  {/* Slide4 */}
                  <article className="pbmit-blog-style-2 swiper-slide">
                    <div className="post-item d-flex">
                      <div className="pbmit-featured-container">
                        <div
                          className="pbmit-bg-image"
                          style={{
                            backgroundImage:
                              "url(images/homepage-2/blog/blog-img-04.jpg)"
                          }}
                        >
                          <div className="pbmit-featured-img-wrapper">
                            <div className="pbmit-featured-wrapper" />
                          </div>
                        </div>
                      </div>
                      <div className="pbminfotech-box-wrap">
                        <div className="pbminfotech-box-content">
                          <div className="pbmit-date-admin-wraper d-flex align-items-center">
                            <div className="pbmit-meta-cat-wrapper pbmit-meta-line">
                              <div className="pbmit-meta-category">
                                <a href="blog-classic.html" rel="category tag">
                                  Inspiration
                                </a>
                              </div>
                            </div>
                            <div className="pbmit-meta-date pbmit-meta-line">
                              <span className="pbmit-post-date">
                                August 29. 2023
                              </span>
                            </div>
                          </div>
                          <h3 className="pbmit-post-title">
                            <a href="blog-details.html">
                              Yoga and Astrology: Find the Best Practices for Your
                              Sign
                            </a>
                          </h3>
                          <div className="pbminfotech-box-desc">
                            We It’s time to roll out your yoga mat and discovers the
                            combinations of physically…
                          </div>
                        </div>
                        <a className="pbmit-blog-btn" href="blog-details.html">
                          <span className="pbmit-button-icon-wrapper">
                            <span className="pbmit-button-icon">
                              <i className="pbmit-base-icon-black-arrow-1" />
                            </span>
                          </span>
                        </a>
                      </div>
                    </div>
                  </article>
                  {/* Slide5 */}
                  <article className="pbmit-blog-style-2 swiper-slide">
                    <div className="post-item d-flex">
                      <div className="pbmit-featured-container">
                        <div
                          className="pbmit-bg-image"
                          style={{
                            backgroundImage:
                              "url(images/homepage-2/blog/blog-img-05.jpg)"
                          }}
                        >
                          <div className="pbmit-featured-img-wrapper">
                            <div className="pbmit-featured-wrapper" />
                          </div>
                        </div>
                      </div>
                      <div className="pbminfotech-box-wrap">
                        <div className="pbminfotech-box-content">
                          <div className="pbmit-date-admin-wraper d-flex align-items-center">
                            <div className="pbmit-meta-cat-wrapper pbmit-meta-line">
                              <div className="pbmit-meta-category">
                                <a href="blog-classic.html" rel="category tag">
                                  Motivation
                                </a>
                              </div>
                            </div>
                            <div className="pbmit-meta-date pbmit-meta-line">
                              <span className="pbmit-post-date">
                                August 29. 2023
                              </span>
                            </div>
                          </div>
                          <h3 className="pbmit-post-title">
                            <a href="blog-details.html">
                              Puppy Yoga? What Is It and What Are the Benefits?
                            </a>
                          </h3>
                          <div className="pbminfotech-box-desc">
                            We It’s time to roll out your yoga mat and discovers the
                            combinations of physically…
                          </div>
                        </div>
                        <a className="pbmit-blog-btn" href="blog-details.html">
                          <span className="pbmit-button-icon-wrapper">
                            <span className="pbmit-button-icon">
                              <i className="pbmit-base-icon-black-arrow-1" />
                            </span>
                          </span>
                        </a>
                      </div>
                    </div>
                  </article>
                  {/* Slide6 */}
                  <article className="pbmit-blog-style-2 swiper-slide">
                    <div className="post-item d-flex">
                      <div className="pbmit-featured-container">
                        <div
                          className="pbmit-bg-image"
                          style={{
                            backgroundImage:
                              "url(images/homepage-2/blog/blog-img-06.jpg)"
                          }}
                        >
                          <div className="pbmit-featured-img-wrapper">
                            <div className="pbmit-featured-wrapper" />
                          </div>
                        </div>
                      </div>
                      <div className="pbminfotech-box-wrap">
                        <div className="pbminfotech-box-content">
                          <div className="pbmit-date-admin-wraper d-flex align-items-center">
                            <div className="pbmit-meta-cat-wrapper pbmit-meta-line">
                              <div className="pbmit-meta-category">
                                <a href="blog-classic.html" rel="category tag">
                                  Meditation
                                </a>
                              </div>
                            </div>
                            <div className="pbmit-meta-date pbmit-meta-line">
                              <span className="pbmit-post-date">
                                August 29. 2023
                              </span>
                            </div>
                          </div>
                          <h3 className="pbmit-post-title">
                            <a href="blog-details.html">
                              8 Ways to Strengthen the Mind Body Connection
                            </a>
                          </h3>
                          <div className="pbminfotech-box-desc">
                            We It’s time to roll out your yoga mat and discovers the
                            combinations of physically…
                          </div>
                        </div>
                        <a className="pbmit-blog-btn" href="blog-details.html">
                          <span className="pbmit-button-icon-wrapper">
                            <span className="pbmit-button-icon">
                              <i className="pbmit-base-icon-black-arrow-1" />
                            </span>
                          </span>
                        </a>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </section>
          {/* Blog End */}
        </div>
        {/* page content End */}
        {/* footer */}
        <Footer/>
        {/* footer End */}
      </div>
      {/* page wrapper End */}
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
    </div>
  )
}

export default Home
