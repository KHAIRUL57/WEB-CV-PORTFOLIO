import React from "react";
import Slider from "react-slick";
import "../ContentStyle/Teams.css";
import Image from "../../Image/project-1.jpg";
import Imagee from "../../Image/project-2.jpg";
import Imageee from "../../Image/project-3.jpg";
// import Imageeee from "../../Image/project-4.jpg";
// import Imageeeee from "../../Image/project-5.jpg";

function Teams() {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    speed: 500,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <section className="project" id="teams">
        <div className="max-width">
          <h2 className="title">My teams</h2>
          <div className="carousel">
            <Slider {...settings}>
              <div className="card">
                <div className="box">
                  <img src={Image} alt="/" />
                  <div className="text">Fauzi Apriana Basri</div>
                  <a href="https://fauzi-portfolio.netlify.app/#">Portfolio</a>
                  {/* <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Eligendi, dolor?
                  </p> */}
                </div>
              </div>
              <div className="card">
                <div className="box">
                  <img src={Imagee} alt="/" />
                  <div className="text">Huda</div>
                  <a href="https://fauzi-portfolio.netlify.app/#">Portfolio</a>
                  {/* <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Eligendi, dolor?
                  </p> */}
                </div>
              </div>
              <div className="card">
                <div className="box">
                  <img src={Imageee} alt="/" />
                  <div className="text">Funny</div>
                  <a href="https://fauzi-portfolio.netlify.app/#">Portfolio</a>
                  {/* <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Eligendi, dolor?
                  </p> */}
                </div>
              </div>
              {/* <div className="card">
                <div className="box">
                  <img src={Imageeee} alt="/" />
                  <div className="text">Someone name</div>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Eligendi, dolor?
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="box">
                  <img src={Imageeeee} alt="/" />
                  <div className="text">Someone name</div>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Eligendi, dolor?
                  </p>
                </div>
              </div> */}
            </Slider>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Teams;
