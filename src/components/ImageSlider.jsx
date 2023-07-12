/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import aboutBgImage from "../assets/about-bg.jpg";
// import bgImage from "../assets/bg.jpg";

// const ImageSlider = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   };

//   return (
//     <Slider {...settings}>
//       <div>
//         <img
//           src={aboutBgImage}
//           alt="About Background"
//           style={{ width: "100%", objectFit: "cover" }}
//         />
//       </div>
//       <div>
//         <img
//           src={bgImage}
//           alt="Background"
//           style={{ width: "100%", objectFit: "cover" }}
//         />
//       </div>
//     </Slider>
//   );
// };

// export default ImageSlider;
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Carousel } from "react-bootstrap";

const HeroSlider = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src="bg.jpg" alt="First slide" />
          <Carousel.Caption>
            <h1 className="mb-56 text-left text-4xl p-6 with-opacity">
              THIS IS THE PLACE WHERE TECHNOLOGY & <br />
              CREATIVITY FUSED INTO DIGITAL CHEMISTRY
            </h1>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="about-bg.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h1 className="mb-56 text-left text-4xl p-6 with-opacity">
              WE DON'T HAVE THE BEST BUT WE HAVE THE GREATEST TEAM
            </h1>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default HeroSlider;
