import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const COLORS = [
  "#8884d8",
  "#82ca9d",
  "#ffc658",
  "#ff8042",
  "#00C49F",
  "#FFBB28",
];

export default function PharmacyChart() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const res = await axios.get("http://localhost:8080/api/pharmacy");
      const grouped = res.data.reduce((acc, item) => {
        acc[item.type_of_medicine] =
          (acc[item.type_of_medicine] || 0) + item.units_sold;
        return acc;
      }, {});
      setData(
        Object.entries(grouped).map(([name, value]) => ({ name, value }))
      );
    };
    fetch();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-blue-700 mb-6">
        Pharmacy Sales by Medicine Type
      </h2>

      {data.length === 0 ? (
        <p>No data to show.</p>
      ) : (
        <PieChart width={500} height={400}>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            outerRadius={150}
            fill="#8884d8"
            label
          >
            {data.map((_, i) => (
              <Cell key={i} fill={COLORS[i % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      )}
    </div>
  );
}
