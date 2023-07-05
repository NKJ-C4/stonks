import React, { useContext, useEffect, useState } from "react";
import ThemeContext from "../context/ThemeContext";
import Overview from "./Overview";
import Details from "./Details";
import Chart from "./Chart";
import Header from "./Header";
import StockContext from "../context/StockContext";
import {fetchQuote, searchSymbol } from "../utils/api/stock-api";

const Dashboard = () => {
  const mockStockDetails = {
    "1. symbol": "ADANIENT.BSE",
    "2. name": "Adani Enterprises",
    "3. type": "Equity",
    "4. region": "India/Bombay",
    "5. marketOpen": "9:00",
    "6. marketClose": "15:30",
    "7. timezone": "IST (GMT+5:30)",
    "8. currency": "INR",
  }
  const { darkMode } = useContext(ThemeContext);

  const { stockSymbol } = useContext(StockContext);

  const [stockDetails, setStockDetails] = useState({});

  const [quote, setQuote] = useState({});

  useEffect(() => {
    const updateStockDetails = async () => { // Updates the stock details component's data
      try {
        const result = await searchSymbol(stockSymbol);
        setStockDetails(result.bestMatches[0]);
      } catch (error) {
        setStockDetails({});
        console.log(error);
      }
    };

    const updateStockOverview = async () => { // Updates the stock Overview component's data
      try {
        const result = await fetchQuote(stockSymbol);
        setQuote(result["Global Quote"] ? result["Global Quote"] : {});
      } catch (error) {
        setQuote({});
        console.log(error);
      }
    };

    updateStockDetails();
    updateStockOverview();
  }, [stockSymbol]); // stockSymbol is supplied to the useEffect() as an additional param, so that the change in its value triggers the update in Stock details and overview

  return (
    <div
      className={`h-screen grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 grid-rows-8 md:grid-rows-7 xl:grid-rows-5 auto-rows-fr gap-6 p-10 font-quicksand ${
        darkMode ? "bg-gray-900 text-gray-300" : "bg-neutral-100"
      }`}
    >
      <div className="col-span-1 md:col-span-2 xl:col-span-3 row-span-1 flex justify-start items-center">
        <Header name={stockDetails["2. name"]} />
      </div>
      <div className="md:col-span-2 row-span-4">
        <Chart />
      </div>
      <div>
        <Overview
          symbol={stockSymbol}
          price={quote !=={} && quote["08. previous close"]}
          change={quote !=={} && quote["09. change"]}
          changePercent={quote !=={} && quote["10. change percent"]}
          currency={stockDetails["8. currency"]}
        />
      </div>
      <div className="row-span-2 xl:row-span-3">
        <Details details={mockStockDetails} />
      </div>
    </div>
  );
};

export default Dashboard;
