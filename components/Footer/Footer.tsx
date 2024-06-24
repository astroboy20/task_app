import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#072951] flex justify-between text-[#fff] p-[6%] ">
      <div className="flex flex-col gap-5">
        <h1 className="text-[72px] font-[700]">LOGO</h1>
        <span className="text-[18px] font-[300]">
          Subscribe to our newsletters and <br /> stay up to date on features
          and releases.
        </span>
        <p className="text-[18px] font-[500]">Copyrights @ Progfams 2024</p>
      </div>
      <div className="text-[20px] font-[500] flex flex-col gap-10">
        <p>Home</p>
        <p>About Us</p>
        <p>Service</p>
      </div>
      <div className="text-[20px] font-[500] flex flex-col gap-10">
        <p>Works</p>
        <p>Boot Camp</p>
      </div>
      <div className="text-[20px] font-[500] flex flex-col gap-10">
        <p>Consultation</p>
        <p>Blog</p>
      </div>
      <div className="text-[20px] font-[500] flex flex-col gap-10">
        <p>Contact</p>
        <span className="text-[16px] font-[400]">+234 810 112 8072</span>

        <span className="text-[16px] font-[400]">Info@Progfams.com</span>

        <span className="text-[16px] font-[400]">10B, Harmony Close,Ikeja, Lagos.</span>
      </div>
    </footer>
  );
};

export { Footer };
