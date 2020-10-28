import React from "react";
import "../ContentStyle/Services.css";

function Services() {
  return (
    <div id="services">
      <section className="services">
        <div className="max-width">
          <h2 className="title">My Services</h2>
          <div className="serv-content">
            <div className="card">
              <div className="box">
                <i className="fas fa-paint-brush"></i>
                <div className="text">Web Design</div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Autem magnam qui sed, consequatur eius labore. Lorem ipsum,
                  dolor sit amet consectetur adipisicing elit. Officia, vero ut
                  voluptatem atque tempore odio quaerat ad nesciunt aliquam sint
                  suscipit, debitis praesentium magni enim culpa, architecto
                  provident laboriosam commodi.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="box">
                <i className="fas fa-chart-line"></i>
                <div className="text">Advertising</div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Autem magnam qui sed, consequatur eius labore. Lorem ipsum,
                  dolor sit amet consectetur adipisicing elit. Officia, vero ut
                  voluptatem atque tempore odio quaerat ad nesciunt aliquam sint
                  suscipit, debitis praesentium magni enim culpa, architecto
                  provident laboriosam commodi.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="box">
                <i className="fas fa-code"></i>
                <div className="text">App Design</div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Autem magnam qui sed, consequatur eius labore. Lorem ipsum,
                  dolor sit amet consectetur adipisicing elit. Officia, vero ut
                  voluptatem atque tempore odio quaerat ad nesciunt aliquam sint
                  suscipit, debitis praesentium magni enim culpa, architecto
                  provident laboriosam commodi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
