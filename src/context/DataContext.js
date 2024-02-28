import { useContext } from "react";
import { createContext } from "react";

const DataContext = createContext();
const DataProvider = ({ children }) => {
  const criDetails = [
    {
      awards:
        "C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.",
      awardDetails: [
        "C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.",
        "C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel. ",
      ],
      pumpsSold:
        "INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION. ",
      imageDetails:
        "Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors",
      productSegments: [
        "CHEMICALS & PROCESS",
        "POWER",
        "WATER & WASTE WATER",
        "OILS & GAS",
        "PHARMA",
        "SUGARS & DISTILLERIES",
        "PAPER & PULP",
        "MARINE & DEFENCE",
        "METAL & MINING",
        "FOOD & BEVERAGE",
        "PETROCHEMICAL & REFINERIES",
        "SOLAR",
        "BUILDING",
        "HVAC",
        "FIRE FIGHTING",
        "AGRICULTURE & RESIDENTIAL",
      ],
    },
  ];
  return (
    <DataContext.Provider value={{ criDetails }}>
      {children}
    </DataContext.Provider>
  );
};

const useData = () => useContext(DataContext);
export { useData, DataProvider };
