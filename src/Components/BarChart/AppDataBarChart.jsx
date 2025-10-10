import React from 'react';

import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts";

// Example data
// const data = [
//   { name: "Page A", uv: 400 },
//   { name: "Page B", uv: 300 },
//   { name: "Page C", uv: 200 },
// ];


const SquareBar = (props) => {
  const { fill, x, y, width, height } = props;
  return <rect x={x} y={y} width={width} height={height} fill={fill} rx={0} />;
};

const AppDataBarChart = ({data}) =>  {
  return (
    <div style={{ width: '100%', height: 300 }}>
      <ResponsiveContainer width="100%" height="100%">
    <BarChart

      data={data}
      layout="vertical"
      margin={{ top: 20, right: 30, left: 0, bottom: 20 }}
    >
      <XAxis type="number" />
      <YAxis type="category" dataKey="name" />
      <Bar dataKey="count" fill="#FF8811" shape={<SquareBar />} />
      <Tooltip></Tooltip>
    </BarChart>
    </ResponsiveContainer>
    </div>
  );
};


export default AppDataBarChart;