import React from "react";
import { RightArrow, LeftArrow } from "../../../assets/index";
import Image from "next/image";

const Testimonial = () => {
  return (
    <section className="bg-[#4393D840] py-[3%] px-[6%]">
      <div className="flex flex-col mb-[50px] gap-[10px]">
        {" "}
        <span className="text-[#8D8D8D] text-[28px] font-[500]">
          Testimonial
        </span>
        <h1 className="text-[48px] font-[800] leading-[50px]">
          See what others are <br /> saying about us
        </h1>
      </div>

      <div className="grid grid-cols-2 gap-[50px]">
        <div className="flex flex-col gap-[30px]">
          <h2 className="leading-[44px] text-[28px]">
            “Explore the course catalog and syllables to identify courses that
            align with personal learning objectives. Take advantage of
            interactive tutorials we offer to reinforce your understanding and
            apply concepts in real world scenarios.”
          </h2>
          <div className="text-[24px]">
            <h3 className="font-[500]">Faaruq Azeez</h3>
            <h3 className="font-[400]">Founder, Justwear</h3>
            <span className="font-[400] text-black">United Arab Emirate</span>
          </div>

          <div className="flex gap-5">
            <RightArrow />
            <LeftArrow />
          </div>
        </div>
        <div>
          {" "}
          <Image
            src={"/images/testimonial-image.png"}
            width={578}
            height={573}
            alt="image"
          />
        </div>
      </div>
    </section>
  );
};

export { Testimonial };
