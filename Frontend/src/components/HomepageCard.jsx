import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./Cards";
import axios from "axios";
import "./HomePageCards.css";

const HomepageCard = () => {
  const [products, setProducts] = useState([""]);
  const [backendLoad, setBackendLoad] = useState(true);

  const fetchProductDatabse = async () => {
    try {
      setBackendLoad(true);
      const product = await axios.get(
        `https://api.escuelajs.co/api/v1/products`
      );

      if (product?.data) {
        setProducts(product.data);
        setBackendLoad(false);
      }
      
    } catch (error) {
      console.log(`ERROR WHILE FETCHING PRODUCT FROM DATABASE : ${error}`);
    }
  };

  useEffect(() => {
    fetchProductDatabse();
  }, []);

  let settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
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
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 pb-9 pt-5 bg-slate-300 text-black">
        <h1 className="text-3xl text-center font-bold text-blue-700">Some of the Famous Brands are our Co-partners in our Ecommerce Journey</h1>
        <p className="text-xl text-center pt-5">
          Different varities of Shirts and T-shirts, Which get Buyed Most
          On Yearly basis ! Some Of Them Shown Below. Please Do Checkout
        </p>
      </div>
      <div className="slider-container max-w-screen-2xl container mx-auto p-5 md:px-20 pb-9 bg-slate-200">
        {backendLoad ? (
          <>
         
            <h1 className="text-xl font-bold text-center text-blue-500 p-3">
                Please wait, We are exicited to showcase our Products
              </h1>
          </>
        ) : (
          <>
            <Slider {...settings} className="">
              {products?.map((i) => (
                <Cards
                  key={i.id}
                  title={i.title}
                  price={i.price}
                  category={i.category?.name}
                  details={i.description}
                  img={i.images[0]}
                  product={i}
                />
              ))}
            </Slider>
          </>
        )}
      </div>
    </>
  );
};

export default HomepageCard;
