import React from "react";
import "../ContentStyle/Skills.css";

function Skills() {
  return (
    <div id="skills">
      <section className="skills">
        <div className="max-width">
          <h2 className="title">My Skills</h2>
          <div className="skills-content">
            <div className="column left">
              <div className="text">My creatipe skills & expriences</div>
              <p className="text-1">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Possimus, est commodi. A aut quos cupiditate, expedita alias
                iusto reiciendis repellendus deserunt? Exercitationem alias illo
                nesciunt fugit sunt recusandae assumenda reiciendis quo
                molestiae laboriosam harum, corporis saepe? Illum iste saepe
                labore officiis explicabo, in velit esse odio id expedita animi
                doloribus dolores dignissimos provident hic totam ipsam
                consectetur, nostrum a! Repudiandae.
              </p>
              <a href="/">Read more</a>
            </div>
            <div className="column right">
              <div className="bars">
                <div className="info">
                  <span>HTML</span>
                  <span>80%</span>
                </div>
                <div className="line html"></div>
              </div>
              <div className="bars">
                <div className="info">
                  <span>CSS</span>
                  <span>50%</span>
                </div>
                <div className="line css"></div>
              </div>
              <div className="bars">
                <div className="info">
                  <span>JavaScript</span>
                  <span>40%</span>
                </div>
                <div className="line js"></div>
              </div>
              <div className="bars">
                <div className="info">
                  <span>Bootstrap</span>
                  <span>70%</span>
                </div>
                <div className="line btrap"></div>
              </div>
              <div className="bars">
                <div className="info">
                  <span>React</span>
                  <span>60%</span>
                </div>
                <div className="line react"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Skills;
