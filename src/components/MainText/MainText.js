import React from "react";
import "./MainText.css";
export default function MainText() {
  return (
    <div className="container">
      <img src="https://www.docplanner.com/img/sygnet.png" alt="logo" />
      <h1 className="main-text">Making the healthcare experience more human</h1>
      <div className="about-text">
        <p>
          We want patients to find the perfect doctor and book an appointment in
          the most easy way. The patient journey should be enjoyable, and that's
          why we are always next to them: to help them find the best possible
          care. Anytime, anywhere.
        </p>
        <p>
          We also help doctors to better manage their practice and build their
          online reputation. With our integrated end-to-end solution, doctors
          are able not only to improve their online presence, but also to devote
          their time to what really matters: their patients.
        </p>
      </div>
    </div>
  );
}
