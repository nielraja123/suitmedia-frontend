/* eslint-disable no-unused-vars */
import {
  ContactUs,
  Footer,
  ImageSlider,
  Navbar,
  OurValues,
} from "./components";
import styles from "./style";
import React from "react";

const App = () => {
  return (
    <div className="w-full overflow-hidden">
      <div className="w-full">
        <div className={`${styles.boxWidth}`}>
          {/* <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}> */}
          <Navbar />
        </div>
      </div>
      <div>
        <ImageSlider />
      </div>
      <div className="w-full px-[200px]">
        <div>
          {/* <div className={` ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}> */}
          <OurValues />
          <ContactUs />
        </div>
      </div>
      <div className={`${styles.boxWidth}`}>
        {/* <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}> */}
        <Footer />
      </div>
    </div>
  );
};

export default App;
