import React from "react";
import Slider from "react-slick";
import "../ContentStyle/Project.css";
import Image from "../../Image/project-1.jpg";
import Imagee from "../../Image/project-2.jpg";
import Imageee from "../../Image/project-3.jpg";
import Imageeee from "../../Image/project-4.jpg";
import Imageeeee from "../../Image/project-5.jpg";

function Project() {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
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
      <section className="project" id="project">
        <div className="max-width">
          <h2 className="title">My project</h2>
          <div className="carousel">
            <Slider {...settings}>
              <div className="card">
                <div className="box">
                  <img src={Image} alt="/" />
                  <div className="text">Project name</div>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Eligendi, dolor?
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="box">
                  <img src={Imagee} alt="/" />
                  <div className="text">Project name</div>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Eligendi, dolor?
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="box">
                  <img src={Imageee} alt="/" />
                  <div className="text">Project name</div>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Eligendi, dolor?
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="box">
                  <img src={Imageeee} alt="/" />
                  <div className="text">Project name</div>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Eligendi, dolor?
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="box">
                  <img src={Imageeeee} alt="/" />
                  <div className="text">Project name</div>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Eligendi, dolor?
                  </p>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Project;
