import { Footer } from "@/components/Footer";
import { Subscribe } from "@/components/Subscribe";
import React, { ReactNode } from "react";
import { Testimonial } from "./Testimonial";
import { Description } from "./Description";
const HomeContainer = () => {
  return (
    <div>
      <Description />
      <Testimonial />
      <Subscribe />
      <Footer />
    </div>
  );
};

export { HomeContainer };
