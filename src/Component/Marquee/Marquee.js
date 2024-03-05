import React, { useEffect } from 'react'




function Marquee() {
  return (
    <section className="marquee-section_three">
    <div className="container-fluid p-0">
      <div id="marqueeCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <h2 className="pbmit-element-title">Ashtanga vinyasa yoga</h2>
          </div>
          <div className="carousel-item">
            <h2 className="pbmit-element-title">Iyengar Yoga</h2>
          </div>
          <div className="carousel-item">
            <h2 className="pbmit-element-title">Hot yoga</h2>
          </div>
          <div className="carousel-item">
            <h2 className="pbmit-element-title">Kundalini yoga</h2>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Marquee
