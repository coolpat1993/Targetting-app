import React from "react";
import { ScatterChart, Scatter, YAxis, XAxis, CartesianGrid } from "recharts";

const NewApp = ({ shows }) => {
  const data = [shows[0]];
  const data2 = [shows[1]];

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Map</h1>
      <div className="App">
        <ScatterChart width={600} height={600}>
          <CartesianGrid />
          <XAxis type="number" dataKey="x" domain={[0, 1000]} name="x" />
          <YAxis type="number" dataKey="y" domain={[0, 1000]} name="y" />
          <Scatter data={data} fill="white" line shape="triangle" />
          <Scatter data={data2} fill="red" line shape="wye" />
        </ScatterChart>
      </div>
    </div>
  );
};

export default NewApp;
