import React from "react";
import brandLogo from "../assests/logo.png";

import { useData } from "../context/DataContext";
import DetailsCard from "../components/DetailsCard";
import Footer from "../components/Footer";

const Home = () => {
  const { criDetails } = useData();
  return (
    <div className="px-2 bg-gradient-to-t from-yellow-200 m-0">
      <div className="flex justify-center">
        <img src={brandLogo} alt="" className="w-[20rem]" />
      </div>
      <div>
        {criDetails.map((detail) => (
          <DetailsCard detail={detail} />
        ))}
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
