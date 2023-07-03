// For creating graph, a libarary called Recharts is used, which is a React based library for
// generating graphs according to the data it is provided.

import React, { useContext, useEffect, useState } from "react";
import ChartFilter from "./ChartFilter";
import Card from "./Card";
import {
  Area,
  XAxis,
  YAxis,
  ResponsiveContainer,
  AreaChart,
  Tooltip,
} from "recharts";
import ThemeContext from "../context/ThemeContext";
import StockContext from "../context/StockContext";
import { fetchHistoricalData } from "../utils/api/stock-api";
import { chartConfig } from "../constants/config";

const Chart = () => {
  const [filter, setFilter] = useState("1W"); // Initializing the filter with "1 Week", so that initially the graph shows past 7 days data

  const { darkMode } = useContext(ThemeContext); // Context state which holds the value of current applied theme (light or dark)

  const { stockSymbol } = useContext(StockContext); // Context state which holds the value of selected stock's symbol

  const [data, setData] = useState([]);

  const formatData = (data) => { // Function to format the data according to the input which Areachart expects
    let graphData = [];
    let sliceNumber = filter === "1W" ? 7 : filter === "1M" ? 30 : 12; // Since there is huge amount of data from the API, only the required amount of data is being sliced and provided to the graph
    if(data) {
      graphData = Object.keys(data).slice(0, sliceNumber).map((item, index) => { // Iterate over object's keys and return an array of objects in this - [{"value": 229, date: "22-05-2023"}] form
        return {
          value: data[item]["4. close"],
          date: item,
        };
      });
      return graphData.reverse();
    }
  };

  useEffect(() => {
    const updateChartData = async () => {
      try {
        const result = await fetchHistoricalData(
          stockSymbol,
          filter
        );
        let formattedData = await formatData(filter === "1Y" ? result["Monthly Adjusted Time Series"] : result["Time Series (Daily)"])
        setData(formattedData);
      } catch (error) {
        setData([]);
        console.log(error);
      }
    };

    updateChartData();
  }, [stockSymbol, filter]); // Stocksymbol and filter are provided as parameters whose change in value, triggers the change in graph

  return (
    <Card>
      <ul className="flex absolute top-2 right-2 z-40">
        {chartConfig.map((item) => (
          <li key={item}>
            <ChartFilter // Component for rendering the chart filters, 1W, 1M or 1Y
              text={item}
              active={filter === item}
              onClick={() => {
                setFilter(item);
              }}
            />
          </li>
        ))}
      </ul>
      <ResponsiveContainer>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="chartColor" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="5%"
                stopColor={darkMode ? "#312e81" : "rgb(199 210 254)"}
                stopOpacity={0.8}
              />
              <stop
                offset="95%"
                stopColor={darkMode ? "#312e81" : "rgb(199 210 254)"}
                stopOpacity={0}
              />
            </linearGradient>
          </defs>
          <Tooltip // Built in component of AreaChart that shows tooltip on mouse-hover
            contentStyle={darkMode ? { backgroundColor: "#111827" } : null}
            itemStyle={darkMode ? { color: "#818cf8" } : null}
          />
          <Area
            type="monotone"
            dataKey="value"
            stroke="#312e81"
            fill="url(#chartColor)"
            fillOpacity={1}
            strokeWidth={0.5}
          />
          <XAxis dataKey="date"/> {/* "Date" is supplied to X axis' data key */}
          <YAxis domain={[0, dataMax => (Math.ceil(dataMax))]} type="number" tickCount={7} dataKey="value" /> {/* The domain of Y axis contains points from 0 to the ceil round-off (whole number) of the maximum data */}
        </AreaChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default Chart;
