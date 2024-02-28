import React from "react";
import award from "../assests/1.png";
import awardReceiving from "../assests/2.png";
import products from "../assests/3.png";

const DetailsCard = ({ detail }) => {
  return (
    <div>
      <div className="flex flex-col items-center md:flex-row md:justify-between">
        <div className="md:w-[30%]">
          <img src={award} alt="" className="w-[10rem] md:w-[30rem]" />
        </div>
        <div className="flex flex-col items-center md:items-start md:w-[63%]">
          <p className="font-bold text-sm md:text-start">{detail.awards}</p>
          <div className="md:ml-10">
            {detail.awardDetails.map((info) => (
              <li className="text-xs">{info}</li>
            ))}
          </div>
          <img src={awardReceiving} alt="" className="w-[80rem] my-5" />
          <p className="text-xs">
            Government of India has awarded the{" "}
            <strong>"National Energy Conservation Award 2018"</strong>. Mr. G.
            Selvaraj, Joint Managing Director of C.R.I. Group received the award
            from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar
            Singh, Honorable Minister of State.
          </p>
        </div>
      </div>
      <p className="mt-5 text-sm">{detail.pumpsSold}</p>
      <img src={products} alt="" className="mt-3" />
      <p className="text-sm text-center">{detail.imageDetails}</p>
      <hr className="border-[2px] border-red-600 my-2" />
      <p className="text-sm font-bold text-center my-4">
        C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS
      </p>
      <div className="text-center">
        {detail.productSegments.map((product) => (
          <span className="border-r-2 border-red-600 px-2">{product}</span>
        ))}
      </div>
    </div>
  );
};

export default DetailsCard;
