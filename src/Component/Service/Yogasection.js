import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Yogasection() {
  const [services, setServices] = useState([]);
  const [selectedService, setSelectedService] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/get/work')
      .then(response => {
        console.log(response.data);
        setServices(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleServiceClick = (service) => {
    console.log(service)
    setSelectedService(service);
  };

  return (
    <div>
      <section className="site_content service_details">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 service-right-col">
              {/* Render content based on selected service */}
              {Object.keys(selectedService).length !== 0 && (
                <div key={selectedService._id}>
                  <div className="pbmit-service-feature-image">
                    <img
                      src={selectedService.image}
                      className="img-fluid w-100"
                      alt=""
                    />
                  </div>
                  <div className="pbmit-entry-content">
                    <div className="pbmit-service_content">
                      <div className="pbmit-heading animation-style2">
                        <h3 className="pbmit-title mb-3">
                          {selectedService.heading}
                        </h3>
                      </div>
                      <p className="pbmit-firstletter">{selectedService.content}</p>
                      <div className="pbmit-heading pt-3 animation-style2">
                        <h3 className="pbmit-title mb-3">
                          {selectedService.benfits_heading}
                        </h3>
                      </div>
                      <p>{selectedService.benfits_content}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="col-lg-3 service-left-col sidebar">
              <aside className="service-sidebar">
                <aside className="widget post-list">
                  <h2 className="widget-title">Our Service</h2>
                  <div className="all-post-list">
                    <ul>
                      {services.map(service => (
                        <li key={service._id} onClick={() => handleServiceClick(service)}>
                          <a href="#">{service.service_name}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </aside>
                {/* Other sidebar content */}
              </aside>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Yogasection;
