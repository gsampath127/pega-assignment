import React from "react";

// import "./styles.css";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Cell,
  Label,
  LabelList
} from "recharts";

export default function BarGraph(props) {
    const data = props.data;
  return (
        <BarChart
          width={500}
          height={400}
          data={data}
          margin={{ top: 25, right: 0, left: 0, bottom: 25 }}
        >
          <XAxis dataKey="pyStatusWork"  fontFamily="sans-serif">
            <Label value="Status of Work" offset={0} position="insideBottom" />
        </XAxis>
        <YAxis dataKey="total" label={{ value: 'Total', angle: -90, position: 'insideLeft' }} />
          <Bar 
            dataKey="total"
            barSize={100}
            fontFamily="sans-serif"
          >
            {data.map(() => (
              <Cell fill="#6666ff" />
            ))}
             <LabelList dataKey="total" position="" />


          </Bar>
        </BarChart>
  );
}

