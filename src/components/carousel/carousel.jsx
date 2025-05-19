import React from "react";
import { Carousel } from "antd";
import crsl1 from "../../assets/images/carousel/carousel-1.jpg";
import crsl2 from "../../assets/images/carousel/carousel-2.jpg";
import "./carousel.scss";

export const CarouselComp = () => {
  return (
    <Carousel arrows autoplay={3000} infinite className="carousel">
      <div className="crsl_1">
        <img src={crsl1} alt="" />
        <div className="crsl-txt">
          <h5>Best online courses</h5>
          <h1>The best online learning platform</h1>
          <p>
            Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no.
            Kasd rebum ipsum et diam justo clita et kasd rebum sea sanctus
            eirmod elitr.
          </p>
          <div className="buttons">
            <button className="bluebtn">
              <a href="#">Read More</a>
            </button>
            <button className="whitebtn">
              <a href="#">Join Now</a>
            </button>
          </div>
        </div>
      </div>
      <div className="crsl_2">
        <img src={crsl2} alt="" />
        <div className="crsl-txt">
          <h5>Best online courses</h5>
          <h1>Get educated online from your home</h1>
          <p>
            Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no.
            Kasd rebum ipsum et diam justo clita et kasd rebum sea sanctus
            eirmod elitr.
          </p>
          <div className="buttons">
            <button className="bluebtn">
              <a href="#">Read More</a>
            </button>
            <button className="whitebtn">
              <a href="#">Join Now</a>
            </button>
          </div>
        </div>
      </div>
    </Carousel>
  );
};
