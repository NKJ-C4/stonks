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
  const [filter, setFilter] = useState("1W");

  const { darkMode } = useContext(ThemeContext);

  const { stockSymbol } = useContext(StockContext);

  const [data, setData] = useState([]);

  const formatData = (data) => {
    let graphData = [];
    let sliceNumber = filter === "1W" ? 7 : filter === "1M" ? 30 : 12;
    if(data) {
      graphData = Object.keys(data).slice(0, sliceNumber).map((item, index) => {
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
  }, [stockSymbol, filter]);

  return (
    <Card>
      <ul className="flex absolute top-2 right-2 z-40">
        {Object.keys(chartConfig).map((item) => (
          <li key={item}>
            <ChartFilter
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
          <Tooltip
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
          <XAxis dataKey="date"/>
          <YAxis domain={[0, dataMax => (Math.ceil(dataMax))]} type="number" tickCount={7} dataKey="value" />
        </AreaChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default Chart;
