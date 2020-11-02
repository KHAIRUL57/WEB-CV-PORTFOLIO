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
              <div className="text">My creatipe skills</div>
              <p className="text-1">
                I started learning programming language at the coding school
                organized by Zeal Indonesia in collaboration with the As-Syahid
                Islamic boarding school. This pesantren coding program has been
                running for 3 months which is still the Covid-19 pandemic, to
                explain what skills I can while participating in this program.
                shown in the following table
              </p>
              {/* <a href="/">Read more</a> */}
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
              <div className="bars">
                <div className="info">
                  <span>MS.office</span>
                  <span>80%</span>
                </div>
                <div className="line office"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Skills;
