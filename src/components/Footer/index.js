import React from "react";

export default function index() {
  return (
    <div className="footer">
      <div id="copyright">
        <h3
          style={{
            fontSize: "2em",
            lineHeight: 0,
            padding: 0,
            margin: "auto 0",
            color: "limegreen",
          }}
        >
          How can we help?
        </h3>
        <h4 style={{ fontSize: "1.4em", lineHeight: 0, padding: 0 }}>
          Contact us anytime.
        </h4>
        <p style={{ lineHeight: 0, padding: 0 }}>
          2021 SendCash. All rights reserved.
        </p>
      </div>
      <div id="contact">
        <h3>CONTACT US</h3>
        <a href="">
          <p style={{ color: "white", textDecoration: "none" }}>
            Privacy policy
          </p>
        </a>
        <img src="tw.png" alt="tw" id="tw" />
        <img src="ig.png" alt="ig" />
      </div>
      <div id="info">
        <h3>REACH US</h3>
        <p>
          13, Kings Avenue
          <br />
          Kingsway
        </p>
      </div>
    </div>
  );
}
