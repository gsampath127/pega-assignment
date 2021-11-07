import React from 'react';
import '../App.css';
import { vehicleTypeData} from './mockdata';
import LineGraph from '../charts/LineGraph';

function MoreCharts() {
    return (
        <>
        <div className="header">The below charts represent vehcile type on left</div>
        <div className="home">
            <div class="lineVehicle">
           <LineGraph data={vehicleTypeData}/>
    </div>
      </div>
  </>
    );
}

export default MoreCharts
