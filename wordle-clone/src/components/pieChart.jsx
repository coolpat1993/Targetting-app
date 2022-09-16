import React from "react";
import { ScatterChart, Scatter, YAxis, XAxis, CartesianGrid } from "recharts";

const NewApp = ({ shows }) => {
  const data = shows;

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Map</h1>
      <div className="App">
        <ScatterChart width={400} height={400}>
          <CartesianGrid />
          <XAxis type="number" dataKey="x" domain={[0, 10000]} />
          <YAxis type="number" dataKey="y" domain={[0, 10000]} />
          <Scatter data={data} fill="white" />
        </ScatterChart>
      </div>
    </div>
  );
};

export default NewApp;
