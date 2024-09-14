import React from "react";
import Image from "next/image"; // Import Image from next/image

const SmallBar = () => {
  return (
    <div className="relative flex justify-center mt-[px]">
      <div className="w-full max-w-[1200px] h-[350px] bg-white shadow-lg rounded-full"></div>

      {/* Earth Travel Image */}
      <Image
        src="/images/Earthtravel.svg"
        width={155}
        height={190}
        alt="travel"
        className="absolute"
        style={{ left: "12%", top: "48px" }}
      />

      {/* Custom Cloth Image */}
      <Image
        src="/images/custom.svg"
        width={242}
        height={355}
        alt="cloth"
        className="absolute"
        style={{ left: "30%", top: "50px" }}
      />

      {/* Filmy Shooting Image */}
      <Image
        src="/images/filmy.svg"
        width={155}
        height={190}
        alt="shooting"
        className="absolute"
        style={{ left: "55%", top: "52px" }}
      />

      {/* Fashion Image */}
      <Image
        src="/images/fashion.svg"
        width={170}
        height={220}
        alt="fashion"
        className="absolute"
        style={{ right: "10%", top: "58px" }}
      />
    </div>
  );
};

export default SmallBar;
