import { Footer } from "@/components/Footer";
import { Subscribe } from "@/components/Subscribe";
import React, { ReactNode } from "react";
import { Testimonial } from "./Testimonial";
import { Description } from "./Description";
import { Navbar } from "@/components/Navbar";
import { Hero } from "./Hero";
const HomeContainer = () => {
  return (
    <div>
      <Hero />
      <Description />
      <Testimonial />
      <Subscribe />
      <Footer />
    </div>
  );
};

export { HomeContainer };
