import React from "react";
import Alfamart from "../../Image/Alfamart.png";
import "../ContentStyle/Experience.css";

function Experience() {
  return (
    <div id="experience">
      <section className="services">
        <div className="max-width">
          <h2 className="title">Experience</h2>
          <div className="serv-content">
            <div className="card">
              <div className="box">
                <div className="alfamart">
                  <img src={Alfamart} alt="Alfamart" />
                  <h3 className="title-company">
                    PT.Sumber Alfaria Trijaya, Tbk
                  </h3>
                  <div className="position">
                    Position: <span>Pramuniaga</span>
                  </div>
                  <p className="year">
                    Durations: <span>2018 - 2019</span>
                  </p>
                  <p className="description">
                    Alfamart is a chain of supermarkets with many branches in
                    Indonesia. These outlets generally sell a variety of food,
                    beverage and other living necessities. More than 200 food
                    products and other living necessities are available at
                    competitive prices, meeting the needs of everyday consumers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Experience;
