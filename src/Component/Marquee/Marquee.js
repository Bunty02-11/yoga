import React,{useEffect} from 'react'
import Swiper from 'swiper';

function Marquee() {
    useEffect(() => {
        // Initialize Swiper when the component mounts
        const swiper = new Swiper('.swiper-container', {
          loop: true,
          autoplay: {
            delay: 3000,
            disableOnInteraction: false, // Autoplay continues after user interactions
          },
        });
    
        // Destroy Swiper instance when the component unmounts
        return () => {
          swiper.destroy();
        };
      }, []);
  return (
    <div>
       <section className="marquee-section_three">
      <div className="container-fluid p-0">
        <div className="swiper-container marquee">
          <div className="swiper-wrapper">
            <article className="pbmit-marquee-effect-style-1 swiper-slide">
              <div className="pbmit-tag-wrapper">
                <h2 className="pbmit-element-title" data-text="Ashtanga vinyasa yoga">
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
                <h2 className="pbmit-element-title" data-text="Kundalini yoga">
                  Kundalini yoga
                </h2>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Marquee
