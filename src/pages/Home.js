import React from 'react';
import '../App.css';
import {homeMortage, vehicleTypeData} from './mockdata';
import PieGraph from '../charts/PieGraph';
import BarGraph from '../charts/BarGraph';

export default function Home() {
  return (
      <>
      <div className="header">The below charts represent vehcile type on left and home mortage on right </div>
      <div className="home">
          <div class="pieVehicle">
          
         <PieGraph data={vehicleTypeData}/>
  </div>
  
  <div class="barHome">
       <BarGraph data={homeMortage.data} />
  </div>
   
    </div>
</>
  );
}
