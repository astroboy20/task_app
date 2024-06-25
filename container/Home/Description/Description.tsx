import { MoreIcon } from "@/assets";
import Image from "next/image";
import React from "react";

const Description = () => {
  return (
    <div className="grid grid-cols-2 border-2 custom-border my-[3%] mx-[6%]">
      <Image
        src={"/images/description-image.png"}
        width={572}
        height={582}
        alt="description-image"
      />
      <div className="flex flex-col gap-[30px]  p-10">
        <h1 className="text-[32px] font-[700]">
          {" "}
          Fast track your Tech Career{" "}
        </h1>
        <p className="text-[24px] font-[300] leading-[29px]">
          Get the right teams with zero worries for your project every now and
          then. Get the right teams with zero worries for your project every now
          and then.{" "}
        </p>
        <div className="flex flex-col gap-5">
          <div className="flex gap-5">
            <button className="w-fit bg-[#072951] text-white px-[28px] py-[10px] rounded-[12px]">
              {" "}
              #30,000.00
            </button>
            <button className="w-fit bg-[#4393D8] text-white px-[28px] py-[10px] rounded-[12px]">
              {" "}
              3 months{" "}
            </button>
          </div>

          <div className="flex gap-5">
            <button className="w-fit bg-[#000] text-white px-[28px] py-[10px] rounded-[12px]">
              Mon-Fri (4pm -6pm)
            </button>
            <button className="w-fit bg-[#8D8D8D] text-white px-[28px] py-[10px] rounded-[12px]">
              {" "}
              GoogleMeet
            </button>
          </div>
        </div>

        <div className="text-[#072951] font-[600] text-[28px] flex gap-5 items-center">
          <MoreIcon /> More details
        </div>
      </div>
    </div>
  );
};

export { Description };
