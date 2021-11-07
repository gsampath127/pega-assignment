import React from 'react'
import { PieChart, Pie, Cell, Legend, LabelList, Label } from 'recharts';
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'black'];
function PieGraph(props) {
    return (
        <PieChart width={800} height={800}>
        <Label position="outside" value="Vehicle Type" />
        <Pie
          data={props.data}
          cx={200}
          cy={300}
          labelLine={false}
          outerRadius={150}
          fill="#8884d8"
          dataKey="total"
          nameKey="VehicleType"
        >
          {props.data.map((entry, index) => {
            return (
                <>
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
               <LabelList position="inside" dataKey='percentage'/>
               <LabelList position="outside" dataKey='VehicleType'/>
             </>
            )
          }
          )}
  
        </Pie>
        <Legend 
         align="center" 
        layout="vertical" 
        verticalAlign="middle" 
        iconType="circle" height={36}
        payload={
          props.data.map(
            (item, index) => ({
              id: item.VehicleType,
              type: "square",
              value: `${item.VehicleType}`,
              color: COLORS[index % COLORS.length]
            })
          )
        }
        />
      </PieChart>
    )
}

export default PieGraph;
