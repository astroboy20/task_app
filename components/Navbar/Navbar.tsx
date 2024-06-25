import { useRouter } from "next/router";
import React from "react";

const Navbar = () => {
  const router = useRouter();
  const { pathname } = router;
  return (
    <header className="bg-[#072951] py-[1%] px-[6%] flex items-center justify-between">
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
              pathname === "/task" ? "text-[#4393D8] " : ""
            }`}
            onClick={() => router.push("/task")}
          >
            BootCamp
          </p>
        </div>
      </div>
    </header>
  );
};

export { Navbar };
