import React from "react";

const Subscribe = () => {
  return (
    <section className="text-center flex flex-col gap-[25px] py-[2%] px-[3%]">
      <div>
        <h1 className="text-[24px] font-[700]">
          Email capture form for updates and promotions
        </h1>
        <p className="text-[18px] font-[400]">
          Subscribe to our newsletters and stay up to date on features and
          releases.
        </p>
      </div>

      <div className="border-2 border-[#000] w-fit m-auto p-1 rounded-[50px]">
        <input
          placeholder="Enter your work email"
          className="border-0 px-3 focus:outline-none"
        />
        <button className="bg-[#000] text-[#fff] px-10 py-2 text-[16px] font-[500] rounded-[50px] border-0">
          Subscribe
        </button>
      </div>
    </section>
  );
};

export { Subscribe };
