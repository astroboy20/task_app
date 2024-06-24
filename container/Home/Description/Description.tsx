import Image from "next/image";
import React from "react";

const Description = () => {
  return (
    <div className="grid grid-cols-2 border-4 custom-border my-[3%] mx-[6%]  overflow-hidden">
      <Image
        src={"/images/description-image.png"}
        width={572}
        height={582}
        alt="description-image"
      />
      <div>
      Fast track your Tech Career 
Get the right teams with zero worries for your project every now and then. Get the right teams with zero worries for your project every now and then. 
#30,000.00
3 months
Mon-Fri (4pm -6pm)
GoogleMeet
More details




      </div>
    </div>
  );
};

export  {Description};
