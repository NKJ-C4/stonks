import React, { useContext, useEffect, useState } from 'react';
import ChartFilter from "./ChartFilter";
import { chartConfig } from "../constants/config";
import Card from "./Card";
import ThemeContext from "../context/ThemeContext";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  Legend,
  Cell,
} from 'recharts';
import { rawData, rawData2, rawData3 } from '../constants/mock';
const colors = [
  '#1f77b4',
  '#ff7f0e',
  '#2ca02c',
  '#d62728',
  '#9467bd',
  '#8c564b',
  '#e377c2',
  '#7f7f7f',
  '#bcbd22',
  '#17becf',
];

const Candlestick = props => {
  const {
    fill,
    x,
    y,
    width,
    height,
    low,
    high,
    openClose: [open, close],
  } = props;
  const isGrowing = open < close;
  const color = isGrowing ? 'green' : 'red';
  const ratio = Math.abs(height / (open - close));
  console.log(props);
  return (
    <g stroke={color} fill="none" strokeWidth="2">
      <path
        d={`
          M ${x},${y}
          L ${x},${y + height}
          L ${x + width},${y + height}
          L ${x + width},${y}
          L ${x},${y}
        `}
      />
      {/* bottom line */}
      {isGrowing ? (
        <path
          d={`
            M ${x + width / 2}, ${y + height}
            v ${(open - low) * ratio}
          `}
        />
      ) : (
        <path
          d={`
            M ${x + width / 2}, ${y}
            v ${(close - low) * ratio}
          `}
        />
      )}
      {/* top line */}
      {isGrowing ? (
        <path
          d={`
            M ${x + width / 2}, ${y}
            v ${(close - high) * ratio}
          `}
        />
      ) : (
        <path
          d={`
            M ${x + width / 2}, ${y + height}
            v ${(open - high) * ratio}
          `}
        />
      )}
    </g>
  );
};

const prepareData = data => {
  return data.map(({ open, close, ...other }) => {
    return {
      ...other,
      openClose: [open, close],
    };
  });
};

const CustomShapeBarChart = () => {
  const [filter, setFilter] = useState("1W"); // Initializing the filter with "1 Week", so that initially the graph shows past 7 days data
  const [graphData, setGraphData] = useState([]);
  const { darkMode } = useContext(ThemeContext); // Context state which holds the value of current applied theme (light or dark)
  useEffect(() => {
    const updateChartData = () => {
      try {
        let formattedData = filter === "1M" ? rawData2 : filter === "1Y"? rawData3 : rawData
        setGraphData(formattedData);
      } catch (error) {
        setGraphData([]);
        console.log(error);
      }
    };

    updateChartData();
  }, [filter]); // Stocksymbol and filter are provided as parameters whose change in value, triggers the change in graph
  const data = prepareData(filter === "1M" ? rawData2 : filter === "1Y"? rawData3 : rawData);
  data.reduce((acc, item) => console.log(item), 0);
  const minValue = data.reduce(
    (minValue, { low, openClose: [open, close] }) => {
      const currentMin = Math.min(low, open, close);
      return minValue === null || currentMin < minValue ? currentMin : minValue;
    },
    null,
  );
  const maxValue = data.reduce(
    (maxValue, { high, openClose: [open, close] }) => {
      const currentMax = Math.max(high, open, close);
      return currentMax > maxValue ? currentMax : maxValue;
    },
    minValue,
  );

  console.log(data);
  console.log(minValue, maxValue);

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
    <BarChart
      width={600}
      height={300}
      data={data}
      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
    >
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
      <XAxis dataKey="ts" />
      <YAxis domain={[minValue, maxValue]} />
      <CartesianGrid strokeDasharray="3 3" />
      <Bar
        dataKey="openClose"
        fill="#8884d8"
        shape={<Candlestick />}
        // label={{ position: 'top' }}
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % 20]} />
        ))}
      </Bar>
    </BarChart>
    </ResponsiveContainer>
    </Card>
  );
};

export default CustomShapeBarChart;
