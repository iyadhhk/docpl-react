import React from "react";
import "./Footer.css";
export default function Footer() {
  return (
    <div className="footer">
      <p className="footer-text p-1">
        We are leaders in 10 countries:{" "}
        <a className="country" href="##">
          Poland
        </a>
        ,{" "}
        <a className="country" href="##">
          Turkey
        </a>
        ,{" "}
        <a className="country" href="##">
          Spain
        </a>
        ,{" "}
        <a className="country" href="##">
          Italy
        </a>
        ,{" "}
        <a className="country" href="##">
          Czech Republic
        </a>
        ,{" "}
        <a className="country" href="##">
          Mexico
        </a>
        ,{" "}
        <a className="country" href="##">
          Colombia
        </a>
        ,{" "}
        <a className="country" href="##">
          Brazil
        </a>
        ,
        <a className="country" href="##">
          Argentina
        </a>{" "}
        and{" "}
        <a className="country" href="##">
          Chile
        </a>
      </p>
      <p className="footer-text">
        This site uses cookies to deliver services in accordance with this
        Privacy Policy. You can specify the conditions for storing or accessing
        cookies on your browser. www.docplanner.com © 2019
      </p>
    </div>
  );
}
