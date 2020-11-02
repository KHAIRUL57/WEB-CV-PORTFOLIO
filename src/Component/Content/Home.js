import React from "react";
import "../ContentStyle/Home.css";
import Typical from "react-typical";

function Home() {
  return (
    <div id="home">
      <section className="home">
        <div className="max-width">
          <div className="home-content">
            <div className="text-1">Hello, my name is</div>
            <div className="text-2">Khairul Tamimi</div>
            <div className="text-3">
              And I'm a {""}
              <span>
                <Typical
                  loop={Infinity}
                  wrapper="b"
                  steps={[
                    "Web Depeloper",
                    2000,
                    "Video Editor",
                    2000,
                    "Youtuber",
                    2000,
                  ]}
                />
              </span>
            </div>
            <a href="#about">Get Started</a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
