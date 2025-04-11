import React from "react";
import Banner from "../components/Banner";
import HomepageCard from "../components/HomepageCard";
import BannerSlider from "../components/BannerSlider";

const Home = () => {
  return (
    <>
      <Banner />
      <BannerSlider/>
      <HomepageCard />
    </>
  );
};

export default Home;
