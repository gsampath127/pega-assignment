import React from 'react'
import { Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

function LineGraph(props) {
    return (
        <LineChart width={500} height={250} data={props.data}>
  <XAxis dataKey="VehicleType" />
  <YAxis dataKey="total" label={{ value: 'Total', angle: -90, position: 'insideLeft' }} />
  <Tooltip />
  <Legend />
  <Line type="monotone" dataKey="total" stroke="#8884d8" />
</LineChart>
    )
}

export default LineGraph
