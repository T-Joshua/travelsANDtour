import React from "react";
import "./ImgCarouselStyles.css";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import Picture4 from "../../Asssets/picture4.jpg";
import Picture3 from "../../Asssets/picture3.jpg";
import Picture5 from "../../Asssets/picture5.jpg";
import Picture7 from "../../Asssets/picture7.jpg"; 

function ImgCarousel() {
  return (
    <div name="carousel" className="container">
      <Carousel
        className="carousel"
        showArrows={true}
        autoPlay={true}
        infiniteLoop={true}
      >
        <div>
          <img src={Picture4} alt="/" />
          {/* <p className="legend">Legend 1</p> */}
        </div>
        <div>
          <img src={Picture3} alt="/" />
          {/* <p className="legend">Legend 2</p> */}
        </div>
        <div>
          <img src={Picture5} alt="/" />
          {/* <p className="legend">Legend 3</p> */}
        </div>
        <div>
          <img src={Picture7} alt="/" />
          {/* <p className="legend">Legend 3</p> */}
        </div>
      </Carousel>
    </div>
  );
}

export default ImgCarousel;
