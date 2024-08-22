import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  { name: "1", value: 200000 },
  { name: "2", value: 50000 },
  { name: "3", value: 100000 },
  { name: "4", value: 150000 },
  { name: "5", value: 100000 },
  { name: "6", value: 50000 },
  { name: "7", value: 10000 },
  { name: "8", value: 50000 },
  { name: "9", value: 100000 },
  { name: "10", value: 120000 },
  { name: "11", value: 150000 },
  { name: "12", value: 0 },
];

const SimpleBarChart = () => {
  return (
    <BarChart width={1100} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="value" fill="teal" barSize={20} radius={[10, 10, 0, 0]}/>
    </BarChart>
  );
};

export default SimpleBarChart;
