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
                      "WebDepeloper",
                      2000,
                      "VideoEditor",
                      2000,
                      "Youtuber",
                      2000,
                    ]}
                  />
                </span>
              </div>
              <p>
                Hi, my name is Khairul Tamimi and I am a beginner programmer. I
                currently live in the city of Batam, Riau Islands. Initially I
                was able to become a programmer, because I followed the coding
                program from Zeal Indonesia, which program was implemented at
                the As-Syahid Islamic Boarding School in Batam City, and lasted
                for 3 months. Outside of programming, I love playing with my
                cat, reading comics, watching anime, and learning new skills,
                and doing whatever is fun for me.
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
