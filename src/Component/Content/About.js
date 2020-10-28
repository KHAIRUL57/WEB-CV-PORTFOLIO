import React from "react";
import "../ContentStyle/About.css";
import Typical from "react-typical";
import Image from "../../Image/profil-about.jpg";

function About() {
  return (
    <div>
      <section className="about" id="about">
        <div className="max-width">
          <h2 className="title">About me</h2>
          <div className="about-content">
            <div className="column left">
              <img src={Image} alt="/" />
            </div>
            <div className="column right">
              <div className="text">
                I'm Khairul Tamimi and I'm a{" "}
                <span>
                  <Typical
                    loop={Infinity}
                    wrapper="b"
                    steps={[
                      "Web Depeloper",
                      2000,
                      "Video Editor",
                      2000,
                      "Web Design",
                      2000,
                      "Youtuber",
                      2000,
                    ]}
                  />
                </span>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                nulla ad exercitationem illo explicabo dolorum at temporibus est
                inventore fugit? Facere non molestiae nesciunt assumenda
                consequatur numquam, sint inventore deserunt. Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Cupiditate sint
                dignissimos neque accusamus enim soluta quos, quam aspernatur
                ducimus reiciendis porro sunt rerum a deserunt placeat vero
                aperiam repellendus ipsum!
              </p>
              <a href="/">Download CV</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
