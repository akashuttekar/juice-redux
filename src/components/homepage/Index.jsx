import React from "react";
import Youtube from "./youtube/Youtube";
import AboutUs from "./aboutus/AboutUs";
import ProductSlider from "./productslider/ProductSlider";
import Team from "./team/Team";
import Heroslider from "./heroslider/HeroSlider";

const Index = () => {
  return (
    <>
      <Heroslider />
      <Youtube />
      <AboutUs />
      <ProductSlider />
      <Team />
    </>
  );
};

export default Index;
