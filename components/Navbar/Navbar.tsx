import React from "react";

const Navbar = () => {
  return (
    <header className="bg-[#072951] py-[1%] px-[6%] flex items-center justify-between">
      <h1 className="text-[28px] text-white font-[800]">TECHNEW</h1>
      <div className="flex-auto flex justify-center">
        <div className="flex space-x-4 text-white text-[20px]">
          <p>Home</p>
          <p>BootCamp</p>
        </div>
      </div>
    </header>
  );
};

export { Navbar };
