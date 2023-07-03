import React from "react";
import Card from "./Card";

const Overview = ({ symbol, price, change, changePercent, currency }) => {
  return (
    <Card>
      <span className="absolute left-4 top-4 text-neutral-400 text-lg xl:text-xl 2xl:text-2xl">
        {symbol? symbol: null}
      </span>
      <div className="w-full h-full flex items-center justify-around">
        <span className="text-2xl xl:text-4xl 2xl:text-5xl flex items-center">
          {currency === "USD" ? "$" : "₹"}{price && parseFloat(price).toFixed(2)} {/* Check for the currency, only USD and INR are provided, its a limitation. Then parsing the price to float and rounding it off upto 2 decimal places*/}
          <span className="text-lg xl:text-xl 2xl:text-2xl text-neutral-400 m-2">
            {currency}
          </span>
        </span>
        <span
          className={`text-lg xl:text-xl 2xl:text-2xl ${
            change && change > 0 ? "text-lime-500" : "text-red-500"
          }`}
        >
          {change && parseFloat(change).toFixed(2)} <span>({changePercent && parseFloat(changePercent).toFixed(2)}%)</span>
          {/* Parsing the change and change percentages from string to float, then rounding them off upto 2 decimal places*/}
        </span>
      </div>
    </Card>
  );
};

export default Overview;
