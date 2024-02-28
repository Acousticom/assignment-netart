import React from "react";
import { FaGlobe, FaFacebook, FaPhoneAlt } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="bg-red-500 pt-7 pb-14 mt-6 flex justify-center">
      <div className="md:flex md:justify-around w-fit md:w-full ">
        <p className="flex items-end gap-2 text-white font-semibold my-3">
          <span className="rounded-full bg-white">
            <FaPhoneAlt size={35} className="text-red-500 px-2 py-2" />
          </span>
          Toll free <strong>1800 200 1234</strong>
        </p>
        <p className="flex items-end gap-2 text-white font-semibold my-3">
          <FaFacebook size={35} color="white" />
          www.facebook.com/cripumps
        </p>
        <p className="flex items-end gap-2 text-white font-semibold my-3">
          <FaGlobe size={35} color="white" />
          www.crigroups.com
        </p>
      </div>
    </div>
  );
};

export default Footer;
