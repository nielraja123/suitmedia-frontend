/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import bankImage from "/bank.png";
import balance from "/balance-scale.png";
import lightbulb from "/lightbulb.png";

const Card = ({ backgroundColor, imgSrc, header, caption }) => {
  return (
    <div
      style={{
        width: "324px",
        height: "240px",
        background: backgroundColor,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}>
      <img src={imgSrc} alt="Bank" style={{ marginBottom: "10px" }} />
      <h3 style={{ textAlign: "center" }} className="text-white font-bold">
        {header}
      </h3>
      <p style={{ textAlign: "center" }} className="text-white">
        {caption}
      </p>
    </div>
  );
};

const OurValues = () => {
  return (
    <div className="pb-6">
      <h1 className="text-5xl font-extrabold text-center mt-[150px]">
        Our Values
      </h1>
      <div
        style={{ display: "flex", justifyContent: "space-between" }}
        className="py-10">
        <Card
          backgroundColor={"#EA7C6F"}
          imgSrc={lightbulb}
          header={"INNOVATIVE"}
          caption={
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt facilis, quas animi alias nostrum a consequatur! "
          }
        />
        <Card
          backgroundColor={"#6A996F"}
          imgSrc={bankImage}
          header={"LOYALTY"}
          caption={
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt facilis, quas animi alias nostrum a consequatur!"
          }
        />
        <Card
          backgroundColor={"#5696C2"}
          imgSrc={balance}
          header={"RESPECT"}
          caption={
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt facilis, quas animi alias nostrum a consequatur! "
          }
        />
      </div>
    </div>
  );
};

export default OurValues;
