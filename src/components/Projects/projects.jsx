import { useState } from "react";
import "./projects.css";
export default function Projects() {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <>
      <div className="projects" id="projects">
        <h1 className="projects_title">Projects</h1>
        <h4 className="projects_subtitle">I have made</h4>

        <div className="projects_container container">
          <div className="project_content">
            <div>
              <i className="uil uil-web-grid projects_icon"></i>
              <h3 className=" project_title">Portfolio</h3>
            </div>
            <span className="projects_button" onClick={() => toggleTab(1)}>
              View More
              <i
                className="uil uil-arrow-right
                projects_button-icon"
              ></i>
            </span>

            <div
              className={
                toggleState === 1
                  ? "project_modal active-modal"
                  : "project_modal"
              }
            >
              <div className="projects_modal-content">
                <i
                  onClick={() => toggleTab(0)}
                  className="uil uil-times projects_modal-close"
                ></i>
                <h3 className="projects_modal-title">React Portfolio</h3>
                <p className="projects_modal-description">
                  A portfolio project showcasing my skills in front-end
                  development using React. Providing seamless and responsive
                  user interfaces with modern tools and technologies.
                </p>

                <ul className="prjects_modal-projects grid">
                  <li className="projects_modal-project">
                    <i className="uil uil-check-circle projects_modal-icon"></i>
                    <p className="projects_modal-info">
                      Built with React and JavaScript.
                    </p>
                  </li>
                  <li className="projects_modal-project">
                    <i className="uil uil-check-circle projects_modal-icon"></i>
                    <p className="projects_modal-info">
                      Responsive design with CSS and styled-components.
                    </p>
                  </li>

                  <li className="projects_modal-project">
                    <i className="uil uil-check-circle projects_modal-icon"></i>
                    <p className="projects_modal-info">
                      Dynamic UI/UX interactions with React hooks.{" "}
                    </p>
                  </li>
                  <li className="projects_modal-project">
                    <i className="uil uil-check-circle projects_modal-icon"></i>
                    <p className="projects_modal-info">
                      Optimized for performance and user experience.
                    </p>
                  </li>
                  <li className="projects_modal-project">
                    <i className="uil uil-check-circle projects_modal-icon"></i>
                    <p className="projects_modal-info">
                      <a
                        href="https://rohit8070.github.io/Portfolio/"
                        target="_blank"
                      >
                        click to visit
                      </a>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="project_content">
            <div>
              <i className="uil uil-arrow projects_icon"></i>
              <h3 className=" project_title">CRUD Operations</h3>
            </div>
            <span className="projects_button" onClick={() => toggleTab(2)}>
              View More
              <i
                className="uil uil-arrow-right
                projects_button-icon"
              ></i>
            </span>

            <div
              className={
                toggleState === 2
                  ? "project_modal active-modal"
                  : "project_modal"
              }
            >
              <div className="projects_modal-content">
                <i
                  onClick={() => toggleTab(0)}
                  className="uil uil-times projects_modal-close"
                ></i>
                <h3 className="projects_modal-title">
                  CRUD Operations with JDBC
                </h3>
                <p className="projects_modal-description">
                  A backend project demonstrating Create, Read, Update, and
                  Delete (CRUD) operations using Java and JDBC.{" "}
                </p>

                <ul className="prjects_modal-projects grid">
                  <li className="projects_modal-project">
                    <i className="uil uil-check-circle projects_modal-icon"></i>
                    <p className="projects_modal-info">
                      Developed using Java with JDBC for database interaction.
                    </p>
                  </li>
                  <li className="projects_modal-project">
                    <i className="uil uil-check-circle projects_modal-icon"></i>
                    <p className="projects_modal-info">
                      Implements essential CRUD functionality.
                    </p>
                  </li>

                  <li className="projects_modal-project">
                    <i className="uil uil-check-circle projects_modal-icon"></i>
                    <p className="projects_modal-info">
                      Demonstrates database connection and manipulation.
                    </p>
                  </li>
                  <li className="projects_modal-project">
                    <i className="uil uil-check-circle projects_modal-icon"></i>
                    <p className="projects_modal-info">
                      Manages database records efficiently.
                    </p>
                  </li>
                  <li className="projects_modal-project">
                    <i className="uil uil-check-circle projects_modal-icon"></i>
                    <p className="projects_modal-info">
                      <a
                        href="https://github.com/rohit8070/JDBC-CRUD-operations.git"
                        target="_blank"
                      >
                        Click to get sourcecode
                      </a>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="project_content">
            <div>
              <i className="uil uil-edit projects_icon"></i>
              <h3 className=" project_title">Mini PROJECTS</h3>
            </div>
            <span className="projects_button" onClick={() => toggleTab(3)}>
              View More
              <i
                className="uil uil-arrow-right
                projects_button-icon"
              ></i>
            </span>

            <div
              className={
                toggleState === 3
                  ? "project_modal active-modal"
                  : "project_modal"
              }
            >
              <div className="projects_modal-content">
                <i
                  onClick={() => toggleTab(0)}
                  className="uil uil-times projects_modal-close"
                ></i>
                <h3 className="projects_modal-title">
                  Tic-Tac-Toe & Simon Says
                </h3>
                <p className="projects_modal-description">
                  Explore two engaging mini-projects built with html css and Js:
                  a classic Tic-Tac-Toe game and a Simon Says game. Both
                  projects focus on interactive user experiences and responsive
                  designs.
                </p>

                <ul className="prjects_modal-projects grid">
                  <li className="projects_modal-project">
                    <i className="uil uil-check-circle projects_modal-icon"></i>
                    <p className="projects_modal-info">Tic-Tac-Toe Game:</p>
                  </li>

                  <li className="projects_modal-project">
                    <i className="uil uil-check-circle projects_modal-icon"></i>
                    <p className="projects_modal-info">
                      <a href="">Click to play Tic Tac Toe</a>
                    </p>
                  </li>
                  <li className="projects_modal-project">
                    <i className="uil uil-check-circle projects_modal-icon"></i>
                    <p className="projects_modal-info">Simon Says Game:</p>
                  </li>
                  <li className="projects_modal-project">
                    <i className="uil uil-check-circle projects_modal-icon"></i>
                    <p className="projects_modal-info">
                      <a href="https://rohit8070.github.io/simanSaysGame/">
                        Click to play simon says game
                      </a>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
