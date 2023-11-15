import React from "react";
import LandingPage from "./LandingPage";

export default function Home() {
  return (
    <div>
      <header className="main-header">
        <div className="custom-container">
          <div className="header-inner">
            <div className="logo-part">
              <img src="../../images/logo.png" />
            </div>

            <div className="menu">
              <ul>
                <li>
                  <a href="javascript:;">Home</a>
                </li>
                <li>
                  <a href="javascript:;">About</a>
                </li>
                <li>
                  <a href="javascript:;">Projects</a>
                </li>
                <li>
                  <a href="javascript:;">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>

      <section className="banner-sec">
        <div className="custom-container">
          <div className="row">
            <div className="col-md-7 content-part">
              <h1>A home is built with love and dreams</h1>
              <p>Real estate farm that makes your dreams true</p>
              <div className="button-part">
                <a href="javascript:;" className="project-btn">
                  Our Projects
                </a>
                <a href="javascript:;" className="contact-btn">
                  Contact Us
                </a>
              </div>
            </div>
            <div className="col-md-5 image-part">
              <img src="../../images/banner-house.png" />
            </div>
          </div>
        </div>
      </section>

      <section className="properties-sec">
        <LandingPage />
      </section>

      <section className="winning-sec">
        <div className="custom-container">
          <div className="row">
            <div className="col-md-6 left-winning-img">
              <img src="../../images/winning-img.png" />
            </div>

            <div className="col-md-6 content-area">
              <h2>Award winning real estate company in Dubai</h2>
              <p>
                Semper arcu mauris aliquam lacus. Massa erat vitae ultrices
                pharetra scelerisque. Ipsum, turpis facilisis tempor pulvinar in
                lobortis ornare magna.
              </p>
              <div className="counter-part">
                <ul>
                  <li>
                    <h3>Previous projects</h3>
                    <h4>34+</h4>
                  </li>
                  <li>
                    <h3>years experience</h3>
                    <h4>20y</h4>
                  </li>
                  <li>
                    <h3>Ongoing projects</h3>
                    <h4>12</h4>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
