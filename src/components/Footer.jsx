/* eslint-disable no-unused-vars */
import React from "react";

const Footer = () => {
  return (
    <div
      style={{ backgroundColor: "#333333", color: "#FFFFFF" }}
      className="pt-6 pb-3">
      <div
        style={{
          marginRight: "10px",
          fontWeight: "bold",
          alignItems: "center",
        }}>
        <p className="text-center">
          Copyright
          <span style={{ marginRight: "10px" }}> &copy;</span>2016. PT Company
        </p>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "10px 0",
        }}>
        <img
          src="/facebook.png"
          alt="Facebook"
          style={{ marginRight: "5px", height: "32px" }}
        />
        <img
          src="/twitter.png"
          alt="Twitter"
          style={{ marginLeft: "5px", height: "32px" }}
        />
      </div>
    </div>
  );
};

export default Footer;
