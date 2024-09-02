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
              <h3 className=" project_title">Portfolio Website</h3>
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
                <h3 className="projects_modal-title">Project 1</h3>
                <p className="projects_modal-description">
                  projects with more than 3 years of experience. Providing
                  quality work tko clients and companies.
                </p>

                <ul className="prjects_modal-projects grid">
                  <li className="projects_modal-project">
                    <i className="uil uil-check-circle projects_modal-icon"></i>
                    <p className="projects_modal-info">
                      I develop the user interface
                    </p>
                  </li>
                  <li className="projects_modal-project">
                    <i className="uil uil-check-circle projects_modal-icon"></i>
                    <p className="projects_modal-info">webpage development </p>
                  </li>

                  <li className="projects_modal-project">
                    <i className="uil uil-check-circle projects_modal-icon"></i>
                    <p className="projects_modal-info">
                      I create uix element interactions
                    </p>
                  </li>
                  <li className="projects_modal-project">
                    <i className="uil uil-check-circle projects_modal-icon"></i>
                    <p className="projects_modal-info">
                      I position your company brand{" "}
                    </p>
                  </li>
                  <li className="projects_modal-project">
                    <i className="uil uil-check-circle projects_modal-icon"></i>
                    <p className="projects_modal-info">
                      Design and mockups of products for comppnies
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="project_content">
            <div>
              <i className="uil uil-arrow projects_icon"></i>
              <h3 className=" project_title">Airbnb Clone</h3>
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
                <h3 className="projects_modal-title">Project 2</h3>
                <p className="projects_modal-description">
                  projects with more than 3 years of experience. Providing
                  quality work tko clients and companies.
                </p>

                <ul className="prjects_modal-projects grid">
                  <li className="projects_modal-project">
                    <i className="uil uil-check-circle projects_modal-icon"></i>
                    <p className="projects_modal-info">
                      I develop the user interface
                    </p>
                  </li>
                  <li className="projects_modal-project">
                    <i className="uil uil-check-circle projects_modal-icon"></i>
                    <p className="projects_modal-info">webpage development </p>
                  </li>

                  <li className="projects_modal-project">
                    <i className="uil uil-check-circle projects_modal-icon"></i>
                    <p className="projects_modal-info">
                      I create uix element interactions
                    </p>
                  </li>
                  <li className="projects_modal-project">
                    <i className="uil uil-check-circle projects_modal-icon"></i>
                    <p className="projects_modal-info">
                      I position your company brand{" "}
                    </p>
                  </li>
                  <li className="projects_modal-project">
                    <i className="uil uil-check-circle projects_modal-icon"></i>
                    <p className="projects_modal-info">
                      Design and mockups of products for comppnies
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="project_content">
            <div>
              <i className="uil uil-edit projects_icon"></i>
              <h3 className=" project_title">Airbnb Clone</h3>
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
                <h3 className="projects_modal-title">Project 3</h3>
                <p className="projects_modal-description">
                  projects with more than 3 years of experience. Providing
                  quality work tko clients and companies.
                </p>

                <ul className="prjects_modal-projects grid">
                  <li className="projects_modal-project">
                    <i className="uil uil-check-circle projects_modal-icon"></i>
                    <p className="projects_modal-info">
                      I develop the user interface
                    </p>
                  </li>
                  <li className="projects_modal-project">
                    <i className="uil uil-check-circle projects_modal-icon"></i>
                    <p className="projects_modal-info">webpage development </p>
                  </li>

                  <li className="projects_modal-project">
                    <i className="uil uil-check-circle projects_modal-icon"></i>
                    <p className="projects_modal-info">
                      I create uix element interactions
                    </p>
                  </li>
                  <li className="projects_modal-project">
                    <i className="uil uil-check-circle projects_modal-icon"></i>
                    <p className="projects_modal-info">
                      I position your company brand{" "}
                    </p>
                  </li>
                  <li className="projects_modal-project">
                    <i className="uil uil-check-circle projects_modal-icon"></i>
                    <p className="projects_modal-info">
                      Design and mockups of products for comppnies
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
