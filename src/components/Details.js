import React, { useContext } from "react";
import Card from "./Card";
import ThemeContext from "../context/ThemeContext";

const Details = ({ details }) => {
  const { darkMode } = useContext(ThemeContext);

  // Creating an object whose keys are similar to that of the keys returned by the API, 
  // so that there is ease in iterating over them using different array methods (here, map method)
  const detailsList =   {
    "1. symbol": "Symbol",
    "2. name": "Name",
    "3. type": "Type",
    "4. region": "Region",
    "5. marketOpen": "Market open",
    "6. marketClose": "Market close",
    "7. timezone": "Time zone",
    "8. currency": "Currency",
  };
  return (
    <Card>
      <ul
        className={`w-full h-full flex flex-col justify-between divide-y-1 ${
          darkMode ? "divide-gray-800" : null
        }`}
      >
        {Object.keys(detailsList).map((item) => {
          return (
            <li key={item} className="flex-1 flex justify-between items-center">
              <span>{detailsList[item]}</span>
              <span className="font-bold">
                {details[item]}
              </span>
            </li>
          );
        })}
      </ul>
    </Card>
  );
};

export default Details;
