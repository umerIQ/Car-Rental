import React from "react";
import HeroSection from "../components/HeroSection";
import Features from "../components/Features";
import Banner from "../components/Banner";
import Testimonial from "../components/Testimonial";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <HeroSection />
      <Features />
      <Banner />
      <Testimonial />
      <NewsLetter />
    </>
  );
}

export default Home;
