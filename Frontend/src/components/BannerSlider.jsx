import React from "react";
import Slider from "react-slick";

const BannerSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000, 
    autoplaySpeed: 0,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 pb-9 bg-slate-200">
        <div className="slider-container">
          <Slider {...settings}>
            <div className="p-3">
              <img
                src="https://i.imgur.com/cSytoSD.jpeg"
                style={{ height: "500px", width: "500px" }}
              />
            </div>
            <div className="p-3">
              <img
                src="https://i.imgur.com/mp3rUty.jpeg"
                alt="banner"
                style={{ height: "500px", width: "500px" }}
              />
            </div>
            <div className="p-3">
              <img
                src="https://i.imgur.com/wXuQ7bm.jpeg"
                alt="banner"
                style={{ height: "500px", width: "500px" }}
              />
            </div>
            <div className="p-3">
              <img
                src="https://i.imgur.com/xGQOw3p.jpeg"
                alt="banner"
                style={{ height: "500px", width: "500px" }}
              />
            </div>
            <div className="p-3">
              <img
                src="https://i.imgur.com/UsFIvYs.jpeg"
                alt="banner"
                style={{ height: "500px", width: "500px" }}
              />
            </div>
            <div className="p-3">
              <img
                src="https://i.imgur.com/QkIa5tT.jpeg"
                alt="banner"
                style={{ height: "500px", width: "500px" }}
              />
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
};

export default BannerSlider;
