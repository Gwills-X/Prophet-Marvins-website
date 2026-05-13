"use client";
import Hero from "./home/Hero";
import Features from "./home/Features";
import React from "react";
import About from "./home/About";
import Services from "./home/Services";
import Testimonials from "./home/Testimonials";
import Contact from "./home/Contact";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Features />
      <Services />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default Home;
