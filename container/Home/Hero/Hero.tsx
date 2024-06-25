import Image from "next/image";
import React from "react";
import { useRouter } from "next/router";

const Hero = () => {
  const router = useRouter();
  const { pathname } = router;

  return (
    <div className="bg-[#051B35] py-[1%] px-[6%] flex flex-col gap-[40px] h-[560px]">
      <header className="flex items-center justify-between">
        <h1 className="text-[28px] text-white font-[800]">TECHNEW</h1>
        <div className="flex-auto flex justify-center">
          <div className="flex space-x-[40px] text-white text-[20px]">
            <p
              className={`cursor-pointer ${
                pathname === "/" ? "text-[#4393D8] " : ""
              }`}
              onClick={() => router.push("/")}
            >
              Home
            </p>
            <p
              className={`cursor-pointer ${
                pathname === "/bootcamp" ? "text-[#4393D8] " : ""
              }`}
              onClick={() => router.push("/task")}
            >
              BootCamp
            </p>
          </div>
        </div>
      </header>
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-[30px] ">
          <h1 className="text-[44px] text-white font-[500] leading-[50px]">
            Get the best knowledge <br /> from our Versatile Tutors
          </h1>
          <button className="text-[24px] bg-white font-[600] text-[#051B35] rounded-[12px] w-fit px-[20px] py-[10px]">
            Start learning!
          </button>
        </div>
        <Image
          src={"/images/Hero.png"}
          width={377}
          height={378.14}
          alt="hero-image"
        />
      </div>
    </div>
  );
};

export { Hero };
